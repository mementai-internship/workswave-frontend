// import axios from 'axios';

// import axiosInstance from '@/apis/axiosInstance';
// import { ISalaryBracketResponse } from '@/models/salary-bracket.model';

// export const salaryBracketApi = {
// getSalaryBracket: async (year: string) => {
// try {
//   const response = await axiosInstance.get<ISalaryBracketResponse>(`/salary-bracket/${year}`);
//   return response.data;
// } catch (error) {
//   if (axios.isAxiosError(error)) {
//     console.log(error.response);
//     throw new Error('급여구간표 정보를 가져오는 데 실패했습니다.');
//   }
// }
// },
// };
