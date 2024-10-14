// backend에서 받아올 데이터 (변경 예정)
export interface IBaseCalculationData {
  minimumWage: number;
  minimumWagePerMonth: number;
  healthInsuranceRate: number;
  pensionInsuranceRate: number;
  employmentInsuranceRate: number;
  longTermCareRate: number;
  localIncomeTaxRate: number;
}

export interface ISalaryRangeValue {
  annualSalary: number;
  totalMonthlySalary: number;
  salary: number;
  mealAllowance: number;
  netPay: number;
  totalDeductions: number;
  pensionInsurance: number;
  healthInsurance: number;
  employmentInsurance: number;
  longTermCareInsurance: number;
  incomeTax: number;
  localIncomeTax: number;
}

export interface ICalculatedSalary {
  salaryWithMealAllowance;
  salaryWithoutMealAllowance;
  salaryDetails: {
    annualSalary: number;
    netPayWithMealAllowance: number;
    netPayWithoutMealAllowance: number;
  };
}

export interface IInputSalary {
  inputSalary: number;
}
