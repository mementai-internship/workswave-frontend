import Header from '@/layout/Header/Header';
import React from 'react';
// import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
