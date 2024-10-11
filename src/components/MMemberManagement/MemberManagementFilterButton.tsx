import { CheckboxGroup } from '@radix-ui/themes';

const MemberManagementFilterButton = () => {
  return (
    <>
      <CheckboxGroup.Root className="flex items-center gap-4">
        <div className="flex flex-row items-center gap-2">
          <CheckboxGroup.Item value="1" className="w-6 h-6 border border-gray-50 rounded p-1" />
          <label>퇴사자 포함</label>
        </div>
        <div className="flex items-center gap-2">
          <CheckboxGroup.Item value="2" className="w-6 h-6 border border-gray-50 rounded p-1" />
          <label>휴직자</label>
        </div>
      </CheckboxGroup.Root>
    </>
  );
};

export default MemberManagementFilterButton;
