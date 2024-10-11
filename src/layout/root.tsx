import Title from '@/components/common/TItle';
import React from 'react';
// import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <Title content="증명서관리" />
      <Outlet />
    </>
  );
}
