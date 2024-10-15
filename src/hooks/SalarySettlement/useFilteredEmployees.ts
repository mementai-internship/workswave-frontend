import { IEmployeeSalarySettlement } from '@/models/salarySettlement.model';
import { useMemo } from 'react';

export const useFilteredEmployees = (
  employees: IEmployeeSalarySettlement[],
  selectedRegion: string,
  selectedPart: string,
  selectedJob: string
) => {
  return useMemo(() => {
    return employees.filter(
      (employee) =>
        (!selectedRegion || employee.region === selectedRegion) &&
        (!selectedPart || employee.department === selectedPart) &&
        (!selectedJob || employee.job === selectedJob)
    );
  }, [employees, selectedRegion, selectedPart, selectedJob]);
};
