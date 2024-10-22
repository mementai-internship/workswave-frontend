import { Button } from '@radix-ui/themes';

import ContactSearchInput from '@/components/Common/ContactSearchInput';
import SelectBox from '@/components/Common/Select';
import { useBranchList } from '@/hooks/useBranchList';
import { usePartList } from '@/hooks/usePartList';

export default function MemberManagementFilterBar({ onBranchChange, onPartChange, onResetFilter }) {
  const partList = usePartList();
  const branchList = useBranchList();

  return (
    <div className="flex gap-2">
      <div>
        <SelectBox
          title="지점"
          size="xSmall"
          options={branchList.map((branch, index) => ({
            id: index,
            name: branch,
            value: (index + 1).toString(),
            action: () => onBranchChange(index + 1),
          }))}
        />
        <SelectBox
          title="파트"
          size="xSmall"
          options={partList.map((branch, index) => ({
            id: index,
            name: branch,
            value: (index + 1).toString(),
            action: () => onPartChange(index + 1),
          }))}
        />
      </div>
      <ContactSearchInput />
      <Button color="gray" size="2" onClick={onResetFilter}>
        초기화
      </Button>
    </div>
  );
}
