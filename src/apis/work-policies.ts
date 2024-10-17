import { isAxiosError } from 'axios';

import axiosInstance from '@/apis/axiosInstance';
import { IWorkPolicies } from '@/models/work-policies';

export const getWorkPolicies = async (branchId: number): Promise<IWorkPolicies> => {
  try {
    const { data } = await axiosInstance.get(`/branches/${branchId}/work-policies/get`);
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.response?.data);
      throw new Error(error.response?.data);
    }
  }
};

export const patchWorkPolicies = async (branchId: number, data: IWorkPolicies) => {
  try {
    const { data: response } = await axiosInstance.patch(
      `/branches/${branchId}/work-policies/update`,
      data
    );
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.response?.data);
      throw new Error(error.response?.data);
    }
  }
};
