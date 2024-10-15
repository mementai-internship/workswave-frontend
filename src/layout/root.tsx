import { useGetCurrentUser } from '@/hooks/apis/useGetCurrentUser';
import Header from '@/layout/Header/Header';
import Navigation from '@/layout/Navigation/Navigation';
import { userTokenAtom } from '@/store/authAtoms';
import { useAtom } from 'jotai';
// import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  const [token] = useAtom(userTokenAtom);
  const response = useGetCurrentUser(token);

  return (
    <div className="flex flex-col min-h-screen">
      <Header name={response?.data.name} role={response?.data.role} />
      <Navigation role={response?.data.role} />
      <main className="p-8 flex grow">
        <Outlet />
      </main>
    </div>
  );
}
