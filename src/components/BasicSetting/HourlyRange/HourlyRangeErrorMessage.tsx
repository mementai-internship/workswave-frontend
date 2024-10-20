import React from 'react';

import { Txt } from '@/components/Common/Txt';

interface IProps {
  message: string;
}

export default function HourlyRangeErrorMessage({ message }: IProps) {
  return (
    <Txt variant="caption" className="text-red-500">
      {message}
    </Txt>
  );
}
