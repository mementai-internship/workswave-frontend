import axiosInstance from '@/apis/axiosInstance';

export const getCurrentUser = async () => {
  const { data } = await axiosInstance.get('/users/me');
  return data;
};
