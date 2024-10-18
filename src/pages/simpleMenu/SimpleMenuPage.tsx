import {
  PiCalendarDotsLight,
  PiClockLight,
  PiFileTextThin,
  PiMapPinArea,
  PiUserCircleThin,
} from 'react-icons/pi';
import { Link } from 'react-router-dom';

import { Txt } from '@/components/Common/Txt';

export default function SimpleMenuPage() {
  return (
    <div className="flex w-full gap-2">
      <div
        className="flex grow items-center justify-center border border-slate-300 rounded-2xl hover:cursor-pointer
      hover:bg-slate-200"
      >
        <Link to="" className="flex gap-2 items-center justify-center">
          <div>
            <PiCalendarDotsLight size={24} />
          </div>
          <Txt variant="h6">연차신청</Txt>
        </Link>
      </div>
      <div
        className="flex grow items-center justify-center border border-slate-300 rounded-2xl hover:cursor-pointer
      hover:bg-slate-200"
      >
        <Link to="" className="flex gap-2 items-center justify-center">
          <div>
            <PiClockLight size={24} />
          </div>
          <Txt variant="h6">O.T/휴일근무 신청</Txt>
        </Link>
      </div>
      <div
        className="flex grow items-center justify-center border border-slate-300 rounded-2xl hover:cursor-pointer
      hover:bg-slate-200"
      >
        <Link to="" className="flex gap-2 items-center justify-center">
          <div>
            <PiFileTextThin size={24} />
          </div>
          <Txt variant="h6">증명서신청</Txt>
        </Link>
      </div>
      <div
        className="flex grow items-center justify-center border border-slate-300 rounded-2xl hover:cursor-pointer
      hover:bg-slate-200"
      >
        <Link to="" className="flex gap-2 items-center justify-center">
          <div>
            <PiUserCircleThin size={24} />
          </div>
          <Txt variant="h6">마이페이지</Txt>
        </Link>
      </div>
      <div
        className="flex grow items-center justify-center border border-slate-300 rounded-2xl hover:cursor-pointer
      hover:bg-slate-200"
      >
        <Link to="" className="flex gap-2 items-center justify-center">
          <div>
            <PiMapPinArea size={24} />
          </div>
          <Txt variant="h6">출/퇴근</Txt>
        </Link>
      </div>
    </div>
  );
}
