import Pagination from '@/components/Common/Pagination';
import OfficeSettingHeader from '@/components/OfficeSetting/OfficeSettingHeader';
import OfficeSettingTable from '@/components/OfficeSetting/OfficeSettingTable';
import { IOfficeItemResponse } from '@/models/officeSetting.model';
import { useNavigate } from 'react-router-dom';

export default function ManagementDeleteOfficePage() {
  const navigate = useNavigate();

  const onChangePage = () => {
    navigate('/office-setting/office');
  };

  const handleRecoveryOffice = () => {};
  return (
    <div className="w-full">
      <OfficeSettingHeader onChangePage={onChangePage} title="삭제지점관리" buttonText="지점관리" />

      <div className="w-full h-[calc(100vh-300px)]">
        <OfficeSettingTable buttonText="복구" list={DUMMY_DATA} action={handleRecoveryOffice} />
      </div>

      <Pagination totalItems={50} itemsPerPage={10} />
    </div>
  );
}

const DUMMY_DATA: IOfficeItemResponse[] = [
  {
    id: 1,
    code: 'COMP001',
    name: 'ABC Corporation',
    representative_name: 'John Doe',
    registration_number: '123-45-67890',
    call_number: '02-1234-5678',
    address: 'Seoul, Korea, 123 ABC Street',
    corporate_seal: 'seal123.png',
    nameplate: undefined,
    mail_address: 'info@abccorp.com',
    created_at: '2024-01-15T08:30:00.000Z',
    updated_at: '2024-10-10T12:45:30.000Z',
    deleted_yn: 'N',
  },
  {
    id: 2,
    code: 'COMP002',
    name: 'XYZ Industries',
    representative_name: 'Jane Smith',
    registration_number: '987-65-43210',
    call_number: '031-9876-5432',
    address: 'Busan, Korea, 456 XYZ Road',
    corporate_seal: 'seal456.png',
    nameplate: 'XYZ Industries Nameplate',
    mail_address: 'contact@xyzindustries.com',
    created_at: '2023-09-01T09:15:00.000Z',
    updated_at: '2024-09-20T14:30:45.000Z',
    deleted_yn: 'N',
  },
  {
    id: 3,
    code: 'COMP003',
    name: '123 Technologies',
    representative_name: 'Alice Johnson',
    registration_number: '456-78-91011',
    call_number: '010-1234-9876',
    address: 'Incheon, Korea, 789 Tech Avenue',
    corporate_seal: 'seal789.png',
    nameplate: '123 Tech Nameplate',
    mail_address: 'support@123tech.com',
    created_at: '2022-05-10T11:25:00.000Z',
    updated_at: '2024-07-22T16:15:50.000Z',
    deleted_yn: 'Y',
  },
];
