import { getLeaveCategories } from '@/apis/leave-categories.api';
import { ILeaveCategory } from '@/models/leave-categories.model';
import { useQuery } from '@tanstack/react-query';

export const useGetLeaveCategories = (branch_id: number) => {
  return useQuery<ILeaveCategory[]>({
    queryKey: ['leaveCategories', branch_id],
    queryFn: () => getLeaveCategories(branch_id),
  });
};
