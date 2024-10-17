import React from 'react';

import DayoffManagementDetail from '@/components/DayoffManagement/DayoffManagementDetail';
import DayoffManagementFilterbar from '@/components/DayoffManagement/DayoffManagementFilterbar/DayoffManagementFilterbar';
import DayoffManagementHeader from '@/components/DayoffManagement/DayoffManagementHeader';
import DayoffManagementList from '@/components/DayoffManagement/DayoffManagementList/DayoffManagementTable';

export default function DayoffManagementPage() {
  return (
    <main className="flex flex-col gap-4 w-full">
      <DayoffManagementHeader />
      <DayoffManagementDetail autoDayoff={4} remainingDayoff={0} usedDayoff={9} />
      <DayoffManagementFilterbar />
      <DayoffManagementList />
    </main>
  );
}
