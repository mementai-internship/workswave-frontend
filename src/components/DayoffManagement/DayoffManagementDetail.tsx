import { Button } from '@radix-ui/themes';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { PiCaretLeft, PiCaretRight } from 'react-icons/pi';

import { Txt } from '@/components/Common/Txt';

interface IDayoffManagementDetailProps {
  autoDayoff: number;
  remainingDayoff: number;
  usedDayoff: number;
}

export default function DayoffManagementDetail({
  autoDayoff,
  remainingDayoff,
  usedDayoff,
}: IDayoffManagementDetailProps) {
  const [year, setYear] = useState(dayjs().year());

  const handleNextYear = () => {
    if (year >= dayjs().year()) return;
    setYear(year + 1);
  };

  return (
    <div className="flex items-center justify-between p-7 bg-white border rounded-xl w-full">
      <div className="flex items-center gap-40">
        <div className="flex flex-col items-start">
          <p className="text-sm font-semibold text-green-600">자동 지급</p>
          <p className="text-lg font-bold text-green-600">
            {autoDayoff > 0 ? `+ ${autoDayoff}일` : '없음'}
          </p>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-sm font-semibold text-gray-500">잔여</p>
          <p className="text-lg font-bold text-gray-500">
            {remainingDayoff > 0 ? `+ ${remainingDayoff}일` : '없음'}
          </p>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-sm font-semibold text-red">사용</p>
          <p className="text-lg font-bold text-red">
            {usedDayoff > 0 ? `- ${usedDayoff}일` : '없음'}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Txt>{year}년</Txt>
        <Button variant="surface" onClick={() => setYear(year - 1)}>
          <PiCaretLeft />
        </Button>
        <Button variant="surface" onClick={handleNextYear}>
          <PiCaretRight />
        </Button>
      </div>
    </div>
  );
}
