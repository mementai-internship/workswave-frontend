import { RadioGroup, TextField } from '@radix-ui/themes';
import { UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form';

import { IFormValues } from '@/components/BasicSetting/DayOffSetting/DragContainer';

interface PolicyDetailsProps {
  categoryId: keyof IFormValues;
  register: UseFormRegister<IFormValues>;
  setValue: UseFormSetValue<IFormValues>;
  watch: UseFormWatch<IFormValues>;
}

export default function PolicyDetails({
  categoryId,
  register,
  setValue,
  watch,
}: PolicyDetailsProps) {
  switch (categoryId) {
    case 'accountingStandard':
      return (
        <>
          <div className="mb-3">
            <label className="text-gray-500">- 매년 1월 1일 기준</label>
            <RadioGroup.Root
              value={watch('accountingStandard.reset') ? 'yes' : 'no'}
              onValueChange={(value) => setValue(`${categoryId}.reset`, value === 'yes')}
            >
              <div className="flex items-center gap-x-6 ml-4">
                <RadioGroup.Item value="yes">초기화</RadioGroup.Item>
                <RadioGroup.Item value="no">다음해로 이월</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          </div>
          <div className="mb-3">
            <label className="text-gray-500">- 근속연수1년미만</label>
            <RadioGroup.Root
              value={watch('accountingStandard.lessThanOneYearService') ? 'yes' : 'no'}
              onValueChange={(value) =>
                setValue('accountingStandard.lessThanOneYearService', value === 'yes')
              }
            >
              <div className="flex items-center gap-x-6 ml-4">
                <RadioGroup.Item value="yes">당해년도 일괄 부여</RadioGroup.Item>
                <RadioGroup.Item value="no">매 월 1개씩 부여</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          </div>
          <div className="mb-3">
            <label className="text-gray-500">- 소수점처리</label>
            <RadioGroup.Root
              value={watch('accountingStandard.decimalProcessing')}
              onValueChange={(value) =>
                setValue(
                  'accountingStandard.decimalProcessing',
                  value as '올림' | '내림' | '반올림' | '0.5'
                )
              }
            >
              <div className="flex items-center gap-x-6 ml-4">
                <RadioGroup.Item value="0.5">0.5 기준 올림</RadioGroup.Item>
                <RadioGroup.Item value="내림">절삭</RadioGroup.Item>
                <RadioGroup.Item value="반올림">내림</RadioGroup.Item>
                <RadioGroup.Item value="반올림">반올림</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          </div>
        </>
      );
    case 'hireDate':
      return (
        <div className="mb-3">
          <label className="text-gray-500">- 매 년 입사일 기준</label>
          <RadioGroup.Root
            value={watch('hireDate.reset') ? 'yes' : 'no'}
            onValueChange={(value) => setValue('hireDate.reset', value === 'yes')}
          >
            <div className="flex items-center gap-x-6 ml-4">
              <RadioGroup.Item value="yes">초기화</RadioGroup.Item>
              <RadioGroup.Item value="no">다음해로 이월</RadioGroup.Item>
            </div>
          </RadioGroup.Root>
        </div>
      );
    case 'conditionalGrant':
      return (
        <>
          <div className="flex items-center gap-x-2 whitespace-nowrap mb-3">
            <span>-</span>
            <TextField.Root
              {...register('conditionalGrant.monthCount')}
              placeholder="0"
              size="3"
              className="w-24"
            />
            <label>개월 근무시</label>

            <TextField.Root
              {...register('conditionalGrant.count')}
              placeholder="0"
              size="3"
              className="w-24"
            />
            <label>개 부여</label>
          </div>
          <div className="flex items-center gap-x-10 mb-3 ml-5 text-lg">
            <label className="text-gray-500 ">기준</label>
            <RadioGroup.Root
              value={watch('conditionalGrant.monthlyBasis') ? 'yes' : 'no'}
              onValueChange={(value) => setValue('conditionalGrant.monthlyBasis', value === 'yes')}
            >
              <div className="flex items-center gap-x-10">
                <RadioGroup.Item value="yes">월</RadioGroup.Item>
                <RadioGroup.Item value="no">일</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          </div>
        </>
      );
    default:
      return null;
  }
}
