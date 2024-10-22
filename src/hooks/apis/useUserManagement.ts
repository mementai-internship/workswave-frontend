import { useMutation, useQuery } from '@tanstack/react-query';

import userManagementApi from '@/apis/user-management.api';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { TPatchUserRequest, TPatchUserRoleRequest } from '@/models/user-management.model';


export const useGetUsers = ({
  currentPage,
  itemsPerPage,
  selectedTab,
  selectedBranch,
  selectedPart,
  updatedSearchName,
  updatedSearchPhone,
}) => {
  return useQuery({
    queryKey: [
      QUERY_KEYS.userManagementList,
      currentPage,
      itemsPerPage,
      selectedTab,
      selectedBranch,
      selectedPart,
      updatedSearchName,
      updatedSearchPhone,
    ],
    queryFn: () =>
      userManagementApi.getUsers(
        currentPage,
        itemsPerPage,
        selectedTab,
        selectedBranch,
        selectedPart,
        updatedSearchName,
        updatedSearchPhone
      ),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};

export const useGetCurrentUserInfo = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.userManagementCurrentUser],
    queryFn: () => userManagementApi.getCurrentUserInfo(),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
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
