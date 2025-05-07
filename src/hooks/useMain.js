import { useEffect, useState } from 'react';
import AuthService from '@services/AuthService';

export const useMain = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await AuthService.getUserInfo();
        setUserInfo(response);
      } catch (err) {
        console.error('사용자 정보를 불러오는데 실패했습니다.', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserRole();
  }, []);

  return { userInfo, loading };
};
