import { useMutation, useQuery } from '@tanstack/react-query';

import { hourWageTemplatesAPI } from '@/apis/hour-wage-templates.api';
import { QUERY_KEYS } from '@/constants/queryKeys';
import {
  IHourWageTemplatesRequest,
  IPatchHourWageTemplatesProps,
} from '@/models/hour-wage-templates';

export const useGetHourWageTemplates = (branchId: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.hourWageTemplates, branchId],
    queryFn: () => hourWageTemplatesAPI.getHourWageTemplateList(branchId),
    enabled: !!branchId,
  });
};

export const usePostHourWageTemplates = (branchId: number) => {
  return useMutation({
    mutationFn: (data: IHourWageTemplatesRequest) =>
      hourWageTemplatesAPI.postHourWageTemplate(branchId, data),
  });
};

export const usePatchHourWageTemplates = (branchId: number) => {
  return useMutation({
    mutationFn: ({ data, templateId }: IPatchHourWageTemplatesProps) =>
      hourWageTemplatesAPI.patchHourWageTemplate({ branchId, templateId, data }),
  });
};

export const useDeleteHourWageTemplates = (branchId: number) => {
  return useMutation({
    mutationFn: (templateId: number) =>
      hourWageTemplatesAPI.deleteHourWageTemplate(branchId, templateId),
  });
};
