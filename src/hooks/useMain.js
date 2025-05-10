import { useEffect, useState } from 'react';
import AuthService from '@services/AuthService';
import TrainingService from '@services/TrainingService';
import { MAINSOLCONSTANTS } from '@constants/mainSolConstants';

export const useMain = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [medalImage, setMedalImage] = useState(null);
  const [feedbackList, setFeedbackList] = useState([]);
  const [pushupHistory, setPushupHistory] = useState([]);
  const [situpHistory, setSitupHistory] = useState([]);
  const [runningHistory, setRunningHistory] = useState([]);
  const [shootingHistory, setShootingHistory] = useState([]);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await AuthService.getUserInfo();
        setUserInfo(response);

        const level = response.level;
        setMedalImage(
          level >= 3
            ? MAINSOLCONSTANTS.Images.medal3
            : level === 2
            ? MAINSOLCONSTANTS.Images.medal2
            : MAINSOLCONSTANTS.Images.medal1
        );

        const feedback = await TrainingService.getFeedback();
        const pushup = await TrainingService.getPushupHistory();
        const situp = await TrainingService.getSitupHistory();
        const running = await TrainingService.getRunningHistory();
        const shooting = await TrainingService.getShootingHistory();

        setFeedbackList(feedback);
        setPushupHistory(pushup);
        setSitupHistory(situp);
        setRunningHistory(running);
        setShootingHistory(shooting);
      } catch (err) {
        console.error('사용자 정보를 불러오는데 실패했습니다.', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserRole();
  }, []);

  const getPushupGrade = (v) => {
    if (v >= 72) return '특급';
    if (v >= 64) return '1급';
    if (v >= 56) return '2급';
    if (v >= 48) return '3급';
    return '불합격';
  };

  const getSitupGrade = (v) => {
    if (v >= 86) return '특급';
    if (v >= 78) return '1급';
    if (v >= 70) return '2급';
    if (v >= 62) return '3급';
    return '불합격';
  };

  const getRunningGrade = (v) => {
    if (v <= 12.5) return '특급';
    if (v <= 13.5) return '1급';
    if (v <= 14.5) return '2급';
    if (v <= 15.5) return '3급';
    return '불합격';
  };

  const getShootingGrade = (v) => {
    if (v >= 18) return '특급';
    if (v >= 16) return '1급';
    if (v >= 14) return '2급';
    if (v >= 12) return '3급';
    return '불합격';
  };

  const getLatestValue = (history) =>
    history.length > 0 ? history[history.length - 1].value : null;

  const pushupValue = getLatestValue(pushupHistory);
  const situpValue = getLatestValue(situpHistory);
  const runningValue = getLatestValue(runningHistory);
  const shootingValue = getLatestValue(shootingHistory);

  const grades = {
    pushup: pushupValue !== null ? getPushupGrade(pushupValue) : null,
    situp: situpValue !== null ? getSitupGrade(situpValue) : null,
    running: runningValue !== null ? getRunningGrade(runningValue) : null,
    shooting: shootingValue !== null ? getShootingGrade(shootingValue) : null,
  };

  return {
    userInfo,
    loading,
    medalImage,
    feedbackList,
    pushupHistory,
    situpHistory,
    runningHistory,
    shootingHistory,
    grades,
  };
};
