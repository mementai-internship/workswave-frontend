import Pagination from '@/components/Common/Pagination';
import Title from '@/components/Common/Title';
import MemberManagementFilterBar from '@/components/MemberManagement/MemberManagementFilterBar';
import MemberManagementTable from '@/components/MemberManagement/MemberManagementTable';

export default function MemberManagementPage() {
  const itemsPerPage = 10;

  return (
    <div className="flex flex-col gap-2 w-full">
      <Title content="회원관리" />
      <hr className="w-min-screen h-0.5 bg-gray-300" />
      <MemberManagementFilterBar />
      <MemberManagementTable />
      <Pagination totalItems={500} itemsPerPage={itemsPerPage} />
    </div>
  );
}
