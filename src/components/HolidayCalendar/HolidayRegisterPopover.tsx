import { Button, Popover } from '@radix-ui/themes';
import { ko } from 'date-fns/locale';
import dayjs from 'dayjs';
import { useState } from 'react';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';

import { Txt } from '@/components/Common/Txt';
import { usePostClosedDays } from '@/hooks/apis/useClosedDays';
import { useGetClosedDays } from '@/hooks/apis/useClosedDays';
import { TClosedDaysResponse } from '@/models/closedDays.model';

interface IHolidayRegisterPopoverProps {
  currDate: dayjs.Dayjs;
  holidays: TClosedDaysResponse;
  branchId: number;
}

export default function HolidayRegisterPopover({
  currDate,
  holidays,
  branchId,
}: IHolidayRegisterPopoverProps) {
  const defaultClassNames = getDefaultClassNames();
  const [registerPopoverOpen, setRegisterPopoverOpen] = useState<boolean>(false);
  const [popoverMonth, setPopoverMonth] = useState<Date>(currDate.toDate());
  const [tempSelectedDays, setTempSelectedDays] = useState<Date[]>([]);

  const { refetch: refetchHoliDays } = useGetClosedDays({ branch_id: branchId });
  const { mutate: postClosedDays } = usePostClosedDays();

  const handleRegisterPopoverClose = () => {
    setTempSelectedDays([]);
    setRegisterPopoverOpen(false);
  };

  const handleRegisterPopoverOpen = () => {
    setPopoverMonth(currDate.toDate());
    setRegisterPopoverOpen(true);
  };

  const handleTempHolidaySelection = (dates: Date[] | undefined) => {
    setTempSelectedDays(dates || []);
  };

  const handleHolidayReset = () => {
    const currentMonth = dayjs(popoverMonth).month();
    const currentYear = dayjs(popoverMonth).year();
    const updatedHolidays = tempSelectedDays.filter((date) => {
      const holidayDate = dayjs(date);
      return holidayDate.month() !== currentMonth || holidayDate.year() !== currentYear;
    });
    setTempSelectedDays(updatedHolidays);
  };

  // 오늘 날짜보다 이전 날짜를 선택 후 휴무일 등록 버튼 클릭 시 백엔드에서 에러 뱉음
  const submitNewHolidays = () => {
    postClosedDays(
      { branch_id: branchId, dates: tempSelectedDays, memo: '지점 휴무일' },
      {
        onSuccess: refetchHoliDays,
      }
    );

    handleRegisterPopoverClose();
  };

  return (
    <Popover.Root open={registerPopoverOpen} onOpenChange={setRegisterPopoverOpen}>
      <Popover.Trigger>
        <Button variant="surface" color="gray" size="2" onClick={handleRegisterPopoverOpen}>
          휴무 등록
        </Button>
      </Popover.Trigger>
      <Popover.Content>
        <div className="flex flex-col items-center px-2">
          <Txt variant="h4" color="black" className="mb-4 border-b-2 text-center">
            휴무 등록
          </Txt>
          <DayPicker
            mode="multiple"
            selected={tempSelectedDays}
            onSelect={handleTempHolidaySelection}
            locale={ko}
            defaultMonth={currDate.toDate()}
            month={popoverMonth}
            onMonthChange={setPopoverMonth}
            formatters={{
              formatCaption: (date: Date) => dayjs(date).format('YYYY년 MM월'),
            }}
            classNames={{
              root: `${defaultClassNames.root} w-full h-full gap-2`,
              chevron: `${defaultClassNames.chevron} w-7 h-7 fill-purple-30`,
              month_caption: 'flex justify-center text-xl font-bold h-10',
              day_button: 'w-12 h-12 text-lg',
              today: `font-bold text-xl text-amber-500`,
              selected: `bg-purple-10 rounded-full`,
              disabled: 'bg-gray-10 text-gray-50 rounded-full',
            }}
            disabled={holidays.data.map((holiday) => new Date(holiday.closed_day_date))}
          />
          <div className="w-full mt-4 flex justify-between">
            <Button variant="soft" color="gray" onClick={handleRegisterPopoverClose}>
              닫기
            </Button>
            <div className="flex gap-2">
              <Button variant="soft" color="gray" onClick={handleHolidayReset}>
                초기화
              </Button>
              <Button onClick={submitNewHolidays}>등록</Button>
            </div>
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}
