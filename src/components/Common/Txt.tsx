import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof TYPOGRAPHY_VARIANT;
  color?: string;
}

export function Txt({ variant = 'body1', color, className, ...props }: Props) {
  return (
    <span
      className={`m-0 p-0 leading-normal ${TYPOGRAPHY_VARIANT[variant]} ${
        color ? `text-[${color}]` : 'text-inherit'
      } ${className || ''}`}
      {...props}
    />
  );
}

const TYPOGRAPHY_VARIANT = {
  h1: 'text-5xl font-black',
  h2: 'text-4xl font-extrabold',
  h3: 'text-3xl font-bold',
  h4: 'text-2xl font-bold',
  h5: 'text-xl font-bold',
  h6: 'text-lg font-semibold',
  subtitle1: 'text-lg font-semibold',
  subtitle2: 'text-base font-medium',
  body1: 'text-base font-normal',
  body2: 'text-sm font-normal',
  button: 'text-sm font-medium uppercase',
  caption: 'text-xs font-normal',
  overline: 'text-xs font-normal uppercase tracking-wider',
};
