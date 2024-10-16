import axiosInstance from '@/apis/axiosInstance';
import { getWorkingSettingPart } from '@/apis/basic-setting-part.api';
import {
  IWorkingSettingPartForm,
  IWorkingSettingPartResponse,
} from '@/models/workingSetting.model';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const WORKING_SETTING_PART_QUERY_KEY = 'workingSettingPart';

export const useGetWorkingSettingPart = (
  id: number
): { data: IWorkingSettingPartResponse[]; isFetching: boolean } => {
  const { data = [], isFetching } = useQuery({
    queryKey: [WORKING_SETTING_PART_QUERY_KEY],
    queryFn: () => getWorkingSettingPart(id),
    throwOnError: true,
  });
  return { data, isFetching };
};

const postWorkingSettingPart = async (branchId: number, data: IWorkingSettingPartForm) => {
  const response = await axiosInstance.post(`branches/${branchId}/parts`, data);
  return response.data;
};

export const usePostWorkingSettingPart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ branchId, postData }: { branchId: number; postData: IWorkingSettingPartForm }) =>
      postWorkingSettingPart(branchId, postData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [workingSettingPart] });
    },
  });
};
