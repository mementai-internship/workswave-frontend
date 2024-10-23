import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ContactSearchInput from '@/components/Common/ContactSearchInput';
import SelectBox from '@/components/Common/Select';
import Title from '@/components/Common/Title';
import { useGetBranches } from '@/hooks/apis/useBranches';
import { useGetParts } from '@/hooks/apis/useParts';
import { currentUserAtom } from '@/store/authAtoms';

interface IDocumentManagementHeaderProps {
  setBranchId: (branchId: number) => void;
  setPartId: (partId: number) => void;
}

export default function DocumentManagementHeader({
  setBranchId,
  setPartId,
}: IDocumentManagementHeaderProps) {
  const location = useLocation();
  const [currentUser] = useAtom(currentUserAtom);
  const { data: branches } = useGetBranches('0');

  const [selectedBranchId, setSelectedBranchId] = useState<number | null>(
    branches?.list[0]?.id || null
  );
  const { data: parts } = useGetParts(selectedBranchId);

  useEffect(() => {
    if (branches?.list?.length > 0 && !selectedBranchId) {
      const firstBranchId = branches.list[0].id;
      setSelectedBranchId(firstBranchId);
      setBranchId(firstBranchId);
    }
  }, [branches, selectedBranchId, setBranchId]);

  const getTitleContent = () => {
    const path = location.pathname;
    if (path.includes('certificate-management')) {
      return '증명서 관리';
    } else if (path.includes('contract-management')) {
      return '계약서 관리';
    } else if (path.includes('timeoff-management')) {
      return '휴직관리';
    }
    return '증명서 관리';
  };

  return (
    <>
      <div className="flex items-center">
        <Title content={getTitleContent()} />
        <span className="text-purple-50 px-4">
          승인 후 '저장되었습니다'가 뜰때까지 기다려주세요
        </span>
      </div>
      <div>
        <div className="flex items-center justify-between py-5">
          <div className="flex gap-2">
            {currentUser?.data?.role === 'MSO 최고권한' && branches && (
              <SelectBox
                title="지점 선택"
                options={branches?.list.map((branch) => ({
                  id: branch.id,
                  name: branch.name,
                  action: () => {
                    setSelectedBranchId(branch.id);
                    setBranchId(branch.id);
                  },
                }))}
              />
            )}
            {(currentUser?.data?.role === '최고관리자' ||
              currentUser?.data?.role === 'MSO 최고권한') &&
              parts && (
                <SelectBox
                  title="파트 선택"
                  options={parts?.map((part) => ({
                    id: part.id,
                    name: part.name,
                    action: () => {
                      setPartId(part.id);
                    },
                  }))}
                />
              )}
          </div>
          <div className="ml-auto">
            <ContactSearchInput />
          </div>
        </div>
      </div>
    </>
  );
}
