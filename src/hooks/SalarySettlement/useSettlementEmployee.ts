import { MAX_SALARY } from '@/constants/salarySettlementPage';
import { IEmployeeSalarySettlement } from '@/models/salarySettlement.model';
import { calculateTotalPay } from '@/utils/calculateSettlementTotal';
import { useState } from 'react';

export const useEmployees = (initialData: IEmployeeSalarySettlement[]) => {
  const [employees, setEmployees] = useState(
    initialData.map((employee) => ({
      ...employee,
      incentive: employee.incentive || 0,
      previousMonthUnpaid: employee.previousMonthUnpaid || 0,
      totalPay: calculateTotalPay({
        ...employee,
        incentive: employee.incentive || 0,
        previousMonthUnpaid: employee.previousMonthUnpaid || 0,
      }),
      isSelected: false,
    }))
  );

  const handleAllowance = (
    index: number,
    field: 'incentive' | 'previousMonthUnpaid',
    value: string
  ) => {
    const numericValue = value === '' ? 0 : parseInt(value) || 0;

    if (numericValue > MAX_SALARY) {
      return;
    }

    const updatedEmployees = employees.map((employee, i) => {
      if (i === index) {
        const updatedEmployee = {
          ...employee,
          [field]: numericValue,
        };
        return {
          ...updatedEmployee,
          totalPay: calculateTotalPay(updatedEmployee),
        };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  };

  const handleCheckbox = (index: number) => {
    setEmployees(
      employees.map((emp, i) => (i === index ? { ...emp, isSelected: !emp.isSelected } : emp))
    );
  };

  const handleAllCheckbox = () => {
    const allSelected = employees.every((emp) => emp.isSelected);
    setEmployees(employees.map((emp) => ({ ...emp, isSelected: !allSelected })));
  };

  return { employees, handleAllowance, handleCheckbox, handleAllCheckbox };
};
