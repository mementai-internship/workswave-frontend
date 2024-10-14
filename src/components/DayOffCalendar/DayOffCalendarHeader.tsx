import { Button } from '@radix-ui/themes';
import dayjs from 'dayjs';
import { useState } from 'react';

import { ChangeMonth } from '../Common/ChangeMonth';

export default function DayOffCalendarHeader() {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const handleChangeMonth = (newDate: dayjs.Dayjs) => {
    setCurrentDate(newDate);
    // backend API 연결
  };

  // ... 기존 API 호출 및 데이터 처리 로직 ...

  return (
    <div className="flex justify-between items-center">
      <>드롭박스</>
      <ChangeMonth currentDate={currentDate} onChangeMonth={handleChangeMonth} />
      <div className="flex gap-2">
        <Button variant="surface" color="gray">
          다중 휴무등록
        </Button>
        <Button variant="surface" color="gray">
          파트타임
        </Button>
        <Button variant="surface" color="gray">
          월간
        </Button>
      </div>
    </div>
  );
}
