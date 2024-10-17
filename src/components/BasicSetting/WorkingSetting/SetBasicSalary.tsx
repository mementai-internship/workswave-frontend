import { IWorkPolicies } from '@/models/work-policies';
import { RadioGroup } from '@radix-ui/themes';
import { UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form';

interface IPropsType {
  register: UseFormRegister<IWorkPolicies>;
  watch: UseFormWatch<IWorkPolicies>;
  setValue: UseFormSetValue<IWorkPolicies>;
}
export default function WorkingSettingBasicSalary({ register, watch, setValue }: IPropsType) {
  return (
    <div className="p-20 flex flex-col gap-y-10">
      <div className="flex items-center gap-x-10">
        <label className="text-gray-400 w-36">포괄산정 연장근로수당</label>
        <RadioGroup.Root
          value={watch('default_allowance_policies.comprehensive_overtime') ? 'true' : 'false'}
          {...register('default_allowance_policies.comprehensive_overtime')}
          color="violet"
          onValueChange={(newValue) =>
            setValue(
              'default_allowance_policies.comprehensive_overtime' as keyof IWorkPolicies,
              newValue === 'true'
            )
          }
        >
          <div className="flex gap-4">
            <RadioGroup.Item value="true">사용</RadioGroup.Item>
            <RadioGroup.Item value="false">미사용</RadioGroup.Item>
          </div>
        </RadioGroup.Root>
      </div>
      <div className="flex items-center gap-x-2">
        <label className="text-gray-400 w-44">연차수당</label>
        <RadioGroup.Root
          value={watch('default_allowance_policies.annual_leave') ? 'true' : 'false'}
          {...register('default_allowance_policies.annual_leave')}
          color="violet"
          onValueChange={(newValue) =>
            setValue(
              'default_allowance_policies.annual_leave' as keyof IWorkPolicies,
              newValue === 'true'
            )
          }
        >
          <div className="flex gap-4">
            <RadioGroup.Item value="true">사용</RadioGroup.Item>
            <RadioGroup.Item value="false">미사용</RadioGroup.Item>
          </div>
        </RadioGroup.Root>
      </div>
      <div className="flex items-center gap-x-2">
        <label className="text-gray-400 w-44">휴일수당</label>
        <RadioGroup.Root
          value={watch('default_allowance_policies.holiday_work') ? 'true' : 'false'}
          {...register('default_allowance_policies.holiday_work')}
          color="violet"
          onValueChange={(newValue) =>
            setValue(
              'default_allowance_policies.holiday_work' as keyof IWorkPolicies,
              newValue === 'true'
            )
          }
        >
          <div className="flex gap-4">
            <RadioGroup.Item value="true">사용</RadioGroup.Item>
            <RadioGroup.Item value="false">미사용</RadioGroup.Item>
          </div>
        </RadioGroup.Root>
      </div>
      <div className="flex items-center gap-x-2">
        <label className="text-gray-400 w-44">직무수당</label>
        <RadioGroup.Root
          value={watch('default_allowance_policies.job_duty') ? 'true' : 'false'}
          {...register('default_allowance_policies.job_duty')}
          color="violet"
          onValueChange={(newValue) =>
            setValue(
              'default_allowance_policies.job_duty' as keyof IWorkPolicies,
              newValue === 'true'
            )
          }
        >
          <div className="flex gap-4">
            <RadioGroup.Item value="true">사용</RadioGroup.Item>
            <RadioGroup.Item value="false">미사용</RadioGroup.Item>
          </div>
        </RadioGroup.Root>
      </div>
      <div className="flex items-center gap-x-2">
        <label className="text-gray-400 w-44">식대</label>
        <RadioGroup.Root
          value={watch('default_allowance_policies.meal') ? 'true' : 'false'}
          {...register('default_allowance_policies.meal')}
          color="violet"
          onValueChange={(newValue) =>
            setValue('default_allowance_policies.meal' as keyof IWorkPolicies, newValue === 'true')
          }
        >
          <div className="flex gap-4">
            <RadioGroup.Item value="true">사용</RadioGroup.Item>
            <RadioGroup.Item value="false">미사용</RadioGroup.Item>
          </div>
        </RadioGroup.Root>
      </div>
    </div>
  );
}
