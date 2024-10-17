import { Button, DropdownMenu } from '@radix-ui/themes';
import React, { useState } from 'react';

interface IMemberInfoDropdownProps {
  title: string;
  menu: IMemberInfoDropdownMenu[];
}

interface IMemberInfoDropdownMenu {
  id: number;
  name: string;
  link: string;
}

export default function MemberInfoDropdown({ title, menu }: IMemberInfoDropdownProps) {
  const [selectedItem, setSelectedItem] = useState(title);

  function handleItemClick(item: string) {
    setSelectedItem(item);
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center w-44 h-10 justify-between bg-light-gray border border-gray-50 border-solid text-black rounded-sm px-4 py-4">
        <Button variant="soft">
          {selectedItem}
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-44">
        {menu.map((item) => (
          <React.Fragment key={item.id}>
            <DropdownMenu.Item onClick={() => handleItemClick(item.name)}>
              {item.name}
            </DropdownMenu.Item>
            {item.id === menu.length - 1 && <DropdownMenu.Separator />}
          </React.Fragment>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
