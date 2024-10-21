import { Button } from '@radix-ui/themes';
import { PiCaretLeft, PiCaretRight } from 'react-icons/pi';

import { useWeekSelector } from '@/hooks/DayoffManagement/useWeekSelector';

export default function WeekSelector() {
  const { startDate, endDate, handleLeftClick, handleRightClick } = useWeekSelector();

  return (
    <div className="flex items-center gap-2">
      <Button variant="soft" color="gray" onClick={handleLeftClick}>
        <PiCaretLeft />
      </Button>
      <span>
        {startDate} - {endDate}
      </span>
      <Button variant="soft" color="gray" onClick={handleRightClick}>
        <PiCaretRight />
      </Button>
    </div>
  );
}
