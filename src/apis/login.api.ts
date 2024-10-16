import axiosInstance from '@/apis/axiosInstance';
import { TLoginReqBody } from '@/models/login.model';

export const postLogin = async ({ email, password }: TLoginReqBody) => {
  const { data } = await axiosInstance.post('/auth/login', { email, password });
  return data;
};
