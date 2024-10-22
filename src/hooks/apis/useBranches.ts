import { useMutation, useQuery } from '@tanstack/react-query';

import { branchesApi } from '@/apis/branches.api';
import { QUERY_KEYS } from '@/constants/queryKeys';

interface IUseGetAllBranches {
  role?: string;
}

export const useGetAllBranches = ({ role = 'MSO 최고권한' }: IUseGetAllBranches = {}) => {
  return useQuery({
    queryKey: [QUERY_KEYS.branches],
    queryFn: branchesApi.getAllBranches,
    enabled: role === 'MSO 최고권한',
  });
};

export const useGetBranches = (page: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.branches, page],
    queryFn: () => branchesApi.getBranches(page),
  });
};
export const usePostBranch = () => {
  return useMutation({ mutationFn: branchesApi.postBranch });
};
export const useGetBranch = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.branch, id],
    queryFn: () => branchesApi.getBranch(id),
  });
};
export const useDeleteBranch = () => {
  return useMutation({
    mutationFn: branchesApi.deleteBranch,
  });
};

export const useGetDeleteBranches = (page: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.branchDeleted, page],
    queryFn: () => branchesApi.getDeleteBranches(page),
  });
};

export const usePatchReviveBranch = () => {
  return useMutation({
    mutationFn: branchesApi.patchReviveBranch,
  });
};
