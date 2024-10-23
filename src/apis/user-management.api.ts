import { isAxiosError } from 'axios';

import axiosInstance from '@/apis/axiosInstance';
import * as userManagementModel from '@/models/user-management.model';

const userManagementApi = {
  getUsers: async (
    page: number,
    recordSize: number,
    status?: string,
    branch?: string,
    part?: string,
    name?: string,
    phone?: string
  ) => {
    try {
      const response = await axiosInstance.get<userManagementModel.TGetUsersResponse>(
        name !== '0' || phone !== '0'
          ? `/user-management?search_name=${name}&search_phone=${phone}&search_status=${status}&search_branch_id=${branch}&search_part_id=${part}&page=${page}&record_size=${recordSize}`
          : `/user-management?search_status=${status}&search_branch_id=${branch}&search_part_id=${part}&page=${page}&record_size=${recordSize}`
      );
      return response.data;
    } catch (error) {
      console.log('error', error);
      isAxiosError(error);
      throw new Error('사용자 목록을 가져오는 데 실패했습니다.');
    }
  },
  getCurrentUserInfo: async () => {
    try {
      const response =
        await axiosInstance.get<userManagementModel.TGetCurrentUserResponse>(`/user-management/me`);
      return response.data.data;
    } catch (error) {
      isAxiosError(error);
      throw new Error('현재 사용자를 가져오는 데 실패했습니다.');
    }
  },
  getUserDetail: async (id: number) => {
    try {
      const response = await axiosInstance.get<userManagementModel.TGetUserDetailResponse>(
        `/user-management/${id}`
      );
      return response.data;
    } catch (error) {
      isAxiosError(error);
      throw new Error('사용자 상세 정보를 가져오는 데 실패했습니다.');
    }
  },
  patchUser: async (id: number, body: userManagementModel.TPatchUserRequest) => {
    try {
      const response = await axiosInstance.patch<userManagementModel.TPatchUserResponse>(
        `/user-management/${id}`,
        body
      );
      return response.data;
    } catch (error) {
      isAxiosError(error);
      throw new Error('사용자 정보를 수정하는 데 실패했습니다.');
    }
  },
  deleteUser: async (id: number) => {
    try {
      const response = await axiosInstance.delete(`/user_management/${id}`);
      return response;
    } catch (error) {
      isAxiosError(error);
      throw new Error('사용자를 삭제하는 데 실패했습니다.');
    }
  },
  patchUserRole: async (id: number, body: userManagementModel.TPatchUserRoleRequest) => {
    try {
      const response = await axiosInstance.patch<userManagementModel.TPatchUserRoleResponse>(
        `/user_management/${id}/role`,
        body
      );
      return response.data;
    } catch (error) {
      isAxiosError(error);
      throw new Error('사용자 역할을 수정하는 데 실패했습니다.');
    }
  },
  getBranchs: async () => {
    try {
      const response =
        await axiosInstance.get<userManagementModel.TGetBranchsResponse>(
          `/user-management/branches`
        );
      return response.data.data;
    } catch (error) {
      isAxiosError(error);
      throw new Error('지점 목록을 가져오는 데 실패했습니다.');
    }
  },
  getParts: async () => {
    try {
      const response =
        await axiosInstance.get<userManagementModel.TGetPartsResponse>(`/user-management/parts`);
      return response.data.data;
    } catch (error) {
      isAxiosError(error);
      throw new Error('파트 목록을 가져오는 데 실패했습니다.');
    }
  },
};

export default userManagementApi;
