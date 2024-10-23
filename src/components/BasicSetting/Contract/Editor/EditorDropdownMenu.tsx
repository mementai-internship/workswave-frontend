import { Button, DropdownMenu } from '@radix-ui/themes';
import { SetStateAction } from 'jotai';
import { Dispatch } from 'react';

interface IEditorDropdownMenu {
  handleFontSizeChange: (fontSize: string) => void;
  setFontSize: Dispatch<SetStateAction<string>>;
  fontSize: string;
}

function EditorDropdownMenu({ handleFontSizeChange, setFontSize, fontSize }: IEditorDropdownMenu) {
  const SIZES = ['14', '16', '18', '24', '28', '30', '34', '38'];

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center justify-center w-8 h-5 px-4 py-4 text-white rounded-sm bg-[#5b5b5b]">
        <Button variant="soft">{fontSize}px</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="flex items-center justify-center h-20 bg-[#5b5b5b] text-white">
        {SIZES.map((size, idx) => (
          <DropdownMenu.Item
            key={idx}
            onClick={() => {
              handleFontSizeChange(size);
              setFontSize(size);
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
