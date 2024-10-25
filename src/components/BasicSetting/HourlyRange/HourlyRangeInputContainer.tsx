import { Box } from '@radix-ui/themes';
import React from 'react';

interface IProps {
  title: string;
  width?: string;
  children: React.ReactNode;
}

export default function HourlyRangeInputContainer({ width = '', title, children }: IProps) {
  return (
    <Box className="flex items-center w-full gap-1">
      <label className={`shrink-0 text-gray-50 text-xs ${width}`}>{title}</label>
      <Box className="flex w-full gap-1 ">{children}</Box>
    </Box>
  );
}
