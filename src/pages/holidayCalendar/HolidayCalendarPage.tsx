import { ChangeMonth } from '@/components/Common/ChangeMonth';
import SelectBox from '@/components/Common/Select';
import { ChangeWeek } from '@/components/HolidayCalendar/ChangeWeek';
import DayOffCalendar from '@/components/HolidayCalendar/HolidayCalendar';
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
    <div className="flex flex-col gap-4 h-full w-full">
      <header className="relative flex justify-between items-center">
        <SelectBox title="지점 선택" name="지점 선택" options={DUMMY_DROP_DOWN_MENU} />
        {view === 'dayGridMonth' ? (
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <ChangeMonth currMonth={currentDate} onChangeMonth={handleChangeMonth} />
          </div>
        ) : (
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <ChangeWeek currWeek={currentDate} onChangeWeek={handleChangeWeek} />
          </div>
        )}
        <div className="flex gap-2">
          <Button variant="surface" color="gray" size="2">
            다중 휴무등록
          </Button>
          <Button variant="surface" color="gray" size="2">
            파트타임
          </Button>
          <Button variant="surface" color="gray" size="2" onClick={handleCalendarView}>
            {view === 'dayGridMonth' ? '주간' : '월간'}
          </Button>
        </div>
      </header>

      <div className="flex-grow overflow-y-auto px-3 pb-6 bg-white rounded-md">
        <DayOffCalendar currentDate={currentDate} view={view} />
      </div>
    </div>
  );
}

const DUMMY_DROP_DOWN_MENU = [
  {
    id: 1,
    name: '뮤즈의원(강남점)',
    action: () => {
      console.log('뮤즈의원(강남점)');
    },
  },
  {
    id: 2,
    name: '뮤즈의원(수원인계점)',
    action: () => {
      console.log('뮤즈의원(수원인계점)');
    },
  },
];
