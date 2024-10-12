import { TextField } from '@radix-ui/themes';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { PiCalendarCheck } from 'react-icons/pi';

interface IMemberInfoInputProps {
  date?: Date;
}

export default function MemberInfoInput({ date }: IMemberInfoInputProps) {
  const [showDatePicker, setShowDatePicker] = useState(false);

  function handleDateClick() {
    setShowDatePicker(!showDatePicker);
  }

  function handleDaySelect() {
    setShowDatePicker(false);
  }

  return (
    <TextField.Root className="flex items-center justify-center w-44 h-10 justify-between bg-light-gray border border-gray-30 border-solid text-black rounded-sm p-1">
      <TextField.Slot />
      {date && (
        <button onClick={handleDateClick}>
          <PiCalendarCheck className="w-6 h-6" />
        </button>
      )}
      {showDatePicker && (
        <div className="absolute z-10 mt-56 bg-gray-10 shadow-lg">
          <DayPicker
            selected={date}
            onSelect={handleDaySelect}
            mode="single"
            className="w-60 h-60"
          />
        </div>
      )}
    </TextField.Root>
  );
}
