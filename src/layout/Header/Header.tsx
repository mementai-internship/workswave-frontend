import HeaderProfile from '@/layout/Header/HeaderProfile';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// current user를 반환하는 함수
const getCurrentUser = (): string | null => {
  return null;
};

export default function Header() {
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  useEffect(() => {
    setCurrentUser(getCurrentUser());
  }, []);

  return (
    <header className="px-3 flex items-center justify-between text-white bg-gray-80">
      <div className="flex grow items-center justify-between pr-4 border-r border-gray-50">
        <Link to="/">
          <span className="p-3">WorksWave</span>
        </Link>
        <span className="text-xs p-4">웍스웨이브 가이드</span>
      </div>
      <div className="flex items-center text-xs px-4">
        {currentUser ? (
          <HeaderProfile currentUser={currentUser} />
        ) : (
          <Link to="/login">
            <button className="border border-gray-10 px-4 py-1 rounded mr-4">로그인</button>
          </Link>
        )}
        <div className="px-4 py-3.5 text-sm border-x border-gray-50">
          {/* 간편메뉴를 누르면 어떤일이 발생?? */}간편메뉴
        </div>
      </div>
    </header>
  );
}
