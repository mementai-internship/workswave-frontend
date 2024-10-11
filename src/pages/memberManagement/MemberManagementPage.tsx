import MemberManagementFilterBar from '@/components/MemberManagement/MemberManagementFilterBar';
import MemberManagementTable from '@/components/MemberManagement/MemberManagementTable';

const MemberManagementPage = () => {
  return (
    <div className="flex flex-col gap-4 px-10 py-10">
      <MemberManagementFilterBar />
      <MemberManagementTable />
    </div>
  );
};

export default MemberManagementPage;
