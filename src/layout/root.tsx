// import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Header from '@/layout/Header/Header';
import Navigation from '@/layout/Navigation/Navigation';

export default function RootLayout() {
  return (
    <div className="flex flex-col w-full min-h-screen ">
      <Header />
      <Navigation />
      <main className="flex p-8 grow ">
        <Outlet />
      </main>
    </div>
  );
}
