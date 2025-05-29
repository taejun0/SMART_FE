import * as S from './PostTrainer.styled';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTE_PATHS } from '@constants/routeConstants';
import useTrainingStore from '@stores/trainingStore';

const calculateAngle = (a, b, c) => {
  const radians =
    Math.atan2(c[1] - b[1], c[0] - b[0]) - Math.atan2(a[1] - b[1], a[0] - b[0]);
  let angle = Math.abs((radians * 180.0) / Math.PI);
  if (angle > 180.0) angle = 360 - angle;
  return angle;
};

const PoseTrainer = () => {
  const { addFeedback, incrementCount } = useTrainingStore();
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
  const handleConfirmExit = () => {
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
      console.error('Camera permission denied:', err);
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
      const { Pose } = await import('@mediapipe/pose');
      const { Camera } = await import('@mediapipe/camera_utils');

      const pose = new Pose({
        locateFile: (file) =>
          `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
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

      const camera = new Camera(video, {
        onFrame: async () => {
          await pose.send({ image: video });
        },
        width: rect.width,
        height: rect.height,
      });

      camera.start();
      cameraRef.current = camera;
    };

    initPose();

    return () => {
      if (cameraRef.current) {
        cameraRef.current.stop();
      }
    };

    function onResults(results) {
      const canvasCtx = canvas.getContext('2d');
      const { width, height } = canvas;

      canvasCtx.clearRect(0, 0, width, height);
      canvasCtx.drawImage(results.image, 0, 0, width, height);

      if (results.poseLandmarks) {
        const lm = results.poseLandmarks;
        const isReliable = (index) => lm[index].visibility > 0.75;
        const keypoints = [11, 13, 15];
        const allVisible = keypoints.every(isReliable);

        if (!allVisible) {
          setFeedback('자세 인식이 불안정합니다');
          speak('자세 인식이 불안정합니다');
          stageRef.current = null;
          hasCountedRef.current = false;
          return;
        }

        const toCoord = (lm) => [lm.x * width, lm.y * height];
        const shoulder = toCoord(lm[11]);
        const elbow = toCoord(lm[13]);
        const wrist = toCoord(lm[15]);

        const angle = calculateAngle(shoulder, elbow, wrist);

        if (angle > 160) {
          if (stageRef.current !== 'down') {
            stageRef.current = 'down';
            hasCountedRef.current = false;
            setFeedback('팔을 내리고 있어요');
            speak('팔을 내리고 있어요');
          }
        } else if (
          angle < 90 &&
          stageRef.current === 'down' &&
          !hasCountedRef.current
        ) {
          stageRef.current = 'up';
          hasCountedRef.current = true;
          setCounter((prev) => prev + 1);
          setFeedback('Count! 아주 정확한 자세에요.');
          speak('Count! 아주 정확한 자세에요.');
          incrementCount();
          addFeedback('정확한 자세에요!');
        } else if (
          angle >= 90 &&
          angle <= 160 &&
          stageRef.current === 'down' &&
          !hasCountedRef.current
        ) {
          setFeedback('더 내려가야 해요!');
          speak('더 내려가야 해요!');
        }
      } else {
        setFeedback('자세를 다시 잡아주세요');
        speak('자세를 다시 잡아주세요');
        stageRef.current = null;
        hasCountedRef.current = false;
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
