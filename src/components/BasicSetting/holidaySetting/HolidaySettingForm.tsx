import Title from '@/components/Common/Title';
import { IHolidaySetting } from '@/models/holidaySetting.model';
import { CheckboxGroup, TextField } from '@radix-ui/themes';
import { UseFormRegister } from 'react-hook-form';

interface HolidaySettingFormProps {
  isEditingMode: boolean;
  register: UseFormRegister<IHolidaySetting>;
}

export default function HolidaySettingForm({ isEditingMode, register }: HolidaySettingFormProps) {
  return (
    <>
      <div className="flex items-center gap-x-4 px-10 py-5">
        <Title
          content={`${isEditingMode ? '게시판 카테고리 수정하기' : '게시판 카테고리 추가하기'}`}
        />
      </div>
      <div className="border-t p-10 flex flex-col gap-y-3">
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
              <label>퇴사자 포함</label>
            </div>{' '}
            <div className="flex flex-row items-center justify-center">
              <CheckboxGroup.Item value="1" className="w-8 h-8 border border-gray-50 rounded p-1" />
              <label>퇴사자 포함</label>
            </div>{' '}
            <div className="flex flex-row items-center justify-center">
              <CheckboxGroup.Item value="1" className="w-8 h-8 border border-gray-50 rounded p-1" />
              <label>퇴사자 포함</label>
            </div>{' '}
            <div className="flex flex-row items-center justify-center">
              <CheckboxGroup.Item value="1" className="w-8 h-8 border border-gray-50 rounded p-1" />
              <label>퇴사자 포함</label>
            </div>{' '}
            <div className="flex flex-row items-center justify-center">
              <CheckboxGroup.Item value="1" className="w-8 h-8 border border-gray-50 rounded p-1" />
              <label>퇴사자 포함</label>
            </div>{' '}
            <div className="flex flex-row items-center justify-center">
              <CheckboxGroup.Item value="1" className="w-8 h-8 border border-gray-50 rounded p-1" />
              <label>퇴사자 포함</label>
            </div>{' '}
            <div className="flex flex-row items-center justify-center">
              <CheckboxGroup.Item value="1" className="w-8 h-8 border border-gray-50 rounded p-1" />
              <label>퇴사자 포함</label>
            </div>{' '}
            <div className="flex flex-row items-center justify-center">
              <CheckboxGroup.Item value="1" className="w-8 h-8 border border-gray-50 rounded p-1" />
              <label>퇴사자 포함</label>
            </div>{' '}
            <div className="flex flex-row items-center justify-center">
              <CheckboxGroup.Item value="1" className="w-8 h-8 border border-gray-50 rounded p-1" />
              <label>퇴사자 포함</label>
            </div>
            <div className="flex flex-row items-center justify-center">
              <CheckboxGroup.Item value="2" className="w-8 h-8 border border-gray-50 rounded p-1" />
              <label>휴직자</label>
            </div>
          </CheckboxGroup.Root>
        </div>
      </div>
    </>
  );
}
