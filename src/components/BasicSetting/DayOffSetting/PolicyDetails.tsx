import { RadioGroup, TextField } from '@radix-ui/themes';
import { UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form';

import { ILeavePolicy } from '@/models/leave-policies.model';

interface PolicyDetailsProps {
  categoryId: keyof ILeavePolicy;
  register: UseFormRegister<ILeavePolicy>;
  setValue: UseFormSetValue<ILeavePolicy>;
  watch: UseFormWatch<ILeavePolicy>;
}

export default function PolicyDetails({
  categoryId,
  register,
  setValue,
  watch,
}: PolicyDetailsProps) {
  switch (categoryId) {
    case 'account_based_policies':
      return (
        <>
          <div className="mb-3">
            <label className="text-gray-500">- 매년 1월 1일 기준</label>
            <RadioGroup.Root
              value={watch('account_based_policies.account_based_january_1st')}
              onValueChange={(value) =>
                setValue(
                  'account_based_policies.account_based_january_1st',
                  value as '초기화' | '다음해로 이월'
                )
              }
            >
              <div className="flex items-center gap-x-6 ml-4">
                <RadioGroup.Item value="초기화">초기화</RadioGroup.Item>
                <RadioGroup.Item value="다음해로 이월">다음해로 이월</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          </div>
          <div className="mb-3">
            <label className="text-gray-500">- 근속연수1년미만</label>
            <RadioGroup.Root
              value={watch('account_based_policies.account_based_less_than_year')}
              onValueChange={(value) =>
                setValue(
                  'account_based_policies.account_based_less_than_year',
                  value as '당해년도 일괄 부여' | '매 월 1개씩 부여'
                )
              }
            >
              <div className="flex items-center gap-x-6 ml-4">
                <RadioGroup.Item value="당해년도 일괄 부여">당해년도 일괄 부여</RadioGroup.Item>
                <RadioGroup.Item value="매 월 1개씩 부여">매 월 1개씩 부여</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          </div>
          <div className="mb-3">
            <label className="text-gray-500">- 소수점처리</label>
            <RadioGroup.Root
              value={watch('account_based_policies.account_based_decimal_point')}
              onValueChange={(value) =>
                setValue(
                  'account_based_policies.account_based_decimal_point',
                  value as '올림' | '절삭' | '반올림' | '0.5 기준 올림'
                )
              }
            >
              <div className="flex items-center gap-x-6 ml-4">
                <RadioGroup.Item value="0.5 기준 올림">0.5 기준 올림</RadioGroup.Item>
                <RadioGroup.Item value="절삭">절삭</RadioGroup.Item>
                <RadioGroup.Item value="반올림">반올림</RadioGroup.Item>
                <RadioGroup.Item value="올림">올림</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          </div>
        </>
      );
    case 'entry_date_based_policies':
      return (
        <div className="mb-3">
          <label className="text-gray-500">- 매 년 입사일 기준</label>
          <RadioGroup.Root
            value={watch('entry_date_based_policies.entry_date_based_remaining_leave')}
            onValueChange={(value) =>
              setValue(
                'entry_date_based_policies.entry_date_based_remaining_leave',
                value as '초기화' | '다음해로 이월'
              )
            }
          >
            <div className="flex items-center gap-x-6 ml-4">
              <RadioGroup.Item value="초기화">초기화</RadioGroup.Item>
              <RadioGroup.Item value="다음해로 이월">다음해로 이월</RadioGroup.Item>
            </div>
          </RadioGroup.Root>
        </div>
      );
    case 'condition_based_policies':
      return (
        <>
          <div className="flex items-center gap-x-2 whitespace-nowrap mb-3">
            <span>-</span>
            <TextField.Root
              {...register('condition_based_policies.condition_based_month')}
              placeholder="0"
              size="3"
              className="w-24"
            />
            <label>
              {watch('condition_based_policies.condition_based_type') === '월' ? '개월' : '일'}
              근무시
            </label>

            <TextField.Root
              {...register('condition_based_policies.condition_based_cnt')}
              placeholder="0"
              size="3"
              className="w-24"
            />
            <label>개 부여</label>
          </div>
          <div className="flex items-center gap-x-10 mb-3 ml-5 text-lg">
            <label className="text-gray-500 ">기준</label>
            <RadioGroup.Root
              value={watch('condition_based_policies.condition_based_type')}
              onValueChange={(value) =>
                setValue('condition_based_policies.condition_based_type', value as '월' | '일')
              }
            >
              <div className="flex items-center gap-x-10">
                <RadioGroup.Item value="월">월</RadioGroup.Item>
                <RadioGroup.Item value="일">일</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          </div>
        </>
      );
    case 'manual_based_parts':
      return null;
    default:
      return null;
  }
}
