import axiosInstance from '@/apis/axiosInstance';

export const commuteApi = {
  postCommuteClockIn: async () => {
    const result = await axiosInstance.post('/commutes/clock-in');
    console.log(result);
    return result.data;
  },
  putCommuteClockOut: async (id: number) => {
    const result = await axiosInstance.put(`/commutes/clock-out/${id}`);
    console.log(result);
    return result.data;
  },
  // 출퇴근 스테이터스 호출 로직
  getUserCommuteStatus: async (id: number) => {
    const result = await axiosInstance.get(`/commutes/status/${id}`, { params: { id } });
    console.log(result);
    return result.data;
  },
};
