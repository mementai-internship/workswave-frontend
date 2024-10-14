import SalaryRangeTableTd from '@/components/BasicSetting/SalaryRange/SalaryRangeTableTd';
import { ANNUAL_SALARY_IN_MILLIONS, SALARY_RANGE_BORDER_COLOR } from '@/constants/salaryRange';
import { ISalaryRangeValue } from '@/models/salaryRange.model';

interface IProps {
  calcRangeRows: ISalaryRangeValue[];
}

export default function SalaryRangeCalcRange({ calcRangeRows }: IProps) {
  const getBgColor = (annualSalary: number, key: keyof ISalaryRangeValue) => {
    if (key === 'netPay') return 'red';
    return annualSalary % ANNUAL_SALARY_IN_MILLIONS === 0 ? 'gray' : 'white';
  };

  return (
    <tbody>
      <tr>
        <SalaryRangeTableTd
          rowSpan={2}
          bgColor="lightGray"
          text="연봉"
          borderStyle={`border-r border-b ${SALARY_RANGE_BORDER_COLOR}`}
        />
        <SalaryRangeTableTd
          rowSpan={2}
          bgColor="lightGray"
          text="월급여합계"
          borderStyle={`border-r border-b ${SALARY_RANGE_BORDER_COLOR}`}
        />
        <SalaryRangeTableTd
          rowSpan={2}
          bgColor="lightGray"
          text="급여"
          borderStyle={`border-r border-b ${SALARY_RANGE_BORDER_COLOR}`}
        />
        <SalaryRangeTableTd
          rowSpan={2}
          bgColor="lightGray"
          text="식대"
          borderStyle={`border-r border-b ${SALARY_RANGE_BORDER_COLOR}`}
        />
        <SalaryRangeTableTd
          rowSpan={2}
          bgColor="lightGray"
          text="실수령액"
          borderStyle={`border-r border-b ${SALARY_RANGE_BORDER_COLOR}`}
        />
        <SalaryRangeTableTd
          rowSpan={2}
          bgColor="lightGray"
          text="공제액계"
          borderStyle={`border-r border-b ${SALARY_RANGE_BORDER_COLOR}`}
        />
        <SalaryRangeTableTd
          colSpan={4}
          bgColor="lightGray"
          text="4대 보험(근로자부담분)"
          borderStyle={`border-r border-b ${SALARY_RANGE_BORDER_COLOR}`}
        />
        <SalaryRangeTableTd
          colSpan={2}
          bgColor="lightGray"
          text="세금"
          styles="w-[62px]"
          borderStyle={`border-b ${SALARY_RANGE_BORDER_COLOR}`}
        />
      </tr>
      <tr>
        <SalaryRangeTableTd
          bgColor="lightGray"
          text="국민연금"
          borderStyle={`border-r border-b ${SALARY_RANGE_BORDER_COLOR}`}
        />
        <SalaryRangeTableTd
          bgColor="lightGray"
          text="건강보험"
          borderStyle={`border-r border-b ${SALARY_RANGE_BORDER_COLOR}`}
        />
        <SalaryRangeTableTd
          bgColor="lightGray"
          text="고용보험"
          borderStyle={`border-r border-b ${SALARY_RANGE_BORDER_COLOR}`}
        />
        <SalaryRangeTableTd
          bgColor="lightGray"
          text="장기요양"
          borderStyle={`border-r border-b ${SALARY_RANGE_BORDER_COLOR}`}
        />
        <SalaryRangeTableTd
          bgColor="lightGray"
          text="소득세"
          borderStyle={`border-r border-b ${SALARY_RANGE_BORDER_COLOR}`}
        />
        <SalaryRangeTableTd
          bgColor="lightGray"
          text="지방소득세"
          borderStyle={`border-b ${SALARY_RANGE_BORDER_COLOR}`}
        />
      </tr>

      {calcRangeRows.map((row) => (
        <tr key={row.annualSalary} className={`border-b ${SALARY_RANGE_BORDER_COLOR}`}>
          {Object.entries(row).map(([key, value]) => (
            <SalaryRangeTableTd
              styles="text-right"
              bgColor={getBgColor(row.annualSalary, key as keyof ISalaryRangeValue)}
              borderStyle={
                key === 'localIncomeTax'
                  ? `border-b ${SALARY_RANGE_BORDER_COLOR}`
                  : `border-b border-r ${SALARY_RANGE_BORDER_COLOR}`
              }
              key={key}
              text={value}
            />
          ))}
        </tr>
      ))}
    </tbody>
  );
}
