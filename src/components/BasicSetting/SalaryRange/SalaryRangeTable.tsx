import SalaryRangeCalcRange from '@/components/BasicSetting/SalaryRange/SalaryRangeCalcRange';
import SalaryRangeCalcResult from '@/components/BasicSetting/SalaryRange/SalaryRangeCalcResult';
import { SALARY_RANGE_BORDER_COLOR } from '@/components/BasicSetting/SalaryRange/const';
import { ISalaryRangeValue } from '@/models/salaryRange.model';

interface IProps {
  calcResult: ISalaryRangeValue;
  calcRange: ISalaryRangeValue[];
  tableHeaderTitle: string;
  direction: 'left' | 'right';
}

export default function SalaryRangeSection({
  tableHeaderTitle,
  calcResult,
  calcRange,
  direction,
}: IProps) {
  return (
    <table
      className={`w-50 flex-1 border-separate border-spacing-0 ${direction === 'right' ? `border-l-8 ${SALARY_RANGE_BORDER_COLOR}` : ''}`}
    >
      <thead>
        <tr className={`p-2 bg-gray-10 text-center font-bold text-lg`}>
          <th colSpan={13}>
            식대 20만원 비과세 <span className="text-purple-50">반영 {tableHeaderTitle}</span>
          </th>
        </tr>
      </thead>

      <SalaryRangeCalcResult calcResult={calcResult} />

      <SalaryRangeCalcRange calcRangeRows={calcRange} />
    </table>
  );
}
