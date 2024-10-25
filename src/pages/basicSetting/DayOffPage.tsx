import { Button, Select, Spinner } from '@radix-ui/themes';
import { useEffect, useState } from 'react';
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
import { useGetLeavePolicies } from '@/hooks/apis/useLeavePolicies';
import { useGetParts } from '@/hooks/apis/useParts';
import { ILeaveCategory } from '@/models/leave-categories.model';
import { ILeavePolicy } from '@/models/leave-policies.model';

export default function DayOffPage() {
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [currentBranch, setCurrentBranch] = useState({ id: null, name: '' });

  const { data } = useGetBranches('0');
  const branches = data?.list;
  const { data: parts } = useGetParts(currentBranch.id);
  const { data: leaveCategories, isFetching } = useGetLeaveCategories(currentBranch.id);
  const { data: leavePolicies } = useGetLeavePolicies(currentBranch.id);

  const handleClickEditMode = (boolean: boolean) => {
    setIsEditingMode(boolean);
  };

  const handleChangeBranch = (branchId: string) => {
    const selectedBranch = branches?.find((branch) => branch.id.toString() === branchId);
    setCurrentBranch({ ...selectedBranch, id: selectedBranch.id, name: selectedBranch.name });
  };

  const {
    formState: leaveCategoryFormState,
    handleSubmit: leaveCategoryHandleSubmit,
    control: leaveCategoryFormControl,
    reset: leaveCategoryFormReset,
    setValue: leaveCategoryFormSetValue,
    register: leaveCategoryFormRegister,
    watch: leaveCategoryFormWatch,
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

  const {
    reset: leavePolicyReset,
    watch: leavePolicyWatch,
    handleSubmit: leavePolicyHandleSubmit,
    register: leavePolicyRegister,
    setValue: leavePolicySetValue,
  } = useForm<ILeavePolicy>({
    defaultValues: {
      auto_approval_policies: {
        top_auto_approval: true,
        total_auto_approval: true,
        part_auto_approval: true,
      },
      account_based_policies: {
        categoryId: 'account_based_policies',
        category: '회계 기준',
        account_based_january_1st: '초기화',
        account_based_less_than_year: '당해년도 일괄 부여',
        account_based_decimal_point: '올림',
        part_ids: [],
      },
      entry_date_based_policies: {
        categoryId: 'entry_date_based_policies',
        category: '입사일 기준',
        entry_date_based_remaining_leave: '초기화',
        part_ids: [],
      },
      condition_based_policies: {
        categoryId: 'condition_based_policies',
        category: '조건 기준',
        condition_based_month: 12,
        condition_based_cnt: 1,
        condition_based_type: '월',
        part_ids: [],
      },
      manual_based_parts: {
        categoryId: 'manual_based_parts',
        category: '수동부여',
        part_ids: [],
      },
    },
  });

  useEffect(() => {
    if (currentBranch.id && leavePolicies) {
      // manual_based_parts 처리
      if (leavePolicies.manual_based_parts) {
        leavePolicySetValue('manual_based_parts', {
          categoryId: 'manual_based_parts',
          category: '수동부여',
          part_ids: leavePolicies.manual_based_parts.map((item) => ({
            id: item.id,
            name: item.name,
            isGhosting: false,
          })),
        });
      }

      if (leavePolicies.auto_approval_policies) {
        leavePolicySetValue('auto_approval_policies', leavePolicies.auto_approval_policies);
      }

      if (leavePolicies.account_based_policies) {
        leavePolicySetValue('account_based_policies', {
          ...leavePolicies.account_based_policies,
          categoryId: 'account_based_policies',
          category: '회계 기준',
        });
      }

      if (leavePolicies.entry_date_based_policies) {
        leavePolicySetValue('entry_date_based_policies', {
          ...leavePolicies.entry_date_based_policies,
          categoryId: 'entry_date_based_policies',
          category: '입사일 기준',
        });
      }

      if (leavePolicies.condition_based_policies) {
        leavePolicySetValue('condition_based_policies', {
          ...leavePolicies.condition_based_policies,
          categoryId: 'condition_based_policies',
          category: '조건 기준',
        });
      }
    }
  }, [currentBranch.id, leavePolicies, leavePolicySetValue]);

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
          {isFetching ? (
            <div className="flex justify-center items-center">
              <Spinner size="3" />
            </div>
          ) : leaveCategories && !!leaveCategories.length ? (
            leaveCategories.map(({ leave_category, excluded_parts }) => (
              <DayOffSettingItem
                key={leave_category.id}
                leave_category={leave_category}
                excluded_parts={excluded_parts}
                onChangeEditMode={handleClickEditMode}
                setValue={leaveCategoryFormSetValue}
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
            handleSubmit={leaveCategoryHandleSubmit}
            onChangeEditMode={handleClickEditMode}
            setValue={leaveCategoryFormSetValue}
            register={leaveCategoryFormRegister}
            reset={leaveCategoryFormReset}
            watch={leaveCategoryFormWatch}
            control={leaveCategoryFormControl}
            formState={leaveCategoryFormState}
            isEditingMode={isEditingMode}
            parts={parts}
            branch_id={currentBranch.id}
          />
        </div>
        <div className="border bg-white grow">
          <DayOffAutoSetGroups setValue={leavePolicySetValue} watch={leavePolicyWatch} />
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
        <DragContainer
          branchId={currentBranch.id}
          watch={leavePolicyWatch}
          reset={leavePolicyReset}
          register={leavePolicyRegister}
          setValue={leavePolicySetValue}
          handleSubmit={leavePolicyHandleSubmit}
        />
      </section>
    </main>
  );
}
