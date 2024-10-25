import { Switch } from '@radix-ui/themes';

import { Txt } from '@/components/Common/Txt';

interface IContractInfoBarProps {
  isEditMode: boolean;
  onEditModeChange: (checked: boolean) => void;
}

export default function ContractInfoBar({ isEditMode, onEditModeChange }: IContractInfoBarProps) {
  return (
    <div className="flex items-center justify-between w-full bg-gray-200 h-10 p-4">
      <Txt variant="h6">계약정보</Txt>
      <div className="flex items-center gap-4">
        <Txt color={`${!isEditMode ? 'black' : 'gray-500'}`}>{isEditMode ? '저장' : 'OFF'}</Txt>
        <Switch
          size="2"
          variant="soft"
          color="purple"
          onCheckedChange={(checked) => {
            onEditModeChange(checked);
            if (checked) {
              alert('계약정보 수정 모드가 활성화되었습니다.');
            }
          }}
        />
        <Txt color={`${isEditMode ? 'black' : 'gray-500'}`}>수정하기</Txt>
      </div>
    </div>
  );
}
