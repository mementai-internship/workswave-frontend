import React from 'react';

import DayoffManagementFilterbar from '@/components/DayoffManagement/DayoffManagementFilterbar/DayoffManagementFilterbar';
import DayoffManagementHeader from '@/components/DayoffManagement/DayoffManagementHeader';
import DayoffManagementList from '@/components/DayoffManagement/DayoffManagementList/DayoffManagementTable';

export default function DayoffManagementPage() {
  return (
    <main className="flex flex-col gap-4 w-full">
      <DayoffManagementHeader />
      <DayoffManagementFilterbar />
      <DayoffManagementList />
    </main>
  );
}
