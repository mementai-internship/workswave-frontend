import authAxiosInstance from '@/apis/authAxiosInstance';

export const getCurrentUser = async (token: string) => {
  const { data } = await authAxiosInstance.get('/users/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
