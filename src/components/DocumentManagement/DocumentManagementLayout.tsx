import { Outlet } from 'react-router-dom';

import DocumentManagementHeader from '@/components/DocumentManagement/DocumentManagementHeader';

export default function DocumentManagementLayout() {
  return (
    <div className="w-full">
      <DocumentManagementHeader />
      <Outlet />
    </div>
  );
}
