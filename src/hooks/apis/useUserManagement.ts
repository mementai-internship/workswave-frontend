import { useMutation, useQuery } from '@tanstack/react-query';

import userManagementApi from '@/apis/user-management.api';
import { QUERY_KEYS } from '@/constants/queryKeys';
import {
  TPatchUserRequest,
  TPatchUserRoleRequest,
  TPostUserRequest,
} from '@/models/user-management.model';

export const useGetUsers = (page: number, recordSize: number, status?: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.userManagementList, page, recordSize, status],
    queryFn: () => userManagementApi.getUsers(page, recordSize, status),
  });
};

export const usePostUser = () => {
  return useMutation({
    mutationFn: (body: TPostUserRequest) => userManagementApi.postUser(body),
  });
};

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.userManagementCurrentUser],
    queryFn: () => userManagementApi.getCurrentUser(),
  });
};

export const useGetUserDetail = (userId: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.userManagementDetail, userId],
    queryFn: () => userManagementApi.getUserDetail(userId),
  });
};

export const usePatchUser = (userId: number) => {
  return useMutation({
    mutationFn: (body: TPatchUserRequest) => userManagementApi.patchUser(userId, body),
  });
};

export const useDeleteUser = () => {
  return useMutation({
    mutationFn: (userId: number) => userManagementApi.deleteUser(userId),
  });
};

export const useGetResignedUsers = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.userManagementResignedUsers],
    queryFn: () => userManagementApi.getResignedUsers(),
  });
};

export const usePatchUserRole = (userId: number) => {
  return useMutation({
    mutationFn: (body: TPatchUserRoleRequest) => userManagementApi.patchUserRole(userId, body),
  });
};
