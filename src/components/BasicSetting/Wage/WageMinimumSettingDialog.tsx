import { Button, Dialog, TextField } from '@radix-ui/themes';
import dayjs from 'dayjs';
import { Controller, useForm } from 'react-hook-form';
import { PiGear } from 'react-icons/pi';

import { Txt } from '@/components/Common/Txt';

// 디비 스키마에 맞춰서 변경되어야합니다.
interface IWageMinimumSettingForm {
  minimum_wage: number;
  last_save: string;
  person_in_charge: string;
}

export default function WageMinimumSettingDialog() {
  // 최저임금설정 정보 가져오는 로직
  const MOCK_DATA = {
    minimum_hourly_rate: 9860,
    last_save: '2024-06-28T00:00:00',
    charger: '김동원',
  };

  // 기본값 설정
  const { control, handleSubmit } = useForm<IWageMinimumSettingForm>({
    defaultValues: {
      minimum_wage: 9860,
      last_save: '2024-06-28T00:00:00',
      person_in_charge: '김동원',
    },
  });

  const onSubmit = handleSubmit((data: IWageMinimumSettingForm) => {
    console.log(data);
    // 데이터를 전송하고 나면, 새로운 데이터를 패칭해와야합니다.
  });

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button color="gray" variant="outline">
          <PiGear />
          최저임금설정
        </Button>
      </Dialog.Trigger>
      <Dialog.Content size="3" maxWidth="400px">
        <Dialog.Title className="absolute t-0 l-0 text-transparent">최저임금설정</Dialog.Title>
        <div className="flex gap-1 pb-4 border-b border-b-zinc-300 items-center">
          <Txt variant="h4">상세설정</Txt>
          <Txt color="gray-50">전지점 공통입니다.</Txt>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col items-center py-6">
          <div className="flex gap-3 items-center">
            <Txt variant="h6">최저임금설정</Txt>
            <Controller
              name="minimum_wage"
              control={control}
              render={({ field: { value, onChange } }) => (
                <TextField.Root value={value} onChange={onChange} />
              )}
            />
            <Txt>원</Txt>
          </div>

          <div className="py-8">
            <div className="flex items-center gap-3">
              <Txt className="w-20" color="gray-50">
                최종 저장일
              </Txt>
              {/* 최종 저장일은 디비에서 가져온 값으로 설정 */}
              <Txt color="gray-50">{dayjs(MOCK_DATA.last_save).format('YYYY-MM-DD')}</Txt>
            </div>
            <div className="flex items-center gap-3">
              <Txt className="w-20" color="gray-50">
                담당자
              </Txt>
              <Controller
                name="person_in_charge"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextField.Root
                    className="text-gray-50"
                    value={value}
                    onChange={onChange}
                    style={{ border: 'none' }}
                  />
                )}
              />
            </div>
          </div>
          <Button size="3" className="bg-black">
            저장하기
          </Button>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}
