import { getAccessToken, getRefreshToken, removeTokens, setTokens } from '@/utils/tokenUtils';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response?.status;

    if (status === 401) {
      const refreshToken = getRefreshToken();
      if (refreshToken) {
        try {
          const response = await axiosInstance.post('/refresh-token', {
            refreshToken,
          });

          setTokens(response.data.accessToken, response.data.refreshToken);

          // 실패한 요청에 대해 Authorization 헤더 업데이트
          error.config.headers['Authorization'] = `Bearer ${response.data.accessToken}`;

          return axiosInstance.request(error.config);
        } catch (refreshError) {
          removeTokens();
          window.location.href = '/';
          return Promise.reject(refreshError);
        }
      }
    } else if (status === 403) {
      removeTokens();
      window.location.href = '/login';
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
