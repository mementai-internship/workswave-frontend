import axiosInstance from '@/apis/axiosInstance';

export const getParts = async (branchId: number) => {
  const response = await axiosInstance.get(`/branches/${branchId}/parts`);
  return response.data;
};
