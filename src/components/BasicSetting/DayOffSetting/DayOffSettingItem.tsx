import { Button } from '@radix-ui/themes';
import { UseFormSetValue } from 'react-hook-form';
import { PiXBold } from 'react-icons/pi';

import BasicSettingSubTitle from '@/components/Common/BasicSettingSubTitle';
import { Txt } from '@/components/Common/Txt';
import { useDeleteLeaveCategory } from '@/hooks/apis/useLeaveCategories';
import { ILeaveCategory } from '@/models/leave-categories.model';

interface IPropsType {
  leave_category: ILeaveCategory['leave_category'];
  branch_id: number;
  excluded_parts: { part_id: number; part_name: string }[];
  onChangeEditMode: (boolean: boolean) => void;
  setValue: UseFormSetValue<ILeaveCategory>;
}

export default function DayOffSettingItem({
  leave_category,
  branch_id,
  excluded_parts,
  onChangeEditMode,
  setValue,
}: IPropsType) {
  const { mutate: deleteLeaveCategory } = useDeleteLeaveCategory(branch_id);
  const { id, name, is_paid, leave_count } = leave_category;

  const handleClickUpdateItem = (id: number) => {
    onChangeEditMode(true);
    setValue('leave_category.id', id);
    Object.entries(leave_category).forEach(([key, value]) => {
      setValue(`leave_category.${key}` as `leave_category.${keyof typeof leave_category}`, value);
    });
    setValue('excluded_parts', excluded_parts);
  };

  const handleClickDeleteItem = (id: number) => {
    deleteLeaveCategory(id);
  };
  return (
    <section className="flex items-center justify-between border px-4 py-3 border-gray-300 bg-blue-10">
      <div className="flex gap-x-10 whitespace-nowrap">
        <Txt variant="h5" className="w-40">
          {name}
        </Txt>
        <div className="grid grid-cols-2">
          <BasicSettingSubTitle
            title="구분"
            content={is_paid ? '유급' : '무급'}
            gap="gap-x-4 gap-y-4"
            styles="w-48"
          />
          <BasicSettingSubTitle title="차감일수" content={leave_count.toString()} gap="gap-x-4" />
          <BasicSettingSubTitle
            title="제외파트"
            content={
              excluded_parts.length > 0
                ? excluded_parts.map((item) => item.part_name).join(', ')
                : '-'
            }
            gap="gap-x-4"
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
