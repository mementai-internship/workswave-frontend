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
import { useGetClosedDays } from '@/hooks/apis/useClosedDays';

interface IHolidayCalendarHeaderProps {
  branchId: number;
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

  const { data: holidays, isLoading: isHolidaysLoading } = useGetClosedDays({
    branch_id: branchId,
  });
  const { data: branches, isFetching } = useGetBranches('0');

  const branchSelection = isFetching
    ? []
    : branches?.list.map((branch) => ({
        id: branch.id,
        name: branch.name,
        action: () => {
          setBranchId(branch.id);
        },
      }));

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
      {branches ? (
        <SelectBox title="지점 선택" name="지점 선택" options={branchSelection} />
      ) : (
        <SelectBox title="지점 정보가 없습니다." options={[]} disabled={true} />
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

        {!isHolidaysLoading && holidays && (
          <>
            <HolidayRegisterPopover currDate={currDate} holidays={holidays} branchId={branchId} />
            <HolidayDeletionPopover currDate={currDate} holidays={holidays} branchId={branchId} />
          </>
        )}

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
