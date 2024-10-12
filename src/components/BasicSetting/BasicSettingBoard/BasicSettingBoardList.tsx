import BasicSettingBoardItem from '@/components/BasicSetting/BasicSettingBoard/BasicSettingBoardItem';
import { IBoardReponse } from '@/models/basicSetting.model';

export default function BasicSettingBoardList({ boardList }: { boardList: IBoardReponse[] }) {
  return (
    <div className="min-w-[800px] overflow-y-scroll border-t p-10 flex flex-col gap-y-3">
      {boardList.map(({ id, title, subTitle }) => (
        <BasicSettingBoardItem key={id} id={id} title={title} subTitle={subTitle} />
      ))}
    </div>
  );
}
