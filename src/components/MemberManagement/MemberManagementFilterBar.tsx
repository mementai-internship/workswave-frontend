import MemberManagementDropdown from '@/components/MemberManagement/MemberManagementDropdown';
import MemberManagementFilterButton from '@/components/MemberManagement/MemberManagementFilterButton';

const MemberManagementFilterBar = () => {
  return (
    <div className="flex gap-4">
      <MemberManagementDropdown />
      <MemberManagementFilterButton />
    </div>
  );
};

export default MemberManagementFilterBar;
