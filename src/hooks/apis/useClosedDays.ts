import { useMutation, useQuery } from '@tanstack/react-query';

import { closedDaysApi } from '@/apis/closedDays.api';
import { TBranchClosedDaysRequest } from '@/models/closedDays.model';

// export const useGetEveryBranchesClosedDays = () => {
//   return useQuery({
//     queryKey: ['everyBranchesClosedDays'],
//     queryFn: () => closedDaysApi.getEveryBranchesClosedDays(),
//   });
// };

export const useGetBranchClosedDaysByMonth = ({ branch_id, date }: TBranchClosedDaysRequest) => {
  const { data, isFetching } = useQuery({
    queryKey: ['branchClosedDaysByMonth', branch_id],
    queryFn: () => closedDaysApi.getBranchClosedDaysByMonth({ branch_id, date }),
  });

  return { data, isFetching };
};

export const usePostBranchClosedDay = () => {
  return useMutation({
    mutationFn: (body: TBranchClosedDaysRequest) => closedDaysApi.postBranchClosedDay(body),
  });
};

export const useGetBranches = (page: string) => {
  return useQuery({
    queryKey: ['branches', page],
    queryFn: () => closedDaysApi.getBranches(page),
  });
};
