// Mocks 폴더 만들기 좀 그래서 우선 constants에 넣었습니다.
import { ICommuteData, IWorkData } from '@/models/work.model';

// 근로 관리
export const workMockData: IWorkData[] = [
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

// 출퇴근 관리
export const commuteMockData: ICommuteData[] = [
  {
    id: 100,
    branch: '유즈의원(강남점)',
    name: '강동휘',
    gender: 1,
    position: '코디네이터 ',
    days: 5,
    schedule: {
      '1': { startTime: '10:24', endTime: '21:08' },
      '2': { startTime: '10:39', endTime: '21:00' },
      '3': { startTime: '휴무', endTime: '10:15' },
      '4': { startTime: '20:30', endTime: '10:38' },
      '5': { startTime: '17:00', endTime: '휴무' },
      '6': { startTime: '휴무', endTime: '휴무' },
      '7': { startTime: '20:30', endTime: '10:38' },
      '8': { startTime: '17:00', endTime: '휴무' },
      '9': { startTime: '휴무', endTime: '휴무' },
    },
  },
  {
    id: 97,
    branch: '유즈의원(강남점)',
    name: '김예지',
    gender: 0,
    position: '간호조무사 ',
    days: 5,
    schedule: {
      '1': { startTime: '09:47', endTime: '20:30' },

      '4': { startTime: '휴무', endTime: '휴무' },
      '5': { startTime: '10:01', endTime: '16:30' },
      '6': { startTime: '휴무', endTime: '휴무' },
      '7': { startTime: '20:30', endTime: '10:38' },
      '8': { startTime: '17:00', endTime: '휴무' },
      '9': { startTime: '휴무', endTime: '휴무' },
    },
  },
  {
    id: 101,
    branch: '유즈의원(강남점)',
    name: '강동휘',
    gender: 1,
    position: '코디네이터 ',
    days: 5,
    schedule: {
      '1': { startTime: '10:24', endTime: '21:08' },
      '2': { startTime: '10:39', endTime: '21:00' },
      '3': { startTime: '휴무', endTime: '10:15' },
      '4': { startTime: '20:30', endTime: '10:38' },
      '5': { startTime: '17:00', endTime: '휴무' },
      '6': { startTime: '휴무', endTime: '휴무' },
      '7': { startTime: '20:30', endTime: '10:38' },
      '8': { startTime: '17:00', endTime: '휴무' },
      '9': { startTime: '휴무', endTime: '휴무' },
    },
  },
  {
    id: 102,
    branch: '유즈의원(강남점)',
    name: '강동휘',
    gender: 1,
    position: '코디네이터 ',
    days: 5,
    schedule: {
      '1': { startTime: '10:24', endTime: '21:08' },
      '2': { startTime: '10:39', endTime: '21:00' },
      '3': { startTime: '휴무', endTime: '10:15' },
      '4': { startTime: '20:30', endTime: '10:38' },
      '5': { startTime: '17:00', endTime: '휴무' },
      '6': { startTime: '휴무', endTime: '휴무' },
      '7': { startTime: '20:30', endTime: '10:38' },
      '8': { startTime: '17:00', endTime: '휴무' },
      '9': { startTime: '휴무', endTime: '휴무' },
    },
  },
  {
    id: 103,
    branch: '유즈의원(강남점)',
    name: '강동휘',
    gender: 1,
    position: '코디네이터 ',
    days: 5,
    schedule: {
      '1': { startTime: '10:24', endTime: '21:08' },
      '2': { startTime: '10:39', endTime: '21:00' },
      '3': { startTime: '휴무', endTime: '10:15' },
      '4': { startTime: '20:30', endTime: '10:38' },
      '5': { startTime: '17:00', endTime: '휴무' },
      '6': { startTime: '휴무', endTime: '휴무' },
      '7': { startTime: '20:30', endTime: '10:38' },
      '8': { startTime: '17:00', endTime: '휴무' },
      '9': { startTime: '휴무', endTime: '휴무' },
    },
  },
  {
    id: 104,
    branch: '유즈의원(강남점)',
    name: '강동휘',
    gender: 1,
    position: '코디네이터 ',
    days: 5,
    schedule: {
      '1': { startTime: '10:24', endTime: '21:08' },
      '2': { startTime: '10:39', endTime: '21:00' },
      '3': { startTime: '휴무', endTime: '10:15' },
      '4': { startTime: '20:30', endTime: '10:38' },
      '5': { startTime: '17:00', endTime: '휴무' },
      '6': { startTime: '휴무', endTime: '휴무' },
      '7': { startTime: '20:30', endTime: '10:38' },
      '8': { startTime: '17:00', endTime: '휴무' },
      '9': { startTime: '휴무', endTime: '휴무' },
    },
  },
  {
    id: 105,
    branch: '유즈의원(강남점)',
    name: '강동휘',
    gender: 1,
    position: '코디네이터 ',
    days: 5,
    schedule: {
      '1': { startTime: '10:24', endTime: '21:08' },
      '2': { startTime: '10:39', endTime: '21:00' },
      '3': { startTime: '휴무', endTime: '10:15' },
      '4': { startTime: '20:30', endTime: '10:38' },
      '5': { startTime: '17:00', endTime: '휴무' },
      '6': { startTime: '휴무', endTime: '휴무' },
      '7': { startTime: '20:30', endTime: '10:38' },
      '8': { startTime: '17:00', endTime: '휴무' },
      '9': { startTime: '휴무', endTime: '휴무' },
    },
  },
  {
    id: 106,
    branch: '유즈의원(강남점)',
    name: '강동휘',
    gender: 1,
    position: '코디네이터 ',
    days: 5,
    schedule: {
      '1': { startTime: '10:24', endTime: '21:08' },
      '2': { startTime: '10:39', endTime: '21:00' },
      '3': { startTime: '휴무', endTime: '10:15' },
      '4': { startTime: '20:30', endTime: '10:38' },
      '5': { startTime: '17:00', endTime: '휴무' },
      '6': { startTime: '휴무', endTime: '휴무' },
      '7': { startTime: '20:30', endTime: '10:38' },
      '8': { startTime: '17:00', endTime: '휴무' },
      '9': { startTime: '휴무', endTime: '휴무' },
    },
  },
  {
    id: 107,
    branch: '유즈의원(강남점)',
    name: '강동휘',
    gender: 1,
    position: '코디네이터 ',
    days: 5,
    schedule: {
      '1': { startTime: '10:24', endTime: '21:08' },
      '2': { startTime: '10:39', endTime: '21:00' },
      '3': { startTime: '휴무', endTime: '10:15' },
      '4': { startTime: '20:30', endTime: '10:38' },
      '5': { startTime: '17:00', endTime: '휴무' },
      '6': { startTime: '휴무', endTime: '휴무' },
      '7': { startTime: '20:30', endTime: '10:38' },
      '8': { startTime: '17:00', endTime: '휴무' },
      '9': { startTime: '휴무', endTime: '휴무' },
    },
  },
  {
    id: 108,
    branch: '유즈의원(강남점)',
    name: '강동휘',
    gender: 1,
    position: '코디네이터 ',
    days: 5,
    schedule: {
      '1': { startTime: '10:24', endTime: '21:08' },
      '2': { startTime: '10:39', endTime: '21:00' },
      '3': { startTime: '휴무', endTime: '10:15' },
      '4': { startTime: '20:30', endTime: '10:38' },
      '5': { startTime: '17:00', endTime: '휴무' },
      '6': { startTime: '휴무', endTime: '휴무' },
      '7': { startTime: '20:30', endTime: '10:38' },
      '8': { startTime: '17:00', endTime: '휴무' },
      '9': { startTime: '휴무', endTime: '휴무' },
    },
  },
  {
    id: 109,
    branch: '유즈의원(강남점)',
    name: '강동휘',
    gender: 1,
    position: '코디네이터 ',
    days: 5,
    schedule: {
      '1': { startTime: '10:24', endTime: '21:08' },
      '2': { startTime: '10:39', endTime: '21:00' },
      '3': { startTime: '휴무', endTime: '10:15' },
      '4': { startTime: '20:30', endTime: '10:38' },
      '5': { startTime: '17:00', endTime: '휴무' },
      '6': { startTime: '휴무', endTime: '휴무' },
      '7': { startTime: '20:30', endTime: '10:38' },
      '8': { startTime: '17:00', endTime: '휴무' },
      '9': { startTime: '휴무', endTime: '휴무' },
    },
  },
  {
    id: 110,
    branch: '유즈의원(강남점)',
    name: '강동휘',
    gender: 1,
    position: '코디네이터 ',
    days: 5,
    schedule: {
      '1': { startTime: '10:24', endTime: '21:08' },
      '2': { startTime: '10:39', endTime: '21:00' },
      '3': { startTime: '휴무', endTime: '10:15' },
      '4': { startTime: '20:30', endTime: '10:38' },
      '5': { startTime: '17:00', endTime: '휴무' },
      '6': { startTime: '휴무', endTime: '휴무' },
      '7': { startTime: '20:30', endTime: '10:38' },
      '8': { startTime: '17:00', endTime: '휴무' },
      '9': { startTime: '휴무', endTime: '휴무' },
    },
  },
  {
    id: 111,
    branch: '유즈의원(강남점)',
    name: '강동휘',
    gender: 1,
    position: '코디네이터 ',
    days: 5,
    schedule: {
      '1': { startTime: '10:24', endTime: '21:08' },
      '2': { startTime: '10:39', endTime: '21:00' },
      '3': { startTime: '휴무', endTime: '10:15' },
      '4': { startTime: '20:30', endTime: '10:38' },
      '5': { startTime: '17:00', endTime: '휴무' },
      '6': { startTime: '휴무', endTime: '휴무' },
      '7': { startTime: '20:30', endTime: '10:38' },
      '8': { startTime: '17:00', endTime: '휴무' },
      '9': { startTime: '휴무', endTime: '휴무' },
    },
  },
  {
    id: 95,
    branch: '유즈의원(강남점)',
    name: '고혜솔',
    gender: 0,
    position: '간호조무사 ',
    days: 5,
    schedule: {
      '1': { startTime: '10:36', endTime: '21:00' },
      '2': { startTime: '휴무', endTime: '휴무' },
      '3': { startTime: '10:35', endTime: '21:00' },
      '4': { startTime: '10:32', endTime: '21:00' },
      '5': { startTime: '10:28', endTime: '17:00' },
      '6': { startTime: '휴무', endTime: '휴무' },
      '7': { startTime: '20:30', endTime: '10:38' },
      '8': { startTime: '17:00', endTime: '휴무' },
      '9': { startTime: '휴무', endTime: '휴무' },
    },
  },
  {
    id: 94,
    branch: '유즈의원(강남점)',
    name: '권세인',
    gender: 1,
    position: '피부관리사 ',
    days: 5,
    schedule: {
      '1': { startTime: '10:37', endTime: '21:02' },
      '2': { startTime: '10:43', endTime: '21:01' },
      '3': { startTime: '10:37', endTime: '21:01' },
      '4': { startTime: '휴무', endTime: '휴무' },
      '5': { startTime: '10:35', endTime: '17:00' },
      '6': { startTime: '휴무', endTime: '휴무' },
      '7': { startTime: '20:30', endTime: '10:38' },
      '8': { startTime: '17:00', endTime: '휴무' },
      '9': { startTime: '휴무', endTime: '휴무' },
    },
  },
  {
    id: 90,
    branch: '유즈의원(강남점)',
    name: '김가은',
    gender: 1,
    position: '피부관리사 ',
    days: 5,
    schedule: {
      '1': { startTime: '10:38', endTime: '21:07' },
      '2': { startTime: '10:38', endTime: '21:02' },
      '3': { startTime: '10:39', endTime: '21:00' },
      '4': { startTime: '10:35', endTime: '21:00' },
      '5': { startTime: '10:39', endTime: '17:00' },
      '6': { startTime: '휴무', endTime: '휴무' },
      '7': { startTime: '20:30', endTime: '10:38' },
      '8': { startTime: '17:00', endTime: '휴무' },
      '9': { startTime: '휴무', endTime: '휴무' },
    },
  },
  {
    id: 87,
    branch: '유즈의원(강남점)',
    name: '김문정',
    gender: 1,
    position: '피부관리사 ',
    days: 5,
    schedule: {
      '1': { startTime: '10:17', endTime: '21:02' },
      '2': { startTime: '10:04', endTime: '21:03' },
      '3': { startTime: '10:06', endTime: '21:02' },
      '4': { startTime: '09:57', endTime: '휴무' },
      '5': { startTime: '09:49', endTime: '16:34' },
      '6': { startTime: '휴무', endTime: '휴무' },
      '7': { startTime: '20:30', endTime: '10:38' },
      '8': { startTime: '17:00', endTime: '휴무' },
      '9': { startTime: '휴무', endTime: '휴무' },
    },
  },
];