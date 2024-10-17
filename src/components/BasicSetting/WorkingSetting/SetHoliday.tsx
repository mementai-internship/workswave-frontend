import { IWorkingSettingBranchResponse } from '@/models/workingSetting.model';
import { RadioGroup } from '@radix-ui/themes';
import { UseFormWatch } from 'react-hook-form';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';

interface IPropsType {
  register: UseFormRegister<IWorkingSettingBranchResponse>;
  setValue: UseFormSetValue<IWorkingSettingBranchResponse>;
  watch: UseFormWatch<IWorkingSettingBranchResponse>;
}
export default function WorkingSettingHoliday({ register, setValue, watch }: IPropsType) {
  return (
    <div className="p-16 pb-32 flex flex-col gap-y-10">
      <div className="flex items-center gap-x-8">
        <label htmlFor="is_use" className="text-gray-400">
          사용여부
        </label>

        <RadioGroup.Root
          value={watch('do_holiday_work') ? 'true' : 'false'}
          color="violet"
          {...register('do_holiday_work')}
          onValueChange={(newValue) => setValue('do_holiday_work', newValue === 'true')}
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
