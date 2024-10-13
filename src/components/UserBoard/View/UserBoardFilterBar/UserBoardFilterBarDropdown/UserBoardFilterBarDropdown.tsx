import { Button, DropdownMenu } from '@radix-ui/themes';
import React from 'react';

export default function UserBoardFilterBarDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center justify-center gap-10 bg-light-gray border border-gray-50 border-solid text-black rounded-sm px-4 py-4">
        <Button variant="soft">
          지점 선택
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Edit</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Archive</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
