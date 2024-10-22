import { useMemo } from 'react';

import { IEmployeeSalarySettlement } from '@/models/salarySettlement.model';

export const useFilteredEmployees = (
  employees: IEmployeeSalarySettlement[],
  selectedRegion: string,
  selectedJob: string
) => {
  return useMemo(() => {
    return employees.filter(
      (employee) =>
        (!selectedRegion || employee.region === selectedRegion) &&
        (!selectedJob || employee.job === selectedJob)
    );
  }, [employees, selectedRegion, selectedJob]);
};
