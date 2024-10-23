import { isAxiosError } from 'axios';

import axiosInstance from '@/apis/axiosInstance';
import { TSalaryTemplatesResponse } from '@/models/salary-templates.model';

export const salaryTemplatesApi = {
  getSalaryTemplates: async (branchId: number) => {
    try {
      const response = await axiosInstance.get<TSalaryTemplatesResponse>(
        `/branches/${branchId}/salary-templates/list`
      );
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error('임금 템플릿을 가져오는 데 실패했습니다.');
      }
    }
  },
  postSalaryTemplates: async (branchId: number, body) => {
    try {
      const response = await axiosInstance.post(
        `/branches/${branchId}/salary-templates/create`,
        body
      );
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error('임금 템플릿을 추가하는 데 실패했습니다.');
      }
    }
  },
  patchSalaryTemplates: async ({
    branchId,
    salaryTemplateId,
    body,
  }: {
    branchId: number;
    salaryTemplateId: number;
    body;
  }) => {
    try {
      const response = await axiosInstance.patch(
        `/branches/${branchId}/salary-templates/${salaryTemplateId}/update`,
        body
      );
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error('임금 템플릿을 수정하는 데 실패했습니다.');
      }
    }
  },
  deleteSalaryTemplates: async (branchId: number, salaryTemplateId: number) => {
    try {
      const response = await axiosInstance.delete(
        `/branches/${branchId}/salary-templates/${salaryTemplateId}/delete`
      );
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error('임금 템플릿을 삭제하는 데 실패했습니다.');
      }
    }
  },
};
