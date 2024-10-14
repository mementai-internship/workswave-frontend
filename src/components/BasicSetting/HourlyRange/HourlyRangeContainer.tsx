import Title from '@/components/Common/Title';
import React from 'react';

interface IProps {
  title: string;
  subTitleElement?: React.ReactNode;
  width?: string;
  children: React.ReactNode;
}

export default function HourlyRangeContainer({ title, subTitleElement, children, width }: IProps) {
  return (
    <div className={`border border-[#dddddd] bg-[#ffffff] h-full ${width}`}>
      <div className="flex items-center gap-6 title px-8 py-2 border-b border-[#dddddd]">
        <Title content={title} />
        {subTitleElement}
      </div>
      {children}
    </div>
  );
}
