import { EventInput } from '@fullcalendar/core';
import dayjs from 'dayjs';
import { useState } from 'react';

import HolidayCalendar from '@/components/HolidayCalendar/HolidayCalendar';
import HolidayCalendarHeader from '@/components/HolidayCalendar/HolidayCalendarHeader';

// import { useGetMonthlyClosedDays } from '@/hooks/apis/useClosedDays';

export default function HolidayCalendarPage() {
  const [currentDate, setCurrentDate] = useState<dayjs.Dayjs>(dayjs()); // 오늘 날짜 (디폴트값)
  const [branchId, setBranchId] = useState<number>(1); // 지점 선택
  const [isSundayOff, setIsSundayOff] = useState<boolean>(false); // 설정버튼 : 일요일 휴무 여부 (추후 백엔드 연동 필요)
  const [view, setView] = useState<'dayGridMonth' | 'dayGridWeek'>('dayGridMonth'); // 월간/주간 뷰 토글

  const handleDateAndEventClick = (date: Date) => {
    setCurrentDate(dayjs(date));
    setView('dayGridWeek');
  };

  return (
    <div className="flex flex-col gap-4 h-full w-full">
      <>
        <HolidayCalendarHeader
          currDate={currentDate}
          setCurrentDate={setCurrentDate}
          branchId={branchId}
          setBranchId={setBranchId}
          view={view}
          setView={setView}
          sundayOff={isSundayOff}
          setIsSundayOff={setIsSundayOff}
        />
        <main className="flex-grow overflow-y-auto px-3 pb-3 bg-white rounded-md">
          <HolidayCalendar
            currDate={currentDate}
            view={view}
            onDateAndEventClick={handleDateAndEventClick}
            events={MOCK_EVENTS}
            isSundayOff={isSundayOff}
            branch_id={branchId}
          />
        </main>
      </>
    </div>
  );
}

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
