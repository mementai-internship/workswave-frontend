import { TextField } from '@radix-ui/themes';
import React, { forwardRef } from 'react';

interface IInputProps extends React.ComponentProps<typeof TextField.Root> {
  placeholder?: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(({ placeholder, ...rest }, ref) => {
  return <TextField.Root ref={ref} radius="none" size="2" placeholder={placeholder} {...rest} />;
});

export default Input;
