import authAxiosInstance from '@/apis/authAxiosInstance';
import { TLoginReqBody } from '@/models/login.model';

export const postLogin = async ({ email, password }: TLoginReqBody) => {
  const { data } = await authAxiosInstance.post('/auth/login', { email, password });
  return data;
};
