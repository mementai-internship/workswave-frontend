import { ChangeMonth } from '@/components/Common/ChangeMonth';
import SelectBox from '@/components/Common/Select';
import { ChangeWeek } from '@/components/HolidayCalendar/ChangeWeek';
import HolidayCalendar from '@/components/HolidayCalendar/HolidayCalendar';
import HolidayRegisterModal from '@/components/HolidayCalendar/HolidayRegisterModal';
import { EventInput } from '@fullcalendar/core';
import { Button, Popover, Switch } from '@radix-ui/themes';
import dayjs from 'dayjs';
import { useState } from 'react';
import { PiGear } from 'react-icons/pi';

export default function DayOffCalendarPage() {
  const [currentDate, setCurrentDate] = useState<dayjs.Dayjs>(dayjs());
  const [view, setView] = useState<'dayGridMonth' | 'dayGridWeek'>('dayGridMonth');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSundayOff, setIsSundayOff] = useState<boolean>(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleCalendarView = () => {
    setView((prevView) => (prevView === 'dayGridMonth' ? 'dayGridWeek' : 'dayGridMonth'));
  };

  const handleRegisterHoliday = (holidays: { employee: string; dates: Date[] }[]) => {
    console.log('등록된 휴가:', holidays);
  };

  const handleDateClick = (date: Date) => {
    setCurrentDate(dayjs(date));
    setView('dayGridWeek');
  };

  const handleEventClick = (date: Date) => {
    setCurrentDate(dayjs(date));
    setView('dayGridWeek');
  };

  return (
    <div className="flex flex-col gap-4 h-full w-full">
      <header className="relative flex justify-between items-center">
        <SelectBox title="지점 선택" name="지점 선택" options={DUMMY_DROP_DOWN_MENU} />
        {view === 'dayGridMonth' ? (
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <ChangeMonth
              currMonth={currentDate}
              onChangeMonth={(newDate: dayjs.Dayjs) => {
                setCurrentDate(newDate);
              }}
            />
          </div>
        ) : (
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <ChangeWeek
              currWeek={currentDate}
              onChangeWeek={(newDate: dayjs.Dayjs) => {
                setCurrentDate(newDate);
              }}
            />
          </div>
        )}
        <div className="flex gap-2">
          <Popover.Root>
            <Popover.Trigger>
              <Button variant="surface" color="gray" size="2">
                <PiGear className="w-4 h-4" />
              </Button>
            </Popover.Trigger>
            <Popover.Content>
              <div className="w-48 p-1">
                <div className="flex items-center justify-between">
                  <span>일요일 지점 휴무</span>
                  <Switch checked={isSundayOff} onCheckedChange={setIsSundayOff} />
                </div>
              </div>
            </Popover.Content>
          </Popover.Root>
          <Button variant="surface" color="gray" size="2" onClick={handleModalOpen}>
            지점 휴무 등록
          </Button>
          <Button variant="surface" color="gray" size="2">
            파트타임
          </Button>
          <Button variant="surface" color="gray" size="2" onClick={handleCalendarView}>
            {view === 'dayGridMonth' ? '주간' : '월간'}
          </Button>
        </div>
      </header>

      <div className="flex-grow overflow-y-auto px-3 pb-3 bg-white rounded-md">
        <HolidayCalendar
          currDate={currentDate}
          view={view}
          onDateClick={handleDateClick}
          onEventClick={handleEventClick}
          events={MOCK_EVENTS}
          isSundayOff={isSundayOff}
        />
      </div>
      <HolidayRegisterModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        employees={DUMMY_EMPLOYEES}
        onRegisterHoliday={handleRegisterHoliday}
        currentDate={currentDate.toDate()}
      />
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

const DUMMY_EMPLOYEES = [
  {
    id: '1',
    name: '직원1',
  },
  {
    id: '2',
    name: '직원2',
  },
];

const MOCK_EVENTS: EventInput[] = [
  {
    id: '1',
    title: '김철수',
    start: '2024-10-01',
    end: '2024-10-04',
    task: '의사',
  },
  {
    id: '2',
    title: '이영희',
    start: '2024-10-09',
    task: '간호사',
  },
  {
    id: '3',
    title: '박지성',
    start: '2024-10-09',
    task: '코디',
  },
  {
    id: '4',
    title: '손흥민',
    start: '2024-10-09',
    task: '피부',
  },
  {
    id: '5',
    title: '정우성',
    start: '2024-10-09',
    task: '상담',
  },
  {
    id: '6',
    title: '전지현',
    start: '2024-10-09',
    task: '의사',
  },
  {
    id: '7',
    title: '유재석',
    start: '2024-10-09',
    task: '간호사',
  },
  {
    id: '8',
    title: '강호동',
    start: '2024-10-09',
    task: '코디',
  },
  {
    id: '9',
    title: '이효리',
    start: '2024-10-09',
    task: '피부',
  },
  {
    id: '10',
    title: '송중기',
    start: '2024-10-09',
    task: '상담',
  },
  {
    id: '11',
    title: '송혜교',
    start: '2024-10-09',
    task: '의사',
  },
  {
    id: '12',
    title: '공유',
    start: '2024-10-09',
    task: '간호사',
  },
  {
    id: '13',
    title: '김태희',
    start: '2024-10-16',
    end: '2024-09-18',
    task: '코디',
  },
  {
    id: '14',
    title: '비',
    start: '2024-10-25',
    task: '피부',
  },
];
