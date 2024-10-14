import Badge from '@/components/Common/LabelBadge';
import Title from '@/components/Common/Title';
import { Txt } from '@/components/Common/Txt';
import { IWorkingSettingPartForm } from '@/models/workingSetting.model';
import { adaptTaskToColor } from '@/utils/adaptTaskToColor';
import { Button, RadioGroup, TextField, Tooltip } from '@radix-ui/themes';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { PiInfo } from 'react-icons/pi';

export default function WorkingSettingPartForm() {
  const { control, formState, handleSubmit } = useForm<IWorkingSettingPartForm>({
    defaultValues: {
      id: 0,
      name: '',
      task: '',
      is_doctor: false,
      required_certification: false,
    },
  });

  const onSubmitSettingPart = (data: IWorkingSettingPartForm) => {
    // 요청 보내기
    return data;
  };

  const isFormValid = useCallback(() => {
    const { name, task } = formState.dirtyFields;
    return name && task;
  }, [formState]);

  return (
    <div className="flex flex-col gap-y-4 bg-gray-10 min-w-[400px] max-w-[500px] px-6 py-5">
      <div className="flex justify-between items-center">
        <Title content="근무일정 추가하기" />
        <Button
          variant="solid"
          className="px-4 bg-white text-gray-50 cursor-pointer hover:bg-gray-300"
        >
          <Txt variant="button">간편추가</Txt>
        </Button>
      </div>
      <div className="flex flex-col gap-5">
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
          <Controller
            control={control}
            name="name"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextField.Root
                id="name"
                placeholder="직책을 입력해주세요."
                size="3"
                radius="none"
                className="w-full"
                value={value}
                onChange={onChange}
                required
                maxLength={10}
              >
                <TextField.Slot px="1"></TextField.Slot>
                <div className="absolute right-2 top-[50%] translate-y-[-40%]">
                  {value && <Badge color={adaptTaskToColor(value)} text="" size={3} />}
                </div>
              </TextField.Root>
            )}
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="task" className="w-28 text-gray-500 whitespace-nowrap">
            업무
          </label>
          <Controller
            control={control}
            name="task"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextField.Root
                id="task"
                placeholder="업무를 입력해주세요."
                size="3"
                radius="none"
                className="w-full"
                value={value}
                onChange={onChange}
                required
              >
                <TextField.Slot px="1"></TextField.Slot>
              </TextField.Root>
            )}
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="isDoctor" className="w-20 text-gray-500 whitespace-nowrap">
            구분
          </label>
          <Controller
            control={control}
            name="is_doctor"
            render={({ field: { value, onChange } }) => (
              <RadioGroup.Root
                value={value ? 'true' : 'false'}
                name="isDoctor"
                color="violet"
                onValueChange={(newValue) => onChange(newValue === 'true')}
              >
                <div className="flex justify-start gap-4">
                  <RadioGroup.Item value="true">의사</RadioGroup.Item>
                  <RadioGroup.Item value="false">일반</RadioGroup.Item>
                </div>
              </RadioGroup.Root>
            )}
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="requiredCertification" className="w-20 text-gray-500 whitespace-nowrap">
            자격증 필수
          </label>
          <Controller
            control={control}
            name="required_certification"
            render={({ field: { value, onChange } }) => (
              <RadioGroup.Root
                value={value ? 'true' : 'false'}
                name="requiredCertification"
                color="violet"
                onValueChange={(newValue) => onChange(newValue === 'true')}
              >
                <div className="flex justify-start gap-8">
                  <RadioGroup.Item value="true">Y</RadioGroup.Item>
                  <RadioGroup.Item value="false">N</RadioGroup.Item>
                </div>
              </RadioGroup.Root>
            )}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          onClick={handleSubmit(onSubmitSettingPart)}
          variant="solid"
          size="3"
          radius="small"
          disabled={!isFormValid()}
          className="flex w-40 h-10 justify-items-center mt-40 mb-10 bg-indigo-950 cursor-pointer hover:bg-opacity-90 disabled:bg-gray-200 disabled:text-gray-30 disabled:cursor-default"
        >
          저장하기
        </Button>
      </div>
    </div>
  );
}
