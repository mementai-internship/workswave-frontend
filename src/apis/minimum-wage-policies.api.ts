import { isAxiosError } from 'axios';

import axiosInstance from '@/apis/axiosInstance';
import { IMinimumWagePolicesResponse } from '@/models/minimum-wage-polices.model';

export const minimumWagePolicesApi = {
  getMinimumWagePolices: async () => {
    try {
      const response = await axiosInstance.get('/minimum-wage-policies/get');
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error('최저 시급 정보를 가져오는 데 실패했습니다.');
      }
    }
  },
  patchMinimumWagePolices: async (body: IMinimumWagePolicesResponse) => {
    try {
      const response = await axiosInstance.patch('/minimum-wage-policies/update', body);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error('최저 시급 정보를 수정하는 데 실패했습니다.');
      }
    }
  },
};
