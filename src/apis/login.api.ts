import axiosInstance from '@/apis/axiosInstance';
import { LoginReqBody } from '@/models/login.model';

export const postLogin = async ({ email, password }: LoginReqBody) => {
  const { data } = await axiosInstance.post('/auth/login', { email, password });
  return data;
};
