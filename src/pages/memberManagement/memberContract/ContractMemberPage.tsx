import React, { useState } from 'react';

import ContractInfoBar from '@/components/MemberInfo/MemberInfoCommon/ContractInfoBar';
import MemberInfoButtonBar from '@/components/MemberInfo/MemberInfoCommon/MemberInfoButtonBar';
import SalaryContractTable from '@/components/MemberInfo/SalaryContractTable';
import WorkContractTable from '@/components/MemberInfo/WorkContractTable';

export default function ContractMemberPage() {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const handleEditModeChange = (checked: boolean) => {
    setIsEditMode(checked);
    if (!checked) {
      alert('계약정보가 저장되었습니다.');
      // TODO: API 호출
    }
  };

  return (
    <>
      <MemberInfoButtonBar
        leftButton={{ text: '휴직신청' }}
        rightButton={{ text: '신청 리스트' }}
      />
      <ContractInfoBar isEditMode={isEditMode} onEditModeChange={handleEditModeChange} />
      <WorkContractTable isEditMode={isEditMode} />
      <SalaryContractTable isEditMode={isEditMode} />
    </>
  );
}
