import { UseQueryResult, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getLeavePolicies, patchLeavePolicies } from '@/apis/leave-policies.api';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { ILeavePolicyResponse } from '@/models/leave-policies.model';

export const useGetLeavePolicies = (
  branchId: number
): UseQueryResult<ILeavePolicyResponse, Error> => {
  return useQuery({
    queryKey: [QUERY_KEYS.leavePolicies, branchId],
    queryFn: () => getLeavePolicies(branchId),
    enabled: !!branchId,
  });
};

export const usePatchLeavePolicies = (branchId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ILeavePolicyResponse) => patchLeavePolicies(branchId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.leavePolicies, branchId] });
    },
  });
};
