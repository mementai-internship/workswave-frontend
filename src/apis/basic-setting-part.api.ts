import axiosInstance from '@/apis/axiosInstance';
import { IWorkingSettingPartResponse } from '@/models/workingSetting.model';

export const getWorkingSettingPart = async (
  branchId: number
): Promise<IWorkingSettingPartResponse[]> => {
  const res = await axiosInstance.get(`/branches/${branchId}/parts`, {
    // headers: {
    //   Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZXhwIjoxNzI5MDU5NzYxfQ.aemnAxGBd5jx8Asp9ornKbjNrUtpivT1aiMII3ojxGM`,
    // },
  });

  return res.data;
};
