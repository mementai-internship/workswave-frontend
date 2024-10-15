import { MAX_SALARY } from '@/constants/salarySettlement';
import { IEmployeeSalarySettlement } from '@/models/salarySettlement.model';
import { calculateTotalPay } from '@/utils/calculateSettlementTotal';
import { useCallback, useMemo, useState } from 'react';

export const useEmployees = (initialEmployees: IEmployeeSalarySettlement[]) => {
  const [employees, setEmployees] = useState<IEmployeeSalarySettlement[]>(
    initialEmployees.map((employee) => ({
      ...employee,
      isSelected: false,
      totalPay: calculateTotalPay(employee),
    }))
  );

  const handleAllowance = useCallback((id: string, field: string, value: string) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) => {
        if (employee.id === id) {
          const verifyValue = value === '' ? 0 : Math.min(parseInt(value, 10), MAX_SALARY);
          const updatedEmployee = {
            ...employee,
            [field]: verifyValue,
          };
          updatedEmployee.totalPay = calculateTotalPay(updatedEmployee);
          return updatedEmployee;
        }
        return employee;
      })
    );
  }, []);

  const employeesWithTotalPay = useMemo(() => {
    return employees.map((employee) => ({
      ...employee,
      totalPay: calculateTotalPay(employee),
    }));
  }, [employees]);

  const handleCheckbox = useCallback((id: string) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === id ? { ...employee, isSelected: !employee.isSelected } : employee
      )
    );
  }, []);

  const handleAllCheckbox = () => {
    const allSelected = employees.every((emp) => emp.isSelected);
    setEmployees(employees.map((emp) => ({ ...emp, isSelected: !allSelected })));
  };

  const resetEmployees = useCallback(() => {
    setEmployees(
      initialEmployees.map((emp) => ({
        ...emp,
        isSelected: false,
        incentive: 0,
        previousMonthUnpaid: 0,
      }))
    );
  }, [initialEmployees]);

  return {
    employees: employeesWithTotalPay,
    handleAllowance,
    handleCheckbox,
    handleAllCheckbox,
    resetEmployees,
  };
};
