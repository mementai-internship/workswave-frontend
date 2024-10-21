import React, { useState } from 'react';

import Pagination from '@/components/Common/Pagination';
import CommuteTable from '@/components/WorkManagement/Commute/CommuteTable';
import DetailCommuteRecord from '@/components/WorkManagement/Commute/DetailCommuteRecord';
import { mockStatistics } from '@/constants/workManagement/workSelect.mock';
import { ICommuteData } from '@/models/work.model';

export default function CommuteManagementPage() {
  const [showAllStatus, setShowAllStatus] = useState(true);

  const [selectedEmployee, setSelectedEmployee] = useState<ICommuteData | null>(null);
  const handleShowAllStatus = (employee: ICommuteData) => {
    setShowAllStatus(false);
    setSelectedEmployee(employee);
  };
  return (
    <div>
      <DetailCommuteRecord
        statistics={mockStatistics}
        selectedEmployee={selectedEmployee}
        showAllStatus={showAllStatus}
        setShowAllStatus={setShowAllStatus}
      />
      <CommuteTable handleShowAllStatus={handleShowAllStatus} />
      <Pagination totalItems={10} itemsPerPage={1} />
    </div>
  );
}
