import Pagination from '@/components/Common/Pagination';
import WorkTable from '@/components/WorkManagement/Work/WorkTable';
import WorkFilter from '@/components/WorkManagement/WorkFilter';

export interface ItabItem {
  id: number;
  title: string;
  path: string;
}

export default function WorkManagementPage() {
  return (
    <div className="w-full">
      <WorkFilter />
      <WorkTable />
      <Pagination totalItems={10} itemsPerPage={1} />
    </div>
  );
}
