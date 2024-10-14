import { IHourlyRangeItemSplitTime } from '@/models/hourlyRange.model';
import { Select } from '@radix-ui/themes';
import { forwardRef } from 'react';
import { Control, Controller, UseFormRegister } from 'react-hook-form';

interface IProps {
  content: { name: string; id: string }[];
  defaultValue?: number | string;
  placeholder?: string;
  isBorder?: boolean;
  register?: UseFormRegister<IHourlyRangeItemSplitTime>;
  isTitle?: boolean;
  name?: keyof IHourlyRangeItemSplitTime;
  control?: Control<IHourlyRangeItemSplitTime>;
}

const HourlyRangeSelect = forwardRef<HTMLButtonElement, IProps>(
  ({ content, placeholder, isBorder, defaultValue, name, isTitle, register, control }, ref) => {
    if (control)
      return (
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value = '' } }) => (
            <Select.Root value={value.toString()} onValueChange={onChange}>
              <Select.Trigger
                variant={!isBorder ? 'ghost' : 'surface'}
                radius="none"
                className={`flex items-center justify-center gap-10 bg-transparent text-black px-4 py-4 ${isTitle ? 'text-lg' : 'text-md'}`}
                placeholder={placeholder || undefined}
                ref={ref}
                style={{ flexGrow: '1', justifyContent: 'space-between' }}
              />
              <Select.Content style={{ width: '100%' }}>
                <Select.Group>
                  {content.map(({ id, name }) => (
                    <Select.Item key={id} value={id}>
                      {name}
                    </Select.Item>
                  ))}
                </Select.Group>
              </Select.Content>
            </Select.Root>
          )}
        />
      );
    return (
      <Select.Root
        defaultValue={typeof defaultValue === 'number' ? defaultValue.toString() : defaultValue}
      >
        <Select.Trigger
          variant={!isBorder ? 'ghost' : 'surface'}
          radius="none"
          className={`flex items-center justify-center gap-10 bg-transparent text-black px-4 py-4 ${isTitle ? 'text-lg' : 'text-md'}`}
          placeholder={placeholder || undefined}
          ref={ref}
          {...(register && register(name))}
        />
        <Select.Content>
          <Select.Group>
            {content.map(({ id, name }) => (
              <Select.Item key={id} value={id}>
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
