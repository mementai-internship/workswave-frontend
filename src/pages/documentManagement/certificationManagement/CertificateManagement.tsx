import { useAtomValue } from 'jotai';

import CertificationManagementTable from '@/components/DocumentManagement/CertificationManagementList/CertificationManagementTable';
import { useGetCurrentUser } from '@/hooks/apis/useGetCurrentUser';
import { userTokenAtom } from '@/store/authAtoms';

export default function CertificateManagement() {
  // 승인 함수
  // const handleApproveButtonClick = () => { };
  const token = useAtomValue(userTokenAtom);
  const user = useGetCurrentUser(token);

  return (
    <>
      <CertificationManagementTable userName={user?.data?.name} />
    </>
  );
}
