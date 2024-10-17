import { branchesApi } from '@/apis/branches.api';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetBranches = (page: string) => {
  return useQuery({
    queryKey: ['branches', page],
    queryFn: ({ queryKey }) => {
      const [, page] = queryKey;
      return branchesApi.getBranches(page);
    },
  });
};
export const usePostBranch = () => {
  return useMutation({ mutationFn: branchesApi.postBranch });
};
export const useGetBranch = (id: string) => {
  return useQuery({
    queryKey: ['branch', id],
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey;
      return branchesApi.getBranch(id);
    },
  });
};
export const useDeleteBranch = () => {
  return useMutation({
    mutationFn: branchesApi.deleteBranch,
  });
};

export const useGetDeleteBranches = (page: string) => {
  return useQuery({
    queryKey: ['branches-deleted', page],
    queryFn: ({ queryKey }) => {
      const [, page] = queryKey;
      return branchesApi.getDeleteBranches(page);
    },
  });
};

export const usePatchReviveBranch = () => {
  return useMutation({
    mutationFn: branchesApi.patchReviveBranch,
  });
};
