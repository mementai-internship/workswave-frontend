export interface ISalaryBracketResponse {
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
