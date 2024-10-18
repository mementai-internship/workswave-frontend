import { Button, Select } from '@radix-ui/themes';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiCheckBold } from 'react-icons/pi';

import WorkingSettingAutoOT from '@/components/BasicSetting/WorkingSetting/SetAutoOT';
import WorkingSettingBasicSalary from '@/components/BasicSetting/WorkingSetting/SetBasicSalary';
import WorkingSettingBasicWork from '@/components/BasicSetting/WorkingSetting/SetBasicWork';
import WorkingSettingHoliday from '@/components/BasicSetting/WorkingSetting/SetHoliday';
import WorkingSettingOT from '@/components/BasicSetting/WorkingSetting/SetOT';
import WorkingSettingSetPart from '@/components/BasicSetting/WorkingSetting/SetPart/SetPart';
import WorkingSettingWeekendSalary from '@/components/BasicSetting/WorkingSetting/SetWeekendSalary';
import WorkingSettingTitle from '@/components/BasicSetting/WorkingSetting/WorkingSettingTitle';
import Title from '@/components/Common/Title';
import { Txt } from '@/components/Common/Txt';
import { useGetAllBranches } from '@/hooks/apis/useBranches';
import { useGetWorkPolicies, usePatchWorkPolicies } from '@/hooks/apis/useWorkPolicies';
import { IWorkPolicies } from '@/models/work-policies';

