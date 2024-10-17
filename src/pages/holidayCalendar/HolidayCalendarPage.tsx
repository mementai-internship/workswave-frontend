import { ChangeMonth } from '@/components/Common/ChangeMonth';
import SelectBox from '@/components/Common/Select';
import { ChangeWeek } from '@/components/HolidayCalendar/ChangeWeek';
import EmployeeHolidayRegisterModal from '@/components/HolidayCalendar/EmployeeHolidayRegisterModal';
import HolidayCalendar from '@/components/HolidayCalendar/HolidayCalendar';
import { EventInput } from '@fullcalendar/core';
import { Button, Popover, Switch } from '@radix-ui/themes';
import { ko } from 'date-fns/locale';
import dayjs from 'dayjs';
import { useState } from 'react';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';
import { PiGear } from 'react-icons/pi';

export default function DayOffCalendarPage() {
  const defaultClassNames = getDefaultClassNames(); // react-day-picker 에서 tailwind 사용을 위한 선언
  const [currentDate, setCurrentDate] = useState<dayjs.Dayjs>(dayjs()); // 오늘 날짜 (디폴트값)
  const [holidays, setHolidays] = useState<Date[]>([]); // 백엔드에서 받아오는 휴무일 데이터

  const [isSundayOff, setIsSundayOff] = useState<boolean>(false); // 설정버튼 : 일요일 휴무 여부 (추후 백엔드 연동 필요)

  const [branchModalOpen, setBranchModalOpen] = useState<boolean>(false); // 휴무일 지정 : 모달 온오프
  const [branchModalMonth, setBranchModalMonth] = useState<Date>(currentDate.toDate()); // 휴무일 지정 : 모달의 day-picker로 선택된 월
  const [tempSelectedHolidays, setTempSelectedHolidays] = useState<Date[]>([]); // 휴무일 지정 : 모달에서 선택한 휴무일

  const [employeeModalOpen, setEmployeeModalOpen] = useState<boolean>(false); // 다중 휴무 등록 : 모달 온오프
  const [view, setView] = useState<'dayGridMonth' | 'dayGridWeek'>('dayGridMonth'); // 월간/주간 뷰 토글

  const handleCalendarView = () => {
    setView((prevView) => (prevView === 'dayGridMonth' ? 'dayGridWeek' : 'dayGridMonth'));
  };

  const handleDateAndEventClick = (date: Date) => {
    setCurrentDate(dayjs(date));
    setView('dayGridWeek');
  };

  // 휴무일 지정 Btn 로직
  const handleBranchModalClose = () => {
    setTempSelectedHolidays(tempSelectedHolidays);
    setBranchModalOpen(false);
  };

  const handleBranchModalOpen = () => {
    setTempSelectedHolidays(tempSelectedHolidays);
    setBranchModalMonth(currentDate.toDate());
    setBranchModalOpen(true);
  };

  const handleTempHolidaySelection = (dates: Date[] | undefined) => {
    setTempSelectedHolidays(dates || []);
  };

  const handleHolidayReset = () => {
    const currentMonth = dayjs(branchModalMonth).month();
    const currentYear = dayjs(branchModalMonth).year();
    const updatedHolidays = tempSelectedHolidays.filter((date) => {
      const holidayDate = dayjs(date);
      return holidayDate.month() !== currentMonth || holidayDate.year() !== currentYear;
    });
    setTempSelectedHolidays(updatedHolidays);
  };

  const handleBranchHolidayRegister = () => {
    // TODO: 백엔드에서 받아온 휴무일 데이터 + 새롭게 등록/삭제하는 휴무일에 대해서 어떻게 처리할 지 고민
    // 현재는 새롭게 등록하는 휴무일에 대해서만 처리
    setHolidays(tempSelectedHolidays);
    setBranchModalOpen(false);
    console.log('휴무일 등록 (지점):', tempSelectedHolidays);
  };

  // 다중 휴무 등록 Btn 로직
  const handleEmployeeModalOpen = () => {
    setEmployeeModalOpen(true);
  };

  const handleEmployeeModalClose = () => {
    setEmployeeModalOpen(false);
  };

  const handleEmployeeHolidayRegister = (holidays: { employee: string; dates: Date[] }[]) => {
    console.log('다중 휴무 등록 (직원):', holidays);
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

          <Popover.Root open={branchModalOpen} onOpenChange={setBranchModalOpen}>
            <Popover.Trigger>
              <Button variant="surface" color="gray" size="2" onClick={handleBranchModalOpen}>
                휴무일 지정
              </Button>
            </Popover.Trigger>
            <Popover.Content>
              <div className="p-4">
                <DayPicker
                  mode="multiple"
                  selected={tempSelectedHolidays}
                  onSelect={handleTempHolidaySelection}
                  locale={ko}
                  defaultMonth={currentDate.toDate()}
                  month={branchModalMonth}
                  onMonthChange={setBranchModalMonth}
                  formatters={{
                    formatCaption: (date: Date) => dayjs(date).format('YYYY년 MM월'),
                  }}
                  classNames={{
                    day: 'p-1 text-lg',
                    today: `font-bold text-xl text-amber-500`,
                    selected: `bg-purple-10 rounded-full`,
                    root: `${defaultClassNames.root}`,
                    chevron: `${defaultClassNames.chevron} fill-purple-30`,
                  }}
                />
                <div className="mt-4 flex justify-between">
                  <Button variant="soft" color="gray" onClick={handleBranchModalClose}>
                    닫기
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="soft" color="gray" onClick={handleHolidayReset}>
                      초기화
                    </Button>
                    <Button onClick={handleBranchHolidayRegister}>등록</Button>
                  </div>
                </div>
              </div>
            </Popover.Content>
          </Popover.Root>

          <Button variant="surface" color="gray" size="2" onClick={handleEmployeeModalOpen}>
            다중 휴무 등록
          </Button>
          {/* <Button variant="surface" color="gray" size="2">
            파트타임
          </Button> */}

          <Button variant="surface" color="gray" size="2" onClick={handleCalendarView}>
            {view === 'dayGridMonth' ? '주간' : '월간'}
          </Button>
        </div>

        <EmployeeHolidayRegisterModal
          isOpen={employeeModalOpen}
          onClose={handleEmployeeModalClose}
          employees={DUMMY_EMPLOYEES}
          onRegisterHoliday={handleEmployeeHolidayRegister}
          currDate={currentDate}
        />
      </header>

      <main className="flex-grow overflow-y-auto px-3 pb-3 bg-white rounded-md">
        <HolidayCalendar
          currDate={currentDate}
          view={view}
          onDateAndEventClick={handleDateAndEventClick}
          events={MOCK_EVENTS}
          isSundayOff={isSundayOff}
          holidays={holidays}
        />
      </main>
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
