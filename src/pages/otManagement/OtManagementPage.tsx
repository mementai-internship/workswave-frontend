import React from 'react';

import OtManagementFilterbar from '@/components/OtManagement/OtManagementFilterbar/OtManagementManagementFilterbar';
import OtManagementHeader from '@/components/OtManagement/OtManagementHeader';
import OtManagementList from '@/components/OtManagement/OtManagementList/OtManagementTable';

export default function OtManagementPage() {
  return (
    <main className="flex flex-col gap-4 w-full">
      <OtManagementHeader />
      <OtManagementFilterbar />
      <OtManagementList />
    </main>
  );
}
