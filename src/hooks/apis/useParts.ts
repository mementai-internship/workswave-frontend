import { getParts } from '@/apis/parts.api';
import { useQuery } from '@tanstack/react-query';

export const useParts = (branchId: number) => {
  return useQuery({
    queryKey: ['parts'],
    queryFn: () => getParts(branchId),
  });
};
