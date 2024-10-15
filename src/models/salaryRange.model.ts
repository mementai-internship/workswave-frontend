export interface ISalaryCalcStandardsResponse {
  id: number;
  year: number;
  minimum_hourly_rate: number;
  minimum_monthly_rate: number;
  national_pension: number;
  health_insurance: number;
  employment_insurance: number;
  long_term_care_insurance: number;
  minimum_pension_income: number;
  maximum_pension_income: number;
  maximum_national_pension: number;
  minimum_health_insurance: number;
  maximum_health_insurance: number;
  local_income_tax_rate: number;
  tax_brackets: ITaxBracket[];
}

export interface ITaxBracket {
  id: number;
  salary_bracket_id: number;
  lower_limit: number;
  upper_limit: number;
  tax_rate: number;
  deduction: number;
}

export interface ISalaryRangeValue {
  annualSalary: number;
  totalMonthlySalary: number;
  salary: number;
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

export interface ICalculatedSalary {
  salaryWithMealAllowance: ISalaryRangeValue;
  salaryWithoutMealAllowance: ISalaryRangeValue;
  salaryDetails: {
    annualSalary: number;
    netPayWithMealAllowance: number;
    netPayWithoutMealAllowance: number;
  };
}

export interface IInputSalary {
  inputSalary: number;
}
