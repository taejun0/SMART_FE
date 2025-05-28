import React, { useEffect, useRef, useState } from 'react';
import { Pose } from '@mediapipe/pose';
import { Camera } from '@mediapipe/camera_utils';

const calculateAngle = (a, b, c) => {
  const radians =
    Math.atan2(c[1] - b[1], c[0] - b[0]) - Math.atan2(a[1] - b[1], a[0] - b[0]);
  let angle = Math.abs((radians * 180.0) / Math.PI);
  if (angle > 180.0) angle = 360 - angle;
  return angle;
};

const PoseTrainer = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [counter, setCounter] = useState(0);
  const [feedback, setFeedback] = useState('');

  const stageRef = useRef(null); // 'up' or 'down'
  const hasCountedRef = useRef(false);

  const WIDTH = 640;
  const HEIGHT = 480;

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
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

    const camera = new Camera(videoRef.current, {
      onFrame: async () => {
        await pose.send({ image: videoRef.current });
      },
      width: WIDTH,
      height: HEIGHT,
    });

    camera.start();

    function onResults(results) {
      const canvasCtx = canvasRef.current.getContext('2d');
      canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
      canvasCtx.drawImage(results.image, 0, 0, WIDTH, HEIGHT);

      if (results.poseLandmarks) {
        const lm = results.poseLandmarks;
        const toCoord = (lm) => [lm.x * WIDTH, lm.y * HEIGHT];

        const shoulder = toCoord(lm[11]);
        const elbow = toCoord(lm[13]);
        const wrist = toCoord(lm[15]);

        const angle = calculateAngle(shoulder, elbow, wrist);

        // 시각화
        canvasCtx.fillStyle = 'white';
        canvasCtx.font = '18px Arial';
        canvasCtx.fillText(
          `Angle: ${Math.round(angle)}°`,
          elbow[0],
          elbow[1] - 10
        );

        // 상태 로직 (ref 사용)
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
          setFeedback('잘 하셨어요!');
          speak('잘 하셨어요!');
        } else if (
          angle >= 90 &&
          angle <= 160 &&
          stageRef.current === 'down' &&
          !hasCountedRef.current
        ) {
          setFeedback('더 내려가야 해요!');
          speak('더 내려가야 해요!');
        }

        canvasCtx.fillText(`Count: ${counter}`, 10, 30);
        canvasCtx.fillText(`Stage: ${stageRef.current || '-'}`, 10, 60);
        canvasCtx.fillText(`Feedback: ${feedback}`, 10, 90);
      } else {
        setFeedback('자세를 다시 잡아주세요');
        speak('자세를 다시 잡아주세요');
        stageRef.current = null;
        hasCountedRef.current = false;
      }
    }
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <video ref={videoRef} style={{ display: 'none' }} />
      <canvas
        ref={canvasRef}
        width={WIDTH}
        height={HEIGHT}
        style={{ border: '2px solid #aaa' }}
      />
      <div
        style={{
          marginTop: 20,
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: 'blue',
        }}
      >
        {feedback}
      </div>
      <div style={{ fontSize: '1rem', color: 'green' }}>
        총 횟수: {counter}회 | 현재 상태: {stageRef.current || '-'}
      </div>
    </div>
  );
};

export default PoseTrainer;
