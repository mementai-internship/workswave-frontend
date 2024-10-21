import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import SelectBox from '@/components/Common/Select';

interface CustomTimePickerProps {
  value: string;
  onChange: (value: string) => void;
}

const generateTimeOptions = (max: number, step: number = 1, setTime: (value: number) => void) => {
  return Array.from({ length: max / step }, (_, i) => ({
    id: i,
    name: (i * step).toString().padStart(2, '0'),
    action: () => setTime(i * step),
  }));
};

export default function CustomTimePicker({ value, onChange }: CustomTimePickerProps) {
  const { register } = useForm();
  const [hours, setHours] = useState(value ? parseInt(value.split(':')[0]) : 0);
  const [minutes, setMinutes] = useState(
    value ? Math.floor(parseInt(value.split(':')[1]) / 10) * 10 : 0
  );

  useEffect(() => {
    onChange(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);
  }, [hours, minutes, onChange]);

  const hourOptions = generateTimeOptions(24, 1, setHours);
  const minuteOptions = generateTimeOptions(60, 10, setMinutes);

  return (
    <div className="flex items-center space-x-2 border border-gray-300 rounded p-2">
      <SelectBox
        name="hours"
        title={hours.toString().padStart(2, '0')}
        register={register}
        options={hourOptions}
        size="2xSmall"
        border={false}
      />
      <span>:</span>
      <SelectBox
        name="minutes"
        title={minutes.toString().padStart(2, '0')}
        register={register}
        options={minuteOptions}
        size="2xSmall"
        border={false}
      />
    </div>
  );
}
