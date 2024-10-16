import {
  PiCalendarDotsLight,
  PiClockLight,
  PiFileTextThin,
  PiMapPinArea,
  PiUserCircleThin,
} from 'react-icons/pi';
import { Link } from 'react-router-dom';

export default function SimpleMenu() {
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
          <div className="text-x">연차신청</div>
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
          <div className="text-x">O.T/휴일근무 신청</div>
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
          <div className="text-x">증명서신청</div>
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
          <div className="text-x">마이페이지</div>
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
          <div className="text-x">출/퇴근</div>
        </Link>
      </div>
    </div>
  );
}
