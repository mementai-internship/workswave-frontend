import { Txt } from '@/components/Common/Txt';
import { IHourlyRangeItemSplitTime } from '@/models/hourlyRange.model';
import { TextField } from '@radix-ui/themes';
import React, { forwardRef } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface IProps {
  label?: string;
  maxWidth?: number;
  placeholder?: string;
  styles?: string;
  readOnly?: boolean;
  value?: string | number;
  register?: UseFormRegister<IHourlyRangeItemSplitTime>;
  name: keyof IHourlyRangeItemSplitTime;
}

const HourlyRangeInput = forwardRef<HTMLInputElement, IProps>(
  ({ label, placeholder, styles = '', readOnly = false, value, register, name }, ref) => {
    return (
      <div className={`flex items-center ${styles} flex-1 w-full`}>
        <TextField.Root
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
