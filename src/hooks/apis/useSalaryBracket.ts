import { useQuery } from '@tanstack/react-query';

import { salaryBracketApi } from '@/apis/salary-bracket.api';
import { QUERY_KEYS } from '@/constants/queryKeys';

export default function useGetSalaryBracket(year: string) {
  return useQuery({
    queryKey: [QUERY_KEYS.salaryBracket, year],
    queryFn: () => salaryBracketApi.getSalaryBracket(year),
  });
}
