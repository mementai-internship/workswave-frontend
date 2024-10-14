import MemberManagementDropdown from '@/components/MemberManagement/MemberManagementDropdown';
import MemberManagementFilterButton from '@/components/MemberManagement/MemberManagementFilterButton';

export default function MemberManagementFilterBar() {
  return (
    <div className="flex gap-4">
      <MemberManagementDropdown />
      <MemberManagementFilterButton />
    </div>
  );
}
