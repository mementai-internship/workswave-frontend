import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import dayjs from 'dayjs';
import React from 'react';

interface DayOffCalendarProps {
  currentDate: dayjs.Dayjs;
  view: 'dayGridMonth' | 'dayGridWeek';
}

export default function DayOffCalendar({ currentDate, view }: DayOffCalendarProps) {
  const handleDateClick = (arg: DateClickArg) => {
    alert(arg.dateStr);
  };

  return (
    <FullCalendar
      key={`${currentDate.unix()}-${view}`}
      plugins={[dayGridPlugin, interactionPlugin]}
      initialDate={currentDate.toDate()}
      initialView={view}
      dateClick={handleDateClick}
      headerToolbar={{
        left: '',
        center: '',
        right: '',
      }}
      locale="ko"
      contentHeight={800}
    />
  );
}
