export const calculateSalaryResult = (salary: number) => {
  if (salary < 0) return;
  const salaryWithMealAllowance = calculateSalaryDataBySalary(salary, 200000);
  const salaryWithoutMealAllowance = calculateSalaryDataBySalary(salary, 0);

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

export const calculateSalaryData = ({
  totalMonthlySalary,
  annualSalary,
  mealAllowance,
}: {
  totalMonthlySalary: number;
  annualSalary: number;
  mealAllowance: number;
}) => {
  const salary = totalMonthlySalary - mealAllowance;
  const adjustedValue = (value: number) => Math.floor(value / 10) * 10;

  // 4대보험 계산
  const pensionInsurance = adjustedValue(
    (salary * DUMMY_DATA_BASE_CALCULATION_DATA.pensionInsuranceRate) / 100
  );
  const healthInsurance = adjustedValue(
    (salary * DUMMY_DATA_BASE_CALCULATION_DATA.healthInsuranceRate) / 100
  );
  const longTermCareInsurance = adjustedValue(
    (healthInsurance * DUMMY_DATA_BASE_CALCULATION_DATA.longTermCareRate) / 100
  );
  // 고용보험은 50원,100원 단위만 사용하도록 설정
  const employmentInsurance =
    Math.round((salary * DUMMY_DATA_BASE_CALCULATION_DATA.employmentInsuranceRate) / 100 / 50) * 50;

  // 소득세 및 지방소득세 계산 -> 추후 수정
  const incomeTax = 0;
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

  const netPay = Math.floor(totalMonthlySalary - totalDeductions);

  return {
    annualSalary,
    totalMonthlySalary,
    salary: salary,
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

// 연봉을 바탕으로 급여계산데이터를 만드는 함수
export const calculateSalaryDataByAnnualSalary = (annualSalary: number, mealAllowance: number) => {
  const totalMonthlySalary = Math.round(annualSalary / 12);

  return calculateSalaryData({ totalMonthlySalary, annualSalary, mealAllowance });
};

// 월급을 바탕으로 급여계산데이터 만드는 함수
export const calculateSalaryDataBySalary = (salary: number, mealAllowance: number) => {
  const annualSalary = Math.round((salary * 12) / 1000000) * 1000000;
  return calculateSalaryData({ totalMonthlySalary: salary, annualSalary, mealAllowance });
};

// 삭제할 데이터들
const DUMMY_DATA_BASE_CALCULATION_DATA = {
  minimumWage: 9860,
  minimumWagePerMonth: 2060740,
  healthInsuranceRate: 3.545,
  pensionInsuranceRate: 4.5,
  employmentInsuranceRate: 0.9,
  longTermCareRate: 12.95,
  localIncomeTaxRate: 10,
};
