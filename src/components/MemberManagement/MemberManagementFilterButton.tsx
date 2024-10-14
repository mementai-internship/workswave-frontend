import { CheckboxGroup } from '@radix-ui/themes';

export default function MemberManagementFilterButton() {
  return (
    <>
      <CheckboxGroup.Root size="3" variant="surface" color="purple" className="flex flex-row gap-4">
        <div className="flex flex-row items-center justify-center">
          <CheckboxGroup.Item value="1" className="w-8 h-8 border border-gray-50 rounded p-1" />
          <label>퇴사자 포함</label>
        </div>
        <div className="flex flex-row items-center justify-center">
          <CheckboxGroup.Item value="2" className="w-8 h-8 border border-gray-50 rounded p-1" />
          <label>휴직자</label>
        </div>
      </CheckboxGroup.Root>
    </>
  );
}
