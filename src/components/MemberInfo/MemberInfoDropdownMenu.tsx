import { Button, DropdownMenu } from '@radix-ui/themes';

interface IMemberInfoDropdownProps {
  title: string;
}

function MemberInfoDropdown({ title }: IMemberInfoDropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center justify-center w-44 h-10 justify-between bg-light-gray border border-gray-50 border-solid text-black rounded-sm px-4 py-4">
        <Button variant="soft">
          {title}
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-44">
        <DropdownMenu.Item>뮤즈의원(강남점)</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>뮤즈의원(수원인계점)</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default MemberInfoDropdown;
