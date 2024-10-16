import { Txt } from '@/components/Common/Txt';
import { getHours, getMinutes } from '@/utils/getTimes';
import { Select } from '@radix-ui/themes';
import dayjs, { Dayjs } from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import { useEffect, useState } from 'react';

dayjs.extend(isSameOrAfter);
interface IPropsType {
  startLabel: string;
  endLabel: string;
  onTimeRangeChange: (startTime: string, endTime: string) => void;
}

const combineTimeValues = (hour: string, minute: string): Dayjs => {
  return dayjs().hour(parseInt(hour, 10)).minute(parseInt(minute, 10));
};

export default function TimeRangeSelector({
  startLabel,
  endLabel,

  onTimeRangeChange,
}: IPropsType) {
  const [startHour, setStartHour] = useState<string>('');
  const [startMinute, setStartMinute] = useState<string>('');
  const [endHour, setEndHour] = useState<string>('');
  const [endMinute, setEndMinute] = useState<string>('');

  useEffect(() => {
    if (startHour && startMinute && endHour && endMinute) {
      validateAndUpdateTimeRange();
    }
  }, [startHour, startMinute, endHour, endMinute]);

  const validateAndUpdateTimeRange = () => {
    const startTime = combineTimeValues(startHour, startMinute);
    const endTime = combineTimeValues(endHour, endMinute);

    if (dayjs(startTime).isSameOrAfter(dayjs(endTime))) {
      alert('종료 시간은 시작 시간보다 이후여야 합니다.');
      resetTimeValues();
    } else {
      onTimeRangeChange(startTime.format('HH:mm'), endTime.format('HH:mm'));
    }
  };

  const resetTimeValues = () => {
    setStartHour('');
    setStartMinute('');
    setEndHour('');
    setEndMinute('');
  };

  return (
    <div className={`flex items-center gap-x-4`}>
      <label>
        <Txt variant="subtitle2" color="gray-50">
          {startLabel}
        </Txt>
      </label>

      <Select.Root value={startHour} onValueChange={setStartHour} size="3">
        <Select.Trigger variant="surface" radius="medium" className="w-32" placeholder="0 시" />
        <Select.Content>
          <Select.Group>
            {getHours().map((hour) => (
              <Select.Item key={hour} value={hour.toString()}>
                {hour} 시
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>

      <Select.Root value={startMinute} onValueChange={setStartMinute} size="3">
        <Select.Trigger variant="surface" radius="medium" className="w-32" placeholder="0 분" />
        <Select.Content>
          <Select.Group>
            {getMinutes().map((minute) => (
              <Select.Item key={minute} value={minute.toString()}>
                {minute} 분
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>

      <div className="flex items-center gap-x-4">
        <label>
          <Txt variant="subtitle2" color="gray-50">
            {endLabel}
          </Txt>
        </label>

        <Select.Root value={endHour} onValueChange={setEndHour} size="3">
          <Select.Trigger variant="surface" radius="medium" className="w-32" placeholder="0 시" />
          <Select.Content>
            <Select.Group>
              {getHours().map((hour) => (
                <Select.Item key={hour} value={hour.toString()}>
                  {hour} 시
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>

        <Select.Root value={endMinute} onValueChange={setEndMinute} size="3">
          <Select.Trigger variant="surface" radius="medium" className="w-32" placeholder="0 분" />
          <Select.Content>
            <Select.Group>
              {getMinutes().map((minute) => (
                <Select.Item key={minute} value={minute.toString()}>
                  {minute} 분
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  );
}
