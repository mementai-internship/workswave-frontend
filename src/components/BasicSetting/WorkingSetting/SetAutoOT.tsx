import { RadioGroup } from '@radix-ui/themes';
import { FieldPath, UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form';

import { IWorkPolicies } from '@/models/work-policies';

const radioOptions: { label: string; field: keyof IWorkPolicies['auto_overtime_policies'] }[] = [
  { label: '최고관리자', field: 'top_manager_auto_applied' },
  { label: '통합관리자', field: 'manager_auto_applied' },
  { label: '파트관리자', field: 'employee_auto_applied' },
];

interface IPropsType {
  register: UseFormRegister<IWorkPolicies>;
  setValue: UseFormSetValue<IWorkPolicies>;
  watch: UseFormWatch<IWorkPolicies>;
}

export default function WorkingSettingAutoOT({ register, setValue, watch }: IPropsType) {
  return (
    <div className="p-20 flex flex-col gap-y-10">
      {radioOptions.map((option) => (
        <div key={option.field} className="flex items-center gap-x-8">
          <label htmlFor={option.field} className="text-gray-400">
            {option.label}
          </label>
          <RadioGroup.Root
            value={watch(`auto_overtime_policies.${option.field}`) ? 'true' : 'false'}
            color="violet"
            onValueChange={(newValue) =>
              setValue(
                `auto_overtime_policies.${option.field}` as FieldPath<IWorkPolicies>,
                newValue === 'true'
              )
            }
          >
            <div className="flex gap-4">
              <RadioGroup.Item value="true" id={`${option.field}-true`}>
                <label htmlFor={`${option.field}-true`}>자동</label>
              </RadioGroup.Item>
              <RadioGroup.Item value="false" id={`${option.field}-false`}>
                <label htmlFor={`${option.field}-false`}>수동</label>
              </RadioGroup.Item>
            </div>
          </RadioGroup.Root>
          <input
            type="hidden"
            {...register(`auto_overtime_policies.${option.field}` as FieldPath<IWorkPolicies>)}
          />
        </div>
      ))}
    </div>
  );
}
