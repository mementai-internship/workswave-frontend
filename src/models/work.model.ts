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
  value: string;
}

export interface ICommuteData {
  id: number;
  branch: string;
  name: string;
  position: string;
  schedule: {
    [key: string]: {
      startTime: string;
      endTime: string;
    };
  };
}
