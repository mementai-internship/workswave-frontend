import Badge from '@/components/Common/LabelBadge';
import { adaptTaskToColor } from '@/utils/adaptTaskToColor';
import { EventClickArg, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import dayjs from 'dayjs';

interface IDayOffCalendarProps {
  currDate: dayjs.Dayjs;
  view: 'dayGridMonth' | 'dayGridWeek';
  onDateClick: (date: Date) => void;
  onEventClick: (date: Date) => void;
  events: EventInput[];
  isSundayOff: boolean;
}

export default function HolidayCalendar({
  currDate,
  view,
  onDateClick,
  onEventClick,
  events,
  isSundayOff,
}: IDayOffCalendarProps) {
  const handleDateClick = (arg: DateClickArg) => {
    onDateClick(arg.date);
  };

  const handleEventClick = (arg: EventClickArg) => {
    onEventClick(arg.event.start || new Date());
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
    if (isSundayOff && arg.date.getDay() === 0) {
      classes.push('text-red font-bold');
    }
    return classes;
  };

  return (
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
      eventClassNames={() => 'bg-transparent p-0 border-0'}
      dayCellClassNames={dayCellClassNames}
      dayMaxEventRows={true}
      moreLinkClassNames="text-purple-50 font-bold"
    />
  );
}
