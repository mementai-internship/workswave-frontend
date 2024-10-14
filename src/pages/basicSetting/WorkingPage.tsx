import WorkingSettingAutoOT from '@/components/BasicSetting/WorkingSetting/SetAutoOT';
import WorkingSettingHoliday from '@/components/BasicSetting/WorkingSetting/SetHoliday';
import WorkingSettingIP from '@/components/BasicSetting/WorkingSetting/SetIP';
import WorkingSettingOT from '@/components/BasicSetting/WorkingSetting/SetOT';
import WorkingSettingSetPart from '@/components/BasicSetting/WorkingSetting/SetPart/SetPart';
import WorkingSettingWeekendSalary from '@/components/BasicSetting/WorkingSetting/SetWeekendSalary';
import WorkingSettingTitle from '@/components/BasicSetting/WorkingSetting/WorkingSettingTitle';
import WorkingSettingBasicSalary from '@/components/BasicSetting/WorkingSetting/setBasicSalary';
import WorkingSettingBasicWork from '@/components/BasicSetting/WorkingSetting/setBasicWork';
import Title from '@/components/Common/Title';
import { Txt } from '@/components/Common/Txt';
import { Button, Select } from '@radix-ui/themes';
import { useState } from 'react';
import { PiCheckBold } from 'react-icons/pi';

// TODO: API 응답 값으로 변경
const OPTIONS: { id: number; branch: string }[] = [
  { id: 1, branch: '뮤즈의원(다산점)' },
  { id: 2, branch: '뮤즈의원(강남점)' },
];

export default function WorkingSettingPage() {
  const [currentBranch, setCurrentBranch] = useState(OPTIONS[0].branch);

  const handleChangeBranch = (branch: string) => {
    setCurrentBranch(branch);
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
          title="출퇴근설정"
          content="출퇴근 가능 아이피 및 사용여부를 설정하실 수 있습니다."
        >
          <div className="h-[200px]">
            <WorkingSettingIP />
          </div>
        </WorkingSettingTitle>
        <WorkingSettingTitle
          title="O.T 설정"
          content="의사 및 직원의 연장근무 설정하실 수 있습니다."
        >
          <WorkingSettingOT />
        </WorkingSettingTitle>
        <WorkingSettingTitle
          title="O.T 자동승인 설정"
          content="의사 및 직원의 연장근무신청 여부를 수동 및 자동으로 설정하실 수 있습니다."
        >
          <WorkingSettingAutoOT />
        </WorkingSettingTitle>
        <WorkingSettingTitle title="휴일근무 설정" content="휴일근무 사용 여부를 설정합니다.">
          <WorkingSettingHoliday />
        </WorkingSettingTitle>

        <WorkingSettingTitle
          title="주말근무수당 설정"
          content="의사 및 직원의 주말근무수당을 설정하실 수 있습니다."
        >
          <WorkingSettingWeekendSalary />
        </WorkingSettingTitle>
        <WorkingSettingTitle title="근로기본 설정" content="휴일근무 사용 여부를 설정합니다.">
          <WorkingSettingBasicWork />
        </WorkingSettingTitle>
        <WorkingSettingTitle
          title="임금 기본설정"
          content="수당 별 사용 여부를 설정하실 수 있습니다."
        >
          <WorkingSettingBasicSalary />
        </WorkingSettingTitle>
      </section>
    </main>
  );
}
