import Title from '@/components/Common/Title';
import { Txt } from '@/components/Common/Txt';
import { IHolidaySetting } from '@/models/holidaySetting.model';
import { Button, CheckboxGroup, TextField } from '@radix-ui/themes';
import {
  Control,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue,
} from 'react-hook-form';

interface HolidaySettingFormProps {
  isEditingMode: boolean;
  control: Control<IHolidaySetting>;
  formState: FormState<IHolidaySetting>;
  handleSubmit: UseFormHandleSubmit<IHolidaySetting>;
  reset: UseFormReset<IHolidaySetting>;
  onChangeEditMode: (boolean: boolean) => void;
  setValue: UseFormSetValue<IHolidaySetting>;
  register: UseFormRegister<IHolidaySetting>;
}

export default function HolidaySettingForm({
  isEditingMode,
  control,
  reset,
  formState,
  handleSubmit,
  onChangeEditMode,
  setValue,
  register,
}: HolidaySettingFormProps) {
  const onSubmitHolidaySetting = (data: IHolidaySetting) => {
    console.log(data);
  };

  const handleClickCancel = () => {
    onChangeEditMode(false);
    reset();
    // 지울것
    setValue('id', 0);
    console.log(control);
  };

  const isFormValid = () => {
    const { name, leave_count } = formState.dirtyFields;
    return name && leave_count && formState.isValid;
  };

  return (
    <div className="sticky top-0 left-0 z-[2] bg-white ">
      <div className="px-10 py-5 flex items-center gap-x-4 border-b">
        <Title content={`${isEditingMode ? '연차 수정하기' : '연차 추가하기'}`} />
      </div>
      <form onSubmit={handleSubmit(onSubmitHolidaySetting)} className="p-10 flex flex-col gap-y-3">
        <div className="flex items-center">
          <label htmlFor="name" className="w-40 text-gray-500 whitespace-nowrap">
            카테고리 이름
          </label>

          <TextField.Root
            id="name"
            placeholder="휴무명을 입력해주세요."
            size="3"
            radius="none"
            className="w-full"
            {...register('name', { required: true })}
            required
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="leave_count" className="w-40 text-gray-500 whitespace-nowrap">
            차감일수
          </label>
          <TextField.Root
            id="leave_count"
            placeholder="차감일수를 입력해주세요."
            className="w-full"
            size="3"
            radius="none"
            {...register('leave_count', { required: true })}
            required
          />
        </div>

        <div className="flex items-center">
          <CheckboxGroup.Root
            size="3"
            variant="surface"
            color="purple"
            className="grid grid-cols-5 gap-x-4"
            {...register('is_paid')}
          >
            <div className="flex flex-row items-center justify-center">
              <CheckboxGroup.Item value="1" className="w-8 h-8 border border-gray-50 rounded p-1" />
              <label>
                {' '}
                <Txt variant="caption">퇴사자 포함</Txt>
              </label>
            </div>{' '}
            <div className="flex flex-row items-center justify-center">
              <CheckboxGroup.Item value="1" className="w-8 h-8 border border-gray-50 rounded p-1" />
              <label>
                {' '}
                <Txt variant="caption">퇴사자 포함</Txt>
              </label>
            </div>{' '}
            <div className="flex flex-row items-center justify-center">
              <CheckboxGroup.Item value="1" className="w-8 h-8 border border-gray-50 rounded p-1" />
              <label>
                {' '}
                <Txt variant="caption">퇴사자 포함</Txt>
              </label>
            </div>{' '}
            <div className="flex flex-row items-center justify-center">
              <CheckboxGroup.Item value="1" className="w-8 h-8 border border-gray-50 rounded p-1" />
              <label>
                {' '}
                <Txt variant="caption">퇴사자 포함</Txt>
              </label>
            </div>{' '}
            <div className="flex flex-row items-center justify-center">
              <CheckboxGroup.Item value="1" className="w-8 h-8 border border-gray-50 rounded p-1" />
              <label>
                {' '}
                <Txt variant="caption">퇴사자 포함</Txt>
              </label>
            </div>{' '}
            <div className="flex flex-row items-center justify-center">
              <CheckboxGroup.Item value="1" className="w-8 h-8 border border-gray-50 rounded p-1" />
              <label>
                {' '}
                <Txt variant="caption">퇴사자 포함</Txt>
              </label>
            </div>{' '}
            <div className="flex flex-row items-center justify-center">
              <CheckboxGroup.Item value="1" className="w-8 h-8 border border-gray-50 rounded p-1" />
              <label>
                {' '}
                <Txt variant="caption">퇴사자 포함</Txt>
              </label>
            </div>{' '}
            <div className="flex flex-row items-center justify-center">
              <CheckboxGroup.Item value="1" className="w-8 h-8 border border-gray-50 rounded p-1" />
              <label>
                {' '}
                <Txt variant="caption">퇴사자 포함</Txt>
              </label>
            </div>{' '}
            <div className="flex flex-row items-center justify-center">
              <CheckboxGroup.Item value="1" className="w-8 h-8 border border-gray-50 rounded p-1" />
              <label>
                {' '}
                <Txt className="text-gray-500">퇴사자 포함</Txt>
              </label>
            </div>
            <div className="flex flex-row items-center justify-center">
              <CheckboxGroup.Item value="2" className="w-8 h-8 border border-gray-50 rounded p-1" />
              <label>휴직자</label>
            </div>
          </CheckboxGroup.Root>
        </div>
        <div className="flex justify-center items-center gap-x-4 mt-10">
          <Button
            variant="solid"
            size="3"
            radius="small"
            disabled={!isEditingMode && !isFormValid()}
            className="flex w-[30%] h-10 justify-items-center bg-indigo-950 cursor-pointer hover:bg-opacity-90 disabled:bg-gray-200 disabled:text-gray-30 disabled:cursor-default"
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
              className="w-[30%] h-10"
            >
              취소
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
