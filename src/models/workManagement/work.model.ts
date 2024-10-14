export interface IPartTimeData {
  id: number;
  branch: string;
  name: string;
  department: string;
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

export interface ICommuteData extends IPartTimeData {
  leaveDate: number;
  regularDaysOff: number;
  annualLeaveUsed: number;
  unpaidLeaveUsed: number;
  weekendWorkHours: number;
  weekendWorkPay: number;
}

export interface TWorkOption {
  id: number;
  value: string;
}
