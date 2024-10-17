import { isAxiosError } from 'axios';

import axiosInstance from '@/apis/axiosInstance';
import { IPartsForm, IPartsResponse } from '@/models/parts';

export const getParts = async (branchId: number) => {
  try {
    const response = await axiosInstance.get(`/branches/${branchId}/parts`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.response?.data);
      throw new Error(error.response?.data);
    }
  }
};

export const postParts = async (branchId: number, data: IPartsForm) => {
  try {
    const response = await axiosInstance.post(`/branches/${branchId}/parts`, data);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.response?.data);
      throw new Error(error.response?.data);
    }
  }
};

export const patchParts = async (branchId: number, data: Partial<IPartsResponse>) => {
  const { id, ...rest } = data;
  try {
    const response = await axiosInstance.patch(`/branches/${branchId}/parts/${id}`, rest);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.response?.data);
      throw new Error(error.response?.data);
    }
  }
};

export const deleteParts = async (branchId: number, partId: number) => {
  try {
    const response = await axiosInstance.delete(`/branches/${branchId}/parts/${partId}`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.response?.data);
      throw new Error(error.response?.data);
    }
  }
};
