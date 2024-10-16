import HolidaySettingItem from '@/components/BasicSetting/holidaySetting/HolidaySettingItem';
import { IHolidaySetting } from '@/models/holidaySetting.model';

interface IPropsType {
  holidaySettings: IHolidaySetting[];
}

export default function HolidaySettingList({ holidaySettings }: IPropsType) {
  return (
    <div className=" p-10 flex flex-col gap-y-3">
      {holidaySettings.map(({ id, name, ...data }) => (
        <HolidaySettingItem key={id} id={id} name={name} {...data} />
      ))}
      <div>옵저브</div>
    </div>
  );
}
