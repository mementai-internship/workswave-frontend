import { isAxiosError } from 'axios';
import dayjs from 'dayjs';

import axiosInstance from '@/apis/axiosInstance';
import { TBranchClosedDaysRequest } from '@/models/closedDays.model';

export const closedDaysApi = {
  // getEveryBranchesClosedDays: async () => {
  //   try {
  //     console.log('getAllClosedDays [전 지점 휴무일 조회]');
  //     const response = await axiosInstance.get('/branches/closed_days');

  //     console.log('%cgetAllClosedDays [전 지점 휴무일 조회] 응답', 'color: orange;', response);
  //     return response.data;
  //   } catch (err) {
  //     if (isAxiosError(err)) {
  //       console.error('Error:', err.response?.data);
  //       throw new Error('전 지점 휴무일 조회에 실패 했습니다.');
  //     }
  //   }
  // },

  // getBranchClosedDays: async (branchId: number) => {
  //   try {
  //     console.log('getBranchClosedDays [지점] [휴무일 - 모든 날짜] 조회', branchId);
  //     const response = await axiosInstance.get(`/branches/closed_days/${branchId}`);
  //     console.log('%cgetBranchClosedDays [지점] [휴무일 - 모든 날짜] 응답', 'color: orange;', response);
  //     return response.data;
  //   } catch (err) {
  //     if (isAxiosError(err)) {
  //       console.error('Error:', err.response?.data);
  //       throw new Error('지점 휴무일 조회에 실패 했습니다.');
  //     }
  //   }
  // },

  getBranchClosedDaysByMonth: async ({ branch_id, date }: TBranchClosedDaysRequest) => {
    try {
      const formattedDate = dayjs(date).format('YYYY-MM-DD');
      console.log(
        `getBranchClosedDays [지점 "${branch_id}"] [휴무일 - 월별 ${formattedDate}] get 요청`
      );
      const response = await axiosInstance.get(
        `/branches/${branch_id}/closed_days/branch_month/${formattedDate}`
      );
      console.log(
        `%cgetBranchClosedDays [지점 "${branch_id}"] [휴무일 - 월별 ${formattedDate}] get 응답`,
        'color: orange;',
        response
      );
      return response.data;
    } catch (err) {
      if (isAxiosError(err)) {
        console.error('Error:', err.response?.data);
        throw new Error('지점 - 월별 휴무일 조회에 실패 했습니다.');
      }
    }
  },

  // getClosedDaysByDate: async (date: Date) => {
  //   try {
  //     console.log(`getClosedDaysByDate [휴무일 - 특정 날짜 ${date}] get 요청`);
  //     const response = await axiosInstance.get(`/branches/closed_days/${date}`);
  //     console.log(`%cgetClosedDaysByDate [휴무일 - 특정 날짜 ${date}] get 응답`, 'color: orange;', response);
  //     return response.data;
  //   } catch (err) {
  //     if (isAxiosError(err)) {
  //       console.error('Error:', err.response?.data);
  //       throw new Error(`${date}에 대한 휴무일 조회에 실패 했습니다.`);
  //     }
  //   }
  // },

  postBranchClosedDay: async ({
    branch_id,
    date,
    memo = '지점 휴무일',
  }: TBranchClosedDaysRequest) => {
    try {
      const formattedDate = dayjs(date).format('YYYY-MM-DD');

      console.log(`postBranchClosedDay [지점 "${branch_id}"] [휴무일 등록] post 요청`);
      const response = await axiosInstance.post(`/branches/${branch_id}/closed_days`, {
        closed_day_date: formattedDate,
        memo,
      });
      console.log(
        `%cpostBranchClosedDay [지점 "${branch_id}"] [휴무일 등록] post 응답`,
        'color: blue;',
        response
      );
      return response.data;
    } catch (err) {
      if (isAxiosError(err)) {
        console.error('Error:', err.response?.data);
        throw new Error('휴무일 등록에 실패 했습니다.');
      }
    }
  },

  // 나중에 삭제

  getBranches: async (page: string) => {
    try {
      console.log('getBranches [지점 목록 조회] 요청', page);
      const response = await axiosInstance.get<IBranchesResponse>('/branches/list', {
        params: { page },
      });
      console.log('%cgetBranches [지점 목록 조회] 응답', 'color: orange;', response);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.response);
        throw new Error('지점 목록을 가져오는 데 실패했습니다.');
      }
    }
  },
};

export interface IBranchesResponse {
  list: IBranchResponse[];
  pagination: {
    record_size: number;
    total_record: number;
  };
}

export interface IBranchResponse {
  id: number;
  code: string;
  name: string;
  representative_name: string;
  registration_number: string;
  call_number: string;
  address: string;
  corporate_seal: string;
  nameplate: string;
  mail_address: string;
  created_at: string;
  updated_at: string;
  deleted_yn: string;
}
