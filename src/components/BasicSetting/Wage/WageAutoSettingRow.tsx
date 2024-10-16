import { Txt } from '@/components/Common/Txt';
import { IWageSetting } from '@/models/wageSetting.model';
import {
  TValidateOnBlurForInputNumberType,
  validateOnBlurForInputNumber,
} from '@/utils/validateOnBlurForInputNumber';
import React from 'react';
import { Control, Controller } from 'react-hook-form';

interface IProps {
  leftChild: React.ReactNode;
  caption: TValidateOnBlurForInputNumberType;
  readonly?: boolean;
  value?: string;
  name?: keyof IWageSetting;
  control?: Control<IWageSetting>;
  maxCount?: number;
}

export default function WageAutoSettingRow({
  control,
  name,
  leftChild,
  caption,
  readonly = true,
  value,
}: IProps) {
  return (
    <div className="flex items-center justify-between border-b border-b-gray-30 mb-1">
      {leftChild}

      <div>
        {control ? (
          <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange, onBlur } }) => (
              <input
                type="text"
                onChange={onChange}
                onBlur={() => {
                  if (typeof value === 'boolean') return;
                  const finalValue = validateOnBlurForInputNumber(value, caption);
                  onChange(finalValue);
                  onBlur();
                }}
                value={typeof value === 'boolean' ? '' : value}
                disabled={readonly}
                className={`${readonly ? 'bg-transparent focus:outline-0' : 'bg-white'} w-12 text-end text-gray-50 text-sm px-1 `}
              />
            )}
          />
        ) : (
          <input
            type="number"
            disabled
            value={value}
            className={`${readonly ? 'bg-transparent focus:outline-0' : 'bg-white'} w-8 text-end text-gray-50 text-sm px-1 `}
          />
        )}

        <Txt variant="caption">{caption}</Txt>
      </div>
    </div>
  );
}
