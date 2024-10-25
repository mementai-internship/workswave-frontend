import dayjs from 'dayjs';

import { Txt } from '@/components/Common/Txt';

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
    <div className="flex items-center justify-between w-48 h-10 bg-white border rounded-md">
      <button onClick={() => handleMonthChange('prev')} className="w-8 h-10 pt-1 text-xl border-r">
        &lt;
      </button>
      <Txt variant="subtitle1" className="pt-1">
        {currMonth.format('YYYY년 M월')}
      </Txt>
      <button onClick={() => handleMonthChange('next')} className="w-8 h-10 pt-1 text-xl border-l">
        &gt;
      </button>
    </div>
  );
}

export function ChangeMonthNone({ currMonth, onChangeMonth }: IChangeSalarySettlementMonthProps) {
  const handleMonthChange = (direction: TMonthChange) => {
    const newDate =
      direction === 'prev' ? currMonth.subtract(1, 'month') : currMonth.add(1, 'month');
    onChangeMonth(newDate);
  };

  return (
    <div className="flex items-center justify-center h-10 gap-5 w-60">
      <button onClick={() => handleMonthChange('prev')} className="px-1 pt-1 text-3xl text-gray-50">
        &lt;
      </button>
      <Txt variant="h4">{currMonth.format('YYYY년 M월')}</Txt>
      <button onClick={() => handleMonthChange('next')} className="px-1 pt-1 text-3xl text-gray-50">
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
