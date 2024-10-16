import axiosInstance from '@/apis/axiosInstance';
import { useQuery } from '@tanstack/react-query';

const WORKING_SETTING_PART_QUERY_KEY = 'workingSettingPart';

const getWorkingSettingPart = async (branchId: number) => {
  const response = await axiosInstance(`branches/${branchId}/parts`);
  return response.data;
};

export const useGetWorkingSettingPart = (id: number) => {
  const { data = [], isFetching } = useQuery({
    queryKey: [WORKING_SETTING_PART_QUERY_KEY],
    queryFn: () => getWorkingSettingPart(id),
    throwOnError: true,
  });
  return { data, isFetching };
};
