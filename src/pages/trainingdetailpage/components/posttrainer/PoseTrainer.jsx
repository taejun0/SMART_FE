import * as S from './PostTrainer.styled';
import TrainingService from '@services/TrainingService';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTE_PATHS } from '@constants/routeConstants';
import useTrainingStore from '@stores/trainingStore';
import dayjs from 'dayjs';

const calculateAngle = (a, b, c) => {
  const radians =
    Math.atan2(c[1] - b[1], c[0] - b[0]) - Math.atan2(a[1] - b[1], a[0] - b[0]);
  let angle = Math.abs((radians * 180.0) / Math.PI);
  if (angle > 180.0) angle = 360 - angle;
  return angle;
};

const PoseTrainer = () => {
  const { mode } = useParams();
  const { addFeedback, incrementCount, feedbacks } = useTrainingStore();
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [counter, setCounter] = useState(0);
  const [feedback, setFeedback] = useState('');
  const stageRef = useRef(null);
  const reachedBottomRef = useRef(false);
  const cameraRef = useRef(null);
  const [showExitModal, setShowExitModal] = useState(false);

  const handleShowExitModal = () => setShowExitModal(true);
  const handleCloseExitModal = () => setShowExitModal(false);

  const downAngleRef = useRef(180);

  const handleConfirmExit = async () => {
    const evaluationType = mode === 'training' ? 'TRAINING' : 'TEST';
    const evaluationDate = dayjs().toISOString();
    const summary = feedbacks
      .map(({ text, count }) => `${text} ${count}회`)
      .join(', ');

    try {
      await TrainingService.postPushupResult({
        count: counter,
        summary,
        evaluation_type: evaluationType,
        evaluation_date: evaluationDate,
      });
    } catch (err) {
      console.error('❌ 훈련 결과 전송 실패:', err);
    }

    setStarted(false);
    setShowExitModal(false);
    navigate(ROUTE_PATHS.TRAINING_FINISH);
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const handleStartTraining = async () => {
    if (started) return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach((track) => track.stop());
      setStarted(true);
    } catch (err) {
      alert('카메라 접근 권한이 필요합니다. 브라우저 설정을 확인해주세요.');
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }, []);

  useEffect(() => {
    if (!started) return;

    const canvas = canvasRef.current;
    const video = videoRef.current;

    const initPose = async () => {
      try {
        const PoseConstructor = window.Pose;
        const CameraConstructor = window.Camera;

        if (!PoseConstructor || !CameraConstructor) throw new Error();

        const pose = new PoseConstructor({
          locateFile: (file) =>
            `https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.5/${file}`,
        });

        pose.setOptions({
          modelComplexity: 1,
          smoothLandmarks: true,
          enableSegmentation: false,
          minDetectionConfidence: 0.7,
          minTrackingConfidence: 0.7,
        });

        pose.onResults(onResults);

        const rect = canvas.getBoundingClientRect();
        const camera = new CameraConstructor(video, {
          onFrame: async () => await pose.send({ image: video }),
          width: rect.width,
          height: rect.height,
        });

        camera.start();
        cameraRef.current = camera;
      } catch (err) {
        console.error('[ERROR] initPose failed:', err);
      }
    };

    initPose();

    return () => cameraRef.current?.stop();

    function onResults(results) {
      const ctx = canvas.getContext('2d');
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(results.image, 0, 0, width, height);

      if (!results.poseLandmarks) return;
      const lm = results.poseLandmarks;
      const isReliable = (idx) => lm[idx].visibility > 0.75;
      if (![11, 13, 15].every(isReliable)) {
        const message = '자세 인식이 불안정합니다';
        setFeedback(message);
        speak(message);
        stageRef.current = null;
        downAngleRef.current = 180;
        return;
      }

      const toCoord = (lm) => [lm.x * width, lm.y * height];
      const shoulder = toCoord(lm[11]);
      const elbow = toCoord(lm[13]);
      const wrist = toCoord(lm[15]);

      const angle = calculateAngle(shoulder, elbow, wrist);

      if (angle < downAngleRef.current) {
        downAngleRef.current = angle;
      }

      // ✅ DOWN 상태는 가장 먼저 체크
      if (angle < 85 && stageRef.current !== 'down') {
        stageRef.current = 'down';
        downAngleRef.current = angle;
        const message = '좋아요! 천천히 올라가요';
        setFeedback(message);
        speak(message);
        return;
      }

      // ✅ MOREDOWN은 down 아닌 경우만 허용
      if (
        angle < 120 &&
        stageRef.current !== 'moredown' &&
        stageRef.current !== 'down'
      ) {
        stageRef.current = 'moredown';
        downAngleRef.current = angle;
        const message = '조금만 더 내려가 볼까요?';
        setFeedback(message);
        speak(message);
        return;
      }

      // ✅ 내려가는 중인데 아직 충분히 안 내려갔을 때
      if (angle < 160 && !['down', 'moredown'].includes(stageRef.current)) {
        setFeedback('더 내려가야 해요!');
        return;
      }

      // ✅ UP 상태 진입 (DOWN 또는 MOREDOWN 경험 있음)
      if (angle > 160 && ['down', 'moredown'].includes(stageRef.current)) {
        const minAngle = downAngleRef.current;

        if (minAngle < 85) {
          setCounter((prev) => prev + 1);
          incrementCount();
          setFeedback('Count! 아주 정확한 자세였어요');
          speak('Count! 아주 정확한 자세였어요');
          addFeedback('정확한 자세');
        } else if (minAngle < 120) {
          setCounter((prev) => prev + 1);
          incrementCount();
          setFeedback('조금 더 내려가야 해요! 다음엔 더 깊게 내려가보세요');
          speak('조금 더 내려가야 해요! 다음엔 더 깊게 내려가보세요');
          addFeedback('좋은 자세');
        } else {
          setFeedback('너무 조금만 내려갔어요. 반만 내려갔어요');
          speak('너무 조금만 내려갔어요. 반만 내려갔어요');
          addFeedback('불완전한 자세');
        }

        downAngleRef.current = 180;
        stageRef.current = 'up';
        return;
      }

      // ✅ UP 상태 진입 but DOWN/MOREDOWN 경험 없음
      if (angle > 160 && !['down', 'moredown'].includes(stageRef.current)) {
        if (stageRef.current !== 'up') {
          const text = '팔을 더 깊이 굽혔다가 올라와야 해요!';
          setFeedback(text);
          speak(text);
          addFeedback('불완전한 동작');
          stageRef.current = 'up';
          downAngleRef.current = 180;
        }
      }
    }
  }, [started]);

  return (
    <S.Wrapper>
      <S.HeaderBox>
        <S.BackImage
          src="/icons/arrow.svg"
          onClick={() => navigate(ROUTE_PATHS.TRAINING)}
        />
        <S.HeaderTitle>팔굽혀펴기</S.HeaderTitle>
        <S.HeaderSemiTitle onClick={handleShowExitModal}>
          종료
        </S.HeaderSemiTitle>
      </S.HeaderBox>
      <S.Container>
        <S.FeedbackBox>
          <S.Image src="/images/train2.svg" />
          <S.Title>팔굽혀 펴기</S.Title>
          <S.SubTitle>
            {started
              ? '훈련을 시작했어요.'
              : '팔굽혀펴기를 측정하기 위한 훈련이에요.'}
          </S.SubTitle>
          <S.Line />
          <S.ImageList>
            <S.Images src="/images/pmedal1.svg" />
            <S.Images src="/images/pmedal2.svg" />
            <S.Images src="/images/pmedal3.svg" />
            <S.Images src="/images/pmedal4.svg" />
          </S.ImageList>
        </S.FeedbackBox>

        <S.Text>SMART한 실시간 자세 교정</S.Text>

        <S.VideoContainer $test={started}>
          {!started && (
            <S.Overlay>🎥 훈련을 시작하면 비디오가 보여집니다</S.Overlay>
          )}
          <video ref={videoRef} autoPlay muted playsInline />
          <canvas ref={canvasRef} />
        </S.VideoContainer>

        {started && <S.StatusText $test={started}>{counter}번</S.StatusText>}

        <S.StartButton onClick={handleStartTraining} disabled={started}>
          {started ? feedback : '훈련을 시작할게요.'}
        </S.StartButton>
      </S.Container>

      {showExitModal && (
        <S.ModalBackdrop>
          <S.ModalBox>
            <S.ModalText>정말 훈련을 종료하시겠습니까?</S.ModalText>
            <S.ModalButtons>
              <S.ModalButton onClick={handleCloseExitModal}>
                아니요
              </S.ModalButton>
              <S.ModalButton onClick={handleConfirmExit}>예</S.ModalButton>
            </S.ModalButtons>
          </S.ModalBox>
        </S.ModalBackdrop>
      )}
    </S.Wrapper>
  );
};

export default PoseTrainer;
