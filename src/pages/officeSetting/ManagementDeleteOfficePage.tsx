import { useNavigate, useSearchParams } from 'react-router-dom';

import Pagination from '@/components/Common/Pagination';
import OfficeSettingHeader from '@/components/OfficeSetting/OfficeSettingHeader';
import OfficeSettingTable from '@/components/OfficeSetting/OfficeSettingTable';
import { useGetDeleteBranches, usePatchReviveBranch } from '@/hooks/apis/useBranches';

export default function ManagementDeleteOfficePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  const { data, refetch } = useGetDeleteBranches(page);
  const { mutate: reviveBranchMutate } = usePatchReviveBranch();

  const onChangePage = () => {
    navigate('/office-setting/office');
  };

  const handleRecoveryOffice = (id: number) => {
    reviveBranchMutate(id.toString(), {
      onSuccess: () => refetch(),
    });
  };
  return (
    <div className="w-full">
      <OfficeSettingHeader onChangePage={onChangePage} title="삭제지점관리" buttonText="지점관리" />

      {data && (
        <>
          <div className="w-full min-h-[calc(100vh-300px)]">
            <OfficeSettingTable buttonText="복구" list={data.list} action={handleRecoveryOffice} />
          </div>
          <Pagination totalItems={data.pagination.total_record} itemsPerPage={10} />
        </>
      )}
    </div>
  );
}
