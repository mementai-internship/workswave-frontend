import { useAtomValue } from 'jotai';

import CertificationManagementTable from '@/components/DocumentManagement/CertificationManagement/CertificationManagementTable';
import { useGetCurrentUser } from '@/hooks/apis/useGetCurrentUser';
import { userTokenAtom } from '@/store/authAtoms';

export default function CertificateManagement() {
  // 승인 함수
  // const handleApproveButtonClick = () => { };
  const token = useAtomValue(userTokenAtom);
  const user = useGetCurrentUser(token);

  return (
    <>
      <CertificationManagementTable currUser={user?.data} />
    </>
  );
}
