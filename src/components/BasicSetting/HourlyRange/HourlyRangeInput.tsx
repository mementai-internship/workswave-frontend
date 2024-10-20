import { TextField } from '@radix-ui/themes';
import { Responsive } from '@radix-ui/themes/dist/esm/props/prop-def.js';
import { InputHTMLAttributes, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

import { Txt } from '@/components/Common/Txt';
import { IHourWageTemplatesForm } from '@/models/hour-wage-templates';

interface IProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'color' | 'size'> {
  label?: string;
  styles?: string;
  defaultValue?: string;
  value?: string | number;
  type?: 'text';
  size?: Responsive<'1' | '2' | '3'>;
  name: keyof IHourWageTemplatesForm;
  error?: FieldError;
}

const HourlyRangeInput = forwardRef<HTMLInputElement, IProps>(
  ({ styles = '', label, error, ...props }, ref) => {
    return (
      <div
        className={`flex items-center ${styles} flex-1 w-full ${error ? 'border-red-500' : ''}}`}
      >
        <TextField.Root
          radius="none"
          ref={ref}
          style={{ width: '100%', paddingRight: label ? '0' : '0.5rem' }}
          {...props}
        >
          {label && (
            <TextField.Slot side="right">
              <Txt variant="body2" color="black">
                {label}
              </Txt>
            </TextField.Slot>
          )}
        </TextField.Root>
      </div>
    );
  }
);

export default HourlyRangeInput;
