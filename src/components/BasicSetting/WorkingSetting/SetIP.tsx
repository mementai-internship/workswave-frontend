import { Txt } from '@/components/Common/Txt';
import { IWorkingSettingBranchResponse } from '@/models/workingSetting.model';
import { Button, RadioGroup, TextField } from '@radix-ui/themes';
import { Controller, UseFormGetValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { PiPlusBold } from 'react-icons/pi';

interface IPropsType {
  register: UseFormRegister<IWorkingSettingBranchResponse>;
  setValue: UseFormSetValue<IWorkingSettingBranchResponse>;
  getBranchValues: UseFormGetValues<IWorkingSettingBranchResponse>;
}

// 후순위로 개발 예정입니다.

export default function WorkingSettingIP({ register }: IPropsType) {
  const onSubmitSettingIp = (/*data*/) => {};

  // const addNewIp = () => {
  //   setValue('ip', [...getBranchValues('ip'), { ipAddress: '', description: '' }]);
  // };

  // // 특정 인덱스의 항목 제거
  // const removeIp = (index: number) => {
  //   const currentIps = getBranchValues('ip');
  //   setValue(
  //     'ip',
  //     currentIps.filter((_, i) => i !== index)
  //   );
  // };

  return (
    <form className="p-6 flex gap-x-20 justify-between items-start" onSubmit={addNewIp}>
      <Txt variant="subtitle2" className="text-gray-400">
        아이피설정
      </Txt>
      <div className="flex items-center">
        <RadioGroup.Root color="violet" {...register('ip')}>
          <div className="flex gap-4">
            <RadioGroup.Item value="true">사용</RadioGroup.Item>
            <RadioGroup.Item value="false">미사용</RadioGroup.Item>
          </div>
        </RadioGroup.Root>
        {/* <Controller
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
        /> */}
      </div>
      <div className="flex flex-1 gap-x-2">
        <div className="flex flex-1 flex-col gap-y-2">
          <label htmlFor="ipAddress" className="w-20 text-gray-500 whitespace-nowrap">
            IP
          </label>
          <Controller
            control={control}
            name="ipAddress"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextField.Root
                id="ipAddress"
                size="2"
                radius="none"
                className="w-full"
                value={value}
                onChange={onChange}
                required
              />
            )}
          />
        </div>

        <div className="flex flex-[1] flex-col gap-y-2">
          <label htmlFor="description" className="w-20 text-gray-500 whitespace-nowrap">
            설명
          </label>
          <Controller
            control={control}
            name="description"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextField.Root
                id="description"
                size="2"
                radius="none"
                className="w-full"
                value={value}
                onChange={onChange}
                required
              />
            )}
          />
        </div>
        <div className="flex flex-1 flex-col items-start">
          <div className="h-8"></div>
          <Button variant="outline" radius="none" color="blue" className="px-2 py-3 cursor-pointer">
            <PiPlusBold size={20} />
          </Button>
        </div>
      </div>
      <Button
        variant="outline"
        color="gray"
        className="px-8 cursor-pointer"
        onClick={handleSubmit(onSubmitSettingIp)}
      >
        <span className="text-purple-50">저장하기</span>
      </Button>
    </form>
  );
}
