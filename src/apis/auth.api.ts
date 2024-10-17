import axiosInstance from '@/apis/axiosInstance';

export const getCurrentUser = async (token: string) => {
  const { data } = await axiosInstance.get('/users/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
