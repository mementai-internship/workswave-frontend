import SelectBox from '@/components/Common/Select';
import { Txt } from '@/components/Common/Txt';
import { getHours, getMinutes } from '@/utils/getTimes';
import { Button, Checkbox, TextField } from '@radix-ui/themes';
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
      doctor_break_time: '',
      normal_break_time_lunch: '',
      normal_break_time_dinner: '',
    },
  });
  return (
    <div className="p-8 items-center whitespace-nowrap relative">
      <div className="flex items-center gap-x-4 mb-10">
        <label>
          <Txt variant="subtitle2" color="gray-50">
            주 근무일
          </Txt>
        </label>
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
      <div className="flex items-center gap-x-10 overflow-x-scroll">
        <div className="flex flex-col gap-y-4 border-r pr-10">
          <div className="flex items-center gap-x-10 bg-gray-10 border p-6">
            <Txt variant="subtitle1" color="gray-50">
              평일
            </Txt>
            <div className="flex items-center gap-x-4">
              <Checkbox size="3" variant="soft" color="gray" {...register('weekday.is_holiday')} />
              <label>휴일</label>
            </div>
            <div className="flex items-center gap-x-4 ">
              <label>
                <Txt variant="subtitle2" color="gray-50">
                  시업시간
                </Txt>
              </label>
              <SelectBox
                title="시"
                name="weekday.start_time_hour"
                options={getHours().map((hour) => ({
                  // 나중에 어떻게 값 백엔드에 넘길지
                  id: hour,
                  name: hour.toString() + '시',
                  action: () => {},
                }))}
                size="small"
                border={false}
                register={register}
              />{' '}
              <SelectBox
                title="분"
                name="weekday.start_time_minute"
                options={getMinutes().map((minute) => ({
                  id: minute,
                  // 나중에 어떻게 값 백엔드에 넘길지
                  name: minute.toString() + '분',
                  action: () => {},
                }))}
                size="small"
                border={false}
                register={register}
              />
              <div className="flex items-center gap-x-4 ">
                <label>
                  <Txt variant="subtitle2" color="gray-50">
                    종업시간
                  </Txt>
                </label>
                <SelectBox
                  title="시"
                  name="work_date"
                  options={getHours().map((hour) => ({
                    // 나중에 어떻게 값 백엔드에 넘길지
                    id: hour,
                    name: hour.toString() + '시',
                    action: () => {},
                  }))}
                  size="small"
                  border={false}
                  register={register}
                />{' '}
                <SelectBox
                  title="분"
                  name="weekday.end_time_minute"
                  options={getMinutes().map((minute) => ({
                    id: minute,
                    // 나중에 어떻게 값 백엔드에 넘길지
                    name: minute.toString() + '분',
                    action: () => {},
                  }))}
                  size="small"
                  border={false}
                  register={register}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-6 bg-gray-10 border p-6">
            <Txt variant="subtitle1" color="gray-50">
              토요일
            </Txt>
            <div className="flex items-center gap-x-4">
              <Checkbox
                size="3"
                variant="soft"
                color="gray"
                defaultChecked
                {...register('weekday.is_holiday')}
              />
              <label>휴일</label>
            </div>
            <div className="flex items-center ml-4 gap-x-4 ">
              <label>
                <Txt variant="subtitle2" color="gray-50">
                  시업시간
                </Txt>
              </label>
              <SelectBox
                title="시"
                name="saturday.start_time_hour"
                options={getHours().map((hour) => ({
                  // 나중에 어떻게 값 백엔드에 넘길지
                  id: hour,
                  name: hour.toString() + '시',
                  action: () => {},
                }))}
                size="small"
                border={false}
                register={register}
              />{' '}
              <SelectBox
                title="분"
                name="saturday.start_time_minute"
                options={getMinutes().map((minute) => ({
                  id: minute,
                  // 나중에 어떻게 값 백엔드에 넘길지
                  name: minute.toString() + '분',
                  action: () => {},
                }))}
                size="small"
                border={false}
                register={register}
              />
              <div className="flex items-center gap-x-4 ">
                <label>
                  <Txt variant="subtitle2" color="gray-50">
                    종업시간
                  </Txt>
                </label>
                <SelectBox
                  title="시"
                  name="saturday.end_time_hour"
                  options={getHours().map((hour) => ({
                    // 나중에 어떻게 값 백엔드에 넘길지
                    id: hour,
                    name: hour.toString() + '시',
                    action: () => {},
                  }))}
                  size="small"
                  border={false}
                  register={register}
                />{' '}
                <SelectBox
                  title="분"
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
            </div>
          </div>

          <div className="flex items-center gap-x-6 bg-gray-10 border p-6">
            <Txt variant="subtitle1" color="gray-50">
              일요일
            </Txt>
            <div className="flex items-center gap-x-4">
              <Checkbox
                size="3"
                variant="soft"
                color="gray"
                defaultChecked
                {...register('weekday.is_holiday')}
              />
              <label>휴일</label>
            </div>
            <div className="flex items-center ml-4 gap-x-4 ">
              <label>
                <Txt variant="subtitle2" color="gray-50">
                  시업시간
                </Txt>
              </label>
              <SelectBox
                title="시"
                name="sunday.start_time_hour"
                options={getHours().map((hour) => ({
                  // 나중에 어떻게 값 백엔드에 넘길지
                  id: hour,
                  name: hour.toString() + '시',
                  action: () => {},
                }))}
                size="small"
                border={false}
                register={register}
              />{' '}
              <SelectBox
                title="분"
                name="sunday.start_time_minute"
                options={getMinutes().map((minute) => ({
                  id: minute,
                  // 나중에 어떻게 값 백엔드에 넘길지
                  name: minute.toString() + '분',
                  action: () => {},
                }))}
                size="small"
                border={false}
                register={register}
              />
              <div className="flex items-center gap-x-4 ">
                <label>
                  <Txt variant="subtitle2" color="gray-50">
                    종업시간
                  </Txt>
                </label>
                <SelectBox
                  title="시"
                  name="sunday.end_time_hour"
                  options={getHours().map((hour) => ({
                    // 나중에 어떻게 값 백엔드에 넘길지
                    id: hour,
                    name: hour.toString() + '시',
                    action: () => {},
                  }))}
                  size="small"
                  border={false}
                  register={register}
                />{' '}
                <SelectBox
                  title="분"
                  name="sunday.end_time_minute"
                  options={getMinutes().map((minute) => ({
                    id: minute,
                    // 나중에 어떻게 값 백엔드에 넘길지
                    name: minute.toString() + '분',
                    action: () => {},
                  }))}
                  size="small"
                  border={false}
                  register={register}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-[0.8] h-full flex flex-col justify-center gap-y-4 min-w-[400px] overflow-x-scroll">
          <div className="flex items-center gap-x-6 whitespace-nowrap">
            <Txt variant="subtitle2" color="gray-50">
              의사 휴게시간
            </Txt>
            <TextField.Root
              {...register('doctor_break_time')}
              id="category-name"
              placeholder="내용을 입력해주세요."
              size="3"
              radius="none"
              required
              className="w-1/3"
            />
            <div></div>
          </div>
          <div className="flex items-center gap-x-6 whitespace-nowrap">
            <Txt variant="subtitle2" color="gray-50">
              일반 휴게시간
            </Txt>
            <div className="flex items-center gap-x-6">
              <TextField.Root
                {...register('normal_break_time_lunch')}
                id="category-name"
                placeholder="내용을 입력해주세요."
                size="3"
                radius="none"
                required
              />{' '}
              <TextField.Root
                {...register('normal_break_time_dinner')}
                id="category-name"
                placeholder="내용을 입력해주세요."
                size="3"
                radius="none"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <Button
        className="absolute top-10 right-10 px-10 cursor-pointer"
        variant="outline"
        color="gray"
        size="3"
      >
        <Txt variant="button" color="purple-50">
          저장하기
        </Txt>
      </Button>
    </div>
  );
}
