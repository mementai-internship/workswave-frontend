// import { getSalaryCalcStandards } from '@/apis/salaryRange.api';
import { ISalaryCalcStandardsResponse } from '@/models/salaryRange.model';

// import { useQuery } from '@tanstack/react-query';
// import dayjs from 'dayjs';

const MOCK_DATA: ISalaryCalcStandardsResponse = {
  id: 1,
  year: 2024,
  minimum_hourly_rate: 9860,
  minimum_monthly_rate: 2060740,
  national_pension: 4.5,
  health_insurance: 0.9,
  employment_insurance: 3.545,
  long_term_care_insurance: 12.95,
  minimum_pension_income: 370000,
  maximum_pension_income: 5000000,
  maximum_national_pension: 265500,
  minimum_health_insurance: 9890,
  maximum_health_insurance: 4240710,
  local_income_tax_rate: 10,
  tax_brackets: [
    {
      id: 1,
      salary_bracket_id: 1,
      lower_limit: 10,
      upper_limit: 20,
      tax_rate: 10,
      deduction: 10,
    },
    {
      id: 2,
      salary_bracket_id: 1,
      lower_limit: 20,
      upper_limit: 30,
      tax_rate: 20,
      deduction: 10,
    },
  ],
};

export default function useFetchSalaryRange() {
  // const year = dayjs().year();
  //   const { data, isLoading } = useQuery({
  //     queryKey: [year],
  //     queryFn: () => getSalaryCalcStandards(),
  //   });
  return { data: MOCK_DATA };
}
