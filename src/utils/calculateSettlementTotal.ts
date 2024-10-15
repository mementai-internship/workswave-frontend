import { IEmployeeSalarySettlement } from '@/models/salarySettlement.model';

export const calculateTotalPay = (employee: IEmployeeSalarySettlement): number => {
  const {
    basePay,
    comprehensiveOvertimePay,
    annualLeavePay,
    holidayPay,
    jobAllowance,
    incentive,
    attendanceDeduction,
    previousMonthUnpaid,
    overtimePay,
    weekendWorkPay,
  } = employee;
  return (
    basePay +
    comprehensiveOvertimePay +
    annualLeavePay +
    holidayPay +
    jobAllowance +
    incentive -
    attendanceDeduction +
    previousMonthUnpaid +
    overtimePay +
    weekendWorkPay
  );
};
