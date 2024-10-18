import axiosInstance from '@/apis/axiosInstance';
import { ILeaveCategory } from '@/models/leave-categories.model';
import { getAccessToken } from '@/utils/tokenUtils';
import { isAxiosError } from 'axios';

export const getLeaveCategories = async (branch_id: number): Promise<ILeaveCategory[]> => {
  try {
    const response = await axiosInstance.get(`/branches/${branch_id}/leave-categories/list`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(getAccessToken())}`,
      },
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error);
      throw new Error(error.response?.data?.message);
    }
  }
};
