import dayjs from 'dayjs';
import { useState } from 'react';

export function useWeekSelector() {
  const [week, setWeek] = useState(0);

  const startDate = dayjs()
    .day(week * 7)
    .format('YYYY-MM-DD');
  const endDate = dayjs()
    .day(week * 7 + 6)
    .format('YYYY-MM-DD');

  const handleLeftClick = () => {
    setWeek((prevWeek) => prevWeek - 1);
  };

  const handleRightClick = () => {
    setWeek((prevWeek) => prevWeek + 1);
  };

  return {
    week,
    startDate,
    endDate,
    handleLeftClick,
    handleRightClick,
  };
}
