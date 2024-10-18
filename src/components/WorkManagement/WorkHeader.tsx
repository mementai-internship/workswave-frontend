import { Button } from '@radix-ui/themes';
import dayjs, { Dayjs } from 'dayjs';
import React from 'react';
import { useMemo } from 'react';
import { PiGear } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

import { ChangeMonth } from '@/components/Common/ChangeMonth';
import { ItabItem } from '@/pages/workManagement/WorkManagementPage';

export interface IProps {
  selectTab: ItabItem;
  setSelectTab: React.Dispatch<React.SetStateAction<ItabItem>>;
  currentDate: Dayjs;
  setCurrentDate: React.Dispatch<React.SetStateAction<Dayjs>>;
}

export default function WorkHeader({
  selectTab,
  setSelectTab,
  currentDate,
  setCurrentDate,
}: IProps) {
  const navigate = useNavigate();

  const tabItems: ItabItem[] = [
    { id: 0, title: '근로 관리', path: '/work-management/working' },
    { id: 1, title: '파트타이머 관리', path: '/work-management/partTime' },
    { id: 2, title: '출퇴근 관리', path: '/work-management/commute' },
  ];

  const handleChangeMonth = (newDate: dayjs.Dayjs) => {
    setCurrentDate(newDate);
    // backend API 연결
  };

  const handleTabChange = (item: ItabItem) => {
    setSelectTab(item);
    navigate(item.path);
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
  }, [currentDate]);

  return (
    <div className="flex justify-between content-center py-4">
      <div className="text-2xl font-medium flex gap-3">
        {selectTab.title}
        <div className="flex gap-3">
          {tabItems
            .filter((item) => item.id !== selectTab.id)
            .map((item) => (
              <Button
                key={item.id}
                color="gray"
                variant="soft"
                radius="full"
                onClick={() => handleTabChange(item)}
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
        <ChangeMonth currMonth={currentDate} onChangeMonth={handleChangeMonth} />
      </div>
    </div>
  );
}
