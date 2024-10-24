import React from 'react';

import Title from '@/components/Common/Title';

interface IProps {
  title: string;
  leftChild?: React.ReactNode;
  rightChild?: React.ReactNode;
  width?: string;
  position: 'left' | 'right';
  children?: React.ReactNode;
}

export default function WageContainer({
  title,
  leftChild,
  rightChild,
  width = 'w-full',
  position,
  children,
}: IProps) {
  return (
    <div className={`border border-zinc-300 ${width} ${position === 'left' ? 'border-r-0' : ''}`}>
      <div className="flex items-center justify-between gap-2 px-6 py-2 border-b border-zinc-300">
        <div className="flex items-center gap-4">
          <Title content={title} />
          {leftChild}
        </div>

        <div className="flex gap-2 ">{rightChild}</div>
      </div>
      <div className="h-[calc(100%-100px)] overflow-y-scroll"> {children}</div>
    </div>
  );
}
