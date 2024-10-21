import { isAxiosError } from 'axios';

import axiosInstance from '@/apis/axiosInstance';
import { ILeavePolicyResponse } from '@/models/leave-policies.model';

export const getLeavePolicies = async (branch_id: number): Promise<ILeavePolicyResponse> => {
  try {
    const response = await axiosInstance.get(`/branches/${branch_id}/leave-policies/get`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error);
      throw new Error(error.response?.data?.message);
    }
  }
};

export const patchLeavePolicies = async (branch_id: number, data: ILeavePolicyResponse) => {
  try {
    const response = await axiosInstance.patch(
      `/branches/${branch_id}/leave-policies/update`,
      data
    );
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error);
      throw new Error(error.response?.data?.message);
    }
  }
};
