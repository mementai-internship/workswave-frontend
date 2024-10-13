import Title from '@/components/Common/Title';
import SalaryPageHadder from '@/components/SalarySettlement/SalaryPage/SalaryPageHadder';
import SalaryTable from '@/components/SalarySettlement/SalaryTable/SalaryTable';
import { TMonthSelect } from '@/components/SalarySettlement/SalaryTable/const';
import { IEmployeeSalarySettlement } from '@/models/salarySettlement.model';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export default function SalarySettlementPage() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [paymentDate, setPaymentDate] = useState(dayjs());

  useEffect(() => {
    const calculatePaymentDate = (date: dayjs.Dayjs) => {
      let payDate = date.date(10);
      while (payDate.day() === 0 || payDate.day() === 6) {
        payDate = payDate.subtract(1, 'day');
      }
      return payDate;
    };

    setPaymentDate(calculatePaymentDate(currentDate));
  }, [currentDate]);

  // TODO: API 호출하여 직원 급여정산 데이터 받아와서 저장
  // TODO: 드롭박스에서 선택한 값 전달 받은 뒤, SalaryTable에 전달

  const changeMonth = async (direction: TMonthSelect) => {
    const newDate =
      direction === 'prev' ? currentDate.subtract(1, 'month') : currentDate.add(1, 'month');
    setCurrentDate(newDate);

    // try {
    //   await axios.post('/api/salary-data', {
    //     year: newDate.year(),
    //     month: newDate.month() + 1
    //   });
    //  // TODO : 직원 급여데이터 전처리
    // } catch (error) {
    //   console.error('API 호출 중 오류 발생:', error);
    // }
  };

  return (
    <div className="flex flex-col max-w-[1720px] p-4">
      <section className="flex flex-row items-center gap-4">
        <Title content="급여정산" />
        <div className="flex items-center h-10 border rounded-md ml-10">
          <button onClick={() => changeMonth('prev')} className="px-2 py-1">
            &lt;
          </button>
          <span className="px-4 py-2 w-32 text-center">{currentDate.format('YYYY년 M월')}</span>
          <button onClick={() => changeMonth('next')} className="px-2 py-1">
            &gt;
          </button>
        </div>
        <div className="flex items-center h-10 gap-2 border rounded-md">
          <span className="text-sm bg-gray-10 h-full flex items-center px-2">급여지급일</span>
          <span className="px-2 w-40 text-center">{paymentDate.format('YYYY년 MM월 DD일')}</span>
        </div>
      </section>

      <SalaryPageHadder />
      <SalaryTable salarySettlementData={DUMMY_DATA} />
    </div>
  );
}

