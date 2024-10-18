import Title from '@/components/Common/Title';
import { Txt } from '@/components/Common/Txt';
import { ILeaveCategory } from '@/models/leave-categories.model';
import { IWorkingSettingPartResponse } from '@/models/workingSetting.model';
import { Button, CheckboxGroup, RadioGroup, TextField } from '@radix-ui/themes';
import {
  Control,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue,
  UseFormWatch,
  useWatch,
} from 'react-hook-form';
import { PiCheckBold } from 'react-icons/pi';

interface HolidaySettingFormProps {
  isEditingMode: boolean;
  control: Control<ILeaveCategory>;
  formState: FormState<ILeaveCategory>;
  parts: IWorkingSettingPartResponse[];
  handleSubmit: UseFormHandleSubmit<ILeaveCategory>;
  reset: UseFormReset<ILeaveCategory>;
  onChangeEditMode: (boolean: boolean) => void;
  setValue: UseFormSetValue<ILeaveCategory>;
  watch: UseFormWatch<ILeaveCategory>;
  register: UseFormRegister<ILeaveCategory>;
}

export default function HolidaySettingForm({
  isEditingMode,
  control,
  formState,
  parts,
  reset,
  handleSubmit,
  onChangeEditMode,
  setValue,
  watch,
  register,
}: HolidaySettingFormProps) {
  const onSubmitHolidaySetting = (data: ILeaveCategory) => {
    console.log(data);
  };

  const handleClickCancel = () => {
    onChangeEditMode(false);
    reset();
  };

  const isFormValid = () => {
    const { leave_category } = formState.dirtyFields;
    return leave_category?.name && leave_category?.leave_count && formState.isValid;
  };

  const isLeaveOfAbsence = useWatch({
    control,
    name: 'leave_category.is_leave_of_absence',
    defaultValue: false,
  });

  const handleExcludedPartsChange = (values: string[]) => {
    const excludedParts = values
      .map((value) => {
        const part = parts.find((p) => p.id.toString() === value);
        return part ? { id: part.id, part_name: part.name } : null;
      })
      .filter((part): part is { id: number; part_name: string } => part !== null);

    setValue('excluded_parts', excludedParts);
  };

  return (
    <div className="sticky top-0 left-0 z-[2] bg-white">
      <div className="px-10 py-5 flex items-center gap-x-4 border-b">
        <Title content={`${isEditingMode ? '연차 수정하기' : '연차 추가하기'}`} />
      </div>
      <form onSubmit={handleSubmit(onSubmitHolidaySetting)} className="p-8 flex flex-col gap-y-3">
        <div className="flex items-center relative">
          <label htmlFor="name" className="w-40 text-gray-500 whitespace-nowrap">
            카테고리 이름
          </label>

          <TextField.Root
            id="name"
            placeholder="휴무명을 입력해주세요."
            size="3"
            radius="none"
            className="w-full"
            {...register('leave_category.name', { required: true })}
            required
          />
          <div className="absolute right-0 top-0 flex items-center border-l h-full px-2">
            <Button
              type="button"
              variant="ghost"
              color="gray"
              size="3"
              radius="small"
              className="text-sm hover:bg-transparent cursor-pointer"
              onClick={() => setValue('leave_category.is_leave_of_absence', !isLeaveOfAbsence)}
            >
              <PiCheckBold className={isLeaveOfAbsence ? 'text-purple-50' : 'text-gray-500'} />
              <Txt
                variant="button"
                className={`${isLeaveOfAbsence ? 'text-purple-50' : 'text-gray-500'}`}
              >
                휴직
              </Txt>
            </Button>
          </div>
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
            {...register('leave_category.leave_count', { required: true })}
            required
          />
        </div>

        <div className="flex items-center my-2">
          <label htmlFor="is_paid" className="w-28 text-gray-500">
            유급
          </label>
          <RadioGroup.Root
            value={watch('leave_category.is_paid') ? 'true' : 'false'}
            id="is_paid"
            onValueChange={(newValue) => setValue('leave_category.is_paid', newValue === 'true')}
          >
            <div className="flex gap-4">
              <RadioGroup.Item value="true">유급</RadioGroup.Item>
              <RadioGroup.Item value="false">무급</RadioGroup.Item>
            </div>
          </RadioGroup.Root>
        </div>

        <div className="flex items-center">
          <label htmlFor="excluded_parts" className="w-28 text-gray-500 whitespace-nowrap">
            제외 파트
          </label>
          <CheckboxGroup.Root
            size="2"
            variant="surface"
            color="purple"
            className="grid grid-cols-4 justify-start"
            onValueChange={handleExcludedPartsChange}
            value={watch('excluded_parts')?.map((part) => part.id.toString()) || []}
          >
            {parts &&
              !!parts.length &&
              parts.map((part) => (
                <CheckboxGroup.Item
                  key={part.id}
                  value={part.id.toString()}
                  className="text-xs text-gray-500 whitespace-nowrap flex items-center gap-x-1"
                  style={{ justifyContent: 'center' }}
                >
                  {part.name}
                </CheckboxGroup.Item>
              ))}
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
              className="w-[30%] h-10 cursor-pointer"
            >
              취소
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
