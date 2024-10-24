import * as Dialog from '@radix-ui/react-dialog';
import * as Tooltip from '@radix-ui/react-tooltip';
import { Button } from '@radix-ui/themes';
import { ko } from 'date-fns/locale';
import dayjs from 'dayjs';
import { useState } from 'react';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';

import { Txt } from '@/components/Common/Txt';

interface IHolidayRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  employees: { id: string; name: string }[];
  onRegisterHoliday: (holidays: { employee: string; dates: Date[] }[]) => void;
  currDate: dayjs.Dayjs;
}

export default function EmployeeHolidayRegisterModal({
  isOpen,
  onClose,
  employees,
  onRegisterHoliday,
  currDate,
}: IHolidayRegisterModalProps) {
  const defaultClassNames = getDefaultClassNames();
  const [selectedDates, setSelectedDates] = useState<{ [employeeId: string]: Date[] }>({});
  const [currentEmployee, setCurrentEmployee] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const holidays = Object.entries(selectedDates)
    .map(([employeeId, dates]) => ({
      employee: employeeId,
      dates: dates,
    }))
    .filter((holiday) => holiday.dates.length > 0);

  const handleEmployeeSelect = (employeeId: string) => {
    setCurrentEmployee(employeeId);
  };

  const handleDateSelect = (dates: Date[] | undefined) => {
    if (currentEmployee) {
      setSelectedDates((prev) => ({
        ...prev,
        [currentEmployee]: dates || [],
      }));
    }
  };

  const submitRegisterHoliday = () => {
    if (holidays.length > 0) {
      onRegisterHoliday(holidays);
      onClose();
    }
  };

  // TODO : 백엔드와 CRUD API 연동 필요
  // TODO : 브랜치(또는 브랜치의 파트) 직원 리스트, 직원 휴무 리스트 받아와야 함.

  // const handleRegisterHolidays = () => {
  // };

  const handleClearAllHolidays = () => {
    setSelectedDates({});
  };

  const handleClose = () => {
    setSelectedDates({});
    setCurrentEmployee(null);
    onClose();
  };

  const handleDeleteHoliday = (employeeId: string, dateToDelete: Date) => {
    setSelectedDates((prev) => ({
      ...prev,
      [employeeId]: prev[employeeId].filter((date) => date.getTime() !== dateToDelete.getTime()),
    }));
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg w-5/6 h-3/4 flex flex-col">
          <Dialog.Title asChild>
            <Txt variant="h4" color="black" className="border-b-2 pb-2 mb-4">
              직원 휴무 등록
            </Txt>
          </Dialog.Title>
          <Dialog.Description className="sr-only">
            직원을 선택하고 달력에서 휴무일을 지정하세요. 선택된 휴무일은 오른쪽 목록에 표시됩니다.
          </Dialog.Description>

          <main className="flex flex-1 space-x-4 overflow-hidden">
            <section className="w-1/3 border-r pr-4 flex flex-col">
              <Txt
                variant="h6"
                color="black"
                className="h-10 mb-4 flex items-center justify-center"
              >
                직원 목록
              </Txt>
              <div className="overflow-y-auto flex-1">
                {employees.map((employee) => (
                  <div
                    key={employee.id}
                    className={`cursor-pointer p-2 ${currentEmployee === employee.id ? 'bg-blue-100' : ''}`}
                    onClick={() => handleEmployeeSelect(employee.id)}
                  >
                    {employee.name}
                  </div>
                ))}
              </div>
            </section>

            <section className="w-1/3 border-r pr-4 flex flex-col items-center">
              <Txt
                variant="h6"
                color="black"
                className="h-10 mb-4 flex items-center justify-center"
              >
                일정 선택
              </Txt>
              <div className="overflow-y-auto flex-1">
                <Tooltip.Provider>
                  <Tooltip.Root open={showTooltip}>
                    <Tooltip.Trigger asChild>
                      <div
                        onMouseEnter={() => !currentEmployee && setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                      >
                        <DayPicker
                          mode="multiple"
                          selected={currentEmployee ? selectedDates[currentEmployee] || [] : []}
                          onSelect={handleDateSelect}
                          locale={ko}
                          defaultMonth={currDate.toDate()}
                          formatters={{
                            formatCaption: (date: Date) => dayjs(date).format('YYYY년 MM월'),
                          }}
                          classNames={{
                            root: `${defaultClassNames.root} w-full h-full gap-2`,
                            chevron: `${defaultClassNames.chevron} w-8 h-8 fill-purple-30`,
                            month_caption: 'flex justify-center text-2xl font-bold h-12',
                            weekday: 'text-lg',
                            day_button: 'w-12 h-12 text-xl',
                            today: `font-bold text-amber-500`,
                            selected: `bg-purple-10 rounded-full`,
                          }}
                          disabled={!currentEmployee}
                        />
                      </div>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content className="bg-black text-white p-2 rounded" sideOffset={5}>
                        직원을 먼저 선택해주세요.
                        <Tooltip.Arrow className="fill-black" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              </div>
            </section>

            <section className="w-1/3 flex flex-col">
              <div className="h-10 mb-4 w-full flex justify-between items-center">
                <Txt variant="h6" color="black">
                  선택 내역
                </Txt>
                <Button
                  variant="surface"
                  color="red"
                  onClick={handleClearAllHolidays}
                  className="px-2 py-1 rounded"
                >
                  모두 삭제
                </Button>
              </div>
              <div className="overflow-y-auto flex-1">
                {holidays.map((holiday, index) => (
                  <section key={index} className="bg-gray-10 px-2 py-1 mb-2 rounded-sm w-full">
                    <Txt variant="h6" color="black">
                      {employees.find((e) => e.id === holiday.employee)?.name}
                    </Txt>
                    <ul className="list-disc pl-5">
                      {holiday.dates.map((date, dateIndex) => (
                        <li
                          key={dateIndex}
                          className="cursor-pointer hover:text-blue-500 transition-colors duration-200"
                          onClick={() => handleDeleteHoliday(holiday.employee, date)}
                        >
                          {dayjs(date).format('YY년 MM월 DD일')}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </section>
          </main>

          <footer className="mt-4 flex justify-center space-x-10">
            <Dialog.Close asChild>
              <Button
                variant="surface"
                color="gray"
                onClick={handleClose}
                className="px-6 py-2 rounded"
              >
                닫기
              </Button>
            </Dialog.Close>
            <Button
              variant="surface"
              color="blue"
              onClick={submitRegisterHoliday}
              className="px-6 py-2 rounded"
            >
              등록
            </Button>
          </footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
