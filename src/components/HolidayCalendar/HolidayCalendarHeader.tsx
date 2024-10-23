import { Button, Popover, Select, Switch } from '@radix-ui/themes';
import dayjs from 'dayjs';
import { useState } from 'react';
import { PiGear } from 'react-icons/pi';

import { ChangeMonthNone } from '@/components/Common/ChangeMonth';
import { ChangeWeekNone } from '@/components/Common/ChangeWeek';
import EmployeeHolidayRegisterModal from '@/components/HolidayCalendar/EmployeeHolidayRegisterModal';
import HolidayDeletionPopover from '@/components/HolidayCalendar/HolidayDeletionPopover';
import HolidayRegisterPopover from '@/components/HolidayCalendar/HolidayRegisterPopover';
import { useGetBranches } from '@/hooks/apis/useBranches';
import { useGetClosedDays } from '@/hooks/apis/useClosedDays';

interface IHolidayCalendarHeaderProps {
  branchId: number | undefined;
  setBranchId: (branchId: number) => void;
  currDate: dayjs.Dayjs;
  setCurrentDate: (date: dayjs.Dayjs) => void;
  view: 'dayGridMonth' | 'dayGridWeek';
  setView: (view: 'dayGridMonth' | 'dayGridWeek') => void;
  sundayOff: boolean;
  setIsSundayOff: (isSundayOff: boolean) => void;
}

export default function HolidayCalendarHeader({
  branchId,
  setBranchId,
  currDate,
  setCurrentDate,
  view,
  setView,
  sundayOff,
  setIsSundayOff,
}: IHolidayCalendarHeaderProps) {
  const [employeeModalOpen, setEmployeeModalOpen] = useState<boolean>(false);

  const { data: holidays } = useGetClosedDays({
    branch_id: branchId,
  });

  // 현재 - MSO 기준이라 모든 브랜치 목록 받아옴 -> 분기처리 필요
  const { data: branches } = useGetBranches('0');

  const handleCalendarView = () => {
    setView(view === 'dayGridMonth' ? 'dayGridWeek' : 'dayGridMonth');
  };

  // 다중 휴무 등록 Btn
  const handleEmployeeModalOpen = () => {
    setEmployeeModalOpen(true);
  };

  const handleEmployeeModalClose = () => {
    setEmployeeModalOpen(false);
  };

  const submitNewEmployeeHoliday = (holidays: { employee: string; dates: Date[] }[]) => {
    console.log('다중 휴무 등록 (직원):', holidays);
  };

  return (
    <header className="relative flex justify-between items-center">
      {branches?.list && branches.list.length > 0 && (
        <Select.Root
          defaultValue={String(branches.list[0].id)}
          onValueChange={(value) => setBranchId(Number(value))}
        >
          <Select.Trigger />
          <Select.Content>
            {branches.list.map((branch) => (
              <Select.Item key={branch.id} value={String(branch.id)}>
                {branch.name}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      )}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        {view === 'dayGridMonth' ? (
          <ChangeMonthNone
            currMonth={currDate}
            onChangeMonth={(newDate: dayjs.Dayjs) => {
              setCurrentDate(newDate);
            }}
          />
        ) : (
          <ChangeWeekNone
            currWeek={currDate}
            onChangeWeek={(newDate: dayjs.Dayjs) => {
              setCurrentDate(newDate);
            }}
          />
        )}
      </div>

      <div className="flex gap-2">
        {branches?.list && branches.list.length > 0 && (
          <>
            <Popover.Root>
              <Popover.Trigger>
                <Button variant="surface" color="gray" size="2">
                  <PiGear className="w-4 h-4" />
                </Button>
              </Popover.Trigger>
              <Popover.Content>
                <div className="w-48 p-1">
                  <div className="flex items-center justify-between">
                    <span>일요일 지점 휴무</span>
                    <Switch checked={sundayOff} onCheckedChange={setIsSundayOff} />
                  </div>
                </div>
              </Popover.Content>
            </Popover.Root>

            {/* holidays가 존재할 때만 컴포넌트 렌더링 */}
            {holidays && (
              <>
                <HolidayRegisterPopover
                  currDate={currDate}
                  holidays={holidays}
                  branchId={branchId}
                />
                <HolidayDeletionPopover
                  currDate={currDate}
                  holidays={holidays}
                  branchId={branchId}
                />
              </>
            )}
            <Button variant="surface" color="gray" size="2" onClick={handleEmployeeModalOpen}>
              직원 휴무 등록
            </Button>
          </>
        )}

        <EmployeeHolidayRegisterModal
          isOpen={employeeModalOpen}
          onClose={handleEmployeeModalClose}
          employees={DUMMY_EMPLOYEES}
          onRegisterHoliday={submitNewEmployeeHoliday}
          currDate={currDate}
        />

        <Button variant="surface" color="gray" size="2" onClick={handleCalendarView}>
          {view === 'dayGridMonth' ? '주간' : '월간'}
        </Button>
      </div>
    </header>
  );
}

const DUMMY_EMPLOYEES = [
  {
    id: '1',
    name: '직원1',
  },
  {
    id: '2',
    name: '직원2',
  },
];
