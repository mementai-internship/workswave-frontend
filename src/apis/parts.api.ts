import axiosInstance from '@/apis/axiosInstance';
import { getAccessToken } from '@/utils/tokenUtils';

export const getParts = async (branch_id: number) => {
  const response = await axiosInstance.get(`/branches/${branch_id}/parts`, {
    headers: {
      Authorization: `Bearer ${JSON.parse(getAccessToken())}`,
    },
  });

  return response.data;
};
