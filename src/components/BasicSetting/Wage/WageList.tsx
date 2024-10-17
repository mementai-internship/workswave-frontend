import WageContainer from '@/components/BasicSetting/Wage/WageContainer';
import WageItem from '@/components/BasicSetting/Wage/WageItem';
import WageSelect from '@/components/BasicSetting/Wage/WageSelect';
import { Txt } from '@/components/Common/Txt';
import { IWageSettingEditMode } from '@/hooks/useWageSetting';
import { IWageSetting } from '@/models/wageSetting.model';

interface IProps {
  positionOptions: {
    id: number;
    name: string;
  }[];
  list: IWageSetting[];
  handleOpenEditMode: (id?: string) => void;
  handleDeleteItem: (id: string) => void;
  editMode: IWageSettingEditMode;
}

export default function WageList({
  handleDeleteItem,
  editMode,
  handleOpenEditMode,
  positionOptions,
  list,
}: IProps) {
  return (
    <WageContainer
      title="임금 템플릿"
      titleChildren={
        <>
          <Txt variant="h4" color="black">
            뮤즈의원(다산점)
          </Txt>
          <WageSelect placeholder="직책선택" content={positionOptions} />
        </>
      }
      width="w-[60%]"
      position="left"
    >
      <ul className="flex flex-col gap-2 p-4">
        {list.map((item) => (
          <WageItem
            key={item.templateId}
            item={item}
            handleOpenEditMode={handleOpenEditMode}
            handleDeleteItem={handleDeleteItem}
            editMode={editMode}
          />
        ))}
      </ul>
    </WageContainer>
  );
}
