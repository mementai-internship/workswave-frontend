import { Button, DropdownMenu } from '@radix-ui/themes';
import { Link } from 'react-router-dom';

interface IMemberInfoDropdownProps {
  title: string;
  menu: IMemberInfoDropdownMenu[];
}

interface IMemberInfoDropdownMenu {
  id: number;
  name: string;
  link: string;
}

function MemberInfoDropdown({ title, menu }: IMemberInfoDropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center justify-center w-44 h-10 justify-between bg-light-gray border border-gray-50 border-solid text-black rounded-sm px-4 py-4">
        <Button variant="soft">
          {title}
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-44">
        {menu.map((item) => (
          <Link to={item.link} key={item.id}>
            <DropdownMenu.Item>{item.name}</DropdownMenu.Item>
            {item.id === menu.length - 1 && <DropdownMenu.Separator />}
          </Link>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default MemberInfoDropdown;
