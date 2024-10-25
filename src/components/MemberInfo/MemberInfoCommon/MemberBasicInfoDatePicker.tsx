import { Popover, TextField } from '@radix-ui/themes';
import dayjs from 'dayjs';
import { forwardRef, useState } from 'react';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { PiCalendarCheck } from 'react-icons/pi';

interface IDatePickerProps {
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder?: string;
}

const MemberBasicInfoDatePicker = forwardRef<HTMLInputElement, IDatePickerProps>(
  ({ defaultValue, onChange, disabled, placeholder }) => {
    const defaultClassNames = getDefaultClassNames();

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(
      defaultValue ? dayjs(defaultValue).toDate() : dayjs().toDate()
    );

    // disabled 상태일 때 빈 문자열을 반환하도록 수정
    const formatDate = (date: Date) => {
      if (disabled) return '';
      return dayjs(date).format('YYYY-MM-DD');
    };

    function handleDateClick(e: React.MouseEvent) {
      // disabled 상태일 때 클릭 이벤트 무시
      if (disabled) return;
      e.preventDefault();
      setShowDatePicker(!showDatePicker);
    }

    function handleDaySelect(date: Date) {
      if (date) {
        onChange?.(date as unknown as React.ChangeEvent<HTMLInputElement>);
        setShowDatePicker(false);
        setSelectedDate(date);
      }
    }

    return (
      <>
        <Popover.Root
          open={disabled ? false : showDatePicker}
          onOpenChange={(open) => !disabled && setShowDatePicker(open)}
        >
          <Popover.Trigger>
            <TextField.Root
              variant="soft"
              className={`flex items-center w-44 h-10 bg-white border-2 border-gray-300 rounded-none text-black p-1 ${
                disabled ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <TextField.Slot>
                {disabled && placeholder ? placeholder : formatDate(selectedDate)}
              </TextField.Slot>
              <button type="button" onClick={handleDateClick} disabled={disabled}>
                <PiCalendarCheck className="w-6 h-6" />
              </button>
            </TextField.Root>
          </Popover.Trigger>

          <Popover.Content
            className="bg-white border-2 rounded-md shadow-lg"
            sideOffset={5}
            align="start"
          >
            <DayPicker
              selected={selectedDate}
              onSelect={handleDaySelect}
              formatters={{
                formatCaption: (date: Date) => dayjs(date).format('YYYY년 MM월'),
              }}
              classNames={{
                root: `${defaultClassNames.root} w-full h-full gap-2`,
                chevron: `${defaultClassNames.chevron} fill-purple-10`,
                month_caption: 'flex justify-center text-xl font-bold h-10',
                day_button: 'w-12 h-12 text-lg',
                selected: `bg-purple-10 rounded-full`,
                today: `font-bold text-xl text-amber-500`,
                disabled: 'text-gray-50 bg-gray-10 rounded-full',
              }}
              mode="single"
            />
          </Popover.Content>
        </Popover.Root>
      </>
    );
  }
);

export default MemberBasicInfoDatePicker;
