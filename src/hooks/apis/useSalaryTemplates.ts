import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { salaryTemplatesApi } from '@/apis/salary-templates.api';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { ISalaryTemplatesItem } from '@/models/salary-templates.model';

export const useGetSalaryTemplates = (branchId: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.salaryTemplates, branchId],
    queryFn: () => salaryTemplatesApi.getSalaryTemplates(branchId),
    enabled: !!branchId,
  });
};

export const usePostSalaryTemplates = (branchId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: ISalaryTemplatesItem) =>
      salaryTemplatesApi.postSalaryTemplates(branchId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.salaryTemplates, branchId] });
    },
  });
};

export const usePatchSalaryTemplates = (branchId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      salaryTemplateId,
      body,
    }: {
      salaryTemplateId: number;
      body: ISalaryTemplatesItem;
    }) => salaryTemplatesApi.patchSalaryTemplates({ branchId, salaryTemplateId, body }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.salaryTemplates, branchId] });
    },
  });
};

export const useDeleteSalaryTemplates = (branchId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (salaryTemplateId: number) =>
      salaryTemplatesApi.deleteSalaryTemplates(branchId, salaryTemplateId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.salaryTemplates, branchId] });
    },
  });
};
