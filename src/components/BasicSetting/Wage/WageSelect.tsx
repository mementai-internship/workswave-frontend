import { Select } from '@radix-ui/themes';
import { forwardRef } from 'react';

import { IWageSetting } from '@/models/wageSetting.model';

interface IProps {
  name?: keyof IWageSetting;
  content: IWageSelectType[];
  placeholder?: string;
  defaultValue?: number;
  onClick?: (id: string) => void;
  onChange?: (...event) => void;
  isWidthFull?: boolean;
  isTitle?: boolean;
}

export interface IWageSelectType {
  id: number;
  name: string;
}

const WageSelect = forwardRef<HTMLButtonElement, IProps>(
  (
    { isTitle, placeholder, content, onClick, defaultValue, onChange, isWidthFull = false },
    ref
  ) => {
    return (
      <Select.Root value={defaultValue?.toString()} onValueChange={onClick ? onClick : onChange}>
        <Select.Trigger
          variant={isTitle ? 'ghost' : 'surface'}
          className={`w-full bg-transparent text-black text-md text-md ${isWidthFull ? 'grow' : 'w-32'} ${isTitle ? 'text-lg' : 'text-md'}`}
          ref={ref}
          placeholder={placeholder ?? ''}
        />
        <Select.Content>
          <Select.Group>
            {content.map(({ id, name }) => (
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

export default WageSelect;
