import { TextField } from '@radix-ui/themes';
import { FieldPath, UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form';

import { Txt } from '@/components/Common/Txt';
import { IWorkPolicies } from '@/models/work-policies';

interface IPropsType {
  register: UseFormRegister<IWorkPolicies>;
  setValue: UseFormSetValue<IWorkPolicies>;
  watch: UseFormWatch<IWorkPolicies>;
}
export default function WorkingSettingWeekendSalary({ register, setValue, watch }: IPropsType) {
  const handleBlurInput = (field: FieldPath<IWorkPolicies>) => {
    const value = watch(field as keyof IWorkPolicies);
    const numValue = Number(value);
    if (isNaN(numValue) || numValue < 0) {
      setValue(field, 0);
      alert('0 미만의 값이나 문자, 또는 0으로 시작하는 숫자는 입력할 수 없습니다.');
    } else {
      setValue(field, numValue);
    }
  };
  return (
    <div className="flex p-10 gap-y-4">
      <div className="flex flex-col w-full gap-y-4">
        {['doctor', 'common'].map((type) => (
          <div key={type} className="flex items-center w-full gap-x-24 bg-gray-10 p-6 border">
            <Txt variant="subtitle1" color="gray-50">
              {type === 'doctor' ? '의사' : '일반'}
            </Txt>
            <div className="flex items-center gap-x-8 whitespace-nowrap">
              <div
                className="flex items-center gap-x-6"
                onBlur={() =>
                  handleBlurInput(
                    `holiday_allowance_policies.${type}_holiday_work_pay` as FieldPath<IWorkPolicies>
                  )
                }
              >
                <TextField.Root
                  key={type}
                  size="2"
                  radius="none"
                  className="text-right"
                  required
                  {...register(
                    `holiday_allowance_policies.${type}_holiday_work_pay` as FieldPath<IWorkPolicies>
                  )}
                >
                  <TextField.Slot></TextField.Slot>
                  <TextField.Slot>원</TextField.Slot>
                </TextField.Root>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
