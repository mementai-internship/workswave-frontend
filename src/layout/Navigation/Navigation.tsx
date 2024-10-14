import { NAVIGATION_CONTENTS } from '@/layout/Navigation/constants';
import { Link, useLocation } from 'react-router-dom';

// 현재 로그인한 유저의 권한을 얻는 함수
const getCurrentUserAuth = () => {
  return 'STAFF';
};

export default function Navigation() {
  const currentUserAuth = getCurrentUserAuth();
  const { pathname } = useLocation();
  const currentPath = pathname.split('/')[1];

  return (
    <nav className="flex mt-2 px-5 border-b border-gray-10">
      {NAVIGATION_CONTENTS[currentUserAuth].map(({ path, content }) => (
        <Link
          to={path}
          key={content}
          className={`py-4 grow flex items-center justify-center hover:cursor-pointer hover:bg-slate-200 
          ${path === `/${currentPath}` ? 'text-purple-50 border-b border-purple-50' : ''}`}
        >
          <li className="list-none">{content}</li>
        </Link>
      ))}
    </nav>
  );
}
