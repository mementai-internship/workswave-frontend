import { Button, DropdownMenu } from '@radix-ui/themes';

const MemberManagementDropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center justify-center gap-16 border border-gray-50 rounded-sm px-4 py-3">
        <Button variant="soft">
          지점 선택
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      {/* pull 받고 추가 예정
            <DropdownMenu.Content>
            <DropdownMenu.Item>Edit</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Archive</DropdownMenu.Item>
        </DropdownMenu.Content> */}
    </DropdownMenu.Root>
  );
};

export default MemberManagementDropdown;
