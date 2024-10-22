import { useAtom } from 'jotai';
import React from 'react';
import { Navigate } from 'react-router-dom';

import ApprovalHistoryFilterbar from '@/components/DayoffManagement/ApprovalHistory/ApprovalHistoryFilterbar/ApprovalHistoryFilterbar';
import ApprovalHistoryHeader from '@/components/DayoffManagement/ApprovalHistory/ApprovalHistoryHeader';
import ApprovalHistoryTable from '@/components/DayoffManagement/ApprovalHistory/ApprovalHistoryTable/ApprovalHistoryTable';
import { currentUserAtom } from '@/store/authAtoms';

export default function ApprovalHistory() {
  const [currentUser] = useAtom(currentUserAtom);

  if (!currentUser || currentUser.isFetching) return null;

  if (currentUser.data.role !== 'MSO 최고권한' && currentUser.data.role !== '최고관리자') {
    alert('권한이 없습니다.');

    return <Navigate to="/dayoff-management" />;
  }

  return (
    <main className="flex flex-col gap-4 w-full">
      <ApprovalHistoryHeader />
      <ApprovalHistoryFilterbar />
      <ApprovalHistoryTable />
    </main>
  );
}
