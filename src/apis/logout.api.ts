import axiosInstance from '@/apis/axiosInstance';

export const postLogout = async (token: string) => {
  const { data } = await axiosInstance.post(
    '/auth/logout',
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
