import { getParts } from '@/apis/parts.api';
import { IWorkingSettingPartResponse } from '@/models/workingSetting.model';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

export const useGetParts = (
  branchId: number
): UseQueryResult<IWorkingSettingPartResponse[], Error> => {
  return useQuery({
    queryKey: ['PART_QUERY_KEY', branchId],
    queryFn: () => getParts(branchId),
  });
};

export const usePostParts = () => {};
