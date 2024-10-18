import { EventClickArg, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import dayjs from 'dayjs';
import { useEffect } from 'react';

import Badge from '@/components/Common/LabelBadge';
import { useGetClosedDays } from '@/hooks/apis/useClosedDays';
import { TClosedDay } from '@/models/closedDays.model';
import { adaptTaskToColor } from '@/utils/adaptTaskToColor';

// import { useGetMonthlyClosedDays } from '@/hooks/apis/useClosedDays';

interface IHolidayCalendarProps {
  currDate: dayjs.Dayjs;
  view: 'dayGridMonth' | 'dayGridWeek';
  onDateAndEventClick: (date: Date) => void;
  events: EventInput[];
  isSundayOff: boolean;
  branch_id: number;
}

export default function HolidayCalendar({
  currDate,
  view,
  onDateAndEventClick,
  events,
  isSundayOff,
  branch_id,
}: IHolidayCalendarProps) {
  const { data: holidays, refetch: refetchHoliDays, isLoading } = useGetClosedDays({ branch_id });
  // const { data: holidays, refetch } = useGetMonthlyClosedDays({ branch_id, date: currDate.toDate() });  // 월별 휴무일 조회

  useEffect(() => {
    console.log('%c refetch 실행', 'color: green; font-size: 15px;');
    refetchHoliDays();
  }, [currDate, branch_id, refetchHoliDays]);

  const handleDateClick = (arg: DateClickArg) => {
    onDateAndEventClick(arg.date);
  };

  const handleEventClick = (arg: EventClickArg) => {
    onDateAndEventClick(arg.event.start || new Date());
  };

  const renderEventContent = (eventInfo: {
    event: { title: string; extendedProps: { task: string } };
  }) => {
    const taskColor = adaptTaskToColor(eventInfo.event.extendedProps.task);
    return (
      <div className="text-black bg-transparent overflow-hidden text-ellipsis whitespace-nowrap flex items-center">
        <Badge
          color={taskColor}
          radius="full"
          size={1}
          variant="solid"
          text={eventInfo.event.extendedProps.task.slice(0, 2)}
        />
        <span className="ml-1">{eventInfo.event.title}</span>
      </div>
    );
  };

  const dayCellClassNames = (arg: {
    date: Date;
    isOther: boolean;
    isFuture: boolean;
    isPast: boolean;
    isToday: boolean;
  }) => {
    const classes = ['overflow-hidden'];
    if (
      (isSundayOff && arg.date.getDay() === 0) ||
      (holidays?.data &&
        holidays.data.some((holiday: TClosedDay) =>
          dayjs(holiday.closed_day_date).isSame(arg.date, 'day')
        ))
    ) {
      classes.push('text-red font-bold bg-[#FDE8EC]');
    }
    return classes;
  };

  return (
    <>
      {isLoading && (
        <FullCalendar
          locale="ko"
          key={`${currDate.unix()}-${view}`}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialDate={currDate.toDate()}
          initialView={view}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          eventContent={renderEventContent}
          headerToolbar={{
            left: '',
            center: '',
            right: '',
          }}
          contentHeight="88vh"
          events={events}
          eventClassNames={() => 'bg-transparent border-0 p-0 font-bold'}
          dayCellClassNames={dayCellClassNames}
          dayMaxEventRows={true}
          moreLinkClassNames="text-purple-50 font-bold"
        />
      )}
    </>
  );
}
