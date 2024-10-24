import { Button, Popover } from '@radix-ui/themes';
import { ko } from 'date-fns/locale';
import dayjs from 'dayjs';
import { useState } from 'react';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';

import { Txt } from '@/components/Common/Txt';
import { useDeleteClosedDays } from '@/hooks/apis/useClosedDays';
import { useGetClosedDays } from '@/hooks/apis/useClosedDays';
import { TClosedDaysResponse } from '@/models/closedDays.model';

interface IHolidayRegisterPopoverProps {
  currDate: dayjs.Dayjs;
  holidays: TClosedDaysResponse;
  branchId: number;
}

export default function HolidayDeletionPopover({
  currDate,
  holidays,
  branchId,
}: IHolidayRegisterPopoverProps) {
  const defaultClassNames = getDefaultClassNames();
  const [deletePopoverOpen, setDeletePopoverOpen] = useState<boolean>(false);
  const [popoverMonth, setPopoverMonth] = useState<Date>(currDate.toDate());
  const [tempSelectedDays, setTempSelectedDays] = useState<Date[]>([]);

  const { mutate: deleteClosedDays } = useDeleteClosedDays();
  const { refetch: refetchClosedDays } = useGetClosedDays({ branch_id: branchId });

  const handleDeletePopoverClose = () => {
    setTempSelectedDays([]);
    setDeletePopoverOpen(false);
  };

  const handleDeletePopoverOpen = () => {
    setPopoverMonth(currDate.toDate());
    setDeletePopoverOpen(true);
  };

  const handleTempHolidaySelection = (dates: Date[] | undefined) => {
    setTempSelectedDays(dates || []);
  };

  const handleHolidayReset = () => {
    setTempSelectedDays([]);
  };

  const submitDeleteHolidays = () => {
    const holidayIdsToDelete = tempSelectedDays
      .map((date) =>
        holidays.data.find((holiday) => dayjs(holiday.closed_day_date).isSame(date, 'day'))
      )
      .map((holiday) => holiday.id);

    if (holidayIdsToDelete.length > 0) {
      deleteClosedDays(
        {
          branch_id: branchId,
          idList: holidayIdsToDelete,
        },
        {
          onSuccess: refetchClosedDays,
        }
      );
    }

    handleDeletePopoverClose();
  };

  return (
    <Popover.Root open={deletePopoverOpen} onOpenChange={setDeletePopoverOpen}>
      <Popover.Trigger>
        <Button variant="surface" color="gray" size="2" onClick={handleDeletePopoverOpen}>
          휴무 삭제
        </Button>
      </Popover.Trigger>
      <Popover.Content>
        <div className="flex flex-col items-center px-2">
          <Txt variant="h4" color="black" className="mb-4 border-b-2 text-center">
            휴무 삭제
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
              selected: `bg-purple-10 rounded-full`,
              today: `font-bold text-xl text-amber-500`,
              disabled: 'text-gray-50 bg-gray-10 rounded-full',
            }}
            disabled={(date) =>
              !holidays.data.some((holiday) => dayjs(holiday.closed_day_date).isSame(date, 'day'))
            }
          />
          <div className="w-full mt-4 flex justify-between">
            <Button variant="soft" color="gray" onClick={handleDeletePopoverClose}>
              닫기
            </Button>
            <div className="flex gap-2">
              <Button variant="soft" color="gray" onClick={handleHolidayReset}>
                초기화
              </Button>
              <Button onClick={submitDeleteHolidays}>삭제</Button>
            </div>
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}
