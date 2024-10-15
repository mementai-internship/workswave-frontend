import { IEmployeeSalarySettlement } from '@/models/salarySettlement.model';
import { useMemo } from 'react';

export const useSalarySummary = (filteredEmployees: IEmployeeSalarySettlement[]) => {
  return useMemo(() => {
    const selectedEmployees = filteredEmployees.filter((emp) => emp.isSelected);
    const employeesToSum = selectedEmployees.length > 0 ? selectedEmployees : filteredEmployees;

    const totalEmployees = employeesToSum.length;
    const totalSalary = employeesToSum.reduce((sum, emp) => sum + emp.salary, 0);
    const totalPay = employeesToSum.reduce((sum, emp) => sum + (emp.totalPay || 0), 0);
    const totalPreviousMonthUnpaid = employeesToSum.reduce(
      (sum, emp) => sum + emp.previousMonthUnpaid,
      0
    );
    const totalOvertimePay = employeesToSum.reduce((sum, emp) => sum + emp.overtimePay, 0);
    const totalWeekendWorkPay = employeesToSum.reduce((sum, emp) => sum + emp.weekendWorkPay, 0);

    return {
      totalEmployees,
      totalSalary,
      totalPay,
      totalPreviousMonthUnpaid,
      totalOvertimePay,
      totalWeekendWorkPay,
    };
  }, [filteredEmployees]);
};
