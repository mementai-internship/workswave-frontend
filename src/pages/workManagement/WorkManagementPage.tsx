import Pagination from '@/components/Common/Pagination';
import WorkTable from '@/components/WorkManagement/Work/WorkTable';

export default function WorkManagementPage() {
  // const { data } = useGetAllWork();
  return (
    <div className="w-full">
      <WorkTable />
      <Pagination totalItems={10} itemsPerPage={1} />
    </div>
  );
}
