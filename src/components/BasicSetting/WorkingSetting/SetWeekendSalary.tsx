import { Txt } from '@/components/Common/Txt';
import { Button } from '@radix-ui/themes';

// import { useForm } from 'react-hook-form';

export default function WorkingSettingWeekendSalary() {
  // const { control } = useForm({
  //   defaultValues: {
  //     weekendSalary: 0,
  //   },
  // });
  return (
    <div className="p-10 flex flex-col gap-y-4">
      <div className="flex items-center gap-x-24 bg-gray-10 border p-4">
        <Txt variant="subtitle1" color="gray-50">
          의사
        </Txt>
        <div className="flex-1">0</div>
        <Txt variant="subtitle2" color="gray-50">
          기준일
        </Txt>
        <Button
          variant="outline"
          color="gray"
          radius="full"
          className="px-5 bg-white cursor-pointer hover:bg-gray-10 active:bg-gray-30"
        >
          내역보기
        </Button>
      </div>

      <div className="flex items-center gap-x-24 bg-gray-10 border p-4">
        <Txt variant="subtitle1" color="gray-50">
          일반
        </Txt>
        <div className="flex-1">0</div>

        <Txt variant="subtitle2" color="gray-50">
          기준일
        </Txt>

        <Button
          variant="outline"
          color="gray"
          radius="full"
          className="px-5 bg-white cursor-pointer hover:bg-gray-10 active:bg-gray-30"
        >
          내역보기
        </Button>
      </div>
    </div>
  );
}
