import { Txt } from '@/components/Common/Txt';
import { IHourlyRangeItemSplitTime } from '@/models/hourlyRange.model';
import { TextField } from '@radix-ui/themes';
import React, { forwardRef } from 'react';
import { Control, Controller, UseFormRegister } from 'react-hook-form';

interface IProps {
  label?: string;
  maxWidth?: number;
  placeholder?: string;
  styles?: string;
  readOnly?: boolean;
  value?: string | number;
  register?: UseFormRegister<IHourlyRangeItemSplitTime>;
  name: keyof IHourlyRangeItemSplitTime;
  control?: Control<IHourlyRangeItemSplitTime>;
  type?: 'text' | 'number';
}

const HourlyRangeInput = forwardRef<HTMLInputElement, IProps>(
  (
    {
      control,
      label,
      placeholder,
      styles = '',
      readOnly = false,
      value,
      register,
      name,
      type = 'number',
    },
    ref
  ) => {
    const handleInputValidate = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (!label) return value;

      const numberValue = Number(value);
      if (numberValue < 0) return 0;
      if (label === '시') {
        if (numberValue > 23) return 23;
      } else if (label === '분') {
        if (numberValue > 59) return 59;
      }
      return value.padStart(2, '0');
    };
    if (control)
      return (
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value = '' } }) => (
            <div className={`flex items-center ${styles} flex-1 w-full shrink-0`}>
              <TextField.Root
                type={type}
                placeholder={placeholder}
                radius="none"
                readOnly={readOnly}
                value={value}
                onChange={onChange}
                onBlur={(e) => {
                  const formattedValue = handleInputValidate(e);
                  onChange(formattedValue);
                }}
                ref={ref}
                {...(register &&
                  register(name, { valueAsNumber: type === 'number', required: true }))}
                style={{ width: '100%', paddingRight: label ? '0' : '0.5rem' }}
              >
                {label && (
                  <>
                    <TextField.Slot></TextField.Slot>
                    <TextField.Slot>
                      <Txt variant="body2" color="black">
                        {label}
                      </Txt>
                    </TextField.Slot>
                  </>
                )}
              </TextField.Root>
            </div>
          )}
        />
      );
    return (
      <div className={`flex items-center ${styles} flex-1 w-full`}>
        <TextField.Root
          type={type}
          placeholder={placeholder}
          radius="none"
          readOnly={readOnly}
          value={value}
          ref={ref}
          {...(register && register(name))}
          style={{ width: '100%', paddingRight: label ? '0' : '0.5rem' }}
        >
          {label && (
            <>
              <TextField.Slot></TextField.Slot>
              <TextField.Slot>
                <Txt variant="body2" color="black">
                  {label}
                </Txt>
              </TextField.Slot>
            </>
          )}
        </TextField.Root>
      </div>
    );
  }
);

export default HourlyRangeInput;
