import { TextField } from '@radix-ui/themes';
import dayjs from 'dayjs';
import { forwardRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { PiCalendarCheck } from 'react-icons/pi';

interface IDatePickerProps {
  style?: 'bottom' | 'rightTop';
  defaultValue?: string;
}

const MemberBasicInfoDatePicker = forwardRef<HTMLInputElement, IDatePickerProps>(
  ({ style, defaultValue }) => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(dayjs().toDate());

    function handleDateClick() {
      setShowDatePicker(!showDatePicker);
    }

    function handleDaySelect(date: Date) {
      setShowDatePicker(false);
      setSelectedDate(date);
    }

    return (
      <div className="relative">
        <TextField.Root className="flex items-center justify-center w-44 h-10 justify-between bg-light-gray border border-gray-30 border-solid text-black rounded-sm p-1">
          <TextField.Slot>{defaultValue}</TextField.Slot>
          <button onClick={handleDateClick}>
            <PiCalendarCheck className="w-6 h-6" />
          </button>
          {showDatePicker && (
            <div
              className={`absolute z-10 bg-gray-10 shadow-lg ${style === 'bottom' ? 'top-full ' : style === 'rightTop' ? 'left-48 top-[-40px]' : 'left-48'}`}
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
