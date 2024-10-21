import { Button, Select } from '@radix-ui/themes';
import { forwardRef, useState } from 'react';

interface IMemberInfoInputProps {
  size?: 'large' | 'medium' | 'small';
  directInputButton?: boolean;
  filterButton?: boolean;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MemberInfoInputSize = {
  large: 'w-96',
  medium: 'w-60',
  small: 'w-44',
};

const MemberInfoInput = forwardRef<HTMLInputElement, IMemberInfoInputProps>(
  ({ size = 'small', directInputButton, filterButton, defaultValue, onChange }, ref) => {
    const [isDirectInput, setIsDirectInput] = useState(false);

    function handleDirectInput() {
      setIsDirectInput(true);
    }

    return (
      <>
        <input
          className={`flex items-center justify-center ${MemberInfoInputSize[size]} pl-3 h-10 justify-between bg-light-gray border-2 border-gray-30 border-solid text-black rounded-sm p-1`}
          disabled={isDirectInput}
          ref={ref}
          onChange={onChange}
          defaultValue={defaultValue}
        />
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
      </>
    );
  }
);

export default MemberInfoInput;
