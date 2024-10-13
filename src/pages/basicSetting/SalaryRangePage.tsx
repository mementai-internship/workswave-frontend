import SalaryRangeHeader from '@/components/BasicSetting/SalaryRange/SalaryRangeHeader';
import SalaryRangeTable from '@/components/BasicSetting/SalaryRange/SalaryRangeTable';
import { Txt } from '@/components/Common/Txt';
import { useSalaryRange } from '@/hooks/useSalaryRange';

export default function SalaryRangePage() {
  const {
    calculatedSalary,
    onSubmit,
    register,
    handleSubmit,
    DUMMY_DATA_SALARY_RANGE_WITH_MEAL_ALLOWANCE,
    DUMMY_DATA_SALARY_RANGE_WITHOUT_MEAL_ALLOWANCE,
  } = useSalaryRange();

  return (
    <div className="w-full p-4">
      <div className="max-w-[1722px] mx-auto w-full overflow-x-scroll border ${SALARY_RANGE_BORDER_COLOR}">
        <div className={`w-[1720px] bg-[#ffffff]`}>
          <div className="flex gap-6 title px-10 py-6">
            <Txt variant="subtitle1" color="text-black">
              급여구간표
            </Txt>
            <Txt variant="subtitle1" color="text-black">
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
              calcRange={DUMMY_DATA_SALARY_RANGE_WITH_MEAL_ALLOWANCE}
            />
            <SalaryRangeTable
              direction="right"
              tableHeaderTitle="X (급여 전액 과세)"
              calcResult={calculatedSalary.salaryWithoutMealAllowance}
              calcRange={DUMMY_DATA_SALARY_RANGE_WITHOUT_MEAL_ALLOWANCE}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
