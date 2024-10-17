import { getAccessToken, removeTokens } from '@/utils/tokenUtils';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken().slice(1, getAccessToken().length - 1);

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    switch (error.response.status) {
      case 400:
        break;
      case 401:
        console.log('error', '로그인이 필요합니다.');
        removeTokens();
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
