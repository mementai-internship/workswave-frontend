import { useAtom } from 'jotai';
import React from 'react';

import DayoffManagementDetail from '@/components/DayoffManagement/DayoffManagementDetail';
import DayoffManagementFilterbar from '@/components/DayoffManagement/DayoffManagementFilterbar/DayoffManagementFilterbar';
import DayoffManagementHeader from '@/components/DayoffManagement/DayoffManagementHeader';
import DayoffManagementList from '@/components/DayoffManagement/DayoffManagementList/DayoffManagementTable';
import { currentUserAtom } from '@/store/authAtoms';

export default function DayoffManagementPage() {
  const [currentUser] = useAtom(currentUserAtom);

  if (!currentUser || currentUser.isFetching) return null;

  return (
    <main className="flex flex-col gap-4 w-full">
      <DayoffManagementHeader currentUser={currentUser.data} />
      <DayoffManagementDetail autoDayoff={4} remainingDayoff={0} usedDayoff={9} />
      <DayoffManagementFilterbar currentUser={currentUser.data} />
      <DayoffManagementList />
    </main>
  );
}
