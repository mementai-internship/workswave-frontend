import React from 'react';

import Title from '@/components/Common/Title';

interface IProps {
  title: string;
  subTitleElement?: React.ReactNode;
  width?: string;
  children: React.ReactNode;
}

export default function HourlyRangeContainer({ title, subTitleElement, children, width }: IProps) {
  return (
    <div className={`border border-zinc-300	bg-white h-full overflow-y-scroll ${width}`}>
      <div className="flex items-center gap-6 title px-8 py-2 border-b border-zinc-300">
        <Title content={title} />
        {subTitleElement}
      </div>

      {children}
    </div>
  );
}
