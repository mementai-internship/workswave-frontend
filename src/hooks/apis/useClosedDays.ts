import { useMutation, useQuery } from '@tanstack/react-query';

import { closedDaysApi } from '@/apis/closed-days.api';
import { QUERY_KEYS } from '@/constants/queryKeys';
import {
  IClosedDayDeleteRequest,
  IClosedDayRequest,
  IClosedDaysDeleteRequest,
  IClosedDaysRequest,
} from '@/models/closedDays.model';

// export const useGetClosedDaysEveryBranch = () => {
//   return useQuery({
//     queryKey: ['everyBranchesClosedDays'],
//     queryFn: () => closedDaysApi.getClosedDaysEveryBranch(),
//   });
// };

export const useGetClosedDays = ({ branch_id }: IClosedDayRequest) => {
  return useQuery({
    queryKey: [QUERY_KEYS.branchClose, branch_id],
    queryFn: () => closedDaysApi.getClosedDays(branch_id),
  });
};

export const useGetMonthlyClosedDays = ({ branch_id, date }: IClosedDayRequest) => {
  return useQuery({
    queryKey: [QUERY_KEYS.branchMonthlyClose, branch_id, date],
    queryFn: () => closedDaysApi.getMonthlyClosedDays({ branch_id, date }),
  });
};

export const usePostOneClosedDay = () => {
  return useMutation({
    mutationFn: (body: IClosedDayRequest) => closedDaysApi.postOneClosedDay(body),
  });
};

export const usePostClosedDays = () => {
  return useMutation({
    mutationFn: (body: IClosedDaysRequest) => closedDaysApi.postClosedDays(body),
  });
};

export const useDeleteOneClosedDay = () => {
  return useMutation({
    mutationFn: (body: IClosedDayDeleteRequest) => closedDaysApi.deleteOneClosedDay(body),
  });
};

export const useDeleteClosedDays = () => {
  return useMutation({
    mutationFn: (body: IClosedDaysDeleteRequest) => closedDaysApi.deleteClosedDays(body),
  });
};
