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

export interface TWorkOption {
  id: number;
  name: string;
  action: () => void;
}

export interface ICommuteData {
  id: number;
  branch: string;
  name: string;
  gender: number;
  position: string;
  days: number;
  isDayOff: boolean;
  schedule: {
    [key: string]: {
      startTime: string;
      endTime: string;
      isDayOff: boolean;
    };
  };
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
  workPart: string;
  workDate: string;
  hospitalWork: string;
  remoteWork: string;
  holidayWork: string;
  totalWorkHours: string;
  totalSalary: string;
  workDetails: string;
  gender: number;
}

// 파트 관리 상세

export interface IDetailPartTimeData {
  id: number;
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
