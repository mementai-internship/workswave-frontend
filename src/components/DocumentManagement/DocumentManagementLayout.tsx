import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import DocumentManagementHeader from '@/components/DocumentManagement/DocumentManagementHeader';

export default function DocumentManagementLayout() {
  const [branchId, setBranchId] = useState<number | null>(null);
  const [partId, setPartId] = useState<number | null>(null);

  // TODO : MSO 아닌 통합관리자, 관리자의 경우 본인이 가지고 있는 '브랜치 id 목록'을 받아와야 함. ( 사원은 브랜치, 파트 목록 필요 X -> UI도 분기처리 필요 )
  // TODO : 증명서 목록을 가져올 때 branch id만 있을 때, part id도 있을 때 분기해서 처리해야 함.

  return (
    <div className="w-full">
      <DocumentManagementHeader setBranchId={setBranchId} setPartId={setPartId} />
      <Outlet context={{ branchId, partId }} />
    </div>
  );
}
