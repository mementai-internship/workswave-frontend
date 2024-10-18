import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

// import { useForm } from 'react-hook-form';
// import SalaryRangeHeader from '@/components/BasicSetting/SalaryRange/SalaryRangeHeader';
// import SalaryRangeTable from '@/components/BasicSetting/SalaryRange/SalaryRangeTable';
import Title from '@/components/Common/Title';
import { Txt } from '@/components/Common/Txt';
import { SALARY_RANGE_BORDER_COLOR } from '@/constants/salaryRange';
import useGetSalaryBracket from '@/hooks/apis/useSalaryBracket';
import { calculateInitialValueSalaryRange } from '@/utils/calculateInitialValueSalaryRange';
import { ITax } from '@/utils/calculateSalaryRange';

export interface ISalaryRangeForm {
  salaryInput: number;
}

export default function SalaryRangePage() {
  const currentYear = dayjs().year();
  const { data } = useGetSalaryBracket(currentYear.toString());
  // const { register, handleSubmit } = useForm<ISalaryRangeForm>({});
  // const [calculatedSalary, setCalculatedSalary] = useState();
  const [salaryRange, setSalaryRange] = useState({
    salaryRangeWithMealAllowance: [],
    salaryRangeWithoutMealAllowance: [],
  });

  console.log(data);
  // setCalculatedSalary()

  useEffect(() => {
    if (data) {
      const taxPercentageCalculation: ITax = {
        national_pension: data.national_pension,
        health_insurance: data.health_insurance,
        long_term_care_insurance: data.long_term_care_insurance,
        employment_insurance: data.employment_insurance,
        local_income_tax_rate: data.long_term_care_insurance,
      };
      console.log(taxPercentageCalculation);
      const { calculatedSalaryWithMealAllowance, calculatedSalaryWithoutMealAllowance } =
        calculateInitialValueSalaryRange(taxPercentageCalculation);
      setSalaryRange({
        salaryRangeWithMealAllowance: calculatedSalaryWithMealAllowance,
        salaryRangeWithoutMealAllowance: calculatedSalaryWithoutMealAllowance,
      });
    }
  }, []);

  console.log(salaryRange);

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

          {/* <SalaryRangeHeader
            salaryDetails={calculatedSalary.salaryDetails}
            onSubmit={handleSubmit(onSubmit)}
            register={register}
          />
          <div className="flex w-full">
            <SalaryRangeTable
              direction="left"
              tableHeaderTitle="O"
              calcResult={calculatedSalary.salaryWithMealAllowance}
              calcRange={salaryRange.salaryRangeWithMealAllowance}
            />
            <SalaryRangeTable
              direction="right"
              tableHeaderTitle="X (급여 전액 과세)"
              calcResult={calculatedSalary.salaryWithoutMealAllowance}
              calcRange={salaryRange.salaryRangeWithoutMealAllowance}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
