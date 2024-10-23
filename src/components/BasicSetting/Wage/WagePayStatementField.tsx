import React from 'react';

import { Txt } from '@/components/Common/Txt';

interface IProps {
  children: React.ReactNode;
  title?: string;
  subTitle?: string;
}

export default function WagePayStatementFiled({ title, subTitle, children }: IProps) {
  return (
    <div className="mb-4">
      <Txt variant="h5" className="mb-1">
        {title}
      </Txt>
      <Txt className="block mb-2">{subTitle}</Txt>

      {children}
    </div>
  );
}
