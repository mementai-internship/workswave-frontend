import React from 'react';
import { UseFormRegister } from 'react-hook-form';

import SalaryRangeTableTd from '@/components/BasicSetting/SalaryRange/SalaryRangeTableTd';
import { SALARY_RANGE_BORDER_COLOR } from '@/constants/salaryRange';
import { ISalaryBracketResponse } from '@/models/salary-bracket.model';
import { ICalculatedSalary, ICalculatedSalaryForm } from '@/models/salary-range.model';

interface IProps {
  register: UseFormRegister<ICalculatedSalaryForm>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  salaryDetails: ICalculatedSalary['salaryDetails'];
  currentYear: number;
  data: ISalaryBracketResponse;
}

export default function SalaryRangeHeader({
  currentYear,
  register,
  onSubmit,
  salaryDetails,
  data,
}: IProps) {
  const borderStyleDotted = `border-b border-dotted ${SALARY_RANGE_BORDER_COLOR}`;

  return (
    <div className="flex w-full text-sm">
      <table className={`border-t border-b ${SALARY_RANGE_BORDER_COLOR} border-l-0`}>
        <tbody>
          <tr>
            <SalaryRangeTableTd
              bgColor="white"
              text={`${currentYear}년 최저시급`}
              styles="text-start px-2"
            />
            <SalaryRangeTableTd bgColor="white" text={data.minimum_hourly_rate} />
          </tr>
          <tr>
            <SalaryRangeTableTd
              bgColor="white"
              text={`${currentYear}년 1개월 최저임금(기본급만)`}
              styles="px-2 text-start"
            />
            <SalaryRangeTableTd bgColor="white" text={data.minimum_monthly_rate} />
          </tr>
        </tbody>
      </table>

      <table className={`border ${SALARY_RANGE_BORDER_COLOR} flex-1`}>
        <tbody>
          <tr className={borderStyleDotted}>
            <td></td>
            <SalaryRangeTableTd bgColor="white" text="국민연금" />
            <SalaryRangeTableTd bgColor="white" text="고용보험" />
            <SalaryRangeTableTd bgColor="white" text="건강보험" />
            <SalaryRangeTableTd bgColor="white" text="장기요양" />
          </tr>
          <tr>
            <SalaryRangeTableTd bgColor="white" text="근로자" />
            <SalaryRangeTableTd bgColor="white" text={`${data.national_pension}%`} />
            <SalaryRangeTableTd bgColor="white" text={`${data.employment_insurance}%`} />
            <SalaryRangeTableTd bgColor="white" text={`${data.health_insurance}%`} />
            <SalaryRangeTableTd bgColor="white" text={`${data.long_term_care_insurance}%`} />
          </tr>
        </tbody>
      </table>

      <table className={`border-t border-b ${SALARY_RANGE_BORDER_COLOR} flex-1`}>
        <tbody>
          <tr className={`${borderStyleDotted} border-x-0 border-t-0`}>
            <td></td>
            <SalaryRangeTableTd bgColor="white" text="연금소득최저" />
            <SalaryRangeTableTd bgColor="white" text="연금소득최대" />
            <SalaryRangeTableTd bgColor="white" text="국민연금최대" />
            <SalaryRangeTableTd bgColor="white" text="건보 하한선" />
            <SalaryRangeTableTd bgColor="white" text="건보 상한선" />
          </tr>
          <tr>
            <SalaryRangeTableTd bgColor="white" text="금액" />
            <SalaryRangeTableTd bgColor="white" text={data.minimum_pension_income} />
            <SalaryRangeTableTd bgColor="white" text={data.maximum_pension_income} />
            <SalaryRangeTableTd bgColor="white" text={data.maximum_national_pension} />
            <SalaryRangeTableTd bgColor="white" text={data.minimum_health_insurance} />
            <SalaryRangeTableTd bgColor="white" text={data.maximum_health_insurance} />
          </tr>
        </tbody>
      </table>

      <form className="relative flex-1" onSubmit={onSubmit}>
        <div
          className={`caption absolute top-[-50px] left-[112px] inline-block bg-white rounded-md border ${SALARY_RANGE_BORDER_COLOR} px-4 py-2 shadow`}
        >
          <p>Enter Key 입력시 값이 계산됩니다.</p>
          <div className="absolute right-[10px] bottom-[5px] -mb-4 ml-4 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-zinc-300"></div>
        </div>

        <table className={`border-4 ${SALARY_RANGE_BORDER_COLOR} `}>
          <tbody>
            <tr className={`border-b ${SALARY_RANGE_BORDER_COLOR}`}>
              <SalaryRangeTableTd
                bgColor="white"
                text="확인할 급여"
                rowSpan={2}
                borderStyle={`border-r ${SALARY_RANGE_BORDER_COLOR}`}
                styles="px-2 text-lg"
                isBoxShadow
              />
              <SalaryRangeTableTd
                bgColor="white"
                text="연봉"
                borderStyle={`border-r ${SALARY_RANGE_BORDER_COLOR}`}
                styles="min-w-28"
              />
              <SalaryRangeTableTd
                bgColor="white"
                text="월급여(세전)"
                borderStyle={`border-r ${SALARY_RANGE_BORDER_COLOR}`}
                styles="min-w-28"
              />
              <SalaryRangeTableTd
                bgColor="white"
                text="실수령액(식대비과세)"
                borderStyle={`border-r ${SALARY_RANGE_BORDER_COLOR}`}
                styles="min-w-32"
              />
              <SalaryRangeTableTd bgColor="white" text="실수령액(식대과세)" styles="min-w-32" />
            </tr>
            <tr>
              <SalaryRangeTableTd
                bgColor="white"
                text={salaryDetails.annualSalary}
                borderStyle={`border-r ${SALARY_RANGE_BORDER_COLOR}`}
              />
              <td className="h-full bg-[#FFF7EC]">
                <input
                  {...register('salaryInput')}
                  type="text"
                  placeholder="입력해주세요"
                  className="text-right bg-transparent focus:outline-none"
                />
              </td>
              <SalaryRangeTableTd
                bgColor="red"
                text={salaryDetails.netPayWithMealAllowance}
                borderStyle={`border-l ${SALARY_RANGE_BORDER_COLOR}`}
              />
              <SalaryRangeTableTd
                bgColor="red"
                text={salaryDetails.netPayWithoutMealAllowance}
                borderStyle={`border-l ${SALARY_RANGE_BORDER_COLOR}`}
              />
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
