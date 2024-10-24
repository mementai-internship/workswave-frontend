import { useQuery } from '@tanstack/react-query';

import { worksApi } from '@/apis/work.api';
import { QUERY_KEYS } from '@/constants/queryKeys';

export const useGetAllWork = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.work],
    queryFn: worksApi.getAllWork,
  });
};

// TODO 월별 데이터 호출 로직 api 받은 후 수정 예정
export const useGetWorkByMonth = (date: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.work, date],
    queryFn: () => worksApi.getWorkByMonth(date),
  });
};
