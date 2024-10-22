import WageContainer from '@/components/BasicSetting/Wage/WageContainer';
import WageItem from '@/components/BasicSetting/Wage/WageItem';
import WageMinimumSettingDialog from '@/components/BasicSetting/Wage/WageMinimumSettingDialog';
import WagePayStatementDialog from '@/components/BasicSetting/Wage/WagePayStatementDialog';
import WageSelect, { IWageSelectType } from '@/components/BasicSetting/Wage/WageSelect';
import { IWageSetting } from '@/models/wageSetting.model';
import { TWageEditMode } from '@/pages/basicSetting/WagePage';

interface IProps {
  branches: IWageSelectType[];
  parts: IWageSelectType[];
  list: IWageSetting[];
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
  return (
    <WageContainer
      width="w-[60%]"
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
        {list.map((item) => (
          <WageItem
            key={item.templateId}
            item={item}
            activeEditMode={activeEditMode}
            handleDeleteItem={handleDeleteItem}
            editMode={editMode}
          />
        ))}
      </ul>
    </WageContainer>
  );
}
