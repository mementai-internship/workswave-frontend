import { IEmployeeSalarySettlement } from '@/models/salarySettlement.model';
import { useMemo } from 'react';

export function useFilteredEmployees(
  employees: IEmployeeSalarySettlement[],
  selectedRegion: string,
  selectedPart: string,
  selectedJob: string
) {
  return useMemo(() => {
    return employees.filter((employee) => {
      const regionMatch = selectedRegion ? employee.region === selectedRegion : true;
      const partMatch = selectedPart ? employee.department === selectedPart : true;
      const jobMatch = selectedJob ? employee.job === selectedJob : true;
      return regionMatch && partMatch && jobMatch;
    });
  }, [employees, selectedRegion, selectedPart, selectedJob]);
}
