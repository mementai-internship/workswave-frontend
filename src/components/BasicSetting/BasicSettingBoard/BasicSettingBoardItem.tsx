import BasicSettingBoardForm from '@/components/BasicSetting/BasicSettingBoard/BasicSettingBoardForm';
import BasicSettingSubTitle from '@/components/Common/BasicSettingSubTitle';
import { Txt } from '@/components/Common/Txt';
import { useBasicSettingBoard } from '@/hooks/useBasicSettingBoard';
import { IBoardReponse } from '@/models/basicSetting.model';
import { Button, Dialog } from '@radix-ui/themes';
import { useState } from 'react';
import { PiXBold } from 'react-icons/pi';

export default function BasicSettingBoardItem({ id, categoryName, ...data }: IBoardReponse) {
  const {
    control,
    isDialogOpen,
    handleSubmit: handleBoardSubmit,
    onSubmit: onSubmitBoardForm,
    setIsDialogOpen,
    setValue,
    reset,
  } = useBasicSettingBoard();

  const [isEditingMode, setIsEditingMode] = useState(false);

  const handleClickUpdateItem = (id: string) => {
    setIsDialogOpen(true);
    setIsEditingMode(true);
    setValue('id', id);
    setValue('categoryName', categoryName);
    Object.entries(data).forEach(([key, value]) => setValue(key as keyof typeof data, value));
  };

  const handleClickDeleteItem = (id: string) => {
    return id;
    /**
     * TODO:
     * 삭제 로직 작성 -> tanstack query
     */
  };

  return (
    <section className="min-w-[700px] flex items-center justify-between border px-4 py-3 border-gray-300 bg-blue-10">
      <div className="flex flex-col">
        <Txt variant="h4">{categoryName}</Txt>
        <div className="flex gap-x-10 my-2">
          <BasicSettingSubTitle title="열람권한" content={data.readAuthority} flexAlign="col" />
          <BasicSettingSubTitle title="쓰기권한" content={data.writeAuthority} flexAlign="col" />
          <BasicSettingSubTitle title="알림권한" content={data.notifyAuthority} flexAlign="col" />
          <BasicSettingSubTitle
            title="파트구분"
            content={data.partDivision ? '사용' : '미사용'}
            flexAlign="col"
          />
          <BasicSettingSubTitle
            title="댓글사용여부"
            content={data.commentDivision ? '사용' : '미사용'}
            flexAlign="col"
          />
        </div>
      </div>
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
      {isEditingMode && (
        <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <Dialog.Content maxWidth="500px" className="p-0">
            <Dialog.Title className="absolute right-5 top-5">
              <Button
                tabIndex={0}
                variant="ghost"
                color="gray"
                onClick={() => {
                  setIsDialogOpen(false);
                  setIsEditingMode(false);
                  reset();
                }}
                className="cursor-pointer"
              >
                <PiXBold size={20} />
              </Button>
            </Dialog.Title>
            <BasicSettingBoardForm
              control={control}
              isEditingMode={isEditingMode}
              setValue={setValue}
            />
            <Dialog.Description className="flex justify-center">
              <Button
                onClick={handleBoardSubmit(onSubmitBoardForm)}
                variant="solid"
                size="3"
                radius="small"
                className="flex w-40 h-10 justify-items-center my-10 bg-indigo-950 cursor-pointer hover:bg-opacity-90 disabled:bg-gray-10 disabled:text-gray-30 disabled:cursor-default"
              >
                수정하기
              </Button>
            </Dialog.Description>
          </Dialog.Content>
        </Dialog.Root>
      )}
    </section>
  );
}
