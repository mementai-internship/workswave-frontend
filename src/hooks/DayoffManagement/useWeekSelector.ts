import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export function useWeekSelector() {
  const [week, setWeek] = useState(0);
  const [startDate, setStartDate] = useState(dayjs().day(0).format('YYYY-MM-DD'));
  const [endDate, setEndDate] = useState(dayjs().day(6).format('YYYY-MM-DD'));

  useEffect(() => {
    setStartDate(
      dayjs()
        .day(week * 7)
        .format('YYYY-MM-DD')
    );
    setEndDate(
      dayjs()
        .day(week * 7 + 6)
        .format('YYYY-MM-DD')
    );
  }, [week]);

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
