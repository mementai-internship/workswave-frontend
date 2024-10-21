import React from 'react';

import { Txt } from '@/components/Common/Txt';
import { IWageSetting } from '@/models/wageSetting.model';

interface IProps {
  leftChild: React.ReactNode;
  caption: string;
  readonly?: boolean;
  value?: string;
  name?: keyof IWageSetting;
  maxCount?: number;
}

export default function WageAutoSettingRow({ leftChild, caption, readonly = true, value }: IProps) {
  return (
    <div className="flex items-center justify-between border-b border-b-gray-30 mb-1">
      {leftChild}

      <input
        type="number"
        disabled
        value={value}
        className={`${readonly ? 'bg-transparent focus:outline-0' : 'bg-white'} w-8 text-end text-gray-50 text-sm px-1 `}
      />

      <Txt variant="caption">{caption}</Txt>
    </div>
  );
}
