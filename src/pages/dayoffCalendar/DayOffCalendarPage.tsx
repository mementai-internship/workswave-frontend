import { ChangeMonth } from '@/components/Common/ChangeMonth';
import { ChangeWeek } from '@/components/DayOffCalendar/ChangeWeek';
import DayOffCalendar from '@/components/DayOffCalendar/DayOffCalendar';
import { Button } from '@radix-ui/themes';
import dayjs from 'dayjs';
import { useState } from 'react';

export default function DayOffCalendarPage() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [view, setView] = useState<'dayGridMonth' | 'dayGridWeek'>('dayGridMonth');

  const handleChangeMonth = (newDate: dayjs.Dayjs) => {
    setCurrentDate(newDate);
  };

  const handleChangeWeek = (newDate: dayjs.Dayjs) => {
    setCurrentDate(newDate);
  };

  const handleCalendarView = () => {
    setView((prevView) => (prevView === 'dayGridMonth' ? 'dayGridWeek' : 'dayGridMonth'));
  };

  return (
    <div className="flex flex-col gap-4 h-full">
      <header className="relative flex justify-between items-center">
        <div>드롭박스</div>
        {view === 'dayGridMonth' ? (
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <ChangeMonth currentDate={currentDate} onChangeMonth={handleChangeMonth} />
          </div>
        ) : (
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <ChangeWeek currentDate={currentDate} onChangeWeek={handleChangeWeek} />
          </div>
        )}
        <div className="flex gap-2">
          <Button variant="surface" color="gray">
            다중 휴무등록
          </Button>
          <Button variant="surface" color="gray">
            파트타임
          </Button>
          <Button variant="surface" color="gray" onClick={handleCalendarView}>
            {view === 'dayGridMonth' ? '주간' : '월간'}
          </Button>
        </div>
      </header>

      <div className="flex-grow h-full overflow-y-auto">
        <DayOffCalendar currentDate={currentDate} view={view} />
      </div>
    </div>
  );
}
