import { RadioGroup } from '@radix-ui/themes';
import { Controller, useForm } from 'react-hook-form';

export default function WorkingSettingBasicSalary() {
  const { control } = useForm({
    defaultValues: {
      overtime_pay: false,
      anuual_pay: false,
      holiday_pay: false,
      work_part_pay: false,
      meal_pay: false,
    },
  });
  return (
    <div className="p-20 flex flex-col gap-y-10">
      <div className="flex items-center gap-x-10">
        <label className="text-gray-400 w-36">포괄산정 연장근로수당</label>
        <Controller
          control={control}
          name="overtime_pay"
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
          name="anuual_pay"
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
          name="holiday_pay"
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
          name="work_part_pay"
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
          name="meal_pay"
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
