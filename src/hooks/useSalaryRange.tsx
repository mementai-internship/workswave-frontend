import useFetchSalaryRange from '@/hooks/apis/useFetchSalaryRange';
import { ICalculatedSalary, IInputSalary } from '@/models/salaryRange.model';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export const useSalaryRange = () => {
  const { data } = useFetchSalaryRange();
  const { local_income_tax_rate, ...rest } = data;
  const calcSalaryStandard = { ...rest };

  const calculateSalaryResult = (salary: number) => {
    if (salary < 0) return;
    const salaryWithMealAllowance = calculateSalaryDataBySalary(salary, 200000);
    const salaryWithoutMealAllowance = calculateSalaryDataBySalary(salary, 0);

    return {
      salaryWithMealAllowance,
      salaryWithoutMealAllowance,
      salaryDetails: {
        annualSalary: salaryWithMealAllowance.annualSalary,
        netPayWithMealAllowance: salaryWithMealAllowance.netPay,
        netPayWithoutMealAllowance: salaryWithoutMealAllowance.netPay,
      },
    };
  };

  // 연봉을 바탕으로 급여계산데이터를 만드는 함수
  const calculateSalaryDataByAnnualSalary = (annualSalary: number, mealAllowance: number) => {
    const totalMonthlySalary = Math.round(annualSalary / 12);
    return calculateSalaryData({ totalMonthlySalary, annualSalary, mealAllowance });
  };

  // 월급을 바탕으로 급여계산데이터 만드는 함수
  const calculateSalaryDataBySalary = (salary: number, mealAllowance: number) => {
    const annualSalary = Math.round((salary * 12) / 1000000) * 1000000;
    return calculateSalaryData({ totalMonthlySalary: salary, annualSalary, mealAllowance });
  };

  const calculateSalaryData = ({
    totalMonthlySalary,
    annualSalary,
    mealAllowance,
  }: {
    totalMonthlySalary: number;
    annualSalary: number;
    mealAllowance: number;
  }) => {
    const salary = totalMonthlySalary - mealAllowance;
    const adjustedValue = (value: number) => Math.floor(value / 10) * 10;

    // 4대보험 계산
    const nationalPension = adjustedValue((salary * calcSalaryStandard.national_pension) / 100);
    const healthInsurance = adjustedValue((salary * calcSalaryStandard.health_insurance) / 100);
    const longTermCareInsurance = adjustedValue(
      (healthInsurance * calcSalaryStandard.long_term_care_insurance) / 100
    );
    // 고용보험은 50원,100원 단위만 사용하도록 설정
    const employmentInsurance =
      Math.round((salary * calcSalaryStandard.employment_insurance) / 100 / 50) * 50;

    // 소득세 계산 - 연봉 x 세율 - 누진공제액
    const incomeTax = 0;
    const localIncomeTax = adjustedValue((incomeTax * local_income_tax_rate) / 100);

    // 공제액 계산
    const totalDeductions =
      nationalPension +
      healthInsurance +
      employmentInsurance +
      longTermCareInsurance +
      incomeTax +
      localIncomeTax;

    const netPay = Math.floor(totalMonthlySalary - totalDeductions);

    return {
      annualSalary,
      totalMonthlySalary,
      salary,
      mealAllowance,
      netPay,
      totalDeductions,
      nationalPension,
      healthInsurance,
      employmentInsurance,
      longTermCareInsurance,
      incomeTax,
      localIncomeTax,
    };
  };

  const { register, handleSubmit, setValue, watch } = useForm<IInputSalary>();
  const [salaries, setSalaries] = useState({
    salaryRangeWithMealAllowance: [],
    salaryRangeWithoutMealAllowance: [],
  });

  const [calculatedSalary, setCalculatedSalary] = useState<ICalculatedSalary>(
    calculateSalaryResult(833333)
  );

  const onSubmit = ({ inputSalary }: IInputSalary) => {
    if (inputSalary < 0) return;
    setCalculatedSalary(calculateSalaryResult(inputSalary));
  };

  const calculateSalaries = (min, max) => {
    const calculatedSalaryWithMealAllowance = [];
    const calculatedSalaryWithoutMealAllowance = [];
    for (let salary = min; salary <= max; salary += 1000000) {
      calculatedSalaryWithMealAllowance.push(calculateSalaryDataByAnnualSalary(salary, 200000));
      calculatedSalaryWithoutMealAllowance.push(calculateSalaryDataByAnnualSalary(salary, 0));
    }
    return { calculatedSalaryWithMealAllowance, calculatedSalaryWithoutMealAllowance };
  };

  const handleCalculate = () => {
    const { calculatedSalaryWithMealAllowance, calculatedSalaryWithoutMealAllowance } =
      calculateSalaries(10000000, 400000000);
    setSalaries({
      salaryRangeWithMealAllowance: calculatedSalaryWithMealAllowance,
      salaryRangeWithoutMealAllowance: calculatedSalaryWithoutMealAllowance,
    });
  };

  useEffect(() => {
    handleCalculate();
  }, []);

  return {
    calcSalaryStandard,
    calculatedSalary,
    onSubmit,
    register,
    handleSubmit,
    watch,
    setValue,
    salaries,
  };
};
