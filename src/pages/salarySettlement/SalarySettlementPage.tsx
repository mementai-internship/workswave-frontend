import { ChangeMonth } from '@/components/Common/ChangeMonth';
import ContactSearchInput from '@/components/Common/ContactSearchInput';
// import Title from '@/components/Common/Title';
import TitleContainer from '@/components/Common/TitleContainer';
import CategoryDropBox from '@/components/SalarySettlement/SalaryPage/CategoryDropBox';
import SalaryTable from '@/components/SalarySettlement/SalaryTable/SalaryTable';
import { IEmployeeSalarySettlement } from '@/models/salarySettlement.model';
import { calculatePaymentDate } from '@/utils/changeSalarySettlementMonth';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export default function SalarySettlementPage() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [paymentDate, setPaymentDate] = useState(dayjs());
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedPart, setSelectedPart] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  useEffect(() => {
    setPaymentDate(calculatePaymentDate(currentDate));
  }, [currentDate]);

  // TODO: API 호출하여 직원 급여정산 데이터 받아와서 저장
  // TODO: 드롭박스에서 선택한 값 전달 받은 뒤, SalaryTable에 전달

  const handleChangeMonth = (newDate: dayjs.Dayjs) => {
    setCurrentDate(newDate);
    // backend API 연결
  };

  return (
    <div className="flex flex-col w-full">
      <TitleContainer
        content="급여정산"
        children={
          <header className="flex ml-8 gap-4">
            <ChangeMonth currentDate={currentDate} onChangeMonth={handleChangeMonth} />
            <div className="flex items-center h-10 gap-2 border rounded-md bg-white">
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
          <CategoryDropBox
            title="지점 선택"
            contents={['전체', ...DUMMY_REGION]}
            selectedValue={selectedRegion || '전체'}
            onSelect={(value) => setSelectedRegion(value === '전체' ? null : value)}
          />
          <CategoryDropBox
            title="파트 선택"
            contents={['전체', ...DUMMY_PART]}
            selectedValue={selectedPart || '전체'}
            onSelect={(value) => setSelectedPart(value === '전체' ? null : value)}
          />
          <CategoryDropBox
            title="직원"
            contents={['전체', ...DUMMY_JOB]}
            selectedValue={selectedJob || '전체'}
            onSelect={(value) => setSelectedJob(value === '전체' ? null : value)}
          />
        </div>
        <ContactSearchInput />
      </section>

      <SalaryTable
        salarySettlementData={DUMMY_DATA}
        selectedRegion={selectedRegion}
        selectedPart={selectedPart}
        selectedJob={selectedJob}
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
    region: '서울',
    job: '의사',
    name: '김예린',
    department: '피부과',
    hireDate: '2024-01-07',
    salary: 5000000,
    basePay: 4000000,
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
  {
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
  // ... 더 많은 다양한 데이터 추가 ...
];
