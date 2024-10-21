import axiosInstance from '@/apis/axiosInstance';

export const commuteApi = {
  postCommuteClockIn: async () => {
    const result = await axiosInstance.post('/commutes/clock-in');
    console.log(result);
    return result;
  },
  putCommuteClockOut: async (id: number) => {
    const result = await axiosInstance.put(`/commutes/clock-out/${id}`);
    console.log(result);
    return result;
  },
};
