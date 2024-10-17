import { Select } from '@radix-ui/themes';
import { Control, Controller, UseFormRegister, UseFormSetValue, useWatch } from 'react-hook-form';

import SetBasicWorkItem from '@/components/BasicSetting/WorkingSetting/SetBasicWorkItem';
import TimeRangeSelector from '@/components/BasicSetting/WorkingSetting/TimeRangeSelector';
import { Txt } from '@/components/Common/Txt';
import { IWorkPolicies } from '@/models/work-policies';

interface IPropsType {
  register: UseFormRegister<IWorkPolicies>;
  setValue: UseFormSetValue<IWorkPolicies>;
  control: Control<IWorkPolicies>;
}
export default function WorkingSettingBasicWork({ register, setValue, control }: IPropsType) {
  const workPolicies = useWatch({
    control,
    name: 'work_policies',
  });

  return (
    <div className="p-8 items-center whitespace-nowrap relative">
      <div className="flex items-center gap-x-4 mb-10">
        <label>
          <Txt variant="subtitle2" color="gray-50">
            주 근무일
          </Txt>
        </label>
        <div className="flex items-center">
          <Controller
            control={control}
            name="work_policies.weekly_work_days"
            render={({ field: { onChange, value } }) => (
              <Select.Root value={value ? value.toString() : ''} onValueChange={onChange} size="3">
                <Select.Trigger
                  variant="surface"
                  radius="medium"
                  className="w-32"
                  placeholder="0 일"
                />
                <Select.Content>
                  <Select.Group>
                    {Array.from({ length: 7 }, (_, idx: number) => (
                      <Select.Item key={idx} value={(idx + 1).toString()}>
                        {idx + 1} 일
                      </Select.Item>
                    ))}
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            )}
          />
        </div>
      </div>
      <div className="flex items-center gap-x-10 overflow-x-scroll">
        <div className="flex-[0.8] h-full flex flex-col justify-center gap-y-4 min-w-[1000px] overflow-x-scroll">
          <div className="flex items-center gap-x-6 bg-gray-10 border p-6 ">
            <SetBasicWorkItem
              title="평일"
              name="weekday"
              defaultChecked={false}
              register={register}
            />
            <TimeRangeSelector
              startLabel="시업시간"
              endLabel="종업시간"
              initialStartTime={workPolicies.weekday_start_time}
              initialEndTime={workPolicies.weekday_end_time}
              onTimeRangeChange={(startTime, endTime) => {
                setValue('work_policies.weekday_start_time', startTime);
                setValue('work_policies.weekday_end_time', endTime);
              }}
            />
          </div>
          <div className="flex items-center gap-x-6 bg-gray-10 border p-6">
            <SetBasicWorkItem
              title="토요일"
              name="saturday"
              defaultChecked={false}
              register={register}
            />
            <TimeRangeSelector
              startLabel="시업시간"
              endLabel="종업시간"
              initialStartTime={workPolicies.saturday_start_time}
              initialEndTime={workPolicies.saturday_end_time}
              onTimeRangeChange={(startTime, endTime) => {
                setValue('work_policies.saturday_start_time', startTime);
                setValue('work_policies.saturday_end_time', endTime);
              }}
            />
          </div>
          <div className="flex items-center gap-x-6 bg-gray-10 border p-6">
            <SetBasicWorkItem
              title="일요일"
              name="sunday"
              defaultChecked={false}
              register={register}
            />
            <TimeRangeSelector
              startLabel="시업시간"
              endLabel="종업시간"
              initialStartTime={workPolicies.sunday_start_time}
              initialEndTime={workPolicies.sunday_end_time}
              onTimeRangeChange={(startTime, endTime) => {
                setValue('work_policies.sunday_start_time', startTime);
                setValue('work_policies.sunday_end_time', endTime);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-10">
          <div className="flex flex-col gap-y-6">
            <Txt variant="h5" color="gray-50" className="">
              의사 휴게시간
            </Txt>
            <TimeRangeSelector
              startLabel="휴게 시작"
              endLabel="휴게 종료"
              initialStartTime={workPolicies.doctor_lunch_start_time}
              initialEndTime={workPolicies.doctor_lunch_end_time}
              onTimeRangeChange={(startTime, endTime) => {
                setValue('work_policies.doctor_lunch_start_time', startTime);
                setValue('work_policies.doctor_lunch_end_time', endTime);
              }}
            />
          </div>
          <div className="flex flex-col gap-y-6">
            <Txt variant="h5" color="gray-50">
              일반 휴게시간
            </Txt>
            <TimeRangeSelector
              startLabel="휴게 시작"
              endLabel="휴게 종료"
              initialStartTime={workPolicies.common_lunch_start_time}
              initialEndTime={workPolicies.common_lunch_end_time}
              onTimeRangeChange={(startTime, endTime) => {
                setValue('work_policies.common_lunch_start_time', startTime);
                setValue('work_policies.common_lunch_end_time', endTime);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
