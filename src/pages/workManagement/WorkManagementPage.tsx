import Pagination from '@/components/Common/Pagination';
import Commute from '@/components/WorkManagement/Commute/Commute';
import PartTime from '@/components/WorkManagement/PartTime/PartTime';
import WorkFilterLayout from '@/components/WorkManagement/WorkFilterLayout';
import WorkHeader from '@/components/WorkManagement/WorkHeader';
import { useState } from 'react';

export interface ItabItem {
  id: number;
  title: string;
}

export default function WorkManagementPage() {
  const [selectTab, setSelectTab] = useState<ItabItem>({
    id: 0,
    title: '근로 관리',
  });

  const renderTabContent = () => {
    switch (selectTab.id) {
      case 0:
        return <div>근로 관리 내용</div>;
      case 1:
        return <PartTime />;
      case 2:
        return <Commute />;
      default:
        return null;
    }
  };
  return (
    <div className="w-full">
      <WorkHeader selectTab={selectTab} setSelectTab={setSelectTab} />
      <WorkFilterLayout />
      {renderTabContent()}
      <Pagination totalItems={10} itemsPerPage={1} />
    </div>
  );
}
