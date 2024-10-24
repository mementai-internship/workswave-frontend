import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { deleteParts, getParts, patchParts, postParts } from '@/apis/parts.api';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { useToast } from '@/hooks/useToast';
import { IPartsForm, IPartsResponse } from '@/models/parts';
import { IWorkingSettingPartResponse } from '@/models/workingSetting.model';

export const useGetParts = (
  branchId: number
): UseQueryResult<IWorkingSettingPartResponse[], Error> => {
  return useQuery({
    queryKey: [QUERY_KEYS.parts, branchId],
    queryFn: () => getParts(branchId),
    enabled: !!branchId,
  });
};

export const usePostParts = (branchId: number): UseMutationResult<IPartsResponse> => {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: (data: IPartsForm) => postParts(branchId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.parts, branchId] });
      toast.success('파트가 성공적으로 추가됐습니다.', {
        timer: 2000,
      });
    },
    onError: () => {
      toast.notice('파트 추가에 실패했습니다.', {
        timer: 2000,
      });
    },
  });
};

export const usePatchParts = (branchId: number) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: (data: IPartsForm) => patchParts(branchId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.parts, branchId] });
      toast.success('파트가 성공적으로 추가됐습니다.', {
        timer: 2000,
      });
    },
    onError: () => {
      toast.error('파트 수정에 실패했습니다.', {
        timer: 2000,
      });
    },
  });
};

export const useDeleteParts = (branchId: number) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: (partId: number) => deleteParts(branchId, partId),
    onSuccess: () => {
      console.log('scucess');
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.parts, branchId] });
      toast.success('파트가 성공적으로 삭제됐습니다.', {
        timer: 2000,
      });
    },
    onError: () => {
      toast.error('파트 삭제에 실패했습니다.', {
        timer: 2000,
      });
    },
  });
};
