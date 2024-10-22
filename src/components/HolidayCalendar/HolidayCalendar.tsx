import { EventClickArg, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import dayjs from 'dayjs';

import Badge from '@/components/Common/LabelBadge';
import { Txt } from '@/components/Common/Txt';
import { useGetClosedDays } from '@/hooks/apis/useClosedDays';
import { TClosedDay } from '@/models/closedDays.model';
import { adaptTaskToColor } from '@/utils/adaptTaskToColor';

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
  const { data: holidays, isLoading } = useGetClosedDays({ branch_id });

  const handleDateClick = (arg: DateClickArg) => {
    onDateAndEventClick(arg.date);
  };

  const handleEventClick = (arg: EventClickArg) => {
    onDateAndEventClick(arg.event.start || new Date());
  };

  const renderEventContent = (eventInfo: {
    event: { title: string; extendedProps: { task: string; isHoliday?: boolean } };
  }) => {
    if (eventInfo.event.extendedProps.isHoliday) {
      if (view === 'dayGridWeek') {
        return (
          <div className="w-full text-center pt-0.5 mb-1 border bg-red rounded">
            <Txt variant="h6" color="white">
              정규 휴무
            </Txt>
          </div>
        );
      }
      return null;
    }

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

  // 휴일 이벤트 생성
  const holidayEvents =
    holidays?.data?.map((holiday: TClosedDay) => ({
      title: '지점 휴무일',
      start: holiday.closed_day_date,
      allDay: true,
      extendedProps: { isHoliday: true },
      display: view === 'dayGridWeek' ? 'block' : 'background',
      backgroundColor: '#FDE8EC',
    })) || [];

  // 기존 이벤트와 휴일 이벤트 합치기
  const allEvents = [...events, ...holidayEvents];

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
      {!isLoading && (
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
          events={allEvents}
          eventClassNames={() => 'bg-transparent border-0 p-0 font-bold'}
          dayCellClassNames={dayCellClassNames}
          dayMaxEventRows={true}
          moreLinkClassNames="text-purple-50 font-bold"
          eventOrder="isHoliday,-start"
        />
      )}
    </>
  );
}
