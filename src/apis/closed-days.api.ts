import { isAxiosError } from 'axios';
import dayjs from 'dayjs';

import axiosInstance from '@/apis/axiosInstance';
import {
  IClosedDayDeleteRequest,
  IClosedDayRequest,
  IClosedDaysDeleteRequest,
  IClosedDaysRequest,
} from '@/models/closedDays.model';

export const closedDaysApi = {
  // getClosedDaysAllBranch: async () => {
  //   try {
  //     console.log('getClosedDaysAllBranch [전 지점 휴무일 조회]');
  //     const response = await axiosInstance.get('/branches/closed_days');

  //     console.log('%c getClosedDaysAllBranch [전 지점 휴무일 조회] 응답', 'color: orange;', response);
  //     return response.data;
  //   } catch (err) {
  //     if (isAxiosError(err)) {
  //       console.error('Error:', err.response?.data);
  //       throw new Error('전 지점 휴무일 조회에 실패 했습니다.');
  //     }
  //   }
  // },

  getClosedDays: async (branchId: number) => {
    try {
      console.log(`getClosedDays [지점 "${branchId}"] [휴무일 - 모든 날짜] 조회`);
      const response = await axiosInstance.get(`/branches/${branchId}/closed_days`);
      console.log('%c getClosedDays [지점] [휴무일 - 모든 날짜] 응답', 'color: orange;', response);

      return response.data;
    } catch (err) {
      if (isAxiosError(err)) {
        console.error('Error:', err.response?.data);
        throw new Error('지점 휴무일 조회에 실패 했습니다.');
      }
    }
  },

  getMonthlyClosedDays: async ({ branch_id, date }: IClosedDayRequest) => {
    try {
      const formattedDate = dayjs(date).format('YYYY-MM-DD');
      console.log(
        `getMonthlyClosedDays [지점 "${branch_id}"] [휴무일 - 월별 ${dayjs(date).format('MM')}월] get 요청`
      );
      const response = await axiosInstance.get(
        `/branches/${branch_id}/closed_days/branch_month/${formattedDate}`
      );
      console.log(
        `%c getMonthlyClosedDays [지점 "${branch_id}"] [휴무일 - 월별 ${dayjs(date).format('MM')}월] get 응답`,
        'color: orange;',
        response
      );

      return response.data;
    } catch (err) {
      if (isAxiosError(err)) {
        console.error('Error:', err.response?.data);
        throw new Error(`지점의 ${dayjs(date).format('MM')}월 휴무일 조회에 실패 했습니다.`);
      }
    }
  },

  // getDailyClosedDays: async (date: Date) => {
  //   try {
  //     console.log(`getDailyClosedDays [휴무일 - 특정 날짜 ${date}] get 요청`);
  //     const response = await axiosInstance.get(`/branches/closed_days/${date}`);
  //     console.log(`%cgetDailyClosedDays [휴무일 - 특정 날짜 ${date}] get 응답`, 'color: orange;', response);
  //     return response.data;
  //   } catch (err) {
  //     if (isAxiosError(err)) {
  //       console.error('Error:', err.response?.data);
  //       throw new Error(`${date}에 대한 휴무일 조회에 실패 했습니다.`);
  //     }
  //   }
  // },

  postOneClosedDay: async ({ branch_id, date, memo = '지점 휴무일' }: IClosedDayRequest) => {
    try {
      const formattedDate = dayjs(date).format('YYYY-MM-DD');

      console.log(
        `postOneClosedDay [지점 "${branch_id}"] [휴무일 "${formattedDate}" 등록] post 요청`
      );
      const response = await axiosInstance.post(`/branches/${branch_id}/closed_days`, {
        closed_day_date: formattedDate,
        memo,
      });
      console.log(
        `%c postOneClosedDay [지점 "${branch_id}"] [휴무일 "${formattedDate}" 등록] post 응답`,
        'color: lightblue;',
        response
      );

      return response.data;
    } catch (err) {
      if (isAxiosError(err)) {
        console.error('Error:', err.response?.data);
        throw new Error(`지점의 ${dayjs(date).format('YYYY-MM-DD')} 휴무일 등록에 실패 했습니다.`);
      }
    }
  },
  postClosedDays: async ({ branch_id, dates, memo = '지점 휴무일' }: IClosedDaysRequest) => {
    try {
      const requestBody = dates.map((date) => ({
        closed_day_date: dayjs(date).format('YYYY-MM-DD'),
        memo,
      }));

      console.log(`postClosedDays [지점 "${branch_id}"] [휴무일 다중 등록] post 요청`);
      const response = await axiosInstance.post(
        `/branches/${branch_id}/closed_days/arrays`,
        requestBody
      );
      console.log(
        `%c postClosedDays [지점 "${branch_id}"] [휴무일 다중 등록] post 응답`,
        'color: lightblue;',
        response
      );

      return response.data;
    } catch (err) {
      if (isAxiosError(err)) {
        console.error('Error:', err.response?.data);
        throw new Error(`지점의 휴무일 다중 등록에 실패 했습니다.`);
      }
    }
  },

  deleteOneClosedDay: async ({ branch_id, date, id }: IClosedDayDeleteRequest) => {
    try {
      const formattedDate = dayjs(date).format('YYYY-MM-DD');
      console.log(
        `deleteOneClosedDay [지점 "${branch_id}"] [휴무일 "${formattedDate}" 삭제] delete 요청`
      );
      const response = await axiosInstance.delete(`/branches/${branch_id}/closed_days/${id}`);
      console.log(
        `%c deleteOneClosedDay [지점 "${branch_id}"] [휴무일 "${formattedDate}" 삭제] delete 응답`,
        'color: pink;',
        response
      );

      return response.data;
    } catch (err) {
      if (isAxiosError(err)) {
        console.error('Error:', err.response?.data);
        throw new Error(`지점의 ${dayjs(date).format('YYYY-MM-DD')} 휴무일 삭제에 실패 했습니다.`);
      }
    }
  },

  deleteClosedDays: async ({ branch_id, idList }: IClosedDaysDeleteRequest) => {
    try {
      const reqIdList = idList.map((id) => Number(id));
      console.log(
        `deleteClosedDays [지점 "${branch_id}"] [휴무일 ${reqIdList} 다중 삭제] delete 요청`
      );
      const response = await axiosInstance.delete(
        `/branches/${branch_id}/closed_days/arrays/delete`,
        {
          data: reqIdList,
        }
      );
      console.log(
        `%c deleteClosedDays [지점 "${branch_id}"] [휴무일 다중 삭제] delete 응답`,
        'color: pink;',
        response
      );

      return response.data;
    } catch (err) {
      if (isAxiosError(err)) {
        console.error('Error:', err.response?.data);
        throw new Error(`지점의 휴무일 다중 삭제에 실패 했습니다.`);
      }
    }
  },
};
