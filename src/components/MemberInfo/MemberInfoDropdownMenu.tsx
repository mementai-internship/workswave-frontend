import { Button, DropdownMenu } from '@radix-ui/themes';
import { Link } from 'react-router-dom';

interface IMemberInfoDropdownProps {
  title: string;
}

//test data API 연결 후 삭제
const memberInfoDropdownMenu = [
  {
    id: 1,
    name: '뮤즈의원(강남점)',
    link: '/member-info/gangnam',
  },
  {
    id: 2,
    name: '뮤즈의원(수원인계점)',
    link: '/member-info/suwon',
  },
];

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
        {memberInfoDropdownMenu.map((item) => (
          <Link to={item.link} key={item.id}>
            <DropdownMenu.Item>{item.name}</DropdownMenu.Item>
            {item.id === memberInfoDropdownMenu.length - 1 && <DropdownMenu.Separator />}
          </Link>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default MemberInfoDropdown;
