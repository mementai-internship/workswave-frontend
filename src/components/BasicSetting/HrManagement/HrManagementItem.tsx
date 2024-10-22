import { Button } from '@radix-ui/themes';
import { UseFormSetValue } from 'react-hook-form';
import { PiXBold } from 'react-icons/pi';

import BasicSettingSubTitle from '@/components/Common/BasicSettingSubTitle';
import { Txt } from '@/components/Common/Txt';
import { IHrRequest, IHrResponse } from '@/models/hr.model';

interface IPropsType {
  setValue: UseFormSetValue<IHrRequest>;
  onChangeEditMode: (editMode: boolean) => void;
  hrItem: IHrResponse;
}

export default function HrManagementItem({ setValue, onChangeEditMode, hrItem }: IPropsType) {
  const { id, name, categoryDivision } = hrItem;
  const handleClickUpdateItem = (id: number) => {
    onChangeEditMode(true);
    setValue('id', id);
    Object.entries(hrItem).forEach(([key, value]) => {
      setValue(key as keyof IHrRequest, value);
    });
  };
  const handleClickDeleteItem = (id: number) => {
    return id;
  };
  return (
    <section className="flex items-center justify-between border px-4 py-5 border-gray-300 bg-blue-10">
      <div className="flex gap-x-10 whitespace-nowrap">
        <Txt variant="h5" className="w-40">
          {name}
        </Txt>
        <div className="grid">
          <BasicSettingSubTitle
            title="구분"
            content={categoryDivision ? '선택' : '직접입력'}
            gap="gap-x-4 gap-y-4"
            styles="w-48"
          />
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
