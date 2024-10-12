import { SALARY_RANGE_BORDER_COLOR } from '@/components/BasicSetting/SalaryRange/ const';
import SalaryRangeTableTd from '@/components/BasicSetting/SalaryRange/SalaryRangeTableTd';
import { ISalaryRangeValue } from '@/models/salaryRange.model';

interface IProps {
  calcResult: ISalaryRangeValue;
}

export default function SalaryRangeCalcResult({ calcResult }: IProps) {
  const {
    annualSalary,
    totalMonthlySalary,
    mealAllowance,
    netPay,
    totalDeductions,
    pensionInsurance,
    healthInsurance,
    employmentInsurance,
    longTermCareInsurance,
    incomeTax,
    localIncomeTax,
  } = calcResult;

  const borderStyleSolid = `border-r border-b ${SALARY_RANGE_BORDER_COLOR}`;
  const borderStylesDotted = `border-l border-dotted ${SALARY_RANGE_BORDER_COLOR}`;
  return (
    <tbody className="border border-[#333333]">
      <tr className={`border-b ${SALARY_RANGE_BORDER_COLOR}`}>
        <SalaryRangeTableTd
          bgColor="lightGray"
          text="연봉"
          borderStyle={`${borderStyleSolid} border-l-0`}
        />
        <SalaryRangeTableTd bgColor="white" colSpan={2} aria-label="연봉" text={annualSalary} />
        <SalaryRangeTableTd
          bgColor="white"
          colSpan={2}
          aria-label="연봉에서 비과세가 빠진 금액"
          text={annualSalary - mealAllowance * 12}
          borderStyle={borderStylesDotted}
        />
        <SalaryRangeTableTd bgColor="white" colSpan={7} text=" " />
      </tr>
      <tr>
        <SalaryRangeTableTd
          bgColor="lightGray"
          text="계산기"
          borderStyle={`${borderStyleSolid} border-l-0 border-b-0`}
        />
        <SalaryRangeTableTd bgColor="white" aria-label="월급" text={totalMonthlySalary} />
        <SalaryRangeTableTd
          bgColor="white"
          aria-label="월급에서 식대가 빠진 금액"
          text={totalMonthlySalary - mealAllowance}
          borderStyle={borderStylesDotted}
        />
        <SalaryRangeTableTd
          bgColor="white"
          aria-label="식대"
          text={mealAllowance}
          borderStyle={borderStylesDotted}
          styles="w-[100px]"
        />
        <SalaryRangeTableTd
          bgColor="red"
          isBold
          aria-label="실수령액"
          text={netPay}
          borderStyle={borderStylesDotted}
        />
        <SalaryRangeTableTd
          bgColor="white"
          aria-label="공제액계"
          text={totalDeductions}
          borderStyle={borderStylesDotted}
        />
        <SalaryRangeTableTd
          bgColor="white"
          aria-label="국민연금"
          text={pensionInsurance}
          borderStyle={borderStylesDotted}
        />
        <SalaryRangeTableTd
          bgColor="white"
          aria-label="건강보험"
          text={healthInsurance}
          borderStyle={borderStylesDotted}
        />
        <SalaryRangeTableTd
          bgColor="white"
          aria-label="고용보험"
          text={employmentInsurance}
          borderStyle={borderStylesDotted}
        />
        <SalaryRangeTableTd
          bgColor="white"
          aria-label="장기요양"
          text={longTermCareInsurance}
          borderStyle={borderStylesDotted}
        />
        <SalaryRangeTableTd
          bgColor="white"
          aria-label="소득세"
          text={incomeTax}
          borderStyle={borderStylesDotted}
        />
        <SalaryRangeTableTd
          bgColor="white"
          aria-label="지방소득세"
          text={localIncomeTax}
          borderStyle={borderStylesDotted}
        />
      </tr>
    </tbody>
  );
}
