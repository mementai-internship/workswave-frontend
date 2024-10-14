import { Button } from '@radix-ui/themes';
import dayjs from 'dayjs';
import { PiGear } from 'react-icons/pi';

interface IProps {
  isPartTime: boolean;
  isSetPartTime: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function WorkHeader({ isPartTime, isSetPartTime }: IProps) {
  const now = dayjs().format('YYYY-MM-DD');
  const date = {
    workingDays: 10,
    day: now,
    period: `${now} - ${now} `,
  };

  return (
    <div className="flex justify-between content-center py-4">
      <div className="text-2xl font-medium flex gap-3">
        근로관리
        <Button
          color="gray"
          variant="soft"
          radius="full"
          onClick={() => isSetPartTime(!isPartTime)}
        >
          <PiGear />
          {isPartTime ? '파트타임관리' : '출퇴근 기록 관리'}
        </Button>
      </div>
      <div>
        <p>
          {date.day} 기준 총 근무가능 일수 <span className="font-bold">{date.workingDays}</span>일
          (데이터기준 {date.period})
        </p>
      </div>
    </div>
  );
}
