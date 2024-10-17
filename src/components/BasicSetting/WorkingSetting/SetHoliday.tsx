import { RadioGroup } from '@radix-ui/themes';
import { UseFormWatch } from 'react-hook-form';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { IWorkPolicies } from '@/models/work-policies';

interface IPropsType {
  register: UseFormRegister<IWorkPolicies>;
  setValue: UseFormSetValue<IWorkPolicies>;
  watch: UseFormWatch<IWorkPolicies>;
}
export default function WorkingSettingHoliday({ register, setValue, watch }: IPropsType) {
  return (
    <div className="p-16 pb-32 flex flex-col gap-y-10">
      <div className="flex items-center gap-x-8">
        <label htmlFor="" className="text-gray-400">
          사용여부
        </label>

        <RadioGroup.Root
          value={watch('holiday_work_policies.do_holiday_work') ? 'true' : 'false'}
          color="violet"
          {...register('holiday_work_policies.do_holiday_work')}
          onValueChange={(newValue) =>
            setValue(
              'holiday_work_policies.do_holiday_work' as keyof IWorkPolicies,
              newValue === 'true'
            )
          }
        >
          <div className="flex gap-4">
            <RadioGroup.Item value="true">사용</RadioGroup.Item>
            <RadioGroup.Item value="false">미사용</RadioGroup.Item>
          </div>
        </RadioGroup.Root>
      </div>
    </div>
  );
}
