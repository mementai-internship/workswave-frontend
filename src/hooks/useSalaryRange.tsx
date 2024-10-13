import { ICalculatedSalary, IInputSalary } from '@/models/salaryRange.model';
import {
  calculateSalaryDataByAnnualSalary,
  calculateSalaryResult,
} from '@/utils/calculatedSalaryRange';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const useSalaryRange = () => {
  const [calculatedSalary, setCalculatedSalary] = useState<ICalculatedSalary>(
    calculateSalaryResult(833333)
  );
  const { register, handleSubmit, setValue, watch } = useForm<IInputSalary>();
  const onSubmit = ({ inputSalary }: IInputSalary) => {
    if (inputSalary < 0) return;
    setCalculatedSalary(calculateSalaryResult(inputSalary));
  };

  // 더미 데이터 (삭제예정)
  const DUMMY_DATA_SALARY_RANGE_WITH_MEAL_ALLOWANCE = [];
  const DUMMY_DATA_SALARY_RANGE_WITHOUT_MEAL_ALLOWANCE = [];

  for (let i = 10000000; i <= 30000000; i += 1000000) {
    DUMMY_DATA_SALARY_RANGE_WITH_MEAL_ALLOWANCE.push(calculateSalaryDataByAnnualSalary(i, 200000));
    DUMMY_DATA_SALARY_RANGE_WITHOUT_MEAL_ALLOWANCE.push(calculateSalaryDataByAnnualSalary(i, 0));
  }
  return {
    calculatedSalary,
    onSubmit,
    register,
    handleSubmit,
    watch,
    setValue,
    DUMMY_DATA_SALARY_RANGE_WITH_MEAL_ALLOWANCE,
    DUMMY_DATA_SALARY_RANGE_WITHOUT_MEAL_ALLOWANCE,
  };
};
