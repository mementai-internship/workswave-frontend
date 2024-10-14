import BasicSettingSubTitle from '@/components/Common/BasicSettingSubTitle';
import Badge from '@/components/Common/LabelBadge';
import { IWorkingSettingPartResponse } from '@/models/workingSetting.model';
import { adaptTaskToColor } from '@/utils/adaptTaskToColor';
import { Button } from '@radix-ui/themes';
import { PiXBold } from 'react-icons/pi';

export default function WorkingSettingSetPartItem({ id, ...data }: IWorkingSettingPartResponse) {
  const handleClickUpdateItem = (id: number) => {
    return id;
  };
  const handleClickDeleteItem = (id: number) => {
    return id;
  };

  const taskColor = adaptTaskToColor(data.task);

  return (
    <div className="flex justify-between items-center border-2 p-6 bg-gray-10 min-w-[800px]">
      <Badge
        color={taskColor}
        radius="full"
        size={1}
        variant="solid"
        text={data.name.slice(0, 2)}
      />
      <BasicSettingSubTitle title="직책" content={data.name} gap="gap-x-4" />
      <BasicSettingSubTitle title="업무" content={data.task} gap="gap-x-4" />
      <BasicSettingSubTitle title="구분" content={data.is_doctor ? '의사' : '일반'} gap="gap-x-4" />
      <BasicSettingSubTitle
        title="자격증 필수"
        content={data.required_certification ? 'Y' : 'N'}
        gap="gap-x-4"
      />
      <BasicSettingSubTitle
        title="연차"
        content={data.leave_granting_authority ? '수동 부여' : '자동 부여'}
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
