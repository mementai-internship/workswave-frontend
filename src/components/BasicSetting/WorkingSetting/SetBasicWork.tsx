import SetBasicWorkItem from '@/components/BasicSetting/WorkingSetting/SetBasicWorkItem';
import TimeRangeSelector from '@/components/BasicSetting/WorkingSetting/TimeRangeSelector';
import { Txt } from '@/components/Common/Txt';
import { IWorkingSettingBranchResponse } from '@/models/workingSetting.model';
import { Select } from '@radix-ui/themes';
import { Control, Controller, UseFormRegister, UseFormSetValue } from 'react-hook-form';

interface IPropsType {
  register: UseFormRegister<IWorkingSettingBranchResponse>;
  setValue: UseFormSetValue<IWorkingSettingBranchResponse>;
  control: Control<IWorkingSettingBranchResponse>;
}
export default function WorkingSettingBasicWork({ register, setValue, control }: IPropsType) {
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
            name="basic_work.weekly_work_days"
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
              onTimeRangeChange={(startTime, endTime) => {
                setValue('basic_work.weekday_start_time', startTime);
                setValue('basic_work.weekday_end_time', endTime);
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
              onTimeRangeChange={(startTime, endTime) => {
                setValue('basic_work.saturday_start_time', startTime);
                setValue('basic_work.saturday_end_time', endTime);
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
              onTimeRangeChange={(startTime, endTime) => {
                setValue('basic_work.sunday_start_time', startTime);
                setValue('basic_work.sunday_end_time', endTime);
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
              onTimeRangeChange={(startTime, endTime) => {
                setValue('basic_work.doctor_lunch_start_time', startTime);
                setValue('basic_work.doctor_lunch_end_time', endTime);
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
              onTimeRangeChange={(startTime, endTime) => {
                setValue('basic_work.common_lunch_start_time', startTime);
                setValue('basic_work.common_lunch_end_time', endTime);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
