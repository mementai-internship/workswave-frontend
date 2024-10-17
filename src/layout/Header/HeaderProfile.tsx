import { useAtom } from 'jotai';
import { PiBellFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import { postLogout } from '@/apis/logout.api';
import { IHeader } from '@/layout/Header/Header';
import { userAtom, userTokenAtom } from '@/store/authAtoms';

export default function HeaderProfile({ name, role }: IHeader) {
  const token = useAtom(userTokenAtom)[0];
  const [, setUser] = useAtom(userAtom);

  // Logout 함수
  const handleLogoutButtonClick = async () => {
    await postLogout(token);
    setUser();
  };

  return (
    <>
      <div className="flex gap-2.5 items-center pr-4 border-r border-neutral-700">
        <span className="py-4">{name}님 반갑습니다.</span>
        {role === 'MSO 최고권한' && (
          <Link to="/administrator">
            <div className="border border-slate-300 px-4 py-1 rounded">관리자페이지 바로가기</div>
          </Link>
        )}
        <button
          className="border border-slate-300 px-4 py-1 rounded"
          onClick={handleLogoutButtonClick}
        >
          로그아웃
        </button>
      </div>
      <Link to="notification">
        <div className="px-4">
          <PiBellFill size={24} className="text-yellow-50" />
        </div>
      </Link>
    </>
  );
}
