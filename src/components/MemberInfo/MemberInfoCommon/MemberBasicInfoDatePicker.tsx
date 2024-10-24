import { TextField } from '@radix-ui/themes';
import dayjs from 'dayjs';
import { forwardRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { PiCalendarCheck } from 'react-icons/pi';

interface IDatePickerProps {
  style?: 'bottom' | 'rightTop' | 'top';
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MemberBasicInfoDatePicker = forwardRef<HTMLInputElement, IDatePickerProps>(
  ({ style, defaultValue, onChange }, ref) => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(
      defaultValue ? dayjs(defaultValue).toDate() : dayjs().toDate()
    );

    function handleDateClick() {
      setShowDatePicker(!showDatePicker);
    }

    function handleDaySelect(date: Date) {
      onChange?.(date as unknown as React.ChangeEvent<HTMLInputElement>);
      setShowDatePicker(false);
      setSelectedDate(date);
    }

    return (
      <div className="relative">
        <TextField.Root className="flex items-center w-44 h-10 bg-light-gray border border-gray-30 border-solid text-black rounded-sm p-1">
          <TextField.Slot ref={ref}>{defaultValue}</TextField.Slot>
          <button onClick={handleDateClick}>
            <PiCalendarCheck className="w-6 h-6" />
          </button>
          {showDatePicker && (
            <div
              className={`absolute z-10 bg-gray-10 shadow-lg ${style === 'bottom' ? 'top-full ' : style === 'rightTop' ? 'left-48 top-[-40px]' : style === 'top' ? 'bottom-10 left-0' : 'left-48'}`}
            >
              <DayPicker selected={selectedDate} onSelect={handleDaySelect} mode="single" />
            </div>
          )}
        </TextField.Root>
      </div>
    );
  }
);

export default MemberBasicInfoDatePicker;
