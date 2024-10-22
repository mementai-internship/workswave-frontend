import { isAxiosError } from 'axios';

import axiosInstance from '@/apis/axiosInstance';
import {
  IHourWageTemplatesRequest,
  IPatchHourWageTemplatesProps,
} from '@/models/hour-wage-templates';

export const hourWageTemplatesAPI = {
  getHourWageTemplateList: async (branchId: number) => {
    try {
      const response = await axiosInstance.get(`/branches/${branchId}/hour-wage-templates/list`);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.response?.data);
        throw new Error('시급 템플릿 목록을 가져오는 데 실패했습니다.');
      }
    }
  },
  postHourWageTemplate: async (branchId: number, data: IHourWageTemplatesRequest) => {
    try {
      const response = await axiosInstance.post(
        `/branches/${branchId}/hour-wage-templates/create`,
        data
      );
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.response?.data);
        throw new Error('시급 템플릿을 추가하는 데 실패했습니다.');
      }
    }
  },
  patchHourWageTemplate: async ({ branchId, templateId, data }: IPatchHourWageTemplatesProps) => {
    try {
      const response = await axiosInstance.patch(
        `/branches/${branchId}/hour-wage-templates/${templateId}/update`,
        data
      );
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.response?.data);
        throw new Error('시급 템플릿을 수정하는 데 실패했습니다.');
      }
    }
  },
  deleteHourWageTemplate: async (branchId: number, templateId: number) => {
    try {
      const response = await axiosInstance.delete(
        `/branches/${branchId}/hour-wage-templates/${templateId}/delete`
      );
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.response?.data);
        throw new Error('시급 템플릿을 삭제하는 데 실패했습니다.');
      }
    }
  },
};
