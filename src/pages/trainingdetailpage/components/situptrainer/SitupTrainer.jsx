import * as S from './SitupTrainer.styled';

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

const SitupTrainer = () => {
  const { mode } = useParams();
  const { addFeedback, incrementCount, feedbacks } = useTrainingStore();
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [counter, setCounter] = useState(0);
  const [feedback, setFeedback] = useState('');
  const stageRef = useRef(null);
  const hasCountedRef = useRef(false);
  const cameraRef = useRef(null);
  const [showExitModal, setShowExitModal] = useState(false);

  const handleShowExitModal = () => setShowExitModal(true);
  const handleCloseExitModal = () => setShowExitModal(false);

  const handleConfirmExit = async () => {
    const evaluationType = mode === 'training' ? 'TRAINING' : 'TEST';
    const evaluationDate = dayjs().toISOString();
    const summary = feedbacks
      .map(({ text, count }) => `${text} ${count}회`)
      .join(', ');

    console.log(evaluationType);
    try {
      await TrainingService.postSitupResult({
        count: counter,
        summary,
        evaluation_type: evaluationType,
        evaluation_date: evaluationDate,
      });
      console.log('✅ 훈련 결과 전송 성공');
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
      console.log('[START] Requesting camera permission...');
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      console.log('[SUCCESS] Camera permission granted.');
      stream.getTracks().forEach((track) => track.stop());
      setStarted(true);
    } catch (err) {
      alert('카메라 접근 권한이 필요합니다. 브라우저 설정을 확인해주세요.');
      console.error('[ERROR] Camera permission denied:', err);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    console.log('[INFO] Canvas size set:', rect.width, rect.height);
  }, []);

  useEffect(() => {
    if (!started) return;

    const canvas = canvasRef.current;
    const video = videoRef.current;

    const initPose = async () => {
      try {
        console.log('[INFO] Using Pose and Camera from window...');

        const PoseConstructor = window.Pose;
        const CameraConstructor = window.Camera;

        if (!PoseConstructor || !CameraConstructor) {
          throw new Error(
            'window.Pose 또는 window.Camera가 존재하지 않습니다.'
          );
        }

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
          onFrame: async () => {
            await pose.send({ image: video });
          },
          width: rect.width,
          height: rect.height,
        });

        console.log('[START] Starting camera...');
        camera.start();
        cameraRef.current = camera;
      } catch (err) {
        console.error('[ERROR] initPose failed:', err);
      }
    };

    initPose();

    return () => {
      if (cameraRef.current) {
        console.log('[CLEANUP] Stopping camera...');
        cameraRef.current.stop();
      }
    };

    function onResults(results) {
      try {
        const canvasCtx = canvas.getContext('2d');
        const { width, height } = canvas;
        canvasCtx.clearRect(0, 0, width, height);
        canvasCtx.drawImage(results.image, 0, 0, width, height);

        if (!results.poseLandmarks) {
          setFeedback('자세를 다시 잡아주세요');
          speak('자세를 다시 잡아주세요');
          stageRef.current = null;
          hasCountedRef.current = false;
          return;
        }

        const lm = results.poseLandmarks;
        const toCoord = (index) => [lm[index].x * width, lm[index].y * height];
        const isReliable = (index) => lm[index].visibility > 0.75;

        // 신뢰도 확인
        const required = [11, 23, 25];
        if (!required.every(isReliable)) {
          setFeedback('신체가 인식되지 않았어요');
          speak('신체가 인식되지 않았어요');
          return;
        }

        // 좌표 추출: 무릎-엉덩이-어깨 (situp용)
        const leftKnee = toCoord(25);
        const leftHip = toCoord(23);
        const leftShoulder = toCoord(11);

        // Situp용 angle: 무릎 - 힙 - 어깨
        const situpAngle = calculateAngle(leftKnee, leftHip, leftShoulder);
        console.log('[SITUP ANGLE]', situpAngle);

        // Situp 기준
        const downThreshold = 150; // 누운 상태
        const upThreshold = 100; // 올라온 상태

        if (situpAngle > downThreshold) {
          if (stageRef.current !== 'down') {
            console.log('[STAGE] → down');
            stageRef.current = 'down';
            hasCountedRef.current = false;
            setFeedback('몸을 뒤로 눕히세요');
            speak('몸을 뒤로 눕히세요');
          }
        }

        if (
          situpAngle < upThreshold &&
          stageRef.current === 'down' &&
          !hasCountedRef.current
        ) {
          stageRef.current = 'up';
          hasCountedRef.current = true;
          setCounter((prev) => prev + 1);
          incrementCount();
          addFeedback('정확한 자세에요!');
          setFeedback('Count! 정확한 자세에요!');
          speak('카운트! 정확한 자세에요!');
          console.log('[🔥 COUNT]');
        } else if (
          stageRef.current === 'down' &&
          !hasCountedRef.current &&
          situpAngle >= upThreshold
        ) {
          setFeedback('몸을 더 세워야 해요!');
          speak('몸을 더 세워야 해요!');
        }
      } catch (err) {
        console.error('[ERROR] onResults (Situp) failed:', err);
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
        <S.HeaderTitle>윗몸일으키기</S.HeaderTitle>
        <S.HeaderSemiTitle onClick={handleShowExitModal}>
          종료
        </S.HeaderSemiTitle>
      </S.HeaderBox>
      <S.Container>
        <S.FeedbackBox>
          <S.Image src="/images/train2.svg" />
          <S.Title>윗몸일으키기</S.Title>
          <S.SubTitle>
            {started
              ? '훈련을 시작했어요.'
              : '윗몸일으키기를 측정하기 위한 훈련이에요.'}
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

export default SitupTrainer;
