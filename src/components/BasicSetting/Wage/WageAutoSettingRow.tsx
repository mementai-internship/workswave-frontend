import React from 'react';

interface IProps {
  children: React.ReactNode;
}

export default function WageAutoSettingRow({ children }: IProps) {
  return (
    <div className="flex items-center justify-between border-b border-b-gray-30 mb-1">
      {children}
    </div>
  );
}
