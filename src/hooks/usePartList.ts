import { useGetUsers } from '@/hooks/apis/useUserManagement';

export function usePartList() {
  const { data: allUserList } = useGetUsers({
    currentPage: 1,
    itemsPerPage: 1000,
    selectedTab: '0',
    selectedBranch: '0',
    selectedPart: '0',
    updatedSearchName: '0',
    updatedSearchPhone: '0',
  });
  const partList = Array.from(new Set(allUserList?.data?.map((user) => user.part)));

  return partList;
}
