import { Button, Tooltip } from '@radix-ui/themes';
import dayjs from 'dayjs';
import { useState } from 'react';

import { ChangeMonth } from '@/components/Common/ChangeMonth';
import ContactSearchInput from '@/components/Common/ContactSearchInput';
import TitleContainer from '@/components/Common/TitleContainer';
import CategorySelect from '@/components/SalarySettlement/SalaryPage/CategorySelect';
import SalaryTable from '@/components/SalarySettlement/SalaryTable/SalaryTable';
import { IEmployeeSalarySettlement } from '@/models/salarySettlement.model';
import { calculatePaymentDate } from '@/utils/calculatePaymentDate';

export default function SalarySettlementPage() {
  const [month, setMonth] = useState(dayjs());
  const [paymentDate, setPaymentDate] = useState(calculatePaymentDate(dayjs()));
  const [selectedRegion, setSelectedRegion] = useState<string | undefined>(undefined);
  const [selectedPart, setSelectedPart] = useState<string>();
  const [selectedJob, setSelectedJob] = useState<string>();
  const [resetTrigger, setResetTrigger] = useState(false);

  const handleChangeMonth = (newDate: dayjs.Dayjs) => {
    setMonth(newDate);
    setPaymentDate(calculatePaymentDate(newDate));
    // TODO:backend API 연결
    // 데이터를 가져오되, 해당 월에 대한 데이터만 가져오기
  };

  const resetFilters = () => {
    setSelectedRegion(undefined);
    setSelectedPart(undefined);
    setSelectedJob(undefined);
    setResetTrigger((prev) => !prev);
  };

  return (
    <div className="flex flex-col w-full">
      <TitleContainer
        content="급여정산"
        children={
          <header className="flex ml-8 gap-4">
            <ChangeMonth currMonth={month} onChangeMonth={handleChangeMonth} />
            <div className="flex items-center h-10 gap-2 bg-white border rounded-md">
              <span className="text-sm h-full flex items-center px-2 border-r border-gray-200">
                급여지급일
              </span>
              <span className="px-2 w-40 text-center">
                {paymentDate.format('YYYY년 MM월 DD일')}
              </span>
            </div>
          </header>
        }
      />

      <section className="flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <CategorySelect
            options={DUMMY_REGION}
            value={selectedRegion}
            onChange={(value: string) => {
              setSelectedRegion(value);
            }}
            placeholder="지점 선택"
          />
          <CategorySelect
            options={DUMMY_PART}
            value={selectedPart}
            onChange={(value: string) => {
              setSelectedPart(value);
            }}
            placeholder="직무 선택"
          />
          <CategorySelect
            options={DUMMY_JOB}
            value={selectedJob}
            onChange={(value: string) => {
              setSelectedJob(value);
            }}
            placeholder="직무 선택"
          />
          <Tooltip content="모든 입력값과 선택이 초기화됩니다.">
            <Button color="gray" variant="surface" size="2" onClick={resetFilters}>
              초기화
            </Button>
          </Tooltip>
        </div>
        <ContactSearchInput />
      </section>

      <SalaryTable
        salarySettlementData={DUMMY_DATA}
        selectedRegion={selectedRegion}
        selectedPart={selectedPart}
        selectedJob={selectedJob}
        resetTrigger={resetTrigger}
      />
    </div>
  );
}

// 더미 데이터

const DUMMY_REGION = ['서울', '경기', '인천'];
const DUMMY_PART = ['피부과', '내과', '총무'];
const DUMMY_JOB = ['의사', '간호사', '기타'];

