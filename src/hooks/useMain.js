import { useEffect, useState } from 'react';
import AuthService from '@services/AuthService';
import { MAINSOLCONSTANTS } from '@constants/mainSolConstants';

export const useMain = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [medalImage, setMedalImage] = useState(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await AuthService.getUserInfo();
        setUserInfo(response);

        const level = Number(response.level);
        if (level >= 3) {
          setMedalImage(MAINSOLCONSTANTS.Images.medal3);
        } else if (level === 2) {
          setMedalImage(MAINSOLCONSTANTS.Images.medal2);
        } else {
          setMedalImage(MAINSOLCONSTANTS.Images.medal1);
        }
      } catch (err) {
        console.error('사용자 정보를 불러오는데 실패했습니다.', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserRole();
  }, []);

  return { userInfo, loading, medalImage };
};
