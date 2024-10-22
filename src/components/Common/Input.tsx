import { TextField } from '@radix-ui/themes';
import React, { forwardRef } from 'react';

interface IInputProps extends React.ComponentProps<typeof TextField.Root> {
  placeholder?: string;
  size?: '1' | '2' | '3';
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ placeholder, size = '2', ...rest }, ref) => {
    return (
      <TextField.Root ref={ref} radius="none" size={size} placeholder={placeholder} {...rest} />
    );
  }
);

export default Input;
