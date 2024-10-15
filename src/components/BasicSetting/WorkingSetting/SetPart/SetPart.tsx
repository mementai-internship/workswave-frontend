import WorkingSettingPartForm from '@/components/BasicSetting/WorkingSetting/SetPart/SetPartForm';
import WorkingSettingSetPartItem from '@/components/BasicSetting/WorkingSetting/SetPart/SetPartItem';
import { WORKING_SETTING_PART_RESPONSE } from '@/constants/workingSetting.mock';

export default function WorkingSettingSetPart() {
  return (
    <div className="w-full flex border-b max-h-[calc(100vh-300px)]">
      <div className="flex flex-col gap-y-4 p-10 flex-1 overflow-y-scroll ">
        {WORKING_SETTING_PART_RESPONSE.map(({ id, ...data }) => (
          <WorkingSettingSetPartItem key={id} id={id} {...data} />
        ))}
      </div>
      <WorkingSettingPartForm />
    </div>
  );
}
