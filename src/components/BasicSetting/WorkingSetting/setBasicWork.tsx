import SelectBox from '@/components/Common/Select';
import { Txt } from '@/components/Common/Txt';
import { useForm } from 'react-hook-form';

export default function WorkingSettingBasicWork() {
  const { register } = useForm({
    defaultValues: {
      work_date: false,
      weekday: {
        is_holiday: false,
        start_time_hour: '',
        start_time_minute: '',
        end_time_hour: '',
        end_time_minute: '',
      },
      saturday: {
        is_holiday: false,
        start_time_hour: '',
        start_time_minute: '',
        end_time_hour: '',
        end_time_minute: '',
      },
      sunday: {
        is_holiday: false,
        start_time_hour: '',
        start_time_minute: '',
        end_time_hour: '',
        end_time_minute: '',
      },
    },
  });
  return (
    <div className="p-10">
      <div className="flex items-center gap-x-4">
        <label>주 근무일</label>
        <SelectBox
          title="주 근무일"
          name="work_date"
          options={Array.from({ length: 7 }, (_, idx: number) => ({
            id: idx,
            name: (idx + 1).toString(),
            action: () => {},
          }))}
          size="small"
          border={false}
          register={register}
        />
      </div>
      <div className="flex items-center gap-x-24 bg-gray-10 border p-4">
        <Txt variant="subtitle1" color="gray-50">
          평일
        </Txt>

        <div className="flex-1 flex justify-end items-center">
          <Txt variant="subtitle2" color="gray-50">
            평일
          </Txt>
        </div>
      </div>
    </div>
  );
}
