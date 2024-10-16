import HolidaySettingList from '@/components/BasicSetting/holidaySetting/HolidaySettingList';
import Title from '@/components/Common/Title';
import { Txt } from '@/components/Common/Txt';
import { useGetHolidaySetting } from '@/hooks/apis/useHolidaySetting';
import { Button, Select } from '@radix-ui/themes';
import { useState } from 'react';
import { PiEquals, PiGear } from 'react-icons/pi';

// TODO: API 응답 값으로 변경
const OPTIONS: { id: number; branch: string }[] = [
  { id: 1, branch: '뮤즈의원(다산점)' },
  { id: 2, branch: '뮤즈의원(강남점)' },
];

export default function HolidayPage() {
  const { data } = useGetHolidaySetting();

  const [currentBranch, setCurrentBranch] = useState(OPTIONS[0].branch);

  const handleChangeBranch = (branch: string) => {
    setCurrentBranch(branch);
  };

  return (
    <main className="w-full mx-auto flex p-5 gap-x-2">
      <section className="flex-1 bg-white border">
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
        <HolidaySettingList holidaySettings={data} />
      </section>

      {/* 연차 추가하기 분리 */}
      <section className="flex-1 bg-white border">
        <div className="flex items-center justify-between whitespace-nowrap gap-x-8 px-10 py-5 sticky top-0 left-0 z-[2] bg-white border-b">
          <Title content="연차 추가하기" />
        </div>
      </section>

      {/* 연차 자동 부여 분리 */}
      <section className="flex-[0.8] bg-white border">
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
      </section>
    </main>
  );
}
