import Title from '@/components/Common/Title';
import { Txt } from '@/components/Common/Txt';
import { PICK_COLORS } from '@/constants/pickColors';
import { Button, RadioGroup, Select, TextField } from '@radix-ui/themes';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

export default function WorkingSettingPartForm() {
  const { control, formState, handleSubmit, watch } = useForm({
    defaultValues: {
      position: '',
      positionColor: PICK_COLORS[0].color,
      tasks: '',
      division: '의사',
      isCertificated: false,
    },
  });

  const onSubmitSettingPart = () => {
    console.log('onSubmitSettingPart');
  };

  useEffect(() => {
    const position = watch('isCertificated');
    console.log(position);
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
          <label htmlFor="position" className="w-28 text-gray-500 whitespace-nowrap">
            직책
          </label>
          <Controller
            control={control}
            name="position"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextField.Root
                id="position"
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
              </TextField.Root>
            )}
          />
          <Controller
            control={control}
            name="positionColor"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Select.Root value={value} onValueChange={onChange} size="3">
                <div className="inline absolute right-3 border pt-1 px-1">
                  <Select.Trigger
                    radius="none"
                    className="w-[50px] h-[20px] outline-none none-rt"
                    style={{ backgroundColor: value }}
                  />
                  <Select.Content style={{ color: value }}>
                    {PICK_COLORS.map(({ title, color }) => (
                      <Select.Item key={color} value={color}>
                        <div className="flex items-center gap-2" style={{ color: color }}>
                          <p>{title}</p>
                          <div
                            className={`${color}`}
                            style={{ width: 50, height: 20, backgroundColor: color }}
                          ></div>
                        </div>
                      </Select.Item>
                    ))}
                  </Select.Content>
                </div>
              </Select.Root>
            )}
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="tasks" className="w-28 text-gray-500 whitespace-nowrap">
            업무
          </label>
          <Controller
            control={control}
            name="tasks"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextField.Root
                id="tasks"
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
          <label htmlFor="division" className="w-20 text-gray-500 whitespace-nowrap">
            구분
          </label>
          <Controller
            control={control}
            name="division"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <RadioGroup.Root
                defaultValue={value}
                onValueChange={onChange}
                name="division"
                color="violet"
              >
                <div className="flex justify-start gap-4">
                  <RadioGroup.Item value="의사">의사</RadioGroup.Item>
                  <RadioGroup.Item value="일반">일반</RadioGroup.Item>
                </div>
              </RadioGroup.Root>
            )}
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="isCertificated" className="w-20 text-gray-500 whitespace-nowrap">
            구분
          </label>
          <Controller
            control={control}
            name="isCertificated"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <RadioGroup.Root
                defaultValue={value ? 'true' : 'false'}
                onValueChange={(newValue) => onChange(newValue === 'true')}
                name="isCertificated"
                color="violet"
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
          // disabled={!isFormValid()}
          className="flex w-40 h-10 justify-items-center mt-40 mb-10 bg-indigo-950 cursor-pointer hover:bg-opacity-90 disabled:bg-gray-10 disabled:text-gray-30 disabled:cursor-default"
        >
          저장하기
        </Button>
      </div>
    </div>
  );
}
