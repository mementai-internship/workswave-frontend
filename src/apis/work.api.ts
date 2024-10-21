import axiosInstance from '@/apis/axiosInstance';
import { IAttendance } from '@/models/work.model';

export const worksApi = {
  getAllWork: async (): Promise<IAttendance[]> => {
    const result = await axiosInstance.get('/branches/attendance');
    return result.data;
  },
};