const DUMMY_DATA: IEmployeeSalarySettlement[] = [
  {
    id: '1',
    region: '서울',
    job: '의사',
    name: '김예린',
    department: '피부과',
    hireDate: '2024-01-08',
    resignDate: '2024-01-07',
    salary: 5000000,
    basePay: 4000000,
    comprehensiveOvertimePay: 5000000,
    annualLeavePay: 20000000,
    holidayPay: 2000000,
    jobAllowance: 3000000,
    incentive: 0,
    attendanceDeduction: 0,
    previousMonthUnpaid: 0,
    overtimePay: 0,
    weekendWorkPay: 0,
    isSelected: false,
  },
  {
    id: '2',
    region: '경기',
    job: '간호사',
    name: '이지원',
    department: '내과',
    hireDate: '2024-02-15',
    salary: 3500000,
    basePay: 3000000,
    comprehensiveOvertimePay: 300000,
    annualLeavePay: 0,
    holidayPay: 0,
    jobAllowance: 200000,
    incentive: 0,
    attendanceDeduction: 0,
    previousMonthUnpaid: 0,
    overtimePay: 0,
    weekendWorkPay: 0,
    isSelected: false,
  },
  {
    id: '3',
    region: '인천',
    job: '기타',
    name: '박민수',
    department: '총무',
    hireDate: '2024-03-01',
    salary: 2800000,
    basePay: 2500000,
    comprehensiveOvertimePay: 200000,
    annualLeavePay: 0,
    holidayPay: 0,
    jobAllowance: 100000,
    incentive: 0,
    attendanceDeduction: 0,
    previousMonthUnpaid: 0,
    overtimePay: 0,
    weekendWorkPay: 0,
    isSelected: false,
  },
  {
    id: '4',
    region: '서울',
    job: '간호사',
    name: '최수진',
    department: '피부과',
    hireDate: '2024-04-10',
    salary: 3200000,
    basePay: 2800000,
    comprehensiveOvertimePay: 250000,
    annualLeavePay: 0,
    holidayPay: 0,
    jobAllowance: 150000,
    incentive: 0,
    attendanceDeduction: 0,
    previousMonthUnpaid: 0,
    overtimePay: 0,
    weekendWorkPay: 0,
    isSelected: false,
  },
  {
    id: '5',
    region: '경기',
    job: '의사',
    name: '정태훈',
    department: '내과',
    hireDate: '2024-05-20',
    salary: 4800000,
    basePay: 4000000,
    comprehensiveOvertimePay: 500000,
    annualLeavePay: 0,
    holidayPay: 0,
    jobAllowance: 300000,
    incentive: 0,
    attendanceDeduction: 0,
    previousMonthUnpaid: 0,
    overtimePay: 0,
    weekendWorkPay: 0,
    isSelected: false,
  },
  {
    id: '6',
    region: '인천',
    job: '의사',
    name: '송미란',
    department: '내과',
    hireDate: '2023-11-01',
    salary: 5200000,
    basePay: 4200000,
    comprehensiveOvertimePay: 550000,
    annualLeavePay: 0,
    holidayPay: 150000,
    jobAllowance: 300000,
    incentive: 0,
    attendanceDeduction: 0,
    previousMonthUnpaid: 0,
    overtimePay: 0,
    weekendWorkPay: 0,
    isSelected: false,
  },
  {
    id: '7',
    region: '서울',
    job: '기타',
    name: '강동훈',
    department: '총무',
    hireDate: '2023-12-15',
    salary: 3000000,
    basePay: 2700000,
    comprehensiveOvertimePay: 200000,
    annualLeavePay: 0,
    holidayPay: 0,
    jobAllowance: 100000,
    incentive: 0,
    attendanceDeduction: 0,
    previousMonthUnpaid: 0,
    overtimePay: 0,
    weekendWorkPay: 0,
    isSelected: false,
  },
  {
    id: '8',
    region: '경기',
    job: '간호사',
    name: '이수연',
    department: '피부과',
    hireDate: '2024-01-20',
    salary: 3300000,
    basePay: 2900000,
    comprehensiveOvertimePay: 250000,
    annualLeavePay: 0,
    holidayPay: 0,
    jobAllowance: 150000,
    incentive: 0,
    attendanceDeduction: 0,
    previousMonthUnpaid: 0,
    overtimePay: 0,
    weekendWorkPay: 0,
    isSelected: false,
  },
  {
    id: '9',
    region: '인천',
    job: '간호사',
    name: '박준호',
    department: '내과',
    hireDate: '2024-02-05',
    salary: 3400000,
    basePay: 3000000,
    comprehensiveOvertimePay: 250000,
    annualLeavePay: 0,
    holidayPay: 0,
    jobAllowance: 150000,
    incentive: 0,
    attendanceDeduction: 0,
    previousMonthUnpaid: 0,
    overtimePay: 0,
    weekendWorkPay: 0,
    isSelected: false,
  },
  {
    id: '10',
    region: '서울',
    job: '의사',
    name: '정혜원',
    department: '피부과',
    hireDate: '2023-10-10',
    salary: 5100000,
    basePay: 4100000,
    comprehensiveOvertimePay: 500000,
    annualLeavePay: 0,
    holidayPay: 200000,
    jobAllowance: 300000,
    incentive: 0,
    attendanceDeduction: 0,
    previousMonthUnpaid: 0,
    overtimePay: 0,
    weekendWorkPay: 0,
    isSelected: false,
  },
];
