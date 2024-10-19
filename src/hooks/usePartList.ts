import { useGetUsers } from '@/hooks/apis/useUserManagement';

export function usePartList() {
  const { data: allUserList } = useGetUsers(1, 1000, '0', '0', '0', '0', '0');
  const partList = Array.from(new Set(allUserList?.data?.map((user) => user.part)));

  return partList;
}
