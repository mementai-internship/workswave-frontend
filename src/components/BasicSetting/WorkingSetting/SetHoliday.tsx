import { RadioGroup } from '@radix-ui/themes';
import { Controller, useForm } from 'react-hook-form';

export default function WorkingSettingHoliday() {
  const { control } = useForm({
    defaultValues: {
      is_use: true,
    },
  });
  return (
    <div className="p-16 pb-32 flex flex-col gap-y-10">
      <div className="flex items-center gap-x-8">
        <label htmlFor="is_use" className="text-gray-400">
          사용여부
        </label>
        <Controller
          control={control}
          name="is_use"
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
