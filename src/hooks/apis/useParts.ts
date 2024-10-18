import { UseQueryResult, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { deleteParts, getParts, patchParts, postParts } from '@/apis/parts.api';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { IPartsForm } from '@/models/parts';
import { IWorkingSettingPartResponse } from '@/models/workingSetting.model';

export const useGetParts = (
  branchId: number
): UseQueryResult<IWorkingSettingPartResponse[], Error> => {
  return useQuery({
    queryKey: [QUERY_KEYS.parts, branchId],

    queryFn: () => getParts(branchId),
  });
};

export const usePostParts = (branchId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: IPartsForm) => postParts(branchId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.parts, branchId] });
    },
  });
};

export const usePatchParts = (branchId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: IPartsForm) => patchParts(branchId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.parts, branchId] });
    },
  });
};

export const useDeleteParts = (branchId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (partId: number) => deleteParts(branchId, partId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.parts, branchId] });
    },
  });
};
