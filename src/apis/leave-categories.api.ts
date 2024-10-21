import { isAxiosError } from 'axios';

import axiosInstance from '@/apis/axiosInstance';
import { ILeaveCategory } from '@/models/leave-categories.model';

export const getLeaveCategories = async (branch_id: number): Promise<ILeaveCategory[]> => {
  try {
    const response = await axiosInstance.get(`/branches/${branch_id}/leave-categories/list`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error);
      throw new Error(error.response?.data?.message);
    }
  }
};

export const postLeaveCategory = async (branch_id: number, data: ILeaveCategory) => {
  try {
    const response = await axiosInstance.post(
      `/branches/${branch_id}/leave-categories/create`,
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

export const patchLeaveCategory = async (branch_id: number, data: ILeaveCategory) => {
  try {
    const response = await axiosInstance.patch(
      `/branches/${branch_id}/leave-categories/${data.leave_category.id}/update`,
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

export const deleteLeaveCategory = async (branch_id: number, leave_category_id: number) => {
  try {
    const response = await axiosInstance.delete(
      `/branches/${branch_id}/leave-categories/${leave_category_id}/delete`
    );
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error);
      throw new Error(error.response?.data?.message);
    }
  }
};
