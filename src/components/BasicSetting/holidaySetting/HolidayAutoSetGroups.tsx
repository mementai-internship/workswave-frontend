import { Txt } from '@/components/Common/Txt';
import { RadioGroup } from '@radix-ui/themes';

export default function HolidayAutoSetGroups() {
  return (
    <div className="grid grid-cols-2 p-6">
      <div className="flex flex-col gap-y-10">
        <Txt variant="h5">연차 자동승인 설정</Txt>
        <div className="flex flex-col gap-y-6">
          <div className="flex items-center">
            <label htmlFor="" className="text-gray-500 text-sm w-24">
              최고관리자
            </label>
            <RadioGroup.Root>
              <div className="flex items-center gap-x-4">
                <RadioGroup.Item value="1">자동</RadioGroup.Item>
                <RadioGroup.Item value="1">수동</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          </div>
          <div className="flex items-center">
            <label htmlFor="" className="text-gray-500 text-sm w-24">
              최고관리자
            </label>
            <RadioGroup.Root>
              <div className="flex items-center gap-x-4">
                <RadioGroup.Item value="1">자동</RadioGroup.Item>
                <RadioGroup.Item value="1">수동</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          </div>{' '}
          <div className="flex items-center">
            <label htmlFor="" className="text-gray-500 text-sm w-24">
              최고관리자
            </label>
            <RadioGroup.Root>
              <div className="flex items-center gap-x-4">
                <RadioGroup.Item value="1">자동</RadioGroup.Item>
                <RadioGroup.Item value="1">수동</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-10">
        <Txt variant="h5">휴직 자동승인 설정</Txt>
        <div className="flex flex-col gap-y-6">
          <div className="flex items-center">
            <label htmlFor="" className="text-gray-500 text-sm w-24">
              최고관리자
            </label>
            <RadioGroup.Root>
              <div className="flex items-center gap-x-4">
                <RadioGroup.Item value="true">자동</RadioGroup.Item>
                <RadioGroup.Item value="1">수동</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          </div>
          <div className="flex items-center">
            <label htmlFor="" className="text-gray-500 text-sm w-24">
              최고관리자
            </label>
            <RadioGroup.Root>
              <div className="flex items-center gap-x-4">
                <RadioGroup.Item value="1">자동</RadioGroup.Item>
                <RadioGroup.Item value="1">수동</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          </div>{' '}
          <div className="flex items-center">
            <label htmlFor="" className="text-gray-500 text-sm w-24">
              최고관리자
            </label>
            <RadioGroup.Root>
              <div className="flex items-center gap-x-4">
                <RadioGroup.Item value="1">자동</RadioGroup.Item>
                <RadioGroup.Item value="1">수동</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
