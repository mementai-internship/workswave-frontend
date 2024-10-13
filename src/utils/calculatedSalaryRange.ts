export const calculateSalaryResult = (salary: number) => {
  if (salary < 0) return;
  const salaryWithMealAllowance = calculateSalaryData(salary, 200000);
  const salaryWithoutMealAllowance = calculateSalaryData(salary, 0);

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

// 연봉을 바탕으로 급여계산데이터를 만드는 함수
export const calculateSalaryData = (annualSalary: number, mealAllowance: number) => {
  const adjustedValue = (value: number) => Math.floor(value / 10) * 10;

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

  // 고용보험은 10원 단위를 기준으로 반올림
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

  const netPay = Math.floor(monthlySalary - totalDeductions);

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
