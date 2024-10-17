import { getWorkPolicies, patchWorkPolicies } from '@/apis/work-policies';
import { IWorkPolicies } from '@/models/work-policies';
import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

const WORK_POLICIES_QUERY_KEY = 'work-policies';

export const useGetWorkPolicies = (branchId: number): UseQueryResult<IWorkPolicies, Error> => {
  return useQuery({
    queryKey: [WORK_POLICIES_QUERY_KEY, branchId],
    queryFn: () => getWorkPolicies(branchId),
    enabled: !!branchId,
  });
};

export const usePatchWorkPolicies = (branchId: number): UseMutationResult<IWorkPolicies, Error> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: IWorkPolicies) => patchWorkPolicies(branchId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [WORK_POLICIES_QUERY_KEY, branchId] });
    },
  });
};
