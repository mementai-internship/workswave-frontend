import BasicSettingBoardForm from '@/components/BasicSetting/BasicSettingBoard/BasicSettingBoardForm';
import BasicSettingBoardList from '@/components/BasicSetting/BasicSettingBoard/BasicSettingBoardList';
import Title from '@/components/Common/Title';
import { Txt } from '@/components/Common/Txt';
import { BOARD_LIST } from '@/constants/basicSetting.mock';
import { useBasicSettingBoard } from '@/hooks/useBasicSettingBoard';
import { Button, Dialog, Select } from '@radix-ui/themes';
import { useCallback, useState } from 'react';
import { PiXBold } from 'react-icons/pi';

// TODO: API 응답 값으로 변경
const OPTIONS: { id: string; branch: string }[] = [
  { id: '1', branch: '뮤즈의원(다산점)' },
  { id: '2', branch: '뮤즈의원(강남점)' },
];

export default function BoardPage() {
  const [currentBranch, setCurrentBranch] = useState(OPTIONS[0].branch);

  const {
    control,
    isDialogOpen,
    formState,
    handleSubmit: handleBoardSubmit,
    onSubmit: onSubmitBoardForm,
    setIsDialogOpen,
    setValue,
  } = useBasicSettingBoard();

  const handleChangeBranch = (branch: string) => {
    setCurrentBranch(branch);
  };

  const isFormValid = useCallback(() => {
    const { categoryName, categoryDesc } = formState.dirtyFields;
    return categoryName && categoryDesc && formState.isValid;
  }, [formState]);
  /**
   * TODO: 무한 스크롤 구현 시 함수 및 ref 객체 추가
   */

  return (
    <div className="w-[80%] mx-auto flex p-5 gap-x-2 min-h-[800px] max-h-[calc(100vh-100px)]">
      {/* 1280px 이하 버전 */}
      <section className="bg-white border flex-[3] overflow-y-scroll">
        <div className="flex items-center justify-between gap-x-8 px-10 py-5 sticky top-0 left-0 bg-white border-b">
          <Title content="게시판 설정" />
          {OPTIONS.length > 1 ? (
            <div className="flex-1">
              <Select.Root
                defaultValue={currentBranch}
                onValueChange={(branch) => handleChangeBranch(branch)}
                size="3"
              >
                <Select.Trigger variant="ghost" className="text-xl font-bold" />
                <Select.Content>
                  <Select.Group className="p-2">
                    {OPTIONS.map(({ id, branch }) => (
                      <Select.Item key={id} value={branch}>
                        {branch}
                      </Select.Item>
                    ))}
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </div>
          ) : (
            <div className="flex-1">
              <Txt variant="h5">{currentBranch}</Txt>
            </div>
          )}
          <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <Dialog.Trigger>
              <Button
                size="2"
                radius="small"
                variant="outline"
                color="gray"
                className="xl:hidden px-4 bg-white cursor-pointer hover:bg-gray-100 active:bg-gray-200 justify-self-end"
              >
                게시판 카테고리 추가하기
              </Button>
            </Dialog.Trigger>
            <Dialog.Content maxWidth="500px" className="p-0">
              <Dialog.Title className="absolute right-5 top-5">
                <Button
                  variant="ghost"
                  color="gray"
                  onClick={() => setIsDialogOpen(false)}
                  className="cursor-pointer"
                >
                  <PiXBold size={20} />
                </Button>
              </Dialog.Title>
              <BasicSettingBoardForm control={control} setValue={setValue} />
              <Dialog.Description className="flex justify-center">
                <Button
                  onClick={handleBoardSubmit(onSubmitBoardForm)}
                  variant="solid"
                  size="3"
                  radius="small"
                  disabled={!isFormValid()}
                  className="flex w-40 h-10 justify-items-center my-10 bg-indigo-950 cursor-pointer hover:bg-opacity-90 disabled:bg-gray-10 disabled:text-gray-30 disabled:cursor-default"
                >
                  저장하기
                </Button>
              </Dialog.Description>
            </Dialog.Content>
          </Dialog.Root>
        </div>
        <BasicSettingBoardList boardList={BOARD_LIST} />
      </section>
      {/* xl (1280px) 이상 버전 */}
      <section className="hidden xl:block xl:min-w-[500px] mx-auto bg-white border flex-[1.5]">
        <BasicSettingBoardForm control={control} setValue={setValue} />
        <div className="flex justify-center">
          <Button
            onClick={handleBoardSubmit(onSubmitBoardForm)}
            onKeyDown={(e) => e.key === 'Enter' && handleBoardSubmit(onSubmitBoardForm)}
            variant="solid"
            size="3"
            radius="small"
            disabled={!isFormValid()}
            className="flex w-40 h-10 justify-items-center my-10 bg-indigo-950 cursor-pointer hover:bg-opacity-90 disabled:bg-gray-10 disabled:text-gray-30 disabled:cursor-default"
          >
            저장하기
          </Button>
        </div>
      </section>
    </div>
  );
}
