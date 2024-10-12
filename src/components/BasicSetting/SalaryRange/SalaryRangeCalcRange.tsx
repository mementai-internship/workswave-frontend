import { SALARY_RANGE_BORDER_COLOR } from '@/components/BasicSetting/SalaryRange/ const';
import SalaryRangeTableTd from '@/components/BasicSetting/SalaryRange/SalaryRangeTableTd';
import { ISalaryRangeValue } from '@/models/salaryRange.model';

const ANNUAL_SALARY_IN_MILLIONS = 10000000;

interface IProps {
  calcRangeRows: ISalaryRangeValue[];
}

export default function SalaryRangeCalcRange({ calcRangeRows }: IProps) {
  const getBgColor = (annualSalary: number, key: keyof ISalaryRangeValue) => {
    if (key === 'netPay') return 'red';
    return annualSalary % ANNUAL_SALARY_IN_MILLIONS === 0 ? 'gray' : 'white';
  };

  const borderStyleSolid = `border ${SALARY_RANGE_BORDER_COLOR}`;
  return (
    <tbody>
      <tr>
        <SalaryRangeTableTd
          rowSpan={2}
          bgColor="lightGray"
          text="연봉"
          borderStyle={`${borderStyleSolid} border-t-0 border-l-0`}
        />
        <SalaryRangeTableTd
          rowSpan={2}
          bgColor="lightGray"
          text="월급여합계"
          borderStyle={`${borderStyleSolid} border-t-0`}
        />
        <SalaryRangeTableTd
          rowSpan={2}
          bgColor="lightGray"
          text="급여"
          borderStyle={`${borderStyleSolid} border-t-0`}
        />
        <SalaryRangeTableTd
          rowSpan={2}
          bgColor="lightGray"
          text="식대"
          borderStyle={`${borderStyleSolid} border-t-0`}
        />
        <SalaryRangeTableTd rowSpan={2} bgColor="lightGray" text="실수령액" />
        <SalaryRangeTableTd
          rowSpan={2}
          bgColor="lightGray"
          text="공제액계"
          borderStyle={`${borderStyleSolid} border-t-0`}
        />
        <SalaryRangeTableTd colSpan={4} bgColor="lightGray" text="4대 보험(근로자부담분)" />
        <SalaryRangeTableTd
          colSpan={2}
          bgColor="lightGray"
          text="세금"
          borderStyle={`${borderStyleSolid} border-t-0 border-r-0`}
          styles="w-[100px]"
        />
      </tr>
      <tr>
        <SalaryRangeTableTd bgColor="lightGray" text="국민연금" borderStyle={borderStyleSolid} />
        <SalaryRangeTableTd bgColor="lightGray" text="건강보험" borderStyle={borderStyleSolid} />
        <SalaryRangeTableTd bgColor="lightGray" text="고용보험" borderStyle={borderStyleSolid} />
        <SalaryRangeTableTd bgColor="lightGray" text="장기요양" borderStyle={borderStyleSolid} />
        <SalaryRangeTableTd bgColor="lightGray" text="소득세" borderStyle={borderStyleSolid} />
        <SalaryRangeTableTd
          bgColor="lightGray"
          text="지방소득세"
          borderStyle={`${borderStyleSolid} border-r-0`}
        />
      </tr>

      {calcRangeRows.map((row) => (
        <tr key={row.annualSalary}>
          {Object.entries(row).map(([key, value]) => (
            <SalaryRangeTableTd
              styles="text-right"
              bgColor={getBgColor(row.annualSalary, key as keyof ISalaryRangeValue)}
              borderStyle={
                key === 'annualSalary'
                  ? `${borderStyleSolid} border-l-0`
                  : key === 'localIncomeTax'
                    ? `${borderStyleSolid} border-r-0`
                    : borderStyleSolid
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
