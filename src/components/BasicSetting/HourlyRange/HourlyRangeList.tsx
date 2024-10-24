import HourlyRangeContainer from '@/components/BasicSetting/HourlyRange/HourlyRangeContainer';
import HourlyRangeItem from '@/components/BasicSetting/HourlyRange/HourlyRangeItem';
import HourlyRangeSelect, {
  THourlyRangeSelectType,
} from '@/components/BasicSetting/HourlyRange/HourlyRangeSelect';
import { Txt } from '@/components/Common/Txt';
import { IHourWageTemplatesForm } from '@/models/hour-wage-templates';
import { THourlyRangeEditMode } from '@/pages/basicSetting/HourlyRangePage';

interface IProps {
  editMode: THourlyRangeEditMode;
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
  editMode,
}: IProps) {
  if (!list || !branches || !parts) return null;

  const filteredTemplates = (templates) => {
    return templates.filter((template) => {
      if (selectPartId === null) return template;
      return template.part_id === selectPartId;
    });
  };

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
        {filteredTemplates(list).length === 0 ? (
          <Txt className="pt-6 text-center">시급 설정 템플릿이 없습니다.</Txt>
        ) : (
          filteredTemplates(list).map((item) => (
            <HourlyRangeItem
              key={item.id}
              item={item}
              parts={parts}
              editMode={editMode}
              activateEditMode={activateEditMode}
              handleDeleteItem={handleDeleteItem}
            />
          ))
        )}
      </ul>
    </HourlyRangeContainer>
  );
}
