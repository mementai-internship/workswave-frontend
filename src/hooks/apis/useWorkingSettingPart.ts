import axiosInstance from '@/apis/axiosInstance';
import { useQuery } from '@tanstack/react-query';

const workingSettingPart = 'workingSettingPart';

const getWorkingSettingPart = async (branchId: number) => {
  const response = await axiosInstance(`branches/${branchId}/parts`);
  return response.data;
};

export const useGetWorkingSettingPart = (id: number) => {
  const { data = [], isFetching } = useQuery({
    queryKey: [workingSettingPart],
    queryFn: () => getWorkingSettingPart(id),
    throwOnError: true,
  });
  return { data, isFetching };
};
