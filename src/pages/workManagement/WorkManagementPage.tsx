import Pagination from '@/components/Common/Pagination';
import Commute from '@/components/WorkManagement/Commute/Commute';
import PartTime from '@/components/WorkManagement/PartTime/PartTime';
import WorkFilterLayout from '@/components/WorkManagement/WorkFilterLayout';
import WorkHeader from '@/components/WorkManagement/WorkHeader';
import { useState } from 'react';

export default function WorkManagementPage() {
  const [isPartTime, isSetPartTime] = useState(false);

  return (
    <div className="w-full">
      <WorkHeader isPartTime={isPartTime} isSetPartTime={isSetPartTime} />
      <WorkFilterLayout />
      {isPartTime ? <Commute /> : <PartTime />}
      <Pagination
        totalItems={10}
        itemsPerPage={1}
        currentPage={1}
        onChangePage={function (page: number): void {
          console.log(page);
        }}
      />
    </div>
  );
}
