import Pagination from '@/components/Common/Pagination';
import WorkTable from '@/components/WorkManagement/Work/WorkTable';

export interface ItabItem {
  id: number;
  title: string;
  path: string;
}

export default function WorkManagementPage() {
  return (
    <div className="w-full">
      <WorkTable />
      <Pagination totalItems={10} itemsPerPage={1} />
    </div>
  );
}
