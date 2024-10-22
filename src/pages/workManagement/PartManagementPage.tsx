import Pagination from '@/components/Common/Pagination';
import PartTimeTable from '@/components/WorkManagement/PartTime/PartTimeTable';

export default function PartManagementPage() {
  return (
    <div>
      <PartTimeTable />
      <Pagination totalItems={10} itemsPerPage={1} />
    </div>
  );
}
