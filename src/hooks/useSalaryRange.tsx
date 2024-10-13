import { ICalculatedSalary, IInputSalary } from '@/models/salaryRange.model';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const useSalaryRange = () => {
  const calculateSalaries = (salary: number) => {
    if (salary < 0) return;
    const salaryWithMealAllowance = generateSalaryData(salary, 200000);
    const salaryWithoutMealAllowance = generateSalaryData(salary, 0);

    return {
      salaryWithMealAllowance,
      salaryWithoutMealAllowance,
      salaryDetails: {
        annualSalary: salaryWithMealAllowance.annualSalary,
        netPayWithMealAllowance: salaryWithMealAllowance.netPay,
        netPayWithoutMealAllowance: salaryWithoutMealAllowance.netPay,
      },
    };
  };

  const [calculatedSalary, setCalculatedSalary] = useState<ICalculatedSalary>(
    calculateSalaries(412848000)
  );
  const { register, handleSubmit } = useForm<IInputSalary>();
  const onSubmit = ({ inputSalary }: IInputSalary) => {
    setCalculatedSalary(calculateSalaries(inputSalary));
  };

  const DUMMY_DATA_SALARY_RANGE_WITH_MEAL_ALLOWANCE = [];
  const DUMMY_DATA_SALARY_RANGE_WITHOUT_MEAL_ALLOWANCE = [];

  for (let i = 10000000; i <= 30000000; i += 1000000) {
    DUMMY_DATA_SALARY_RANGE_WITH_MEAL_ALLOWANCE.push(generateSalaryData(i, 200000));
    DUMMY_DATA_SALARY_RANGE_WITHOUT_MEAL_ALLOWANCE.push(generateSalaryData(i, 0));
  }
  return {
    calculatedSalary,
    onSubmit,
    register,
    handleSubmit,
    calculateSalaries,
    DUMMY_DATA_SALARY_RANGE_WITH_MEAL_ALLOWANCE,
    DUMMY_DATA_SALARY_RANGE_WITHOUT_MEAL_ALLOWANCE,
  };
};

// 급여 계산표 계산
const generateSalaryData = (annualSalary, mealAllowance) => {
  const adjustedValue = (value) => Math.floor(value / 10) * 10;

  const monthlySalary = Math.round(annualSalary / 12);
  const salary = monthlySalary - mealAllowance;

  const pensionInsurance = adjustedValue(
    (salary * DUMMY_DATA_BASE_CALCULATION_DATA.pensionInsuranceRate) / 100
  );
  const healthInsurance = adjustedValue(
    (salary * DUMMY_DATA_BASE_CALCULATION_DATA.healthInsuranceRate) / 100
  );
  const longTermCareInsurance = adjustedValue(
    (healthInsurance * DUMMY_DATA_BASE_CALCULATION_DATA.longTermCareRate) / 100
  );

  // 고용보험은 10단위를 기준으로 50,100으로 반올림
  const employmentInsurance =
    Math.round((salary * DUMMY_DATA_BASE_CALCULATION_DATA.employmentInsuranceRate) / 100 / 50) * 50;

  // 소득세 및 지방소득세 계산
  const incomeTax = adjustedValue((salary * DUMMY_FUNCTION_INCOME_TAX_RATE(annualSalary)) / 100);
  const localIncomeTax = adjustedValue(
    (incomeTax * DUMMY_DATA_BASE_CALCULATION_DATA.localIncomeTaxRate) / 100
  );

  // 공제액 계산
  const totalDeductions =
    pensionInsurance +
    healthInsurance +
    employmentInsurance +
    longTermCareInsurance +
    incomeTax +
    localIncomeTax;

  const netPay = Math.floor(monthlySalary - totalDeductions + mealAllowance); // 실수령액

  return {
    annualSalary,
    totalMonthlySalary: monthlySalary,
    salary: monthlySalary - mealAllowance,
    mealAllowance,
    netPay,
    totalDeductions,
    pensionInsurance,
    healthInsurance,
    employmentInsurance,
    longTermCareInsurance,
    incomeTax,
    localIncomeTax,
  };
};

// 삭제할 데이터들
const DUMMY_FUNCTION_INCOME_TAX_RATE = (income: number) => {
  if (income <= 14000000) {
    return 0;
  } else if (income <= 50000000) {
    return 15;
  } else if (income <= 88000000) {
    return 24;
  } else if (income <= 150000000) {
    return 35;
  } else if (income <= 300000000) {
    return 38;
  } else if (income <= 500000000) {
    return 40;
  } else if (income <= 1000000000) {
    return 42;
  } else {
    return 45;
  }
};

const DUMMY_DATA_BASE_CALCULATION_DATA = {
  minimumWage: 9860,
  minimumWagePerMonth: 2060740,
  healthInsuranceRate: 3.545,
  pensionInsuranceRate: 4.5,
  employmentInsuranceRate: 0.9,
  longTermCareRate: 12.95,
  localIncomeTaxRate: 10,
};
