import {
  IWorkingSettingAutoOTForm,
  IWorkingSettingBranchResponse,
} from '@/models/workingSetting.model';
import { RadioGroup } from '@radix-ui/themes';
import { UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form';

const radioOptions: { label: string; field: keyof IWorkingSettingAutoOTForm }[] = [
  { label: '최고관리자', field: 'top_manager_auto_applied' },
  { label: '통합관리자', field: 'manager_auto_applied' },
  { label: '파트관리자', field: 'employee_auto_applied' },
];
interface IPropsType {
  register: UseFormRegister<IWorkingSettingBranchResponse>;
  setValue: UseFormSetValue<IWorkingSettingBranchResponse>;
  watch: UseFormWatch<IWorkingSettingBranchResponse>;
}
export default function WorkingSettingAutoOT({ register, setValue, watch }: IPropsType) {
  return (
    <div className="p-20 flex flex-col gap-y-10">
      {radioOptions.map((option) => (
        <div key={option.field} className="flex items-center gap-x-8">
          <label htmlFor={option.field} className="text-gray-400">
            {option.label}
          </label>
          <RadioGroup.Root
            value={watch(`auto_ot.${option.field}`) ? 'true' : 'false'}
            color="violet"
            {...register(`auto_ot.${option.field}`)}
            onValueChange={(newValue) => setValue(`auto_ot.${option.field}`, newValue === 'true')}
          >
            <div className="flex gap-4">
              <RadioGroup.Item value="true">자동</RadioGroup.Item>
              <RadioGroup.Item value="false">수동</RadioGroup.Item>
            </div>
          </RadioGroup.Root>
        </div>
      ))}
    </div>
  );
}
