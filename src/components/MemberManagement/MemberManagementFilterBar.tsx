import { Button } from '@radix-ui/themes';

import ContactSearchInput from '@/components/Common/ContactSearchInput';
import SelectBox from '@/components/Common/Select';
import { useGetUsers } from '@/hooks/apis/useUserManagement';

export default function MemberManagementFilterBar({ onBranchChange, onPartChange }) {
  const { data: allUserList } = useGetUsers(1, 1000, '0', '0', '0');
  const branchList = Array.from(new Set(allUserList?.data?.map((user) => user.branch)));
  const partList = Array.from(new Set(allUserList?.data?.map((user) => user.part)));
  console.log(branchList, partList);
  console.log(allUserList);

  return (
    <div className="flex gap-2">
      <div>
        <SelectBox
          title="지점"
          size="xSmall"
          options={branchList.map((branch, index) => ({
            id: index,
            name: branch,
            action: () => onBranchChange((index + 1).toString()),
          }))}
        />
        <SelectBox
          title="파트"
          size="xSmall"
          options={partList.map((part, index) => ({
            id: index,
            name: part,
            action: () => onPartChange((index + 1).toString()),
          }))}
        />
      </div>
      <ContactSearchInput />
      <Button color="gray" size="2">
        초기화
      </Button>
    </div>
  );
}
