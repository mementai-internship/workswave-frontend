import { RadioGroup } from '@radix-ui/themes';
import { Controller, useForm } from 'react-hook-form';

export default function WorkingSettingAutoOT() {
  const { control } = useForm({
    defaultValues: {
      is_MSO: false,
      is_all: false,
      is_part: false,
    },
  });
  return (
    <div className="p-20 flex flex-col gap-y-10">
      <div className="flex items-center gap-x-8">
        <label htmlFor="is_MSO" className="text-gray-400">
          최고관리자
        </label>
        <Controller
          control={control}
          name="is_MSO"
          render={({ field: { value, onChange } }) => (
            <RadioGroup.Root
              value={value ? 'true' : 'false'}
              color="violet"
              onValueChange={(newValue) => onChange(newValue === 'true')}
            >
              <div className="flex gap-4">
                <RadioGroup.Item value="true">자동</RadioGroup.Item>
                <RadioGroup.Item value="false">수동</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          )}
        />
      </div>
      <div className="flex items-center gap-x-8">
        <label htmlFor="is_all" className="text-gray-400">
          통합관리자
        </label>
        <Controller
          control={control}
          name="is_all"
          render={({ field: { value, onChange } }) => (
            <RadioGroup.Root
              value={value ? 'true' : 'false'}
              color="violet"
              onValueChange={(newValue) => onChange(newValue === 'true')}
            >
              <div className="flex gap-4">
                <RadioGroup.Item value="true">자동</RadioGroup.Item>
                <RadioGroup.Item value="false">수동</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          )}
        />
      </div>
      <div className="flex items-center gap-x-8">
        <label htmlFor="is_part" className="text-gray-400">
          파트관리자
        </label>
        <Controller
          control={control}
          name="is_part"
          render={({ field: { value, onChange } }) => (
            <RadioGroup.Root
              value={value ? 'true' : 'false'}
              color="violet"
              onValueChange={(newValue) => onChange(newValue === 'true')}
            >
              <div className="flex gap-4">
                <RadioGroup.Item value="true">자동</RadioGroup.Item>
                <RadioGroup.Item value="false">수동</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          )}
        />
      </div>
    </div>
  );
}
