import { useAtomValue } from 'jotai';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { usePostCommuteClockIn, usePutCommuteClockOut } from '@/hooks/apis/useCommute';
import { useGetCurrentUser } from '@/hooks/apis/useGetCurrentUser';
import { userTokenAtom } from '@/store/authAtoms';

export default function Commute() {
  const [clockInId, setClockInId] = useState<number | null>(null);
  const { mutateAsync: postCommuteClockIn } = usePostCommuteClockIn();
  const { mutateAsync: putCommuteClockOut } = usePutCommuteClockOut();
  const token = useAtomValue(userTokenAtom);
  const user = useGetCurrentUser(token);

  const handleClockIn = async () => {
    try {
      const result = await postCommuteClockIn();
      setClockInId(result.data.id);
    } catch (error) {
      console.error('출근 기록 중 오류 발생:', error);
    }
  };

  const handleClockOut = async () => {
    try {
      await putCommuteClockOut(clockInId);
    } catch (error) {
      console.error('퇴근 기록 중 오류 발생:', error);
    }
  };

  return (
    <div className="flex flex-col w-full gap-2">
      <div
        className="p-3 text-center border rounded-lg cursor-pointer border-slate-300 hover:bg-slate-100"
        onClick={() => handleClockIn()}
      >
        출근
      </div>
      <div
        className="p-3 text-center border rounded-lg cursor-pointer border-slate-300 hover:bg-slate-100"
        onClick={handleClockOut}
      >
        퇴근
      </div>
      {user?.data?.role !== '사원' && (
        <div className="p-3 text-center border rounded-lg cursor-pointer border-slate-300 hover:bg-slate-100">
          <Link to="/work-management/commute">출/퇴근 내역</Link>
        </div>
      )}
    </div>
  );
}
