import Pagination from '@/components/Common/Pagination';
import PartTimeTable from '@/components/WorkManagement/PartTime/PartTimeTable';
import WorkFilter from '@/components/WorkManagement/WorkFilter';

export default function PartManagementPage() {
  return (
    <div>
      <WorkFilter />
      <PartTimeTable />
      <Pagination totalItems={10} itemsPerPage={1} />
    </div>
  );
}
