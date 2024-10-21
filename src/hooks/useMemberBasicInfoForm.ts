import { useForm } from 'react-hook-form';

import { useGetBranches } from '@/hooks/apis/useBranches';
import { useGetParts } from '@/hooks/apis/useParts';
import { useGetCurrentUserInfo, usePatchUser } from '@/hooks/apis/useUserManagement';

export const useMemberBasicInfoForm = () => {
  const { data: currentUserInfo } = useGetCurrentUserInfo();
  const branchList = useGetBranches('0');
  const partList = useGetParts(currentUserInfo?.branch.id);

  const {
    register: basicInfoRegister,
    handleSubmit: handleBasicInfoSubmit,
    getValues: basicInfoGetValues,
    control: basicInfoControl,
    setValue: basicInfoSetValue,
  } = useForm({
    defaultValues: {
      name: currentUserInfo?.name || '',
      email: currentUserInfo?.email || '',
      phone_number: currentUserInfo?.phone_number || '',
      address: currentUserInfo?.address || '',
      education: currentUserInfo?.education || '',
      birth_date: currentUserInfo?.birth_date || '2024-10-01',
      hire_date: currentUserInfo?.hire_date || '2024-10-01',
      resignation_date: currentUserInfo?.resignation_date || '2024-10-01',
      gender: currentUserInfo?.gender || '',
      part_id: Number(currentUserInfo?.part.id) || 0,
      branch_id: Number(currentUserInfo?.branch.id) || 0,
      last_company: currentUserInfo?.last_company || '',
      last_position: currentUserInfo?.last_position || '',
      last_career_start_date: currentUserInfo?.last_career_start_date || '2024-10-01',
      last_career_end_date: currentUserInfo?.last_career_end_date || '2024-10-01',
    },
  });

  const { mutate: patchUser } = usePatchUser(currentUserInfo?.id);

  return {
    basicInfoRegister,
    handleBasicInfoSubmit,
    basicInfoGetValues,
    basicInfoControl,
    basicInfoSetValue,
    patchUser,
    currentUserInfo,
    branchList,
    partList,
  };
};
