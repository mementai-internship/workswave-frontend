import { Button, Dialog } from '@radix-ui/themes';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { PiMagnifyingGlass } from 'react-icons/pi';

import { ChangeMonth } from '@/components/Common/ChangeMonth';
import CalculationStandard from '@/components/WorkManagement/PartTime/CalculationStandard';
import DetailPartTimeList from '@/components/WorkManagement/PartTime/DetailPartTimeDetail';
import { detailPartTimeData } from '@/constants/workManagementTable/workTable.mock';

export default function DetailPartTime() {
  const [month, setMonth] = useState(dayjs());

  const handleChangeMonth = (newDate: dayjs.Dayjs) => {
    setMonth(newDate);
    // TODO:backend API 연결
  };

  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button className="bg-gray-50">
            <PiMagnifyingGlass />
          </Button>
        </Dialog.Trigger>

        <Dialog.Content className="w-[90vw] max-w-[1000px]">
          <div>
            <Dialog.Title className="mb-10">
              근무내역
              <span className="text-gray-500 text-base ml-3">{detailPartTimeData[0].name}</span>
              <span className="bg-gray-300 text-white text-xs ml-1 px-1 rounded-sm">P.T</span>
            </Dialog.Title>
          </div>
          <div className="flex justify-between mb-5">
            <ChangeMonth currMonth={month} onChangeMonth={handleChangeMonth} />
            <CalculationStandard />
          </div>

          <DetailPartTimeList detailPartTimeData={detailPartTimeData} />
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
}
