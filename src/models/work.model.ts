export interface IWorkData {
  id: number;
  branch: string;
  name: string;
  department: string;
  leaveDate: number;
  regularDaysOff: number;
  annualLeaveUsed: number;
  unpaidLeaveUsed: number;
  weekendWorkHours: number;
  weekendWorkPay: number;
  workDate: number;
  workFromHome: number;
  holidayWork: number;
  overtimeCount30min: number;
  overtimeCount60min: number;
  overtimeCount90min: number;
  totalOvertime: number;
  gender: number;
  days: number;
}
// 백엔드 data
export interface IAttendance {
  branch_name: string;
  name: string;
  gender: string;
  part_name: string;
  workdays: number;
  leavedays: number;
  regular_holiday: number;
  annual_leave: number;
  unpaid_use: number;
  work_from_home: number;
  weekend_work_hours: number;
  holiday_work: number;
  ot_30: number;
  ot_60: number;
  ot_90: number;
  ot_total: number;
}

export interface TWorkOption {
  id: number;
  name: string;
  action: () => void;
}

export interface ICommuteData {
  id: number;
  branch: string;
  name: string;
  gender: string;
  department: string;
  days: number;
  schedule: {
    [key: string]: {
      startTime: string;
      endTime: string;
      isHoliday: boolean;
    };
  };
}
export interface ICommuteDataWithPageNum extends ICommuteData {
  pageNum: number;
}
export interface IWorkStatistics {
  totalWorkers: number;
  overtimeWorkers: number;
  lateWorkers: number;
  holidayWorkers: number;
  dayOffWorkers: number;
  remoteWorkers: number;
}

// 파트 관리
export interface IPartTimeData {
  id: number;
  branch: string;
  name: string;
  department: string;
  workDate: string;
  hospitalWork: string;
  remoteWork: string;
  holidayWork: string;
  totalWorkHours: string;
  totalSalary: string;
  workDetails: string;
  gender: string;
}

export interface IPartTimeDataWithPageNum extends IPartTimeData {
  pageNum: number;
  userId: number;
}
// 파트 관리 상세

export interface IDetailPartTimeData {
  id: number;
  userId: number;
  name: string;
  date: string;
  department: string;
  workSection: string;
  startTime: string;
  endTime: string;
  settingTime: string;
  workHours: string;
  breakTime: string;
  finalAmount: string;
  registrationDate: string;
}
