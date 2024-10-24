import axiosInstance from '@/apis/axiosInstance';

export const commuteApi = {
  postCommuteClockIn: async () => {
    const result = await axiosInstance.post('/commutes/clock-in');
    console.log(result);
    return result.data;
  },
  putCommuteClockOut: async (id: number) => {
    console.log('id', id);
    const result = await axiosInstance.put(`/commutes/clock-out/${id}`);
    console.log(result);
    return result.data;
  },
};
