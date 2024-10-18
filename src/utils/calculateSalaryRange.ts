import { ICalculatedSalary, ICalculatedSalaryOutput, ITax } from '@/models/salary-range.model';

export interface ICalculatedBasedSalary {
  salary: number;
  mealAllowance: number;
  tax: ITax;
}

export interface ICalculatedBasedAnnualSalary {
  annualSalary: number;
  mealAllowance: number;
  tax: ITax;
}

export interface ICalculatedSalaryProps {
  salary: number;
  annualSalary: number;
  mealAllowance: number;
  tax: ITax;
}
// 연봉을 바탕으로 급여계산데이터를 만드는 함수
export const calculateSalaryDataByAnnualSalary = (data: ICalculatedBasedAnnualSalary) => {
  const salary = Math.round(data.annualSalary / 12);
  return calculateSalaryData({ salary, ...data });
};

// 월급을 바탕으로 급여계산데이터 만드는 함수
export const calculateSalaryDataBySalary = (data: ICalculatedBasedSalary) => {
  const annualSalary = Math.round((data.salary * 12) / 1000000) * 1000000;
  return calculateSalaryData({ annualSalary, ...data });
};

// 연봉별 급여 산출물 계산하는 함수
const calculateSalaryData = ({
  salary,
  annualSalary,
  mealAllowance,
  tax,
}: ICalculatedSalaryProps): ICalculatedSalaryOutput => {
  const salaryWithoutMealAllowance = salary - mealAllowance;
  const adjustedValue = (value: number) => Math.floor(value / 100 / 10) * 10;

  const nationalPension = adjustedValue(salaryWithoutMealAllowance * tax.national_pension);
  const healthInsurance = adjustedValue(salaryWithoutMealAllowance * tax.health_insurance);
  const longTermCareInsurance = adjustedValue(healthInsurance * tax.long_term_care_insurance);
  const employmentInsurance =
    Math.round((salaryWithoutMealAllowance * tax.employment_insurance) / 100 / 50) * 50;

  // 소득세 계산 - 연봉 x 세율 - 누진공제액
  const incomeTax = 0;
  const localIncomeTax = adjustedValue(incomeTax * tax.local_income_tax_rate);

  const totalDeductions =
    nationalPension +
    healthInsurance +
    employmentInsurance +
    longTermCareInsurance +
    incomeTax +
    localIncomeTax;

  const netPay = Math.floor(salary - totalDeductions);

  return {
    annualSalary,
    salary,
    salaryWithoutMealAllowance,
    mealAllowance,
    netPay,
    totalDeductions,
    nationalPension,
    healthInsurance,
    employmentInsurance,
    longTermCareInsurance,
    incomeTax,
    localIncomeTax,
  };
};

export const calculateSalaryResult = (salary: number, tax: ITax): ICalculatedSalary => {
  if (salary < 0) return;
  const salaryWithMealAllowance = calculateSalaryDataBySalary({
    salary,
    mealAllowance: 200000,
    tax,
  });
  const salaryWithoutMealAllowance = calculateSalaryDataBySalary({ salary, mealAllowance: 0, tax });

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
