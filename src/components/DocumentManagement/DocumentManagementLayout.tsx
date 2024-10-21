import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import DocumentManagementHeader from '@/components/DocumentManagement/DocumentManagementHeader';

export default function DocumentManagementLayout() {
  const [branchId, setBranchId] = useState<number>(1);
  const [partId, setPartId] = useState<number>(1);

  // TODO : MSO 아닌 통합관리자, 관리자의 경우 본인이 가지고 있는 '브랜치 id 목록'을 받아와야 함.
  // TODO : 증명서 목록을 가져올 때, branch id만 있을 때, part id도 있을 때 분기해서 처리해야 함.

  // 각 페이지에 리스트로 보여줄 정보들에 대해, props로 내려줘야 함.
  return (
    <div className="w-full">
      <DocumentManagementHeader
        branchId={branchId}
        setBranchId={setBranchId}
        setPartId={setPartId}
      />
      <Outlet context={{ branchId, partId }} />
    </div>
  );
}
