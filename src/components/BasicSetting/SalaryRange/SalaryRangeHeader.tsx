import SalaryRangeTableTd from '@/components/BasicSetting/SalaryRange/SalaryRangeTableTd';
import { SALARY_RANGE_BORDER_COLOR } from '@/components/BasicSetting/SalaryRange/const';
import { ICalculatedSalary, IInputSalary } from '@/models/salaryRange.model';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface IProps {
  register: UseFormRegister<IInputSalary>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  salaryDetails: ICalculatedSalary['salaryDetails'];
}

export default function SalaryRangeHeader({ register, onSubmit, salaryDetails }: IProps) {
  const borderStyleDotted = `border-b border-dotted ${SALARY_RANGE_BORDER_COLOR}`;

  return (
    <div className="flex w-full text-sm">
      <table className={`border-t border-b ${SALARY_RANGE_BORDER_COLOR} border-l-0`}>
        <tbody>
          <tr>
            <SalaryRangeTableTd bgColor="white" text="2024년 최저시급" styles="text-start px-2" />
            <SalaryRangeTableTd bgColor="white" text={9680} />
          </tr>
          <tr>
            <SalaryRangeTableTd
              bgColor="white"
              text="2024년 1개월 최저임금(기본급만)"
              styles="px-2 text-start"
            />
            <SalaryRangeTableTd bgColor="white" text={2060740} />
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
            <SalaryRangeTableTd bgColor="white" text="4.5%" />
            <SalaryRangeTableTd bgColor="white" text="0.9%" />
            <SalaryRangeTableTd bgColor="white" text="3.545%" />
            <SalaryRangeTableTd bgColor="white" text="12.95%" />
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
            <SalaryRangeTableTd bgColor="white" text={370000} />
            <SalaryRangeTableTd bgColor="white" text={5900000} />
            <SalaryRangeTableTd bgColor="white" text={265500} />
            <SalaryRangeTableTd bgColor="white" text={9890} />
            <SalaryRangeTableTd bgColor="white" text={4240710} />
          </tr>
        </tbody>
      </table>

      <form className="relative flex-1" onSubmit={onSubmit}>
        <div
          className={`caption absolute top-[-50px] left-[112px] inline-block bg-[#ffffff] rounded-md border ${SALARY_RANGE_BORDER_COLOR} px-4 py-2 shadow`}
        >
          <p>Enter Key 입력시 값이 계산됩니다.</p>
          <div className="absolute right-[10px] bottom-[5px] -mb-4 ml-4 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#dddddd]"></div>
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
                  {...register('inputSalary')}
                  type="number"
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
