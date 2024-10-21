import { useQuery } from '@tanstack/react-query';

import { worksApi } from '@/apis/work.api';
import { QUERY_KEYS } from '@/constants/queryKeys';

export const useGetAllWork = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.work],
    queryFn: worksApi.getAllWork,
  });
};
