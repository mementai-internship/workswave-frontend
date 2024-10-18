import dayjs from 'dayjs';

import { ChangeMonth } from '@/components/Common/ChangeMonth';
import ContactSearchInput from '@/components/Common/ContactSearchInput';
import WorkSelect from '@/components/WorkManagement/WorkSelect';

interface IProps {
  currentDate: dayjs.Dayjs;
  setCurrentDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
}

export default function WorkFilter({ currentDate, setCurrentDate }: IProps) {
  const handleChangeMonth = (newDate: dayjs.Dayjs) => {
    setCurrentDate(newDate);
    // backend API 연결
  };

  return (
    <div className="flex justify-between py-5 border-t border-gray-200">
      <WorkSelect />
      <ChangeMonth currMonth={currentDate} onChangeMonth={handleChangeMonth} />
      <ContactSearchInput />
    </div>
  );
}
