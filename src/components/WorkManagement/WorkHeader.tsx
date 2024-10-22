import { Button } from '@radix-ui/themes';
import dayjs, { Dayjs } from 'dayjs';
import { useMemo } from 'react';
import { PiGear } from 'react-icons/pi';

import { ChangeMonth } from '@/components/Common/ChangeMonth';
import { TAB_ITEMS, TabItem } from '@/constants/workManagement/workManagement';

export interface IProps {
  selectTab: TabItem;
  onTabChange: (item: TabItem) => void;
  currentDate: Dayjs;
  onChangeMonth: (newDate: Dayjs) => void;
}

export default function WorkHeader({ selectTab, currentDate, onTabChange, onChangeMonth }: IProps) {
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
  }, [currentDate]);

  return (
    <div className="flex justify-between content-center py-4">
      <div className="text-2xl font-medium flex gap-3">
        {selectTab.title}
        <div className="flex gap-3">
          {TAB_ITEMS.filter((item) => item.id !== selectTab.id).map((item) => (
            <Button
              key={item.id}
              color="gray"
              variant="soft"
              radius="full"
              onClick={() => onTabChange(item)}
            >
              <PiGear />
              <span className="-mb-px mr-1">{item.title}</span>
            </Button>
          ))}
        </div>
      </div>
      <div className="flex items-center	gap-2">
        <p className="text-sm text-gray-50">
          {date.day} 기준 총 근무가능 일수
          <span className="font-bold text-black">{date.workingDays}</span>일 (데이터기준
          {date.period})
        </p>
        <ChangeMonth currMonth={currentDate} onChangeMonth={onChangeMonth} />
      </div>
    </div>
  );
}
