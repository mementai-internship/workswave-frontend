import dayjs from 'dayjs';

export type TMonthChange = 'prev' | 'next';

interface IChangeSalarySettlementMonthProps {
  currMonth: dayjs.Dayjs;
  onChangeMonth: (newDate: dayjs.Dayjs) => void;
}

export function ChangeMonth({ currMonth, onChangeMonth }: IChangeSalarySettlementMonthProps) {
  const handleMonthChange = (direction: TMonthChange) => {
    const newDate =
      direction === 'prev' ? currMonth.subtract(1, 'month') : currMonth.add(1, 'month');
    onChangeMonth(newDate);
  };

  return (
    <div className="flex w-48 items-center justify-center h-10 bg-white border rounded-md">
      <button onClick={() => handleMonthChange('prev')} className="p-2">
        &lt;
      </button>
      <span className="px-4 py-2 w-32 text-center">{currMonth.format('YYYY년 M월')}</span>
      <button onClick={() => handleMonthChange('next')} className="p-2">
        &gt;
      </button>
    </div>
  );
}

// 사용 방법
// import dayjs from 'dayjs';
// import { useState } from 'react';

// export default function SomethingComponent() {
//   const [currentDate, setCurrentDate] = useState(dayjs());   // 현재 월 선택

//   const handleChangeMonth = (newDate: dayjs.Dayjs) => {
//     setCurrentDate(newDate);                                 // 컴포넌트를 통해 변경된 월에 대한 값 저장
//     // 이후 코드로 월 변경 시 데이터를 받아올 backend API 호출
//   };

//   return (
//         <ChangeMonth currentDate={currentDate} onChangeMonth={handleChangeMonth} />
//   );
// }