export default function WorkingSettingPage() {
  const { data: branches } = useGetAllBranches();

  const [currentBranch, setCurrentBranch] = useState({ id: null, name: '' });

  const {
    register: branchRegister,
    setValue: setBranchValue,
    watch: branchWatch,
    control: branchControl,
    handleSubmit,
  } = useForm<IWorkPolicies>({
    defaultValues: {
      overtime_policies: {
        doctor_ot_30: 0,
        doctor_ot_60: 0,
        doctor_ot_90: 0,
        doctor_ot_120: 0,
        common_ot_30: 0,
        common_ot_60: 0,
        common_ot_90: 0,
        common_ot_120: 0,
      },
      auto_overtime_policies: {
        top_manager_auto_applied: false,
        manager_auto_applied: false,
        employee_auto_applied: false,
      },
      work_policies: {
        weekly_work_days: 0,
        weekday_start_time: '',
        weekday_end_time: '',
        weekday_is_holiday: false,
        saturday_start_time: '',
        saturday_end_time: '',
        saturday_is_holiday: false,
        sunday_start_time: '',
        sunday_end_time: '',
        sunday_is_holiday: false,
        doctor_lunch_start_time: '',
        doctor_lunch_end_time: '',
        common_lunch_start_time: '',
        common_lunch_end_time: '',
      },
      holiday_allowance_policies: {
        doctor_holiday_work_pay: 0,
        common_holiday_work_pay: 0,
      },
      holiday_work_policies: {
        do_holiday_work: false,
      },
      default_allowance_policies: {
        comprehensive_overtime: false,
        annual_leave: false,
        holiday_work: false,
        job_duty: false,
        meal: false,
      },
    },
  });

  const { data: workPolicies, isSuccess: isSuccessWorkPolicies } = useGetWorkPolicies(
    currentBranch.id
  );

  const { mutate: postWorkPolicies } = usePatchWorkPolicies(currentBranch.id);

  useEffect(() => {
    if (isSuccessWorkPolicies) {
      Object.entries(workPolicies).forEach(([key, value]) => {
        setBranchValue(key as keyof IWorkPolicies, value);
      });
    }
  }, [isSuccessWorkPolicies, setBranchValue, workPolicies]);

  const onSubmitWorkPolicies = (data: IWorkPolicies) => {
    postWorkPolicies(data);
  };

  const handleChangeBranch = (branchId: string) => {
    const selectedBranch = branches?.find((branch) => branch.id.toString() === branchId);
    setCurrentBranch({ ...selectedBranch, id: selectedBranch.id, name: selectedBranch.name });
  };

  return (
    <main className="w-full mx-auto flex p-5 gap-x-2">
      {/* 1280px 이하 버전 */}
      <section className="w-full bg-white border">
        <div className="flex items-center justify-between gap-x-8 px-10 py-5 sticky top-0 left-0 z-[2] bg-white border-b">
          <Title content="지점명" />

          {branches && branches.length > 1 ? (
            <div className="flex-1">
              <Select.Root
                value={currentBranch.id?.toString() || ''}
                onValueChange={(val) => handleChangeBranch(val)}
                size="3"
              >
                <Select.Trigger
                  variant="ghost"
                  className="text-xl font-bold"
                  placeholder="지점 선택"
                />
                <Select.Content>
                  <Select.Group className="p-2">
                    {branches.map((branch) => (
                      <Select.Item key={branch.id} value={branch.id.toString()}>
                        {branch.name}
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
          <Button variant="outline" color="gray" className="px-6 cursor-pointer">
            <PiCheckBold />
            <Txt variant="button">기본세팅적용</Txt>
          </Button>
        </div>

        <WorkingSettingTitle
          title="파트설정"
          content="직원들의 파트를 세부적으로 설정 하실 수 있습니다."
          isBranchSelected={!currentBranch.id}
        >
          <WorkingSettingSetPart branchId={currentBranch.id} />
        </WorkingSettingTitle>

        <WorkingSettingTitle
          title="O.T 설정"
          content="의사 및 직원의 연장근무 임금을 설정하실 수 있습니다."
          isBranchSelected={!currentBranch.id}
        >
          <WorkingSettingOT
            register={branchRegister}
            setValue={setBranchValue}
            watch={branchWatch}
          />
        </WorkingSettingTitle>

        <WorkingSettingTitle
          title="O.T 자동승인 설정"
          content="의사 및 직원의 연장근무신청 여부를 수동 및 자동으로 설정하실 수 있습니다."
          isBranchSelected={!currentBranch.id}
        >
          <WorkingSettingAutoOT
            register={branchRegister}
            setValue={setBranchValue}
            watch={branchWatch}
          />
        </WorkingSettingTitle>

        <WorkingSettingTitle
          title="휴일근무 설정"
          content="휴일근무 사용 여부를 설정합니다."
          isBranchSelected={!currentBranch.id}
        >
          <WorkingSettingHoliday
            register={branchRegister}
            setValue={setBranchValue}
            watch={branchWatch}
          />
        </WorkingSettingTitle>

        <WorkingSettingTitle
          title="주말근무수당 설정"
          content="의사 및 직원의 주말근무수당을 설정하실 수 있습니다."
          isBranchSelected={!currentBranch.id}
        >
          <WorkingSettingWeekendSalary
            register={branchRegister}
            setValue={setBranchValue}
            watch={branchWatch}
          />
        </WorkingSettingTitle>

        <WorkingSettingTitle
          title="근로기본 설정"
          content="휴일근무 사용 여부를 설정합니다."
          isBranchSelected={!currentBranch.id}
        >
          <WorkingSettingBasicWork
            register={branchRegister}
            setValue={setBranchValue}
            control={branchControl}
          />
        </WorkingSettingTitle>

        <WorkingSettingTitle
          title="임금 기본설정"
          content="수당 별 사용 여부를 설정하실 수 있습니다."
          isBranchSelected={!currentBranch.id}
        >
          <WorkingSettingBasicSalary
            register={branchRegister}
            watch={branchWatch}
            setValue={setBranchValue}
          />
        </WorkingSettingTitle>
        <div className="flex justify-center my-10">
          <Button
            onClick={handleSubmit(onSubmitWorkPolicies)}
            variant="outline"
            size="3"
            className="flex h-12 px-10 justify-items-center mt-10 mb-10 text-white bg-indigo-950 cursor-pointer hover:bg-opacity-90 "
          >
            저장하기
          </Button>
        </div>
      </section>
    </main>
  );
}
