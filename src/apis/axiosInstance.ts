import axios from 'axios';

import { getAccessToken, removeTokens } from '@/utils/tokenUtils';

const baseURL = `${import.meta.env.VITE_BASE_URL}`;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = JSON.parse(getAccessToken());
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('%c 응답 성공', 'color: green; font-size: 1.2rem', response);
    return response;
  },
  (error) => {
    console.log('%c 에러 발생', 'color: red; font-size: 1.2rem', error);

    switch (error.status) {
      case 400:
        break;
      case 401:
        removeTokens();
        console.log('error', '로그인이 필요합니다.');
        window.location.href = '/login';
        break;
      case 404:
        console.log('error', '페이지를 찾을 수 없습니다.');
        break;
      default:
        if (error.response.status.toString().startsWith('5')) {
          console.error(error.response);
        } else {
          console.error(error.response);
        }
        break;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
