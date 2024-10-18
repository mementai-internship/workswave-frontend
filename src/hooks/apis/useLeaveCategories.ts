import { UseMutationResult, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  deleteLeaveCategory,
  getLeaveCategories,
  patchLeaveCategory,
  postLeaveCategory,
} from '@/apis/leave-categories.api';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { ILeaveCategory, IPatchLeaveCategory } from '@/models/leave-categories.model';

export const useGetLeaveCategories = (branch_id: number) => {
  return useQuery<ILeaveCategory[]>({
    queryKey: [QUERY_KEYS.leaveCategories, branch_id],
    queryFn: () => getLeaveCategories(branch_id),
    enabled: !!branch_id,
  });
};

export const usePostLeaveCategory = (
  branch_id: number
): UseMutationResult<ILeaveCategory, Error> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ILeaveCategory) => postLeaveCategory(branch_id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.leaveCategories, branch_id] });
    },
  });
};

export const usePatchLeaveCategory = (
  branch_id: number
): UseMutationResult<ILeaveCategory, Error> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: IPatchLeaveCategory) => patchLeaveCategory(branch_id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.leaveCategories, branch_id] });
    },
  });
};

export const useDeleteLeaveCategory = (
  branch_id: number
): UseMutationResult<ILeaveCategory, Error> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (leave_category_id: number) => deleteLeaveCategory(branch_id, leave_category_id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.leaveCategories, branch_id] });
    },
  });
};
