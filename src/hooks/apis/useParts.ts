import { getParts } from '@/apis/parts.api';
import { useQuery } from '@tanstack/react-query';

const PART_QUERY_KEY = 'parts';
export const useGetParts = (branch_id: number) => {
  return useQuery({
    queryKey: [PART_QUERY_KEY, branch_id],
    queryFn: () => getParts(branch_id),
  });
};
