import axiosInstance from '@/apis/axiosInstance';
import { ISalaryCalcStandardsResponse } from '@/models/salaryRange.model';

export const getSalaryCalcStandards = async () => {
  const response: { data: ISalaryCalcStandardsResponse } =
    await axiosInstance.get('/salary-bracket');
  return response.data;
};
