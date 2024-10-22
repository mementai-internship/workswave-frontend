import { Button, RadioGroup, TextField } from '@radix-ui/themes';
import {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';

import Title from '@/components/Common/Title';
import { IHrRequest } from '@/models/hr.model';

interface IHrManagementForm {
  isEditingMode: boolean;
  handleSubmit: UseFormHandleSubmit<IHrRequest>;
  setValue: UseFormSetValue<IHrRequest>;
  register: UseFormRegister<IHrRequest>;
  watch: UseFormWatch<IHrRequest>;
  onChangeEditMode: (isEditingMode: boolean) => void;
  reset: UseFormReset<IHrRequest>;
}

export default function HrManagementForm({
  isEditingMode,
  handleSubmit,
  setValue,
  register,
  watch,
  reset,
  onChangeEditMode,
}: IHrManagementForm) {
  const onSubmitForm = (data: IHrRequest) => {
    if (isEditingMode) {
      setValue('id', data.id);
    } else {
      // post
    }
  };

  const handleClickCancel = () => {
    onChangeEditMode(false);
    reset();
  };
  return (
    <div className="sticky top-0 left-0 z-[2] bg-white">
      <div className="px-10 py-5 flex items-center gap-x-4 border-b">
        <Title
          content={`${isEditingMode ? '인사기록 카테고리 수정하기' : '인사기록 카테고리 추가하기'}`}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmitForm)} className="p-8 flex flex-col gap-y-3">
        <div className="flex items-center gap-x-4">
          <label className="text-gray-500 w-24">카테고리 명</label>
          <TextField.Root placeholder="카테고리 명을 입력해주세요" {...register('name')} size="3" />
        </div>
        <div className="flex items-center gap-x-4">
          <label className="text-gray-500 w-24"> 구분</label>
          <RadioGroup.Root
            value={watch('categoryDivision') ? 'true' : 'false'}
            onValueChange={(value) => setValue('categoryDivision', value === 'true')}
          >
            <div className="flex items-center gap-x-4">
              <RadioGroup.Item value="true">선택</RadioGroup.Item>
              <RadioGroup.Item value="false">직접입력</RadioGroup.Item>
            </div>
          </RadioGroup.Root>
        </div>
        <div className="flex justify-center gap-x-4 mt-10 mb-24">
          <Button
            type="submit"
            size="3"
            className="w-28 h-10 justify-items-center bg-indigo-950 cursor-pointer hover:bg-opacity-90 disabled:bg-gray-200 disabled:text-gray-30 disabled:cursor-default"
            variant="solid"
          >
            {isEditingMode ? '수정하기' : '저장하기'}
          </Button>
          {isEditingMode && (
            <Button
              variant="outline"
              color="gray"
              size="3"
              radius="small"
              onClick={handleClickCancel}
              className="w-28 h-10 cursor-pointer"
            >
              취소
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
