import { removeTokens } from '@/utils/tokenUtils';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem('accessToken'));
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
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
          // console.log('error', '서버에 오류가 발생했습니다.')
          console.error(error.response);
        } else {
          // console.log('error', '알 수 없는 오류가 발생했습니다.')
          console.error(error.response);
        }
        break;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
