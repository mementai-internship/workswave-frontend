import { Select } from '@radix-ui/themes';
import React, { forwardRef } from 'react';
import { Control, Controller } from 'react-hook-form';

import { IWageSetting } from '@/models/wageSetting.model';

interface IProps {
  name?: keyof IWageSetting;
  content: { name: string; id: number }[];
  control?: Control<IWageSetting>;
  placeholder?: string;
}

const WageSelect = forwardRef<HTMLButtonElement, IProps>(
  ({ placeholder, content, name, control }, ref) => {
    if (control)
      return (
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value = '' } }) => (
            <Select.Root value={value.toString()} onValueChange={onChange}>
              <Select.Trigger
                variant="surface"
                className="w-full flex items-center justify-center gap-10 bg-transparent text-black px-4 py-4 text-md text-md"
                ref={ref}
                placeholder={placeholder ?? ''}
                style={{ flexGrow: '1', justifyContent: 'space-between' }}
              />
              <Select.Content style={{ width: '100%' }}>
                <Select.Group>
                  {content.map(({ id, name }) => (
                    <Select.Item key={id} value={id.toString()}>
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
      <Select.Root>
        <Select.Trigger
          variant="ghost"
          className="w-3 flex items-center justify-center gap-10 bg-transparent text-black px-4 py-4 text-md text-lg"
          ref={ref}
          placeholder={placeholder ?? ''}
          style={{ flexGrow: '1', justifyContent: 'space-between' }}
        />
        <Select.Content style={{ width: '100%' }}>
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
