import { Button, Dialog } from '@radix-ui/themes';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { PiMagnifyingGlass, PiXBold } from 'react-icons/pi';

import { ChangeMonth } from '@/components/Common/ChangeMonth';
import CalculationStandard from '@/components/WorkManagement/PartTime/CalculationStandard';
import DetailPartTimeList from '@/components/WorkManagement/PartTime/DetailPartTimeDetail';
import { detailPartTimeData } from '@/constants/workManagement/workTable.mock';

interface DetailPartTime {
  userId: number;
}

//props로 클릭된 유저의 id를 받아와야함 -> 후에 id를 백으로 보내고 받은 데이터를 아래 추가
export default function DetailPartTime({ userId }: DetailPartTime) {
  const [month, setMonth] = useState(dayjs());
  const data = detailPartTimeData.filter((user) => user.userId === userId);
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

        <Dialog.Content className="w-[90vw] max-w-[1200px]">
          <div className="flex justify-between mb-5">
            <Dialog.Title className="flex mb-5">
              <div className="flex items-center">
                근무내역
                <span className="ml-3 text-base text-gray-500">{data[0].name}</span>
                <span className="px-1 ml-1 text-xs text-white bg-gray-300 rounded-sm">P.T</span>
              </div>
            </Dialog.Title>
            <Dialog.Close className="bg-white hover:cursor-pointer">
              <PiXBold />
            </Dialog.Close>
          </div>
          <div className="flex justify-between mb-5">
            {/* 바뀔 시에 달에 맞는 유저의 데이터를 호출해서 보여줘야함. */}
            <ChangeMonth currMonth={month} onChangeMonth={handleChangeMonth} />
            <CalculationStandard />
          </div>

          <DetailPartTimeList detailPartTimeData={data} />
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
}
