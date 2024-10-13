export interface IEmployeeSalarySettlement {
  // Backend에 맞춰서 수정 필요
  name: string;
  department: string;
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
