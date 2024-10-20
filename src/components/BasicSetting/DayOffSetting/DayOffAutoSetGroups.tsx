import { RadioGroup } from '@radix-ui/themes';

import { Txt } from '@/components/Common/Txt';

export default function DayOffAutoSetGroups() {
  return (
    <div className="flex justify-start items-center p-10">
      <div className="flex flex-col gap-y-10">
        <Txt variant="h5">연차 자동승인 설정</Txt>
        <div className="flex flex-col gap-y-6">
          <div className="flex items-center">
            <label htmlFor="" className="text-gray-500 text-sm w-24">
              최고관리자
            </label>
            <RadioGroup.Root>
              <div className="flex items-center gap-x-8">
                <RadioGroup.Item value="0">자동</RadioGroup.Item>
                <RadioGroup.Item value="1">수동</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          </div>
          <div className="flex items-center">
            <label htmlFor="" className="text-gray-500 text-sm w-24">
              최고관리자
            </label>
            <RadioGroup.Root>
              <div className="flex items-center gap-x-8">
                <RadioGroup.Item value="3">자동</RadioGroup.Item>
                <RadioGroup.Item value="4">수동</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          </div>
          <div className="flex items-center">
            <label htmlFor="" className="text-gray-500 text-sm w-24">
              최고관리자
            </label>
            <RadioGroup.Root>
              <div className="flex items-center gap-x-8">
                <RadioGroup.Item value="5">자동</RadioGroup.Item>
                <RadioGroup.Item value="6">수동</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
