import { getBranches } from '@/apis/branches.api';
import { TBranch } from '@/models/user.model';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

const BRANCHES_QUERY_KEY = 'branches';

export const useGetBranches = (): UseQueryResult<TBranch[], Error> => {
  return useQuery({
    queryKey: [BRANCHES_QUERY_KEY],
    queryFn: () => getBranches(),
    meta: {
      errorMessage: '브랜치 목록을 불러오는 중 오류가 발생했습니다.',
    },
  });
};
