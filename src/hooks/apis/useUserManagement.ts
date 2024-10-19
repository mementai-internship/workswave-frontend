import { useMutation, useQuery } from '@tanstack/react-query';

import userManagementApi from '@/apis/user-management.api';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { TPatchUserRequest, TPatchUserRoleRequest } from '@/models/user-management.model';

export const useGetUsers = (
  page: number,
  recordSize: number,
  status?: string,
  branch?: string,
  part?: string,
  name?: string,
  phone?: string
) => {
  return useQuery({
    queryKey: [QUERY_KEYS.userManagementList, page, recordSize, status, branch, part, name, phone],
    queryFn: () => userManagementApi.getUsers(page, recordSize, status, branch, part, name, phone),
  });
};

export const useGetCurrentUserInfo = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.userManagementCurrentUser],
    queryFn: () => userManagementApi.getCurrentUserInfo(),
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

export const usePatchUserRole = (userId: number) => {
  return useMutation({
    mutationFn: (body: TPatchUserRoleRequest) => userManagementApi.patchUserRole(userId, body),
  });
};

export const useGetBranchs = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.userManagementBranchs],
    queryFn: () => userManagementApi.getBranchs(),
  });
};

export const useGetParts = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.userManagementParts],
    queryFn: () => userManagementApi.getParts(),
  });
};
