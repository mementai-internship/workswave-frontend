import { Box } from '@radix-ui/themes';
import React from 'react';

interface IProps {
  title: string;
  width?: string;
  children: React.ReactNode;
}

export default function HourlyRangeInputContainer({ width = '', title, children }: IProps) {
  return (
    <Box className="w-full flex gap-1 items-center">
      <label className={`shrink-0 text-gray-50 text-xs ${width}`}>{title}</label>
      <Box className="w-full flex gap-1">{children}</Box>
    </Box>
  );
}
