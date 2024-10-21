import CertificationManagementTable from '@/components/DocumentManagement/CertificationManagementList/CertificationManagementTable';

export default function CertificateManagement() {
  // 승인 함수
  // const handleApproveButtonClick = () => { };

  return (
    <div className="flex flex-col w-full">
      <CertificationManagementTable />
    </div>
  );
}
