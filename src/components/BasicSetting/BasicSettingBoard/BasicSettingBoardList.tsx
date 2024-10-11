import BasicSettingBoardItem from '@/components/BasicSetting/BasicSettingBoard/BasicSettingBoardItem';
import { IBoardReponse } from '@/components/BasicSetting/types/types';

export default function BasicSettingBoardList({ boardList }: { boardList: IBoardReponse[] }) {
  return (
    <div className="h-40 overflow-y-scroll border-t-2 p-10 flex flex-col gap-y-3">
      {boardList.map(({ id, title, subTitle }) => (
        <BasicSettingBoardItem key={id} id={id} title={title} subTitle={subTitle} />
      ))}
    </div>
  );
}
