import { Button } from '@radix-ui/themes';
import React from 'react';
import { PiArrowUUpRightFill, PiCheck, PiNote } from 'react-icons/pi';

interface DayoffManagementListItemProps {
  id: number;
  part: string;
  name: string;
  applyDate: string;
  dayoffType: string;
  dayoffCount: number;
  dayoffDateStart: string;
  dayoffDateEnd: string;
  managerName: string;
}

export default function DayoffManagementListItem({
  part,
  name,
  applyDate,
  dayoffCount,
  dayoffDateStart,
  dayoffDateEnd,
  managerName,
}: DayoffManagementListItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-200 rounded-lg">
      <div className="flex items-center">
        <div className="w-16 h-16 rounded-lg bg-gray-300 flex items-center justify-center">
          <span className="text-sm font-bold">{part}</span>
        </div>
        <div className="ml-4">
          <div className="flex items-center gap-2">
            <p className="text-sm ">신청일 {applyDate}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{name}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xs text-gray-500">연차 {dayoffCount}소진</p>
            <p className="text-xs text-gray-500">
              사용일 {dayoffDateStart} - {dayoffDateEnd}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-700">담당자: {managerName}</p>
          <Button variant="soft" color="gray">
            <PiNote className="text-2xl" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="soft" color="gray">
            <PiCheck />
            승인
          </Button>
          <Button variant="soft" color="gray">
            <PiArrowUUpRightFill />
            반려
          </Button>
        </div>
      </div>
    </div>
  );
}
