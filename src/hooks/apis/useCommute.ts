import { useMutation } from '@tanstack/react-query';

import { commuteApi } from '@/apis/commute.api';

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
