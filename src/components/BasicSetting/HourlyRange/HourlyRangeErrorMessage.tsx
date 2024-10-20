import React from 'react';

import { Txt } from '@/components/Common/Txt';

interface IProps {
  message: string;
}

export default function HourlyRangeErrorMessage({ message }: IProps) {
  return (
    <Txt variant="caption" color="red" className="text-right">
      {message}
    </Txt>
  );
}
