import WageContainer from '@/components/BasicSetting/Wage/WageContainer';
import WageItem from '@/components/BasicSetting/Wage/WageItem';
import WageMinimumSettingDialog from '@/components/BasicSetting/Wage/WageMinimumSettingDialog';
import WagePayStatementDialog from '@/components/BasicSetting/Wage/WagePayStatementDialog';
import WageSelect, { IWageSelectType } from '@/components/BasicSetting/Wage/WageSelect';
import { Txt } from '@/components/Common/Txt';
import { ISalaryTemplatesItem } from '@/models/salary-templates.model';
import { TWageEditMode } from '@/pages/basicSetting/WagePage';

interface IProps {
  branches: IWageSelectType[];
  parts: IWageSelectType[];
  list: ISalaryTemplatesItem[];
  selectedBranchId: number | null;
  selectedPartId: number | null;
  activeEditMode: (id: number) => void;
  handleDeleteItem: (id: number) => void;
  handleSelectBranch: (id: string) => void;
  handleSelectPart: (id: string) => void;
  editMode: TWageEditMode;
}

export default function WageList({
  handleDeleteItem,
  activeEditMode,
  handleSelectPart,
  handleSelectBranch,
  selectedBranchId,
  selectedPartId,
  editMode,
  parts,
  list,
  branches,
}: IProps) {
  // 직책 선택시 필터링
  const filteredTemplates = (templates: ISalaryTemplatesItem[]) => {
    return (
      templates?.filter((template) => {
        if (selectedPartId === null) return template;
        return template.part_id === selectedPartId;
      }) ?? []
    );
  };
  return (
    <WageContainer
      width="w-[62%]"
      position="left"
      title="임금 템플릿"
      leftChild={
        <>
          <div className="w-32">
            <WageSelect
              onClick={handleSelectBranch}
              content={branches}
              defaultValue={selectedBranchId}
              isTitle
            />
          </div>
          <div className="w-32">
            <WageSelect
              onClick={handleSelectPart}
              placeholder="직책선택"
              content={parts}
              defaultValue={selectedPartId}
              isTitle
            />
          </div>
        </>
      }
      rightChild={
        <>
          <WagePayStatementDialog />
          <WageMinimumSettingDialog />
        </>
      }
    >
      <ul className="flex flex-col gap-2 p-4">
        {filteredTemplates(list).length === 0 ? (
          <Txt>설정된 템플릿이 없습니다.</Txt>
        ) : (
          filteredTemplates(list)?.map((item) => (
            <WageItem
              key={item.id}
              item={item}
              activeEditMode={activeEditMode}
              handleDeleteItem={handleDeleteItem}
              editMode={editMode}
            />
          ))
        )}
      </ul>
    </WageContainer>
  );
}
