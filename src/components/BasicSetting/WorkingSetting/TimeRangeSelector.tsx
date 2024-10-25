/* eslint-disable react-hooks/exhaustive-deps */
import { Select } from '@radix-ui/themes';
import dayjs, { Dayjs } from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import { useEffect, useState } from 'react';

import { Txt } from '@/components/Common/Txt';
import { getHours, getMinutes } from '@/utils/getTimes';

dayjs.extend(isSameOrAfter);
interface IPropsType {
  startLabel: string;
  endLabel: string;
  initialStartTime: string;
  initialEndTime: string;
  onTimeRangeChange: (startTime: string, endTime: string) => void;
  disabled?: boolean;
  size?: '1' | '2' | '3';
}

const combineTimeValues = (hour: string, minute: string): Dayjs => {
  return dayjs().hour(parseInt(hour, 10)).minute(parseInt(minute, 10));
};

export default function TimeRangeSelector({
  startLabel,
  endLabel,
  initialStartTime,
  initialEndTime,
  onTimeRangeChange,
  disabled = false,
  size = '3',
}: IPropsType) {
  const [initStartHour, initStartMinute] = initialStartTime.split(':');
  const [initEndHour, initEndMinute] = initialEndTime.split(':');

  const [startHour, setStartHour] = useState<string>('00');
  const [startMinute, setStartMinute] = useState<string>('00');
  const [endHour, setEndHour] = useState<string>('23');
  const [endMinute, setEndMinute] = useState<string>('50');

  useEffect(() => {
    setStartHour(initStartHour !== '00' ? initStartHour : '00');
    setStartMinute(initStartMinute !== '00' ? initStartMinute : '00');
    setEndHour(initEndHour !== '00' ? initEndHour : '23');
    setEndMinute(initEndMinute !== '00' ? initEndMinute : '50');
  }, [initialStartTime, initialEndTime]);

  useEffect(() => {
    if (startHour && startMinute && endHour && endMinute) {
      const startTime = combineTimeValues(startHour, startMinute);
      const endTime = combineTimeValues(endHour, endMinute);

      if (isValidTimeRange(startTime, endTime)) {
        onTimeRangeChange(startTime.format('HH:mm'), endTime.format('HH:mm'));
      }
    }
  }, [startHour, startMinute, endHour, endMinute]);

  const isValidTimeRange = (startTime: Dayjs, endTime: Dayjs): boolean => {
    if (!endHour || !endMinute) {
      return true; // 종료 시간이 완전히 선택되지 않았으면 유효성 검사를 건너뜁니다.
    }

    if (startTime.isSame(endTime) && startTime.format('HH:mm') !== '00:00') {
      alert('종료 시간은 시작 시간과 같을 수 없습니다.');
      resetTimeValues();
      return false;
    }
    if (startTime.isAfter(endTime)) {
      alert('종료 시간은 시작 시간보다 이후여야 합니다.');
      resetTimeValues();
      return false;
    }
    return true;
  };

  const resetTimeValues = () => {
    setStartHour('00');
    setStartMinute('00');
    setEndHour('23');
    setEndMinute('50');
  };

  return (
    <div className={`flex items-center gap-x-4`}>
      <label>
        <Txt variant={size === '1' || size === '2' ? 'body1' : 'subtitle2'} color="gray-50">
          {startLabel}
        </Txt>
      </label>

      <Select.Root value={startHour} onValueChange={setStartHour} size={size} disabled={disabled}>
        <Select.Trigger
          variant="surface"
          radius="medium"
          className={size === '1' || size === '2' ? 'w-24' : 'w-32'}
          placeholder="0 시"
        />
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

      <Select.Root
        value={startMinute}
        onValueChange={setStartMinute}
        size={size}
        disabled={disabled}
      >
        <Select.Trigger
          variant="surface"
          radius="medium"
          className={`${size === '1' || size === '2' ? 'w-24' : 'w-32'}`}
          placeholder="0 분"
        />
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
          <Txt variant={size === '1' || size === '2' ? 'body1' : 'subtitle2'} color="gray-50">
            {endLabel}
          </Txt>
        </label>

        <Select.Root value={endHour} onValueChange={setEndHour} size={size} disabled={disabled}>
          <Select.Trigger
            variant="surface"
            radius="medium"
            className={size === '1' || size === '2' ? 'w-24' : 'w-32'}
            placeholder="0 시"
          />
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

        <Select.Root value={endMinute} onValueChange={setEndMinute} size={size} disabled={disabled}>
          <Select.Trigger
            variant="surface"
            radius="medium"
            className={size === '1' || size === '2' ? 'w-24' : 'w-32'}
            placeholder="0 분"
          />
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
