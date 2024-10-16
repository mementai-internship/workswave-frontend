import { IWorkingSettingBranchResponse } from '@/models/workingSetting.model';
import { RadioGroup } from '@radix-ui/themes';
import { Control, Controller } from 'react-hook-form';

interface IPropsType {
  control: Control<IWorkingSettingBranchResponse>;
}
export default function WorkingSettingBasicSalary({ control }: IPropsType) {
  return (
    <div className="p-20 flex flex-col gap-y-10">
      <div className="flex items-center gap-x-10">
        <label className="text-gray-400 w-36">포괄산정 연장근로수당</label>
        <Controller
          control={control}
          name="comprehensive_overtime"
          render={({ field: { value, onChange } }) => (
            <RadioGroup.Root
              value={value ? 'true' : 'false'}
              color="violet"
              onValueChange={(newValue) => onChange(newValue === 'true')}
            >
              <div className="flex gap-4">
                <RadioGroup.Item value="true">사용</RadioGroup.Item>
                <RadioGroup.Item value="false">미사용</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          )}
        />
      </div>
      <div className="flex items-center gap-x-2">
        <label className="text-gray-400 w-44">연차수당</label>
        <Controller
          control={control}
          name="annual_leave"
          render={({ field: { value, onChange } }) => (
            <RadioGroup.Root
              value={value ? 'true' : 'false'}
              color="violet"
              onValueChange={(newValue) => onChange(newValue === 'true')}
            >
              <div className="flex gap-4">
                <RadioGroup.Item value="true">사용</RadioGroup.Item>
                <RadioGroup.Item value="false">미사용</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          )}
        />
      </div>
      <div className="flex items-center gap-x-2">
        <label className="text-gray-400 w-44">휴일수당</label>
        <Controller
          control={control}
          name="holiday_work"
          render={({ field: { value, onChange } }) => (
            <RadioGroup.Root
              value={value ? 'true' : 'false'}
              color="violet"
              onValueChange={(newValue) => onChange(newValue === 'true')}
            >
              <div className="flex gap-4">
                <RadioGroup.Item value="true">사용</RadioGroup.Item>
                <RadioGroup.Item value="false">미사용</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          )}
        />
      </div>
      <div className="flex items-center gap-x-2">
        <label className="text-gray-400 w-44">직무수당</label>
        <Controller
          control={control}
          name="job_duty"
          render={({ field: { value, onChange } }) => (
            <RadioGroup.Root
              value={value ? 'true' : 'false'}
              color="violet"
              onValueChange={(newValue) => onChange(newValue === 'true')}
            >
              <div className="flex gap-4">
                <RadioGroup.Item value="true">사용</RadioGroup.Item>
                <RadioGroup.Item value="false">미사용</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          )}
        />
      </div>
      <div className="flex items-center gap-x-2">
        <label className="text-gray-400 w-44">식대</label>
        <Controller
          control={control}
          name="meal"
          render={({ field: { value, onChange } }) => (
            <RadioGroup.Root
              value={value ? 'true' : 'false'}
              color="violet"
              onValueChange={(newValue) => onChange(newValue === 'true')}
            >
              <div className="flex gap-4">
                <RadioGroup.Item value="true">사용</RadioGroup.Item>
                <RadioGroup.Item value="false">미사용</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          )}
        />
      </div>
    </div>
  );
}
