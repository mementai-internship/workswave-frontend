import { Checkbox } from '@radix-ui/themes';
import { UseFormRegister } from 'react-hook-form';

import { Txt } from '@/components/Common/Txt';
import { IWorkPolicies } from '@/models/work-policies';

interface IPropsType {
  title: string;
  name: string;
  defaultChecked: boolean;
  register: UseFormRegister<IWorkPolicies>;
}

export default function SetBasicWorkItem({ title, name, defaultChecked, register }: IPropsType) {
  return (
    <div key={name} className="flex items-center gap-x-4">
      <Txt variant="subtitle1" color="gray-50" className="w-16">
        {title}
      </Txt>

      <Checkbox
        size="3"
        variant="soft"
        color="gray"
        defaultChecked={defaultChecked}
        {...register(`work_policies.${name}_is_holiday` as keyof IWorkPolicies)}
      />
      <label>휴일</label>
    </div>
  );
}
