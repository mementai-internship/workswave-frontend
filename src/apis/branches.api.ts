import axiosInstance from '@/apis/axiosInstance';
import { TBranch } from '@/models/user.model';
import { isAxiosError } from 'axios';

export const getBranches = async (): Promise<TBranch[]> => {
  try {
    const { data } = await axiosInstance.get('/branches/list');
    return data.list;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.response?.data);
      throw new Error(error.response?.data);
    }
  }
};
