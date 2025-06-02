import axios from 'axios';
// Axios 인스턴스 생성
export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,

  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// 요청 인터셉터 – Authorization 자동 추가
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 – 커스텀 에러 처리
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'CUSTOM_ERRORCODE') {
      console.log('Request timeout');
      window.location.href = '/error';
    }
    return Promise.reject(error);
  }
);
