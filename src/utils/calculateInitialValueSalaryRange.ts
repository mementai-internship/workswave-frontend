import { MAXIMUM_SALARY, MINIMUM_SALARY } from '@/constants/salaryRange';
import { ITax, calculateSalaryDataByAnnualSalary } from '@/utils/calculateSalaryRange';

export const calculateInitialValueSalaryRange = (tax: ITax) => {
  const calculatedSalaryWithMealAllowance = [];
  const calculatedSalaryWithoutMealAllowance = [];
  for (let annualSalary = MINIMUM_SALARY; annualSalary <= MAXIMUM_SALARY; annualSalary += 1000000) {
    calculatedSalaryWithMealAllowance.push(
      calculateSalaryDataByAnnualSalary({ annualSalary, mealAllowance: 200000, tax })
    );
    calculatedSalaryWithoutMealAllowance.push(
      calculateSalaryDataByAnnualSalary({ annualSalary, mealAllowance: 0, tax })
    );
  }
  return { calculatedSalaryWithMealAllowance, calculatedSalaryWithoutMealAllowance };
};
