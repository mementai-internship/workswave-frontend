import React from 'react';

import EntireHistoryFilterbar from '@/components/OtManagement/EntireHistory/EntireHistoryFilterbar/EntireHistoryFilterbar';
import EntireHistoryHeader from '@/components/OtManagement/EntireHistory/EntireHistoryHeader';
import EntireHistoryTable from '@/components/OtManagement/EntireHistory/EntireHistoryTable/EntireHistoryTable';

export default function EntireHistoryPage() {
  return (
    <main className="flex flex-col gap-4 w-full">
      <EntireHistoryHeader />
      <EntireHistoryFilterbar />
      <EntireHistoryTable />
    </main>
  );
}
