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
import { IWorkingSettingBranchResponse } from '@/models/workingSetting.model';
import { Button, Select } from '@radix-ui/themes';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiCheckBold } from 'react-icons/pi';
import { useSearchParams } from 'react-router-dom';

// TODO: API 응답 값으로 변경
const OPTIONS: { id: number; name: string }[] = [
  { id: 1, name: '뮤즈의원(다산점)' },
  { id: 2, name: '뮤즈의원(강남점)' },
];

export default function WorkingSettingPage() {
  const [currentBranch, setCurrentBranch] = useState(OPTIONS[0]);

  const [searchParams, setSearchParams] = useSearchParams();

  //MSO 일 때 branch 변경하는 로직 및 브랜치 변경했을 때 새로운 요청 보내는 로직

  const currentTime = dayjs().format('HH:mm');

  const {
    register: branchRegister,
    setValue: setBranchValue,
    // getValues: getBranchValues,
    watch: branchWatch,
    control: branchControl,
  } = useForm<IWorkingSettingBranchResponse>({
    defaultValues: {
      ot: {
        doctor_ot_30: 0,
        doctor_ot_60: 0,
        doctor_ot_90: 0,
        doctor_ot_120: 0,
        common_ot_30: 0,
        common_ot_60: 0,
        common_ot_90: 0,
        common_ot_120: 0,
      },
      auto_ot: {
        top_manager_auto_applied: false,
        manager_auto_applied: false,
        employee_auto_applied: false,
      },
      basic_work: {
        weekly_work_days: 0,
        weekday_start_time: currentTime,
        weekday_end_time: currentTime,
        weekday_is_holiday: false,
        saturday_start_time: currentTime,
        saturday_end_time: currentTime,
        saturday_is_holiday: false,
        sunday_start_time: currentTime,
        sunday_end_time: currentTime,
        sunday_is_holiday: false,
        doctor_lunch_start_time: currentTime,
        doctor_lunch_end_time: currentTime,
        common_lunch_start_time: currentTime,
        common_lunch_end_time: currentTime,
      },
      do_holiday_work: false,
      doctor_holiday_work_pay: 0,
      common_holiday_work_pay: 0,
      comprehensive_overtime: false,
      annual_leave: false,
      holiday_work: false,
      job_duty: false,
      meal: false,
    },
  });

  const handleChangeBranch = (branchId: string) => {
    const selectedBranch = OPTIONS.find((branch) => branch.id.toString() === branchId);
    setCurrentBranch(selectedBranch);
    setSearchParams({ ...searchParams, branch_id: branchId.toString() });
  };

  return (
    <main className="w-full mx-auto flex p-5 gap-x-2">
      {/* 1280px 이하 버전 */}
      <section className="w-full bg-white border">
        <div className="flex items-center justify-between gap-x-8 px-10 py-5 sticky top-0 left-0 z-[2] bg-white border-b">
          <Title content="지점명" />

          {OPTIONS.length > 1 ? (
            <div className="flex-1">
              <Select.Root
                defaultValue={currentBranch.name}
                onValueChange={(val) => handleChangeBranch(val)}
                size="3"
              >
                <Select.Trigger variant="ghost" className="text-xl font-bold" />
                <Select.Content>
                  <Select.Group className="p-2">
                    {OPTIONS.map((branch) => (
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
        >
          <WorkingSettingSetPart />
        </WorkingSettingTitle>

        <WorkingSettingTitle
          title="O.T 설정"
          content="의사 및 직원의 연장근무 임금을 설정하실 수 있습니다."
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
        >
          <WorkingSettingAutoOT
            register={branchRegister}
            setValue={setBranchValue}
            watch={branchWatch}
          />
        </WorkingSettingTitle>

        <WorkingSettingTitle title="휴일근무 설정" content="휴일근무 사용 여부를 설정합니다.">
          <WorkingSettingHoliday
            register={branchRegister}
            setValue={setBranchValue}
            watch={branchWatch}
          />
        </WorkingSettingTitle>

        <WorkingSettingTitle
          title="주말근무수당 설정"
          content="의사 및 직원의 주말근무수당을 설정하실 수 있습니다."
        >
          <WorkingSettingWeekendSalary
            register={branchRegister}
            setValue={setBranchValue}
            watch={branchWatch}
          />
        </WorkingSettingTitle>

        <WorkingSettingTitle title="근로기본 설정" content="휴일근무 사용 여부를 설정합니다.">
          <WorkingSettingBasicWork
            register={branchRegister}
            setValue={setBranchValue}
            control={branchControl}
          />
        </WorkingSettingTitle>

        <WorkingSettingTitle
          title="임금 기본설정"
          content="수당 별 사용 여부를 설정하실 수 있습니다."
        >
          <WorkingSettingBasicSalary control={branchControl} />
        </WorkingSettingTitle>
      </section>
    </main>
  );
}
