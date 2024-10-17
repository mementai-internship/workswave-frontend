import { Txt } from '@/components/Common/Txt';
import { IWorkPolicies } from '@/models/work-policies';
import { TextField } from '@radix-ui/themes';
import React from 'react';
import { FieldPath, UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form';

interface IPropsType {
  register: UseFormRegister<IWorkPolicies>;
  setValue: UseFormSetValue<IWorkPolicies>;
  watch: UseFormWatch<IWorkPolicies>;
}

export default function WorkingSettingOT({ register, setValue, watch }: IPropsType) {
  const handleBlurInput = (field: FieldPath<IWorkPolicies>) => {
    const value = Number(watch(field as keyof IWorkPolicies));
    const numValue = Number(value);
    if (isNaN(numValue) || numValue < 0) {
      setValue(field, 0);
      alert('0 미만의 값이나 문자, 또는 0으로 시작하는 숫자는 입력할 수 없습니다.');
    } else {
      setValue(field, numValue);
    }
  };

  return (
    <div className="p-10 flex flex-col gap-y-4">
      {['doctor', 'common'].map((type) => (
        <div
          key={type}
          className="flex items-center gap-x-24 bg-gray-10 border p-6 whitespace-nowrap"
        >
          <Txt variant="subtitle1" color="gray-50">
            {type === 'doctor' ? '의사' : '일반'}
          </Txt>
          <div className="flex items-center gap-x-8 whitespace-nowrap">
            {['30', '60', '90', '120'].map((time: string) => (
              <div
                className="flex items-center gap-x-6"
                key={time}
                onBlur={() =>
                  handleBlurInput(
                    `overtime_policies.${type}_ot_${time}` as FieldPath<IWorkPolicies>
                  )
                }
              >
                <label htmlFor={`${type}-ot-${time}`}>{time}분</label>
                <TextField.Root
                  key={time}
                  id={`${type}-ot-${time}`}
                  size="2"
                  radius="none"
                  className="text-right"
                  required
                  {...register(`overtime_policies.${type}_ot_${time}` as FieldPath<IWorkPolicies>)}
                >
                  <TextField.Slot></TextField.Slot>
                  <TextField.Slot>원</TextField.Slot>
                </TextField.Root>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
