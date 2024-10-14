import Header from '@/layout/Header/Header';
import Navigation from '@/layout/Navigation/Navigation';
import React from 'react';
// import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navigation />
      <main className="p-8 flex grow">
        <Outlet />
      </main>
    </div>
  );
}
