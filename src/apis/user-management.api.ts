import { isAxiosError } from 'axios';

import axiosInstance from '@/apis/axiosInstance';
import {
  TGetCurrentUserResponse,
  TGetResignedUsersResponse,
  TGetUserDetailResponse,
  TGetUsersResponse,
  TPatchUserRequest,
  TPatchUserResponse,
  TPatchUserRoleRequest,
  TPatchUserRoleResponse,
  TPostUserRequest,
  TPostUserResponse,
} from '@/models/user-management.model';

const userManagementApi = {
  getUsers: async (
    page: number,
    recordSize: number,
    status?: string,
    branch?: string,
    part?: string
  ) => {
    try {
      const response = await axiosInstance.get<TGetUsersResponse>(
        `/user-management?search_status=${status}&search_branch_id=${branch}&search_part_id=${part}&page=${page}&record_size=${recordSize}`
      );
      return response.data;
    } catch (error) {
      isAxiosError(error);
      throw new Error('사용자 목록을 가져오는 데 실패했습니다.');
    }
  },
  postUser: async (body: TPostUserRequest) => {
    try {
      const response = await axiosInstance.post<TPostUserResponse>(`/user-management`, body);
      return response.data;
    } catch (error) {
      isAxiosError(error);
      throw new Error('사용자를 생성하는 데 실패했습니다.');
    }
  },
  getCurrentUser: async () => {
    try {
      const response = await axiosInstance.get<TGetCurrentUserResponse>(`/user-management/me`);
      return response.data;
    } catch (error) {
      isAxiosError(error);
      throw new Error('현재 사용자를 가져오는 데 실패했습니다.');
    }
  },
  getUserDetail: async (id: number) => {
    try {
      const response = await axiosInstance.get<TGetUserDetailResponse>(`/user-management/${id}`);
      return response.data;
    } catch (error) {
      isAxiosError(error);
      throw new Error('사용자 상세 정보를 가져오는 데 실패했습니다.');
    }
  },
  patchUser: async (id: number, body: TPatchUserRequest) => {
    try {
      const response = await axiosInstance.patch<TPatchUserResponse>(
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
  getResignedUsers: async () => {
    try {
      const response =
        await axiosInstance.get<TGetResignedUsersResponse>(`/user_management/regined`);
      return response.data;
    } catch (error) {
      isAxiosError(error);
      throw new Error('탈퇴한 사용자 목록을 가져오는 데 실패했습니다.');
    }
  },
  patchUserRole: async (id: number, body: TPatchUserRoleRequest) => {
    try {
      const response = await axiosInstance.patch<TPatchUserRoleResponse>(
        `/user_management/${id}/role`,
        body
      );
      return response.data;
    } catch (error) {
      isAxiosError(error);
      throw new Error('사용자 역할을 수정하는 데 실패했습니다.');
    }
  },
};

export default userManagementApi;
