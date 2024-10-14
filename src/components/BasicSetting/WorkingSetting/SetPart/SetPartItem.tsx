import BasicSettingSubTitle from '@/components/Common/BasicSettingSubTitle';
import Badge from '@/components/Common/LabelBadge';
import { IWorkingSettingPartResponse } from '@/models/workingSetting.model';
import { Button } from '@radix-ui/themes';
import { PiXBold } from 'react-icons/pi';

export default function WorkingSettingSetPartItem({ id, ...data }: IWorkingSettingPartResponse) {
  const handleClickUpdateItem = (id: string) => {
    return id;
  };
  const handleClickDeleteItem = (id: string) => {
    return id;
  };

  return (
    <div className="flex justify-between items-center border-2 p-6 bg-gray-10">
      <Badge
        color={data.positionColor}
        radius="full"
        size={1}
        variant="solid"
        text={data.position}
      />
      <BasicSettingSubTitle title="직책" content={data.position} gap="gap-x-4" />
      <BasicSettingSubTitle title="업무" content={data.tasks} gap="gap-x-4" />
      <BasicSettingSubTitle title="구분" content={data.division} gap="gap-x-4" />
      <BasicSettingSubTitle
        title="자격증 필수"
        content={data.isCertificated ? 'Y' : 'N'}
        gap="gap-x-4"
      />
      <BasicSettingSubTitle
        title="자격증 필수"
        content={data.isCertificated ? 'Y' : 'N'}
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
