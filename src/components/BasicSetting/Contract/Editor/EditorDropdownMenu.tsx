import { Button, DropdownMenu } from '@radix-ui/themes';
import React, { useState } from 'react';

interface IEditorDropdownMenu {
  sizes: string[];
  handleFontSizeChange: (fontSize: string) => void;
}

function EditorDropdownMenu({ sizes, handleFontSizeChange }: IEditorDropdownMenu) {
  const [curPx, setCurPx] = useState('24px');
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center justify-center w-8 h-5 px-4 py-4 text-white rounded-sm bg-[#5b5b5b]">
        <Button variant="soft">{curPx}</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="flex items-center justify-center h-20 bg-[#5b5b5b] text-white">
        {sizes.map((size, idx) => (
          <DropdownMenu.Item
            key={idx}
            onClick={() => {
              handleFontSizeChange(size);
              setCurPx(size);
            }}
            className="flex items-center justify-center w-8"
          >
            {size}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default EditorDropdownMenu;
