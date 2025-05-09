import { useEffect, useState } from 'react';
import AuthService from '@services/AuthService';
import TrainingService from '@services/TrainingService';
import { MAINSOLCONSTANTS } from '@constants/mainSolConstants';

export const useMain = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [medalImage, setMedalImage] = useState(null);
  const [feedbackList, setFeedbackList] = useState([]);

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
        setFeedbackList(feedback);
      } catch (err) {
        console.error('사용자 정보를 불러오는데 실패했습니다.', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserRole();
  }, []);

  return { userInfo, loading, medalImage, feedbackList };
};
