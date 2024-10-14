import BasicSettingBoardItem from '@/components/BasicSetting/BasicSettingBoard/BasicSettingBoardItem';
import { IBoardReponse } from '@/models/basicSetting.model';

export default function BasicSettingBoardList({ boardList }: { boardList: IBoardReponse[] }) {
  return (
    <div className=" p-10 flex flex-col gap-y-3">
      {boardList.map(({ id, categoryName, ...data }) => (
        <BasicSettingBoardItem key={id} id={id} categoryName={categoryName} {...data} />
      ))}
      <div>옵저브</div>
    </div>
  );
}
