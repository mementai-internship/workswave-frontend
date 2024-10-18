export interface ITax {
  national_pension: number;
  health_insurance: number;
  long_term_care_insurance: number;
  employment_insurance: number;
  local_income_tax_rate: number;
}

export interface ICalculatedSalaryOutput {
  annualSalary: number;
  salary: number;
  salaryWithoutMealAllowance: number;
  mealAllowance: number;
  netPay: number;
  totalDeductions: number;
  nationalPension: number;
  healthInsurance: number;
  employmentInsurance: number;
  longTermCareInsurance: number;
  incomeTax: number;
  localIncomeTax: number;
}
export interface ICalculatedSalaryForm {
  salaryInput: string;
}

export interface ICalculatedSalary {
  salaryWithMealAllowance: ICalculatedSalaryOutput;
  salaryWithoutMealAllowance: ICalculatedSalaryOutput;
  salaryDetails: {
    annualSalary: number;
    netPayWithMealAllowance: number;
    netPayWithoutMealAllowance: number;
  };
}
