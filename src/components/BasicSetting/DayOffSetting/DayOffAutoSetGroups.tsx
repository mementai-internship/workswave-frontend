import { RadioGroup } from '@radix-ui/themes';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';

import { Txt } from '@/components/Common/Txt';
import { ILeavePolicy } from '@/models/leave-policies.model';

interface IPropsType {
  setValue: UseFormSetValue<ILeavePolicy>;
  watch: UseFormWatch<ILeavePolicy>;
}

export default function DayOffAutoSetGroups({ setValue, watch }: IPropsType) {
  return (
    <div className="flex justify-start items-center p-10">
      <div className="flex flex-col gap-y-10">
        <Txt variant="h5">연차 자동승인 설정</Txt>
        <div className="flex flex-col gap-y-6">
          <div className="flex items-center">
            <label htmlFor="" className="text-gray-500 text-sm w-24">
              최고관리자
            </label>
            <RadioGroup.Root
              value={watch('auto_approval_policies.top_auto_approval') ? 'true' : 'false'}
              onValueChange={(value) =>
                setValue('auto_approval_policies.top_auto_approval', value === 'true')
              }
            >
              <div className="flex items-center gap-x-8">
                <RadioGroup.Item value="true">자동</RadioGroup.Item>
                <RadioGroup.Item value="false">수동</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          </div>
          <div className="flex items-center">
            <label htmlFor="" className="text-gray-500 text-sm w-24">
              통합관리자
            </label>
            <RadioGroup.Root
              value={watch('auto_approval_policies.total_auto_approval') ? 'true' : 'false'}
              onValueChange={(value) =>
                setValue('auto_approval_policies.total_auto_approval', value === 'true')
              }
            >
              <div className="flex items-center gap-x-8">
                <RadioGroup.Item value="true">자동</RadioGroup.Item>
                <RadioGroup.Item value="false">수동</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          </div>
          <div className="flex items-center">
            <label htmlFor="" className="text-gray-500 text-sm w-24">
              파트관리자
            </label>
            <RadioGroup.Root
              value={watch('auto_approval_policies.part_auto_approval') ? 'true' : 'false'}
              onValueChange={(value) =>
                setValue('auto_approval_policies.part_auto_approval', value === 'true')
              }
            >
              <div className="flex items-center gap-x-8">
                <RadioGroup.Item value="true">자동</RadioGroup.Item>
                <RadioGroup.Item value="false">수동</RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
