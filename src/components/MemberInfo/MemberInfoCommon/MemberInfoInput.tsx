import { Button, Select, TextField } from '@radix-ui/themes';
import { useState } from 'react';

interface IMemberInfoInputProps {
  size?: 'large' | 'medium' | 'small';
  defaultValue?: string;
  directInputButton?: boolean;
  filterButton?: boolean;
}

const MemberInfoInputSize = {
  large: 'w-96',
  medium: 'w-60',
  small: 'w-44',
};

export default function MemberInfoInput({
  size = 'small',
  defaultValue,
  directInputButton,
  filterButton,
}: IMemberInfoInputProps) {
  const [isDirectInput, setIsDirectInput] = useState(false);

  function handleDirectInput() {
    setIsDirectInput(true);
  }

  return (
    <TextField.Root
      defaultValue={defaultValue}
      className={`flex items-center justify-center ${MemberInfoInputSize[size]} h-10 justify-between bg-light-gray border border-gray-30 border-solid text-black rounded-sm p-1`}
      disabled={isDirectInput}
    >
      <TextField.Slot />
      {directInputButton ? (
        <Button
          variant="ghost"
          size="1"
          color={isDirectInput ? 'gray' : 'purple'}
          className="mr-2"
          onClick={handleDirectInput}
        >
          ✓ 직접입력
        </Button>
      ) : filterButton ? (
        <Select.Root defaultValue="자동설정">
          <Select.Trigger variant="ghost" className="mr-2" />
          <Select.Content>
            <Select.Group>
              <Select.Label>설정</Select.Label>
              <Select.Item value="1">자동설정</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
      ) : null}
    </TextField.Root>
  );
}
