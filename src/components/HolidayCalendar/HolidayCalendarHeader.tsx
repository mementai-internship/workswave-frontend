import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import dayjs from 'dayjs';
import React from 'react';

interface DayOffCalendarProps {
  currentDate: dayjs.Dayjs;
  view: 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay';
}

export default function DayOffCalendar({ currentDate, view }: DayOffCalendarProps) {
  const handleDateClick = (arg: DateClickArg) => {
    alert(arg.dateStr);
  };

  return (
    <FullCalendar
      key={currentDate.unix()}
      plugins={[dayGridPlugin, interactionPlugin]}
      initialDate={currentDate.toDate()}
      dateClick={handleDateClick}
      initialView={view}
      headerToolbar={{
        left: '',
        center: '',
        right: '',
      }}
    />
  );
}
