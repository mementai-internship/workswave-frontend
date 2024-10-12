export interface ILaborData {
  id: number;
  branch: string;
  name: string;
  department: string;
  workDate: number;
  leaveDate: number;
  regularDaysOff: number;
  annualLeaveUsed: number;
  unpaidLeaveUsed: number;
  workFromHome: number;
  holidayWork: number;
  weekendWorkHours: number;
  weekendWorkPay: number;
  overtimeCount30min: number;
  overtimeCount60min: number;
  overtimeCount90min: number;
  gender: number;
  days: number;
}

export interface TWorkOption {
  id: number;
  value: string;
}
