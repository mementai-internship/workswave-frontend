import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { deleteParts, getParts, patchParts, postParts } from '@/apis/parts.api';
import { IPartsForm, IPartsResponse } from '@/models/parts';

export const useGetParts = (branchId: number): UseQueryResult<IPartsResponse[]> => {
  return useQuery({
    queryKey: ['parts', branchId],
    queryFn: () => getParts(branchId),
  });
};

export const usePostParts = (branchId: number): UseMutationResult<IPartsResponse> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: IPartsForm) => postParts(branchId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['parts', branchId] });
    },
  });
};

export const usePatchParts = (branchId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: IPartsForm) => patchParts(branchId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['parts', branchId] });
    },
  });
};

export const useDeleteParts = (branchId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (partId: number) => deleteParts(branchId, partId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['parts', branchId] });
    },
  });
};
