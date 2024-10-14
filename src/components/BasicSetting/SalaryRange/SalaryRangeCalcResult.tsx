import SalaryRangeTableTd from '@/components/BasicSetting/SalaryRange/SalaryRangeTableTd';
import { SALARY_RANGE_BORDER_COLOR } from '@/constants/salaryRange';
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

  return (
    <tbody>
      <tr>
        <SalaryRangeTableTd
          bgColor="lightGray"
          text="연봉"
          borderStyle={`border-r border-b ${SALARY_RANGE_BORDER_COLOR} border-t border-t-[#333333] border-l border-l-[#333333]`}
        />
        <SalaryRangeTableTd
          bgColor="white"
          colSpan={2}
          aria-label="연봉"
          text={annualSalary}
          borderStyle={`border-r border-b ${SALARY_RANGE_BORDER_COLOR} border-t border-t-[#333333]`}
        />
        <SalaryRangeTableTd
          bgColor="white"
          colSpan={2}
          aria-label="연봉에서 비과세가 빠진 금액"
          text={annualSalary - mealAllowance * 12}
          borderStyle={`border-r border-b ${SALARY_RANGE_BORDER_COLOR} border-t border-t-[#333333]`}
        />
        <SalaryRangeTableTd
          bgColor="white"
          colSpan={7}
          text=" "
          borderStyle={`border-b ${SALARY_RANGE_BORDER_COLOR} border-t border-t-[#333333] border-r border-r-[#333333]`}
        />
      </tr>
      <tr>
        <SalaryRangeTableTd
          bgColor="lightGray"
          text="계산기"
          borderStyle={`border-r border-b ${SALARY_RANGE_BORDER_COLOR} border-l border-l-[#333333] border-b border-b-[#333333]`}
        />
        <SalaryRangeTableTd
          bgColor="white"
          aria-label="월급"
          text={totalMonthlySalary}
          borderStyle={`border-r ${SALARY_RANGE_BORDER_COLOR} border-b border-b-[#333333]`}
        />
        <SalaryRangeTableTd
          bgColor="white"
          aria-label="월급에서 식대가 빠진 금액"
          text={totalMonthlySalary - mealAllowance}
          borderStyle={`border-r ${SALARY_RANGE_BORDER_COLOR} border-b border-b-[#333333]`}
        />
        <SalaryRangeTableTd
          bgColor="white"
          aria-label="식대"
          text={mealAllowance}
          borderStyle={`border-r ${SALARY_RANGE_BORDER_COLOR} border-b border-b-[#333333]`}
          styles="w-[62px]"
        />
        <SalaryRangeTableTd
          bgColor="red"
          isBold
          aria-label="실수령액"
          text={netPay}
          borderStyle={`border-r ${SALARY_RANGE_BORDER_COLOR} border-b border-b-[#333333]`}
        />
        <SalaryRangeTableTd
          bgColor="white"
          aria-label="공제액계"
          text={totalDeductions}
          borderStyle={`border-r ${SALARY_RANGE_BORDER_COLOR} border-b border-b-[#333333]`}
        />
        <SalaryRangeTableTd
          bgColor="white"
          aria-label="국민연금"
          text={pensionInsurance}
          borderStyle={`border-r ${SALARY_RANGE_BORDER_COLOR} border-b border-b-[#333333]`}
        />
        <SalaryRangeTableTd
          bgColor="white"
          aria-label="건강보험"
          text={healthInsurance}
          borderStyle={`border-r ${SALARY_RANGE_BORDER_COLOR} border-b border-b-[#333333]`}
        />
        <SalaryRangeTableTd
          bgColor="white"
          aria-label="고용보험"
          text={employmentInsurance}
          borderStyle={`border-r ${SALARY_RANGE_BORDER_COLOR} border-b border-b-[#333333]`}
        />
        <SalaryRangeTableTd
          bgColor="white"
          aria-label="장기요양"
          text={longTermCareInsurance}
          borderStyle={`border-r ${SALARY_RANGE_BORDER_COLOR} border-b border-b-[#333333]`}
        />
        <SalaryRangeTableTd
          bgColor="white"
          aria-label="소득세"
          text={incomeTax}
          borderStyle={`border-r ${SALARY_RANGE_BORDER_COLOR} border-b border-b-[#333333]`}
        />
        <SalaryRangeTableTd
          bgColor="white"
          aria-label="지방소득세"
          text={localIncomeTax}
          borderStyle={`border-r border-r-[#333333] border-b border-b-[#333333]`}
        />
      </tr>
    </tbody>
  );
}
