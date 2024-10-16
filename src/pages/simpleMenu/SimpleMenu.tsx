import React from 'react';
import { PiCalendarDotsLight } from 'react-icons/pi';
import { PiClockLight } from 'react-icons/pi';

export default function SimpleMenu() {
  return (
    <div className="flex">
      <div className="flex">
        <div>
          <PiCalendarDotsLight size={24} />
        </div>
        <div>연차신청</div>
      </div>
      <div className="flex">
        <div>
          <PiClockLight size={24} />
        </div>
        <div>O.T/휴일근무 신청</div>
      </div>
      <div className="flex">
        <div></div>
        <div>증명서신청</div>
      </div>
      <div className="flex">
        <div></div>
        <div>마이페이지</div>
      </div>
      <div className="flex">
        <div></div>
        <div>출/퇴근</div>
      </div>
    </div>
  );
}