// 더미 데이터
const DUMMY_DATA: IEmployeeSalarySettlement[] = [
  {
    name: '김예린',
    department: '인사팀',
    hireDate: '2024-10-07',
    resignDate: '2024-11-07',
    salary: 3000000,
    basePay: 2500000,
    comprehensiveOvertimePay: 300000,
    annualLeavePay: 0,
    holidayPay: 0,
    jobAllowance: 200000,
    incentive: 0,
    attendanceDeduction: 0,
    previousMonthUnpaid: 0,
    overtimePay: 0,
    weekendWorkPay: 0,
  },
  {
    name: '메멘트',
    department: '비서팀',
    hireDate: '2024-08-07',
    salary: 3000000,
    basePay: 2500000,
    comprehensiveOvertimePay: 300000,
    annualLeavePay: 0,
    holidayPay: 0,
    jobAllowance: 200000,
    incentive: 0,
    attendanceDeduction: 0,
    previousMonthUnpaid: 0,
    overtimePay: 0,
    weekendWorkPay: 0,
  },
  {
    name: '웨이브',
    department: '총무팀',
    hireDate: '2024-10-07',
    salary: 3000000,
    basePay: 2500000,
    comprehensiveOvertimePay: 300000,
    annualLeavePay: 0,
    holidayPay: 0,
    jobAllowance: 200000,
    incentive: 0,
    attendanceDeduction: 0,
    previousMonthUnpaid: 0,
    overtimePay: 0,
    weekendWorkPay: 0,
  },
  {
    name: '가나다라마바',
    department: '총무팀',
    hireDate: '2024-10-07',
    salary: 3000000,
    basePay: 2500000,
    comprehensiveOvertimePay: 300000,
    annualLeavePay: 0,
    holidayPay: 0,
    jobAllowance: 200000,
    incentive: 0,
    attendanceDeduction: 0,
    previousMonthUnpaid: 0,
    overtimePay: 0,
    weekendWorkPay: 0,
  },
  {
    name: '가나다라마',
    department: '총무팀',
    hireDate: '2024-10-07',
    salary: 3000000,
    basePay: 2500000,
    comprehensiveOvertimePay: 300000,
    annualLeavePay: 0,
    holidayPay: 0,
    jobAllowance: 200000,
    incentive: 0,
    attendanceDeduction: 0,
    previousMonthUnpaid: 0,
    overtimePay: 0,
    weekendWorkPay: 0,
  },
  {
    name: '웨이브',
    department: '총무팀',
    hireDate: '2024-10-07',
    salary: 3000000,
    basePay: 2500000,
    comprehensiveOvertimePay: 300000,
    annualLeavePay: 0,
    holidayPay: 0,
    jobAllowance: 200000,
    incentive: 0,
    attendanceDeduction: 0,
    previousMonthUnpaid: 0,
    overtimePay: 0,
    weekendWorkPay: 0,
  },
  {
    name: '웨이브',
    department: '총무팀',
    hireDate: '2024-10-07',
    salary: 3000000,
    basePay: 2500000,
    comprehensiveOvertimePay: 300000,
    annualLeavePay: 0,
    holidayPay: 0,
    jobAllowance: 200000,
    incentive: 0,
    attendanceDeduction: 0,
    previousMonthUnpaid: 0,
    overtimePay: 0,
    weekendWorkPay: 0,
  },
  {
    name: '웨이브',
    department: '총무팀',
    hireDate: '2024-10-07',
    salary: 3000000,
    basePay: 2500000,
    comprehensiveOvertimePay: 300000,
    annualLeavePay: 0,
    holidayPay: 0,
    jobAllowance: 200000,
    incentive: 0,
    attendanceDeduction: 0,
    previousMonthUnpaid: 0,
    overtimePay: 0,
    weekendWorkPay: 0,
  },
  {
    name: '웨이브',
    department: '총무팀',
    hireDate: '2024-10-07',
    salary: 3000000,
    basePay: 2500000,
    comprehensiveOvertimePay: 300000,
    annualLeavePay: 0,
    holidayPay: 0,
    jobAllowance: 200000,
    incentive: 0,
    attendanceDeduction: 0,
    previousMonthUnpaid: 0,
    overtimePay: 0,
    weekendWorkPay: 0,
  },
  {
    name: '웨이브',
    department: '총무팀',
    hireDate: '2024-10-07',
    salary: 3000000,
    basePay: 2500000,
    comprehensiveOvertimePay: 300000,
    annualLeavePay: 0,
    holidayPay: 0,
    jobAllowance: 200000,
    incentive: 0,
    attendanceDeduction: 0,
    previousMonthUnpaid: 0,
    overtimePay: 0,
    weekendWorkPay: 0,
  },
  {
    name: '마지막',
    department: '총무팀',
    hireDate: '9999-99-99',
    salary: 9999999,
    basePay: 9999999,
    comprehensiveOvertimePay: 300000,
    annualLeavePay: 0,
    holidayPay: 0,
    jobAllowance: 200000,
    incentive: 0,
    attendanceDeduction: 0,
    previousMonthUnpaid: 0,
    overtimePay: 0,
    weekendWorkPay: 0,
  },
];
