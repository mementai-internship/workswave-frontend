import axiosInstance from '@/apis/axiosInstance';
import { TBranch } from '@/models/user.model';

export const getBranches = async (token: string): Promise<TBranch[]> => {
  const { data } = await axiosInstance.get('/branches', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
