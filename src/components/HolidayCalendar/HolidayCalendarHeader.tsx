import { Button, Popover, Switch } from '@radix-ui/themes';
import dayjs from 'dayjs';
import { useState } from 'react';
import { PiGear } from 'react-icons/pi';

import { ChangeMonthNone } from '@/components/Common/ChangeMonth';
import { ChangeWeekNone } from '@/components/Common/ChangeWeek';
import SelectBox from '@/components/Common/Select';
import EmployeeHolidayRegisterModal from '@/components/HolidayCalendar/EmployeeHolidayRegisterModal';
import HolidayDeletionPopover from '@/components/HolidayCalendar/HolidayDeletionPopover';
import HolidayRegisterPopover from '@/components/HolidayCalendar/HolidayRegisterPopover';
import { useGetBranches } from '@/hooks/apis/useBranches';
import { TClosedDaysResponse } from '@/models/closedDays.model';

interface IDayoffCalendarHeaderProps {
  branchId: number;
  setBranchId: (branchId: number) => void;
  currDate: dayjs.Dayjs;
  setCurrentDate: (date: dayjs.Dayjs) => void;
  view: 'dayGridMonth' | 'dayGridWeek';
  setView: (view: 'dayGridMonth' | 'dayGridWeek') => void;
  sundayOff: boolean;
  setIsSundayOff: (isSundayOff: boolean) => void;
  holidays: TClosedDaysResponse;
}

export default function DayoffCalendarHeader({
  branchId,
  setBranchId,
  currDate,
  setCurrentDate,
  view,
  setView,
  sundayOff,
  setIsSundayOff,
  holidays,
}: IDayoffCalendarHeaderProps) {
  const [employeeModalOpen, setEmployeeModalOpen] = useState<boolean>(false); // 다중 휴무 등록 : 모달 온오프

  const { data: branches, isFetching } = useGetBranches('1');
  const branchSelection = isFetching
    ? []
    : branches?.list.map((branch) => ({
        id: branch.id,
        name: branch.name,
        action: () => {
          setBranchId(branch.id);
        },
      }));

  // 다중 휴무 등록 Btn 로직
  const handleEmployeeModalOpen = () => {
    setEmployeeModalOpen(true);
  };

  const handleEmployeeModalClose = () => {
    setEmployeeModalOpen(false);
  };

  const submitNewEmployeeHoliday = (holidays: { employee: string; dates: Date[] }[]) => {
    console.log('다중 휴무 등록 (직원):', holidays);
  };

  const handleCalendarView = () => {
    setView(view === 'dayGridMonth' ? 'dayGridWeek' : 'dayGridMonth');
  };

  return (
    <header className="relative flex justify-between items-center">
      {!isFetching && <SelectBox title="지점 선택" name="지점 선택" options={branchSelection} />}
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

        <HolidayRegisterPopover
          currDate={currDate}
          setCurrentDate={setCurrentDate}
          holidays={holidays}
          branchId={branchId}
        />
        <HolidayDeletionPopover
          currDate={currDate}
          setCurrentDate={setCurrentDate}
          holidays={holidays}
          branchId={branchId}
        />

        <Button variant="surface" color="gray" size="2" onClick={handleEmployeeModalOpen}>
          직원 휴무 등록
        </Button>
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
