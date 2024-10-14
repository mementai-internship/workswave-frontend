import BasicSettingSubTitle from '@/components/Common/BasicSettingSubTitle';
import { Txt } from '@/components/Common/Txt';
import { Button } from '@radix-ui/themes';

export default function WorkingSettingOT() {
  // const { control } = useForm({
  //   defaultValues: {
  //     is_MSO: false,
  //     is_all: false,
  //     is_part: false,
  //   },
  // });
  return (
    <div className="p-10 flex flex-col gap-y-10">
      <div className="flex gap-x-24 bg-gray-10 border p-4">
        <Txt variant="subtitle1" color="gray-50">
          의사
        </Txt>
        <BasicSettingSubTitle title="30분" content="0" gap="gap-x-6" />
        <BasicSettingSubTitle title="60분" content="0" gap="gap-x-6" />
        <BasicSettingSubTitle title="90분" content="0" gap="gap-x-6" />
        <BasicSettingSubTitle title="120분" content="0" gap="gap-x-6" />
        <div className="flex-1 flex justify-end items-center">
          <Txt variant="subtitle2" color="gray-50">
            기준일
          </Txt>
        </div>
        <Button
          variant="outline"
          color="gray"
          radius="full"
          className="px-5 bg-white cursor-pointer hover:bg-gray-10 active:bg-gray-30"
        >
          내역보기
        </Button>
      </div>

      <div className="flex gap-x-24 bg-gray-10 border p-4">
        <Txt variant="subtitle1" color="gray-50">
          일반
        </Txt>
        <BasicSettingSubTitle title="30분" content="0" gap="gap-x-6" />
        <BasicSettingSubTitle title="60분" content="0" gap="gap-x-6" />
        <BasicSettingSubTitle title="90분" content="0" gap="gap-x-6" />
        <BasicSettingSubTitle title="120분" content="0" gap="gap-x-6" />
        <div className="flex-1 flex justify-end items-center">
          <Txt variant="subtitle2" color="gray-50">
            기준일
          </Txt>
        </div>
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
