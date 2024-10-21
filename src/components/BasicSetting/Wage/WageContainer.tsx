import React from 'react';

import Title from '@/components/Common/Title';

interface IProps {
  title: string;
  titleChildren?: React.ReactNode;
  width?: string;
  position: 'left' | 'right';
  children?: React.ReactNode;
}

export default function WageContainer({
  title,
  titleChildren,
  width = 'w-full',
  position,
  children,
}: IProps) {
  return (
    <div className={`border border-zinc-300 ${width} ${position === 'left' ? 'border-r-0' : ''}`}>
      <div className="flex items-center gap-2 px-6 py-2 border-b border-zinc-300">
        <Title content={title} />
        {titleChildren && titleChildren}
      </div>
      {children}
    </div>
  );
}
