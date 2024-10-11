import BasicSettingBoardList from '@/components/BasicSetting/BasicSettingBoard/BasicSettingBoardList';
import { BOARD_LIST } from '@/components/BasicSetting/constants/mockLists';
import Title from '@/components/Common/Title';
import { Select } from '@radix-ui/themes';

export default function BoardSettingPage() {
  const options: string[] = ['뮤즈의원(다산점)', '뮤즈의원(강남점)'];
  return (
    <div className="flex p-5">
      <section className="border-2">
        <div className="flex items-center gap-x-4 px-10 py-5 text-xl font-semibold">
          <Title content="게시판 설정" />
          {options.length > 1 ? (
            <Select.Root defaultValue={options[0]}>
              <Select.Trigger variant="surface" />
              <Select.Content>
                <Select.Group className="p-2">
                  {options.map((option) => (
                    <Select.Item value={option}>{option}</Select.Item>
                  ))}
                </Select.Group>
              </Select.Content>
            </Select.Root>
          ) : (
            <p>{options[0]}</p>
          )}
        </div>
        <BasicSettingBoardList boardList={BOARD_LIST} />
      </section>
      <section>hi</section>
    </div>
  );
}
