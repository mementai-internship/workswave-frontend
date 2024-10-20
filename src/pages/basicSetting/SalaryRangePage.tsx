import SalaryRangeHeader from '@/components/BasicSetting/SalaryRange/SalaryRangeHeader';
import SalaryRangeTable from '@/components/BasicSetting/SalaryRange/SalaryRangeTable';
import Title from '@/components/Common/Title';
import { Txt } from '@/components/Common/Txt';
import { SALARY_RANGE_BORDER_COLOR } from '@/constants/salaryRange';
import { useSalaryRange } from '@/hooks/useSalaryRange';
import { useEffect } from 'react';

export default function SalaryRangePage() {
  const { calculatedSalary, onSubmit, register, setValue, handleSubmit, watch, salaries } =
    useSalaryRange();

  const inputSalary = watch('inputSalary');

  useEffect(() => {
    if (inputSalary < 0) {
      setValue('inputSalary', 0);
    }
  }, [inputSalary, setValue]);

  return (
    <div className="w-full">
      <div
        className={`min-w-[1700px] mx-auto w-full overflow-x-scroll border ${SALARY_RANGE_BORDER_COLOR}`}
      >
        <div className={`bg-[#ffffff]`}>
          <div className="flex items-center gap-6 title px-10 py-2">
            <Title content="급여구간표" />
            <Txt variant="h4" color="text-black font-normal">
              뮤즈의원(강남점)
            </Txt>
          </div>

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
              calcRange={salaries.salaryRangeWithMealAllowance}
            />
            <SalaryRangeTable
              direction="right"
              tableHeaderTitle="X (급여 전액 과세)"
              calcResult={calculatedSalary.salaryWithoutMealAllowance}
              calcRange={salaries.salaryRangeWithoutMealAllowance}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
