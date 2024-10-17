import userManagementApi from '@/apis/user-management.api';
import {
  TPatchUserRequest,
  TPatchUserRoleRequest,
  TPostUserRequest,
} from '@/models/user-management.model';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetUsers = (page: number) => {
  return useQuery({
    queryKey: ['userManagementList', page],
    queryFn: () => userManagementApi.getUsers(page),
  });
};

export const usePostUser = () => {
  return useMutation({
    mutationFn: (body: TPostUserRequest) => userManagementApi.postUser(body),
  });
};

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: ['userManagementCurrentUser'],
    queryFn: () => userManagementApi.getCurrentUser(),
  });
};

export const useGetUserDetail = (userId: number) => {
  return useQuery({
    queryKey: ['userManagementUserDetail', userId],
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
    queryKey: ['userManagementResignedUsers'],
    queryFn: () => userManagementApi.getResignedUsers(),
  });
};

export const usePatchUserRole = (userId: number) => {
  return useMutation({
    mutationFn: (body: TPatchUserRoleRequest) => userManagementApi.patchUserRole(userId, body),
  });
};
