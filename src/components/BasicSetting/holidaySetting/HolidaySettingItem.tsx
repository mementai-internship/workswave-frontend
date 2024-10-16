import BasicSettingSubTitle from '@/components/Common/BasicSettingSubTitle';
import { Txt } from '@/components/Common/Txt';
// import { useGetParts } from '@/hooks/apis/useParts';
import { IHolidaySetting } from '@/models/holidaySetting.model';
import { Button } from '@radix-ui/themes';
import { UseFormSetValue } from 'react-hook-form';
import { PiXBold } from 'react-icons/pi';

// TODO: user 브랜치 아이디로 변경될 것
// const branchId = 1;

interface IPropsType extends IHolidaySetting {
  onChangeEditMode: (boolean: boolean) => void;
  setValue: UseFormSetValue<IHolidaySetting>;
}

export default function HolidaySettingItem({
  id,
  name,
  onChangeEditMode,
  setValue,

  ...data
}: IPropsType) {
  // const { data: parts, isFetching } = useGetParts(branchId);

  const { leave_count, is_paid } = data;
  const handleClickUpdateItem = (id: number) => {
    onChangeEditMode(true);
    setValue('id', id);
    setValue('name', name);
    Object.entries(data).forEach(([key, value]) => setValue(key as keyof typeof data, value));
  };

  const handleClickDeleteItem = (id: number) => {
    return id;
    /**
     * TODO:
     * 삭제 로직 작성 -> tanstack query
     */
  };
  return (
    <section className="min-w-[700px] flex items-center justify-between border px-4 py-3 border-gray-300 bg-blue-10">
      <div className="flex gap-x-10 whitespace-nowrap">
        <Txt variant="h4" className="w-32">
          {name}
        </Txt>
        <div className="grid grid-cols-2">
          <BasicSettingSubTitle
            title="구분"
            content={is_paid ? '유급' : '무급'}
            gap="gap-x-4 gap-y-4"
            styles="w-48"
          />
          <BasicSettingSubTitle
            title="차감일수"
            content={is_paid ? '사용' : '미사용'}
            gap="gap-x-4"
          />
          <BasicSettingSubTitle title="제외파트" content={leave_count.toString()} gap="gap-x-4" />
        </div>
      </div>
      <div className="flex items-center gap-x-4 ml-4 whitespace-nowrap">
        <Button
          onClick={() => handleClickUpdateItem(id)}
          size="2"
          radius="full"
          variant="outline"
          color="gray"
          className="py-1 px-8 bg-white cursor-pointer hover:bg-gray-100 active:bg-gray-200"
        >
          수정하기
        </Button>
        <PiXBold
          size="20"
          className="cursor-pointer hover:text-gray-500 active:text-gray-700"
          tabIndex={0}
          onClick={() => handleClickDeleteItem(id)}
        />
      </div>
    </section>
  );
}
