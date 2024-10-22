import { Dialog } from '@radix-ui/themes';
import { FormProvider, useForm } from 'react-hook-form';

import Input from '@/components/Common/Input';
import { Txt } from '@/components/Common/Txt';

interface ICertificationManagementDialogProps {
  id: number;
  name: string;
  part: string;
  applyUse: string;
}

interface IFormData {
  name: string;
  position: string;
  email: string;
  birthDate: string;
  gender: 'male' | 'female';
  purpose: string;
}

export default function CertificationManagementDialog({
  id,
  name,
  part,
  applyUse,
}: ICertificationManagementDialogProps) {
  // TODO : 내부에 증명서 파일과, 양식에 맞는 데이터 입력을 받고 승인 버튼을 통해 출력
  const methods = useForm<IFormData>();

  const onSubmit = (data: IFormData) => {
    console.log(data);
  };

  return (
    <div className="w-full h-full">
      <Dialog.Title key={id}>승인 확인</Dialog.Title>
      <Dialog.Description>
        <div className="flex flex-row gap-2">
          <FormProvider {...methods}>
            <form
              className="flex flex-col w-1/3 p-2 bg-gray-10 space-y-4"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <div className="flex items-center gap-4">
                <Txt className="w-24">이름</Txt>
                <Input {...methods.register('name')} placeholder={name} className="flex-1" />
              </div>

              <div className="flex items-center gap-4">
                <Txt className="w-24">직위</Txt>
                <Input {...methods.register('position')} placeholder={part} className="flex-1" />
              </div>

              <div className="flex items-center gap-4">
                <Txt className="w-24">이메일</Txt>
                <Input
                  {...methods.register('email')}
                  placeholder="이메일"
                  type="email"
                  className="flex-1"
                />
              </div>

              <div className="flex items-center gap-4">
                <Txt className="w-24">생년월일 / 성별</Txt>
                <div className="flex flex-1 space-x-3">
                  <Input
                    {...methods.register('birthDate')}
                    placeholder="생년월일"
                    type="date"
                    className="flex-1"
                  />
                  <div className="flex items-center space-x-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        {...methods.register('gender')}
                        value="male"
                        className="mr-1"
                      />
                      <span>남</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        {...methods.register('gender')}
                        value="female"
                        className="mr-1"
                      />
                      <span>여</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Txt className="w-24">용도</Txt>
                <Input {...methods.register('purpose')} placeholder={applyUse} className="flex-1" />
              </div>
            </form>
          </FormProvider>
          <div className="flex items-center justify-center w-2/3 h-[80vh] bg-gray-10">
            인쇄 문서 미리보기
          </div>
        </div>
      </Dialog.Description>
      {/* 추가 내용 및 버튼 */}
    </div>
  );
}
