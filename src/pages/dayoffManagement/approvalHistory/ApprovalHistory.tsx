import React from 'react';

import ApprovalHistoryFilterbar from '@/components/DayoffManagement/ApprovalHistory/ApprovalHistoryFilterbar/ApprovalHistoryFilterbar';
import ApprovalHistoryHeader from '@/components/DayoffManagement/ApprovalHistory/ApprovalHistoryHeader';
import ApprovalHistoryTable from '@/components/DayoffManagement/ApprovalHistory/ApprovalHistoryTable/ApprovalHistoryTable';

export default function ApprovalHistory() {
  return (
    <main className="flex flex-col gap-4 w-full">
      <ApprovalHistoryHeader />
      <ApprovalHistoryFilterbar />
      <ApprovalHistoryTable />
    </main>
  );
}
