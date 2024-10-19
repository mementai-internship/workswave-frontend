import { useGetUsers } from '@/hooks/apis/useUserManagement';

export function useBranchList() {
  const { data: allUserList } = useGetUsers(1, 1000, '0', '0', '0', '0', '0');
  const branchList = Array.from(new Set(allUserList?.data?.map((user) => user.branch)));

  return branchList;
}
