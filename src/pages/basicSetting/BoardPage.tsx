import BasicSettingBoardForm from '@/components/BasicSetting/BasicSettingBoard/BasicSettingBoardForm';
import BasicSettingBoardList from '@/components/BasicSetting/BasicSettingBoard/BasicSettingBoardList';
import Title from '@/components/Common/Title';
import { BOARD_LIST } from '@/constants/basicSetting.mock';
import { Select } from '@radix-ui/themes';
import { useState } from 'react';

export default function BoardSettingPage() {
  const options: { id: string; branch: string }[] = [
    { id: '1', branch: '뮤즈의원(다산점)' },
    { id: '2', branch: '뮤즈의원(강남점)' },
  ];
  const [currentBranch, setCurrentBranch] = useState(options[0].branch);

  const handleChangeBranch = (branch: string) => {
    setCurrentBranch(branch);
  };

  return (
    <div className="w-[70%]  mx-auto flex p-5 gap-x-2">
      <section className="bg-white border flex-[3]">
        <div className="flex items-center gap-x-4 px-10 py-5">
          <Title content="게시판 설정" />
          {options.length > 1 ? (
            <Select.Root
              defaultValue={currentBranch}
              onValueChange={(branch) => handleChangeBranch(branch)}
              size="3"
            >
              <Select.Trigger variant="ghost" className="text-lg font-semibold" />
              <Select.Content>
                <Select.Group className="p-2">
                  {options.map(({ id, branch }) => (
                    <Select.Item key={id} value={branch}>
                      {branch}
                    </Select.Item>
                  ))}
                </Select.Group>
              </Select.Content>
            </Select.Root>
          ) : (
            <p>{options[0].branch}</p>
          )}
        </div>
        <BasicSettingBoardList boardList={BOARD_LIST} />
      </section>
      <BasicSettingBoardForm />
    </div>
  );
}
