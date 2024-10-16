import axiosInstance from '@/apis/axiosInstance';

export const getParts = async (branch_id: number) => {
  const response = await axiosInstance.get(`/branches/${branch_id}/parts`);
  return response.data;
};
