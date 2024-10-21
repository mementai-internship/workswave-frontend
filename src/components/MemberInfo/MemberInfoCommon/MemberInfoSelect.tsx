import { Select } from '@radix-ui/themes';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ISelectProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'content' | 'onChange'> {
  content: { id: number; name: string }[];
  defaultValue?: number | string;
  placeholder?: string;
  isBorder?: boolean;
  isTitle?: boolean;
  isWidthFull?: boolean;
  name?: string;
  onChange?: (id: string | number) => void;
}

const MemberInfoSelect = forwardRef<HTMLButtonElement, ISelectProps>(
  ({ content, placeholder = '', defaultValue, onChange }, ref) => {
    return (
      <Select.Root defaultValue={defaultValue?.toString() ?? undefined} onValueChange={onChange}>
        <Select.Trigger
          className={`relative justify-between text-black w-44 h-10 border-2 border-gray-300`}
          placeholder={placeholder || undefined}
          ref={ref}
        />
        <Select.Content>
          <Select.Group>
            {content?.map(({ id, name }) => (
              <Select.Item key={id} value={id.toString()}>
                {name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    );
  }
);

export default MemberInfoSelect;
