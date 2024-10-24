import { useMutation, useQuery } from '@tanstack/react-query';

import { commuteApi } from '@/apis/commute.api';
import { QUERY_KEYS } from '@/constants/queryKeys';

export const usePostCommuteClockIn = () => {
  return useMutation({
    mutationFn: () => commuteApi.postCommuteClockIn(),
  });
};

export const usePutCommuteClockOut = () => {
  return useMutation({
    mutationFn: (id: number) => commuteApi.putCommuteClockOut(id),
  });
};
// 타입 할당 및 api확인 . 후수정 필요
// 유저 근무 토탈 스테이터스 get api call
export const useGetUserCommuteStatus = (id: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.commutStatus, id],
    queryFn: () => commuteApi.getUserCommuteStatus(id),
  });
};
