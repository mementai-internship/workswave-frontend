import SalaryRangeHeader from '@/components/BasicSetting/SalaryRange/SalaryRangeHeader';
import SalaryRangeTable from '@/components/BasicSetting/SalaryRange/SalaryRangeTable';
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
      <div className="max-w-[1702px] mx-auto w-full overflow-x-scroll border ${SALARY_RANGE_BORDER_COLOR}">
        <div className={`w-[1700px] bg-[#ffffff]`}>
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
