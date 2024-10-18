import { isAxiosError } from 'axios';

import axiosInstance from '@/apis/axiosInstance';
import { IBranchResponse, IBranchesRequest, IBranchesResponse } from '@/models/branches.model';

export const branchesApi = {
  getBranches: async (page: string) => {
    try {
      const response = await axiosInstance.get<IBranchesResponse>('/branches/list', {
        params: { page },
      });
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.response);
        throw new Error('지점 목록을 가져오는 데 실패했습니다.');
      }
    }
  },
  postBranch: async (body: IBranchesRequest) => {
    try {
      const response = await axiosInstance.post('/branches/create', body);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.response);
        throw new Error('지점을 등록하는 데 실패했습니다.');
      }
    }
  },
  getBranch: async (branchId: string) => {
    try {
      const response = await axiosInstance.get<IBranchResponse>(`/branches/${branchId}/get`);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.response);
        throw new Error('지점 정보를 가져오는 데 실패했습니다.');
      }
    }
  },
  deleteBranch: async (branchId: string) => {
    try {
      const response = await axiosInstance.delete(`/branches/${branchId}/delete`);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.response);
        throw new Error('지점을 삭제하는 데 실패했습니다.');
      }
    }
  },
  getDeleteBranches: async (page: string) => {
    try {
      const response = await axiosInstance.get<IBranchesResponse>('/branches/deleted/list', {
        params: { page },
      });
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.response);
        throw new Error('지점 목록을 가져오는 데 실패했습니다.');
      }
    }
  },
  patchReviveBranch: async (branchId: string) => {
    try {
      const response = await axiosInstance.patch<IBranchResponse>(`/branches/${branchId}/revive`);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.response);
        throw new Error('삭제된 지점을 복구하는 데 실패했습니다.');
      }
    }
  },
};
