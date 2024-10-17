import { TextField } from '@radix-ui/themes';
import React, { forwardRef } from 'react';
import { Control, Controller } from 'react-hook-form';

import { IBranchesRequest } from '@/models/branches.model';

interface IProps {
  children?: React.ReactNode;
  control?: Control<IBranchesRequest>;
  name: keyof IBranchesRequest;
  placeholder?: string;
  label: string;
  maxLength?: number;
  isEmailType?: boolean;
}

type TInputType = '전화번호' | '사업자번호';

const OfficeSettingCreateRow = forwardRef<HTMLInputElement, IProps>(
  ({ children, control, name, placeholder, label, maxLength, isEmailType = false }, ref) => {
    const validateOnBlurForInputPattern = (value: string, type: TInputType) => {
      const cleanedValue = value.replace(/\D/g, '');
      switch (type) {
        case '전화번호': {
          if (cleanedValue.length <= 4) {
            return cleanedValue; // 첫 4자리까지만
          } else if (cleanedValue.length <= 8) {
            return `${cleanedValue.slice(0, 4)}-${cleanedValue.slice(4)}`; // 중간에 -
          } else {
            return `${cleanedValue.slice(0, 3)}-${cleanedValue.slice(3, 7)}-${cleanedValue.slice(7, 11)}`;
          }
        }
        case '사업자번호': {
          return `${cleanedValue.slice(0, 3)}-${cleanedValue.slice(3, 5)}-${cleanedValue.slice(6)}`;
        }
      }
    };
    return (
      <fieldset className="w-full flex border-b border-b-gray-[#dadce0] last:border-b-0">
        <label className="shrink-0 w-2/5 px-3 py-4 bg-gray-300 border-r-gray-[#dadce0] ">
          {label}
        </label>
        {children && (
          <div className="flex flex-1 justify-center items-center gap-2 px-3 py-4">{children}</div>
        )}

        {!children && control && (
          <div className="grow w-full flex justify-center items-center px-3 py-4">
            <Controller
              control={control}
              name={name}
              render={({ field: { value, onChange } }) => (
                <TextField.Root
                  ref={ref}
                  value={value}
                  onChange={onChange}
                  placeholder={placeholder}
                  className="flex-1"
                  maxLength={maxLength}
                  type={isEmailType ? 'email' : 'text'}
                  onBlur={() => {
                    if (placeholder !== '사업자번호' && placeholder !== '전화번호') return;
                    const validatedValue = validateOnBlurForInputPattern(
                      value.toString(),
                      placeholder as TInputType
                    );
                    onChange(validatedValue);
                  }}
                  required
                />
              )}
            />
          </div>
        )}
      </fieldset>
    );
  }
);
export default OfficeSettingCreateRow;
