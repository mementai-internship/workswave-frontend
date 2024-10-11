import MemberManagementDropdown from '@/components/memberManagement/MemberManagementDropdown';
import MemberManagementFilterButton from '@/components/memberManagement/MemberManagementFilterButton';

const MemberManagementFilterBar = () => {
  return (
    <div className="flex gap-4">
      <MemberManagementDropdown />
      <MemberManagementFilterButton />
    </div>
  );
};

export default MemberManagementFilterBar;
