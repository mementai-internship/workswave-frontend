import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Pagination from '@/components/Common/Pagination';
import OfficeSettingCreate from '@/components/OfficeSetting/OfficeSettingCreate';
import OfficeSettingHeader from '@/components/OfficeSetting/OfficeSettingHeader';
import OfficeSettingTable from '@/components/OfficeSetting/OfficeSettingTable';
import { useDeleteBranch, useGetBranches, usePostBranch } from '@/hooks/apis/useBranches';
import { IBranchesRequest } from '@/models/branches.model';

export default function ManagementOfficePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  const { data, refetch } = useGetBranches(page);
  const { mutate: postBranchMutate } = usePostBranch();
  const { mutate: deleteBranchMutate } = useDeleteBranch();

  const { control, handleSubmit, setValue, reset } = useForm<IBranchesRequest>({
    defaultValues: {
      code: '',
      name: '',
      representative_name: '',
      registration_number: '',
      call_number: '',
      address: '',
      corporate_seal: '',
      nameplate: '',
      mail_address: '',
    },
  });

  const onSubmit = handleSubmit((data: IBranchesRequest) => {
    postBranchMutate(data);
    reset();
  });

  const handleDeleteOffice = (id: number) => {
    deleteBranchMutate(id.toString(), {
      onSuccess: refetch,
    });
  };

  const onChangePage = () => {
    navigate('/office-setting/delete-office');
  };

  return (
    <div className="w-full">
      <OfficeSettingHeader onChangePage={onChangePage} title="지점관리" buttonText="삭제지점관리" />

      <div className="w-full flex gap-4 max-auto min-h-[calc(100vh-300px)]">
        <OfficeSettingCreate setValue={setValue} onSubmit={onSubmit} control={control} />
        {data && (
          <div className="w-2/3 flex-1">
            <OfficeSettingTable action={handleDeleteOffice} buttonText="삭제" list={data.list} />
          </div>
        )}
      </div>

      {data && <Pagination totalItems={data.pagination.total_record} itemsPerPage={10} />}
    </div>
  );
}
