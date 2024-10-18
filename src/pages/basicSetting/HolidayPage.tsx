import { Button, Select } from '@radix-ui/themes';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiEquals, PiGear } from 'react-icons/pi';

import DayOffAutoSetGroups from '@/components/BasicSetting/DayOffSetting/DayOffAutoSetGroups';
import DayOffSettingForm from '@/components/BasicSetting/DayOffSetting/DayOffSettingForm';
import DayOffSettingItem from '@/components/BasicSetting/DayOffSetting/DayOffSettingItem';
import DragContainer from '@/components/BasicSetting/DayOffSetting/DragContainer';
import Title from '@/components/Common/Title';
import { Txt } from '@/components/Common/Txt';
import { useGetBranches } from '@/hooks/apis/useBranches';
import { useGetLeaveCategories } from '@/hooks/apis/useLeaveCategories';
import { useGetParts } from '@/hooks/apis/useParts';
import { ILeaveCategory } from '@/models/leave-categories.model';

export default function HolidayPage() {
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [currentBranch, setCurrentBranch] = useState({ id: null, name: '' });

  const { data } = useGetBranches('0');
  const branches = data?.list;
  const { data: parts } = useGetParts(currentBranch.id);
  const { data: leaveCategories } = useGetLeaveCategories(currentBranch.id);

  const {
    formState: holidayFormState,
    handleSubmit: holidayHandleSubmit,
    control: holidayFormControl,
    reset: holidayFormReset,
    setValue: holidayFormSetValue,
    register: holidayFormRegister,
    watch: holidayFormWatch,
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

  const handleChangeBranch = (branchId: string) => {
    const selectedBranch = branches?.find((branch) => branch.id.toString() === branchId);
    setCurrentBranch({ ...selectedBranch, id: selectedBranch.id, name: selectedBranch.name });
  };

  return (
    <main className="w-full mx-auto flex p-5 gap-x-2 overflow-x-auto">
      <section className="bg-white border min-w-[600px] overflow-y-scroll h-[calc(100vh-100px)]">
        <div className="flex items-center justify-between gap-x-8 px-10 py-5 sticky top-0 left-0 z-[2] bg-white border-b">
          <Title content="지점명" />
          {branches && branches.length > 1 ? (
            <div className="flex-1">
              <Select.Root
                value={currentBranch.id?.toString() || ''}
                onValueChange={(branch) => handleChangeBranch(branch)}
                size="3"
              >
                <Select.Trigger
                  variant="ghost"
                  className="text-xl font-bold"
                  placeholder="지점 선택"
                />
                <Select.Content>
                  <Select.Group className="p-2">
                    {branches.map(({ id, name }) => (
                      <Select.Item key={id} value={id.toString()}>
                        {name}
                      </Select.Item>
                    ))}
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </div>
          ) : (
            <div className="flex-1">
              <Txt variant="h5">{currentBranch.name}</Txt>
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col gap-y-3">
          {leaveCategories && !!leaveCategories.length ? (
            leaveCategories.map(({ leave_category, excluded_parts }) => (
              <DayOffSettingItem
                key={leave_category.id}
                leave_category={leave_category}
                excluded_parts={excluded_parts}
                onChangeEditMode={handleClickEditMode}
                setValue={holidayFormSetValue}
                branch_id={currentBranch.id}
              />
            ))
          ) : (
            <div className="flex justify-center items-center">
              <Txt variant="h5">데이터가 없습니다. </Txt>
            </div>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-y-4 min-w-[540px] h-[calc(100vh-100px)] overflow-y-scroll">
        <div className="border bg-white">
          <DayOffSettingForm
            handleSubmit={holidayHandleSubmit}
            onChangeEditMode={handleClickEditMode}
            setValue={holidayFormSetValue}
            register={holidayFormRegister}
            reset={holidayFormReset}
            watch={holidayFormWatch}
            control={holidayFormControl}
            formState={holidayFormState}
            isEditingMode={isEditingMode}
            parts={parts}
            branch_id={currentBranch.id}
          />
        </div>
        <div className="border bg-white grow">
          <DayOffAutoSetGroups />
        </div>
      </section>

      <section className="flex-[0.7] bg-white border min-w-[460px] overflow-y-scroll h-[calc(100vh-100px)]">
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
        <div className="flex justify-center mb-10">
          <Button variant="outline" color="purple" size="3" className="w-32 cursor-pointer">
            저장하기
          </Button>
        </div>
      </section>
    </main>
  );
}
