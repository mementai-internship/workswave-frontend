import dayjs from 'dayjs';

export type TMonthChange = 'prev' | 'next';

interface ChangeSalarySettlementMonthProps {
  currentDate: dayjs.Dayjs;
  onChangeMonth: (newDate: dayjs.Dayjs) => void;
}

export function ChangeMonth({ currentDate, onChangeMonth }: ChangeSalarySettlementMonthProps) {
  const handleMonthChange = (direction: TMonthChange) => {
    const newDate =
      direction === 'prev' ? currentDate.subtract(1, 'month') : currentDate.add(1, 'month');
    onChangeMonth(newDate);
  };

  return (
    <div className="flex items-center h-10 border rounded-md ml-10">
      <button onClick={() => handleMonthChange('prev')} className="px-2 py-1">
        &lt;
      </button>
      <span className="px-4 py-2 w-32 text-center">{currentDate.format('YYYY년 M월')}</span>
      <button onClick={() => handleMonthChange('next')} className="px-2 py-1">
        &gt;
      </button>
    </div>
  );
}
