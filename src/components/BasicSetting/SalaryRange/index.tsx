import { SALARY_RANGE_BORDER_COLOR } from '@/components/BasicSetting/SalaryRange/ const';
import SalaryRangeHeader from '@/components/BasicSetting/SalaryRange/SalaryRangeHeader';
import SalaryRangeTable from '@/components/BasicSetting/SalaryRange/SalaryRangeTable';
import { IBaseCalculationData, ICalculatedSalary, IInputSalary } from '@/models/salaryRange.model';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

// 소득세 퍼센트 계산
function getIncomeTaxRate(income) {
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
}

// backend에서 받아올 데이터 (삭제예정)
const baseCalculationData: IBaseCalculationData = {
  minimumWage: 9860,
  minimumWagePerMonth: 2060740,
  healthInsuranceRate: 3.545,
  pensionInsuranceRate: 4.5,
  employmentInsuranceRate: 0.9,
  longTermCareRate: 12.95,
  localIncomeTaxRate: 10,
};

const adjustedValue = (value) => Math.floor(value / 10) * 10;

const generateSalaryData = (annualSalary, mealAllowance) => {
  // 월급여 합계
  const monthlySalary = Math.round(annualSalary / 12);

  // 급여
  const salary = monthlySalary - mealAllowance;

  // 보험 계산
  const pensionInsurance = adjustedValue((salary * baseCalculationData.pensionInsuranceRate) / 100);
  const healthInsurance = adjustedValue((salary * baseCalculationData.healthInsuranceRate) / 100);
  const employmentInsurance = adjustedValue(
    (salary * baseCalculationData.employmentInsuranceRate) / 100
  );
  const longTermCareInsurance = adjustedValue(
    (healthInsurance * baseCalculationData.longTermCareRate) / 100
  );

  // 소득세 및 지방소득세 계산
  const incomeTax = adjustedValue((salary * getIncomeTaxRate(annualSalary)) / 100);
  const localIncomeTax = adjustedValue((incomeTax * baseCalculationData.localIncomeTaxRate) / 100);

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

// 데이터 생성 (삭제예정)
const salaryDataList = [];
const salaryDataList2 = [];

for (let i = 10000000; i <= 30000000; i += 1000000) {
  salaryDataList.push(generateSalaryData(i, 200000));
  salaryDataList2.push(generateSalaryData(i, 0));
}

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

export default function Index() {
  const [calculatedSalary, setCalculatedSalary] = useState<ICalculatedSalary>(
    calculateSalaries(412848000)
  );
  const { register, handleSubmit } = useForm<IInputSalary>();

  const onSubmit = ({ inputSalary }: IInputSalary) => {
    setCalculatedSalary(calculateSalaries(inputSalary));
  };

  return (
    <div className="p-4">
      <div
        className={`mx-auto bg-[#ffffff] border ${SALARY_RANGE_BORDER_COLOR} overflow-x-scroll`}
        style={{ maxWidth: '1700px' }}
      >
        <SalaryRangeHeader
          salaryDetails={calculatedSalary.salaryDetails}
          onSubmit={handleSubmit(onSubmit)}
          register={register}
        />
        <div className="flex w-full">
          <SalaryRangeTable
            direction="left"
            tableHeaderTitle="O"
            calcResult={calculatedSalary.salaryWithMealAllowance}
            calcRange={salaryDataList}
          />
          <SalaryRangeTable
            direction="right"
            tableHeaderTitle="X (급여 전액 과세)"
            calcResult={calculatedSalary.salaryWithoutMealAllowance}
            calcRange={salaryDataList2}
          />
        </div>
      </div>
    </div>
  );
}
