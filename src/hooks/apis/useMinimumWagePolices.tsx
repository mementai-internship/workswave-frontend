import { useMutation, useQuery } from '@tanstack/react-query';

import { minimumWagePolicesApi } from '@/apis/minimum-wage-policies.api';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { IMinimumWagePolicesResponse } from '@/models/minimum-wage-polices.model';

export const useGetMinimumWagePolices = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.minimumWagePolicies],
    queryFn: () => minimumWagePolicesApi.getMinimumWagePolices(),
  });
};

export const usePatchMinimumWagePolices = () => {
  return useMutation({
    mutationFn: (body: IMinimumWagePolicesResponse) =>
      minimumWagePolicesApi.patchMinimumWagePolices(body),
  });
};
