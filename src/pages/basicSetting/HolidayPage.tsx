import DragContainer from '@/components/BasicSetting/holidaySetting/DragContainer';
import HolidayAutoSetGroups from '@/components/BasicSetting/holidaySetting/HolidayAutoSetGroups';
import HolidaySettingForm from '@/components/BasicSetting/holidaySetting/HolidaySettingForm';
import HolidaySettingItem from '@/components/BasicSetting/holidaySetting/HolidaySettingItem';
import Title from '@/components/Common/Title';
import { Txt } from '@/components/Common/Txt';
import { useGetLeaveCategories } from '@/hooks/apis/useLeaveCategories';
import { useGetParts } from '@/hooks/apis/useParts';
import { ILeaveCategory } from '@/models/leave-categories.model';
import { Button, Select } from '@radix-ui/themes';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiEquals, PiGear } from 'react-icons/pi';

// TODO: API 응답 값으로 변경
const OPTIONS: { id: number; branch: string }[] = [
  { id: 1, branch: '뮤즈의원(다산점)' },
  { id: 2, branch: '뮤즈의원(강남점)' },
];

export default function HolidayPage() {
  const { data: parts } = useGetParts(1);

  const { data: leaveCategories } = useGetLeaveCategories(3);

  const [isEditingMode, setIsEditingMode] = useState(false);
  const [currentBranch, setCurrentBranch] = useState(OPTIONS[0].branch);

  const {
    formState: holidayFormState,
    handleSubmit: holidayHandleSubmit,
    control,
    reset,
    setValue,
    register,
    watch,
  } = useForm<ILeaveCategory>({
    defaultValues: {
      leave_category: {
        id: 0,
        name: '',
        leave_count: 0,
        is_paid: true,
        is_leave_of_absence: false,
      },
      excluded_parts: [],
    },
  });

  const handleClickEditMode = (boolean: boolean) => {
    setIsEditingMode(boolean);
  };

  const handleChangeBranch = (branch: string) => {
    setCurrentBranch(branch);
  };

  return (
    <main className="w-full mx-auto flex p-5 gap-x-2 overflow-x-auto">
      <section className="bg-white border min-w-[600px] overflow-y-scroll h-screen">
        <div className="flex items-center justify-between gap-x-8 px-10 py-5 sticky top-0 left-0 z-[2] bg-white border-b">
          <Title content="지점명" />

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
        </div>
        <div className="p-6 flex flex-col gap-y-3">
          {leaveCategories &&
            !!leaveCategories.length &&
            leaveCategories.map(({ leave_category, excluded_parts }) => (
              <HolidaySettingItem
                key={leave_category.id}
                leave_category={leave_category}
                excluded_parts={excluded_parts.map(({ id, ...rest }) => ({ id, ...rest }))}
                onChangeEditMode={handleClickEditMode}
                setValue={setValue}
              />
            ))}
          <div>옵저브</div>
        </div>
      </section>

      {/* 연차 추가하기 분리 */}
      <section className="flex flex-col gap-y-4 min-w-[540px] h-full">
        <div className="border bg-white">
          <HolidaySettingForm
            handleSubmit={holidayHandleSubmit}
            onChangeEditMode={handleClickEditMode}
            setValue={setValue}
            register={register}
            reset={reset}
            watch={watch}
            control={control}
            formState={holidayFormState}
            isEditingMode={isEditingMode}
            parts={parts}
          />
        </div>
        <div className="border bg-white grow">
          <HolidayAutoSetGroups />
        </div>
      </section>

      {/* 연차 자동 부여 분리 */}
      <section className="flex-[0.7] bg-white border min-w-[460px]">
        <div className="flex items-center justify-between whitespace-nowrap gap-x-8 px-10 py-5 sticky top-0 left-0 z-[2] bg-white border-b">
          <Title content="연차 자동 부여" />
          <div className="flex items-center gap-x-2">
            <Button className="flex items-center gap-x-2" variant="outline" color="gray">
              <PiGear />
              <Txt variant="button">수동부여</Txt>
            </Button>
            <Button className="flex items-center gap-x-2" variant="outline" color="gray">
              <PiEquals />
              <Txt variant="button">변경로그</Txt>
            </Button>
          </div>
        </div>
        <DragContainer />
      </section>
    </main>
  );
}
