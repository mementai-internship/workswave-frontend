import { Button, Checkbox, Dialog, Flex, RadioGroup, TextField, Tooltip } from '@radix-ui/themes';
import { useCallback, useState } from 'react';
import {
  Control,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { PiInfo } from 'react-icons/pi';

import Title from '@/components/Common/Title';
import { Txt } from '@/components/Common/Txt';
import { usePostParts } from '@/hooks/apis/useParts';
import { IPartsResponse } from '@/models/parts';
import { adaptPartValue } from '@/utils/adaptPartValue';

interface IPropsType {
  handleSubmit: UseFormHandleSubmit<IPartsResponse>;
  onChangeEditMode: (boolean: boolean) => void;
  setValue: UseFormSetValue<IPartsResponse>;
  register: UseFormRegister<IPartsResponse>;
  watch: UseFormWatch<IPartsResponse>;
  onSubmit: (data: IPartsResponse) => void;
  control: Control<IPartsResponse>;
  formState: FormState<IPartsResponse>;
  isEditingMode: boolean;
  branchId: number;
  parts: IPartsResponse[];
}

export default function WorkingSettingPartForm({
  formState,
  isEditingMode,
  branchId,
  handleSubmit,
  register,
  onSubmit,
  onChangeEditMode,
  setValue,
  watch,
  parts,
}: IPropsType) {
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const { mutate: postPart } = usePostParts(branchId);

  const handleClickCancel = () => {
    onChangeEditMode(false);
    setValue('id', 0);
    setValue('name', '');
    setValue('task', '');
    setValue('color', '');
    setValue('is_doctor', false);
    setValue('required_certification', false);
  };

  const isFormValid = useCallback(() => {
    const { name, task } = formState.dirtyFields;
    return name && task;
  }, [formState]);

  const handleCheckboxToggle = useCallback((value: string) => {
    setCheckedList((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  }, []);
  const handleAddPart = async () => {
    const partList = checkedList.map((value) => adaptPartValue(value));
    console.log(partList);
    const result = await Promise.allSettled(partList.map((part) => postPart(part)));
    console.log(result);
    setCheckedList([]);
  };

  return (
    <div className="flex flex-col gap-y-4 bg-gray-10 min-w-[400px] max-w-[500px] px-6 py-5">
      <div className="flex justify-between items-center">
        <Title content="근무일정 추가하기" />
        <Dialog.Root>
          <Dialog.Trigger>
            <Button
              type="button"
              variant="solid"
              className="px-4 bg-white text-gray-50 cursor-pointer hover:bg-gray-300"
            >
              <Txt variant="button">간편추가</Txt>
            </Button>
          </Dialog.Trigger>

          <Dialog.Content maxWidth="450px">
            <Dialog.Title>파트 간편 추가</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              직원들의 파트를 간편 추가 할 수 있습니다.
            </Dialog.Description>

            <Flex direction="column" gap="3">
              <div className="flex items-center gap-x-2">
                <label className="w-24">의사</label>
                <Checkbox
                  checked={checkedList.includes('의사')}
                  disabled={parts.some((part) => part.name === '의사')}
                  onClick={() => handleCheckboxToggle('의사')}
                />
              </div>
              <div className="flex items-center gap-x-2">
                <label className="w-24">간호사</label>
                <Checkbox
                  checked={checkedList.includes('간호사')}
                  disabled={parts.some((part) => part.name === '간호사')}
                  onClick={() => handleCheckboxToggle('간호사')}
                />
              </div>
              <div className="flex items-center gap-x-2">
                <label className="w-24">간호조무사</label>
                <Checkbox
                  checked={checkedList.includes('간호조무사')}
                  disabled={parts.some((part) => part.name === '간호조무사')}
                  onClick={() => handleCheckboxToggle('간호조무사')}
                />
              </div>
              <div className="flex items-center gap-x-2">
                <label className="w-24">상담</label>
                <Checkbox
                  checked={checkedList.includes('상담')}
                  disabled={parts.some((part) => part.name === '상담')}
                  onClick={() => handleCheckboxToggle('상담')}
                />
              </div>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button type="button" variant="soft" color="gray">
                  취소하기
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button type="button" color="purple" variant="outline" onClick={handleAddPart}>
                  설정하기
                </Button>
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex items-center relative">
          <label
            htmlFor="name"
            className="w-28 text-gray-500 whitespace-nowrap flex items-center gap-x-1"
          >
            직책
            <Tooltip content="직책 작성 시 색상이 자동으로 적용됩니다.">
              <button type="button" aria-label="직책 색상 안내">
                <PiInfo size="20" aria-hidden="true" />
              </button>
            </Tooltip>
          </label>
          <TextField.Root
            id="name"
            placeholder="직책을 입력해주세요."
            size="3"
            radius="none"
            className="w-full"
            {...register('name', { required: true, maxLength: 10 })}
          >
            <div className="absolute right-2 top-[50%] translate-y-[-40%]"></div>
          </TextField.Root>
          <div className="absolute right-2 top-[50%] translate-y-[-40%]">
            <input id="part_color" type="color" {...register('color')} />
          </div>
        </div>
        <div className="flex items-center">
          <label htmlFor="task" className="w-28 text-gray-500 whitespace-nowrap">
            업무
          </label>
          <TextField.Root
            id="task"
            placeholder="업무를 입력해주세요."
            size="3"
            radius="none"
            className="w-full"
            {...register('task', { required: true })}
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="isDoctor" className="w-20 text-gray-500 whitespace-nowrap">
            구분
          </label>
          <RadioGroup.Root
            value={watch('is_doctor') ? 'true' : 'false'}
            name="isDoctor"
            color="violet"
            onValueChange={(newValue) => setValue('is_doctor', newValue === 'true')}
          >
            <div className="flex justify-start gap-4">
              <RadioGroup.Item value="true">의사</RadioGroup.Item>
              <RadioGroup.Item value="false">일반</RadioGroup.Item>
            </div>
          </RadioGroup.Root>
        </div>
        <div className="flex items-center">
          <label htmlFor="requiredCertification" className="w-20 text-gray-500 whitespace-nowrap">
            자격증 필수
          </label>
          <RadioGroup.Root
            value={watch('required_certification') ? 'true' : 'false'}
            name="requiredCertification"
            color="violet"
            onValueChange={(newValue) => setValue('required_certification', newValue === 'true')}
          >
            <div className="flex justify-start gap-8">
              <RadioGroup.Item value="true">Y</RadioGroup.Item>
              <RadioGroup.Item value="false">N</RadioGroup.Item>
            </div>
          </RadioGroup.Root>
        </div>
      </form>
      <div className="flex justify-center gap-x-8 w-full">
        {isEditingMode && (
          <Button
            type="button"
            onClick={handleClickCancel}
            variant="solid"
            size="3"
            radius="small"
            className="flex w-[40%] h-10 justify-items-center mt-40 mb-10 bg-gray-500 cursor-pointer hover:bg-opacity-90 disabled:bg-gray-200 disabled:text-gray-30 disabled:cursor-default"
          >
            취소
          </Button>
        )}
        <Button
          type="submit"
          variant="solid"
          size="3"
          radius="small"
          disabled={!isEditingMode && !isFormValid()}
          className="flex w-[40%] h-10 justify-items-center mt-40 mb-10 bg-indigo-950 cursor-pointer hover:bg-opacity-90 disabled:bg-gray-200 disabled:text-gray-30 disabled:cursor-default"
        >
          {isEditingMode ? '수정하기' : '추가하기'}
        </Button>
      </div>
    </div>
  );
}
