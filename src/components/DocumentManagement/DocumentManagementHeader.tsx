import { useLocation } from 'react-router-dom';

import ContactSearchInput from '@/components/Common/ContactSearchInput';
import SelectBox from '@/components/Common/Select';
import Title from '@/components/Common/Title';
import { useGetBranches } from '@/hooks/apis/useBranches';
import { useGetParts } from '@/hooks/apis/useParts';

interface IDocumentManagementHeaderProps {
  branchId: number;
  setBranchId: (branchId: number) => void;
  setPartId: (partId: number) => void;
}

export default function DocumentManagementHeader({
  branchId,
  setBranchId,
  setPartId,
}: IDocumentManagementHeaderProps) {
  //TODO : UI 분기 처리 필요 ( 권한 별로 지점(branch) 셀렉트, 파트 셀렉트가 보일 필요 없음 )

  const location = useLocation();

  const { data: branches, isFetching: isBranchesFetching } = useGetBranches('1');
  const { data: parts, isFetching: isPartsFetching } = useGetParts(branchId);

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

  const branchSelection = branches?.list?.map((branch) => ({
    id: branch.id,
    name: branch.name,
    action: () => {
      setBranchId(branch.id);
    },
  }));

  const partSelection =
    !isPartsFetching &&
    parts?.map((part) => ({
      id: part.id,
      name: part.name,
      action: () => {
        setPartId(part.id);
      },
    }));

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
            {!isBranchesFetching && (
              <SelectBox title="지점 선택" name="지점 선택" options={branchSelection} />
            )}
            {!isPartsFetching && (
              <SelectBox title="파트 선택" name="파트 선택" options={partSelection} />
            )}
          </div>
          <ContactSearchInput />
        </div>
      </div>
    </>
  );
}
