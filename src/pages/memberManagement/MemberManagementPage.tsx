import MemberManagementFilterBar from '@/components/memberManagement/MemberManagementFilterBar';
import MemberManagementTable from '@/components/memberManagement/MemberManagementTable';

const MemberManagementPage = () => {
  return (
    <div className="flex flex-col gap-4 px-10 py-10">
      <MemberManagementFilterBar />
      <MemberManagementTable />
    </div>
  );
};

export default MemberManagementPage;
