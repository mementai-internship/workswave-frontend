import Commute from '@/components/WorkManagement/Commute/Commute';
import PartTime from '@/components/WorkManagement/PartTime/PartTime';
import WorkFilterLayout from '@/components/WorkManagement/WorkFilterLayout';
import WorkHeader from '@/components/WorkManagement/WorkHeader';
import { useState } from 'react';

export default function LaborManagementPage() {
  const [isPartTime, isSetPartTime] = useState(false);

  return (
    <div>
      <WorkHeader isPartTime={isPartTime} isSetPartTime={isSetPartTime} />
      <WorkFilterLayout />
      {isPartTime ? <Commute /> : <PartTime />}
    </div>
  );
}
