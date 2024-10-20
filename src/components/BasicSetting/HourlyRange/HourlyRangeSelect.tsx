import { Select } from '@radix-ui/themes';
import { ButtonHTMLAttributes, forwardRef } from 'react';

import { IHourWageTemplatesForm } from '@/models/hour-wage-templates';

export type THourlyRangeSelectType = { id: number; name: string }[];

interface IProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'content' | 'onClick'> {
  content: THourlyRangeSelectType;
  defaultValue?: number | string;
  placeholder?: string;
  isBorder?: boolean;
  isTitle?: boolean;
  isWidthFull?: boolean;
  name?: keyof IHourWageTemplatesForm;
  onClick?: (id: string) => void;
}

const HourlyRangeSelect = forwardRef<HTMLButtonElement, IProps>(
  (
    {
      content,
      placeholder = '',
      isBorder = false,
      isTitle = false,
      defaultValue,
      isWidthFull = false,
      onClick,
    },
    ref
  ) => {
    return (
      <Select.Root defaultValue={defaultValue?.toString() ?? undefined} onValueChange={onClick}>
        <Select.Trigger
          variant={!isBorder ? 'ghost' : 'surface'}
          radius="none"
          className={`bg-transparent text-black px-4 py-4 ${isTitle ? 'text-lg' : 'text-md'} ${isWidthFull ? 'grow' : 'w-36'}`}
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

export default HourlyRangeSelect;
