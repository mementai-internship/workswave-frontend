export interface IEmployeeSalarySettlement {
  // Backend에 맞춰서 수정 필요
  name: string;
  region: string;
  department: string;
  isSelected: boolean;
  job: '의사' | '간호사' | '기타';
  hireDate: string;
  resignDate?: string;
  salary: number;
  basePay: number;
  comprehensiveOvertimePay: number;
  annualLeavePay: number;
  holidayPay: number;
  jobAllowance: number;
  incentive: number;
  attendanceDeduction: number;
  previousMonthUnpaid: number;
  overtimePay: number;
  weekendWorkPay: number;
  totalPay?: number;
}
