import { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';

interface IChangeWeekProps {
  currWeek: Dayjs;
  onChangeWeek: (newDate: Dayjs) => void;
}

export function ChangeWeek({ currWeek, onChangeWeek }: IChangeWeekProps) {
  const [weekRange, setWeekRange] = useState<string>('');

  useEffect(() => {
    const startOfWeek = currWeek.startOf('week');
    const endOfWeek = currWeek.endOf('week');
    const formattedStart = startOfWeek.format('M월 D일');
    const formattedEnd = endOfWeek.format('M월 D일');
    setWeekRange(`${formattedStart} - ${formattedEnd}`);
  }, [currWeek]);

  const goToPreviousWeek = () => {
    onChangeWeek(currWeek.subtract(1, 'week'));
  };

  const goToNextWeek = () => {
    onChangeWeek(currWeek.add(1, 'week'));
  };

  return (
    <div className="flex w-60 items-center h-10 border rounded-md bg-white">
      <button onClick={goToPreviousWeek} className="px-2 py-1">
        &lt;
      </button>
      <span className="px-4 py-2 w-full text-center">{weekRange}</span>
      <button onClick={goToNextWeek} className="px-2 py-1">
        &gt;
      </button>
    </div>
  );
}
