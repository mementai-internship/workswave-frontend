import { ChangeMonth } from '@/components/Common/ChangeMonth';
import { Button } from '@radix-ui/themes';
import dayjs from 'dayjs';
import { useMemo, useState } from 'react';
import { PiGear } from 'react-icons/pi';

interface IProps {
  isPartTime: boolean;
  isSetPartTime: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function WorkHeader({ isPartTime, isSetPartTime }: IProps) {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const handleChangeMonth = (newDate: dayjs.Dayjs) => {
    setCurrentDate(newDate);
    // backend API 연결
  };

  const date = useMemo(() => {
    const isCurrentMonth =
      currentDate.month() === dayjs().month() && currentDate.year() === dayjs().year();
    const startOfMonth = currentDate.startOf('month');
    const endDate = isCurrentMonth ? dayjs() : currentDate.endOf('month');

    const formattedDay = endDate.format('M월 D일');
    const formattedPeriod = `${startOfMonth.format('YYYY-MM-DD')} - ${endDate.format('YYYY-MM-DD')}`;

    // 주말을 제외한 근무일수 계산
    let workingDays = 0;
    let day = startOfMonth;
    while (day.isBefore(endDate) || day.isSame(endDate, 'day')) {
      if (day.day() !== 0 && day.day() !== 6) {
        workingDays++;
      }
      day = day.add(1, 'day');
    }

    return {
      workingDays,
      day: formattedDay,
      period: formattedPeriod,
    };
  }, [currentDate, dayjs()]);

  return (
    <div className="flex justify-between content-center py-4">
      <div className="text-2xl font-medium flex gap-3">
        근로관리
        <Button
          color="gray"
          variant="soft"
          radius="full"
          onClick={() => isSetPartTime(!isPartTime)}
        >
          <PiGear />
          {isPartTime ? '파트타임관리' : '출퇴근 기록 관리'}
        </Button>
      </div>
      <div className="flex items-center	gap-2">
        <p className="text-sm text-gray-50">
          {date.day} 기준 총 근무가능 일수
          <span className="font-bold text-black">{date.workingDays}</span>일 (데이터기준
          {date.period})
        </p>
        <ChangeMonth currMonth={currentDate} onChangeMonth={handleChangeMonth} />
      </div>
    </div>
  );
}
