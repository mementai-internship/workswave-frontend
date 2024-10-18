import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import SalaryRangeHeader from '@/components/BasicSetting/SalaryRange/SalaryRangeHeader';
import SalaryRangeTable from '@/components/BasicSetting/SalaryRange/SalaryRangeTable';
import Title from '@/components/Common/Title';
import { Txt } from '@/components/Common/Txt';
import { SALARY_RANGE_BORDER_COLOR } from '@/constants/salaryRange';
import useGetSalaryBracket from '@/hooks/apis/useSalaryBracket';
import { ICalculatedSalary, ICalculatedSalaryForm, ITax } from '@/models/salary-range.model';
import { calculateInitialValueSalaryRange } from '@/utils/calculateInitialValueSalaryRange';
import { calculateSalaryResult } from '@/utils/calculateSalaryRange';

export default function SalaryRangePage() {
  const currentYear = dayjs().year();
  const { data, isError } = useGetSalaryBracket(currentYear.toString());

  const { register, handleSubmit, watch, setValue } = useForm<ICalculatedSalaryForm>({
    defaultValues: { salaryInput: '' },
  });

  const [calculatedSalary, setCalculatedSalary] = useState<ICalculatedSalary>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [salaryRange, setSalaryRange] = useState(null);
  const [tax, setTax] = useState<ITax>({
    national_pension: 0,
    health_insurance: 0,
    long_term_care_insurance: 0,
    employment_insurance: 0,
    local_income_tax_rate: 0,
  });

  useEffect(() => {
    if (data) {
      const taxPercentageCalculation: ITax = {
        national_pension: data.national_pension,
        health_insurance: data.health_insurance,
        long_term_care_insurance: data.long_term_care_insurance,
        employment_insurance: data.employment_insurance,
        local_income_tax_rate: data.long_term_care_insurance,
      };
      setTax(taxPercentageCalculation);

      const { calculatedSalaryWithMealAllowance, calculatedSalaryWithoutMealAllowance } =
        calculateInitialValueSalaryRange(taxPercentageCalculation);
      setSalaryRange({
        salaryRangeWithMealAllowance: calculatedSalaryWithMealAllowance,
        salaryRangeWithoutMealAllowance: calculatedSalaryWithoutMealAllowance,
      });

      const calculatedSalaryResult = calculateSalaryResult(833333, taxPercentageCalculation);
      setCalculatedSalary(calculatedSalaryResult);

      setIsLoading(false);
    }
  }, [data]);

  const salaryInput = watch('salaryInput');

  useEffect(() => {
    const value = salaryInput.replace(/[^0-9]/g, '');
    setValue('salaryInput', Number(value).toLocaleString());
  }, [salaryInput, setValue]);

  const onSubmit = handleSubmit(({ salaryInput }: ICalculatedSalaryForm) => {
    const NumberSalaryInput = Number(salaryInput.replace(/,/g, ''));
    if (NumberSalaryInput < 0 || !tax || !salaryInput) return;
    setCalculatedSalary(calculateSalaryResult(NumberSalaryInput, tax));
  });

  return (
    <div className="w-full overflow-x-scroll">
      {!isLoading && (
        <div className={`min-w-[1700px] mx-auto w-full border ${SALARY_RANGE_BORDER_COLOR}`}>
          <div className="bg-[#ffffff] max-h-[calc(100vh-300px)]">
            <div className="flex items-center gap-6 title px-10 py-2">
              <Title content="급여구간표" />
            </div>

            <SalaryRangeHeader
              salaryDetails={calculatedSalary.salaryDetails}
              onSubmit={onSubmit}
              register={register}
              currentYear={currentYear}
              data={data}
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
            </div>
          </div>
        </div>
      )}

      {isError && (
        <Txt className="block text-center">
          데이터를 가져오는데 오류가 발생했습니다. 다시 시도해주세요.
        </Txt>
      )}
    </div>
  );
}
