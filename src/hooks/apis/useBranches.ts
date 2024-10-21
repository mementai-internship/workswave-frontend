import { UseQueryResult, useMutation, useQuery } from '@tanstack/react-query';

import { branchesApi } from '@/apis/branches.api';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { IBranchesResponse } from '@/models/branches.model';

export const useGetBranches = (page: string): UseQueryResult<IBranchesResponse> => {
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
