import HeaderProfile from '@/layout/Header/HeaderProfile';
import { TUserAuthority } from '@/models/user.model';
import { Link } from 'react-router-dom';

export interface IHeader {
  name: string;
  role: TUserAuthority;
}

export default function Header({ name, role }: IHeader) {
  return (
    <header className="px-3 flex items-center justify-between text-white bg-gray-80">
      <div className="flex grow items-center justify-between pr-4 border-r border-gray-50">
        <Link to="/">
          <span className="p-3">WorksWave</span>
        </Link>
        {(role === 'MSO 최고권한' || role === '최고관리자') && (
          <span className="text-xs p-4">웍스웨이브 가이드</span>
        )}
      </div>
      <div className="flex items-center text-xs px-4">
        {name && role ? (
          <HeaderProfile name={name} role={role} />
        ) : (
          <Link to="/login">
            <button className="border border-gray-10 px-4 py-1 rounded mr-4">로그인</button>
          </Link>
        )}
        <div className="px-4 py-3.5 text-sm border-x border-gray-50 hover:cursor-pointer">
          {/* 간편메뉴를 누르면 어떤일이 발생?? */}간편메뉴
        </div>
      </div>
    </header>
  );
}
