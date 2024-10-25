import { Button } from '@radix-ui/themes';
import { UseFormSetValue } from 'react-hook-form';
import { PiXBold } from 'react-icons/pi';

import BasicSettingSubTitle from '@/components/Common/BasicSettingSubTitle';
import { useDeleteParts } from '@/hooks/apis/useParts';
import { IPartsResponse } from '@/models/parts';

interface IPropsType extends Omit<IPartsResponse, 'id'> {
  id: number;
  branchId: number;
  setValue: UseFormSetValue<IPartsResponse>;
  onChangeEditMode: (boolean: boolean) => void;
}
export default function WorkingSettingSetPartItem({
  id,
  branchId,
  setValue,
  onChangeEditMode,
  ...data
}: IPropsType) {
  const { name, task, is_doctor, required_certification, leave_granting_authority, color } = data;

  const { mutate: deleteParts } = useDeleteParts(branchId);

  const handleClickUpdateItem = (id: number) => {
    onChangeEditMode(true);
    setValue('id', id);
    Object.entries(data).forEach(([key, value]) => setValue(key as keyof typeof data, value));
  };
  const handleClickDeleteItem = (id: number) => {
    deleteParts(id);
  };

  return (
    <div className="flex justify-between items-center border-2 p-6 bg-gray-10 min-w-[800px]">
      <span
        className={`w-10 h-6 rounded-full text-black text-center`}
        style={{ backgroundColor: color }}
      >
        {name.slice(0, 2)}
      </span>

      <BasicSettingSubTitle title="직책" content={name} gap="gap-x-4" />
      <BasicSettingSubTitle title="업무" content={task} gap="gap-x-4" />
      <BasicSettingSubTitle title="구분" content={is_doctor ? '의사' : '일반'} gap="gap-x-4" />
      <BasicSettingSubTitle
        title="자격증 필수"
        content={required_certification ? 'Y' : 'N'}
        gap="gap-x-4"
      />
      <BasicSettingSubTitle
        title="연차"
        content={leave_granting_authority ? '수동 부여' : '자동 부여'}
        gap="gap-x-4"
      />

      <div className="flex items-center gap-x-4 ml-4">
        <Button
          tabIndex={0}
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
    </div>
  );
}
