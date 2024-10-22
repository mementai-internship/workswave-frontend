import { useGetUsers } from '@/hooks/apis/useUserManagement';

export function useBranchList() {
  const { data: allUserList } = useGetUsers({
    currentPage: 1,
    itemsPerPage: 1000,
    selectedTab: '0',
    selectedBranch: '0',
    selectedPart: '0',
    updatedSearchName: '0',
    updatedSearchPhone: '0',
  });
  const branchList = Array.from(new Set(allUserList?.data?.map((user) => user.branch)));

  return branchList;
}
