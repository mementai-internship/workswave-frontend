// Mocks 폴더 만들기 좀 그래서 우선 constants에 넣었습니다.
import { ICommuteData, IPartTimeData } from '@/models/workManagement/work.model';

// 출퇴근 관리
export const commuteMockData: ICommuteData[] = [
  {
    id: 0,
    branch: '서울 강남점',
    name: '김영희',
    department: '의사',
    workDate: 1,
    leaveDate: 0,
    regularDaysOff: 1,
    annualLeaveUsed: 2,
    unpaidLeaveUsed: 0,
    workFromHome: 1,
    holidayWork: 0,
    weekendWorkHours: 0,
    weekendWorkPay: 0,
    overtimeCount30min: 3,
    overtimeCount60min: 1,
    overtimeCount90min: 0,
    totalOvertime: 5000,
    gender: 0,
    days: 4,
  },
  {
    id: 1,
    branch: '서울 강남점',
    name: '김철수',
    department: '의사',
    workDate: 1,
    leaveDate: 0,
    regularDaysOff: 1,
    annualLeaveUsed: 2,
    unpaidLeaveUsed: 0,
    workFromHome: 1,
    holidayWork: 0,
    weekendWorkHours: 0,
    weekendWorkPay: 0,
    overtimeCount30min: 3,
    overtimeCount60min: 1,
    overtimeCount90min: 0,
    totalOvertime: 5000,

    gender: 1,
    days: 4,
  },
  {
    id: 2,
    branch: '서울 강남점',
    name: '김경택',
    department: '의사',
    workDate: 1,
    leaveDate: 0,
    regularDaysOff: 1,
    annualLeaveUsed: 2,
    unpaidLeaveUsed: 0,
    workFromHome: 1,
    holidayWork: 0,
    weekendWorkHours: 0,
    weekendWorkPay: 0,
    overtimeCount30min: 3,
    overtimeCount60min: 1,
    overtimeCount90min: 0,
    totalOvertime: 5000,

    gender: 1,
    days: 4,
  },
  {
    id: 3,
    branch: '서울 강남점',
    name: '김진영',
    department: '의사',
    workDate: 1,
    leaveDate: 0,
    regularDaysOff: 1,
    annualLeaveUsed: 2,
    unpaidLeaveUsed: 0,
    workFromHome: 1,
    holidayWork: 0,
    weekendWorkHours: 0,
    weekendWorkPay: 0,
    overtimeCount30min: 3,
    overtimeCount60min: 1,
    overtimeCount90min: 0,
    totalOvertime: 5000,

    gender: 0,
    days: 4,
  },
];
// 파트타임
export const partTimeMockData: IPartTimeData[] = [
  {
    id: 0,
    branch: '서울 강남점',
    name: '김영희1',
    department: '의사',
    workDate: 1,
    workFromHome: 1,
    holidayWork: 0,
    overtimeCount30min: 3,
    overtimeCount60min: 1,
    overtimeCount90min: 0,
    totalOvertime: 5000,
    gender: 0,
    days: 4,
  },
  {
    id: 1,
    branch: '서울 강남점',
    name: '김영희2',
    department: '의사',
    workDate: 1,
    workFromHome: 1,
    holidayWork: 0,
    overtimeCount30min: 3,
    overtimeCount60min: 1,
    overtimeCount90min: 0,
    totalOvertime: 5000,
    gender: 0,
    days: 4,
  },
  {
    id: 2,
    branch: '서울 강남점',
    name: '김영희3',
    department: '의사',
    workDate: 1,
    workFromHome: 1,
    holidayWork: 0,
    overtimeCount30min: 3,
    overtimeCount60min: 1,
    overtimeCount90min: 0,
    totalOvertime: 5000,
    gender: 0,
    days: 4,
  },
];
