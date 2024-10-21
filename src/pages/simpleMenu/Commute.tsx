import { Link } from 'react-router-dom';

import { usePostCommuteClockIn } from '@/hooks/apis/useCommute';

export default function Commute() {
  const { mutate: postCommuteClockIn } = usePostCommuteClockIn();

  return (
    <div className="flex flex-col gap-2 w-full">
      <div
        className="text-center border border-slate-300 p-3 rounded-lg hover:bg-slate-100   cursor-pointer"
        onClick={() => postCommuteClockIn()}
      >
        출근
      </div>
      <div className="text-center border border-slate-300 p-3 rounded-lg hover:bg-slate-100   cursor-pointer">
        퇴근
      </div>
      <div className="text-center border border-slate-300 p-3 rounded-lg hover:bg-slate-100   cursor-pointer">
        <Link to="/work-management/commute">출/퇴근 내역</Link>
      </div>
    </div>
  );
}
