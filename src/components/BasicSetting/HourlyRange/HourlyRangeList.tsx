import HourlyRangeContainer from '@/components/BasicSetting/HourlyRange/HourlyRangeContainer';
import HourlyRangeItem from '@/components/BasicSetting/HourlyRange/HourlyRangeItem';
import HourlyRangeSelect, {
  THourlyRangeSelectType,
} from '@/components/BasicSetting/HourlyRange/HourlyRangeSelect';
import { Txt } from '@/components/Common/Txt';
import { IHourWageTemplatesForm } from '@/models/hour-wage-templates';

interface IProps {
  selectedBranchId: number;
  selectPartId: number | null;
  branches: { id: number; name: string }[];
  parts: THourlyRangeSelectType;
  list: IHourWageTemplatesForm[];
  activateEditMode: (id: number) => void;
  handleDeleteItem: (id: number) => void;
  handleSelectBranch: (id: string) => void;
  handleSelectPart: (id: string) => void;
}

export default function HourlyRangeList({
  handleDeleteItem,
  activateEditMode,
  handleSelectBranch,
  handleSelectPart,
  selectedBranchId,
  selectPartId,
  branches,
  parts,
  list,
}: IProps) {
  if (!list || !branches || !parts) return null;

  return (
    <HourlyRangeContainer
      title="시급설정"
      width="w-[70%]"
      subTitleElement={
        <>
          <HourlyRangeSelect
            content={branches}
            defaultValue={selectedBranchId}
            isTitle
            onClick={handleSelectBranch}
          />
          <HourlyRangeSelect
            content={parts}
            placeholder="직책선택"
            isTitle
            onClick={handleSelectPart}
          />
        </>
      }
    >
      <ul className="flex flex-col gap-2 py-3">
        {list.length === 0 ? (
          <Txt className="text-center pt-6">시급 설정 템플릿이 없습니다.</Txt>
        ) : (
          list
            .filter((item) => {
              if (selectPartId === null) return item;
              return item.part_id === selectPartId;
            })
            .map((item) => (
              <HourlyRangeItem
                item={item}
                activateEditMode={activateEditMode}
                handleDeleteItem={handleDeleteItem}
                parts={parts}
              />
            ))
        )}
      </ul>
    </HourlyRangeContainer>
  );
}
