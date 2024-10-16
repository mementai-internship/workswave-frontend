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
} from '@/models/userManagement.model';

const userManagementApi = {
  getUsers: () => {
    return axiosInstance.get<TGetUsersResponse>(`/user_management`);
  },
  postUser: (body: TPostUserRequest) => {
    return axiosInstance.post<TPostUserResponse>(`/user_management`, body);
  },
  getCurrentUser: () => {
    return axiosInstance.get<TGetCurrentUserResponse>(`/user_management/me`);
  },
  getUserDetail: (id: number) => {
    return axiosInstance.get<TGetUserDetailResponse>(`/user_management/${id}`);
  },
  patchUser: (id: number, body: TPatchUserRequest) => {
    return axiosInstance.patch<TPatchUserResponse>(`/user_management/${id}`, body);
  },
  deleteUser: async (id: number) => {
    const response = await axiosInstance.delete(`/user_management/${id}`);
    return response;
  },
  getResignedUsers: () => {
    return axiosInstance.get<TGetResignedUsersResponse>(`/user_management/regined`);
  },
  patchUserRole: (id: number, body: TPatchUserRoleRequest) => {
    return axiosInstance.patch<TPatchUserRoleResponse>(`/user_management/${id}/role`, body);
  },
};

export default userManagementApi;
