import { getCurrentUser } from '@/apis/auth.api';
import { useQuery } from '@tanstack/react-query';

export const useGetCurrentUser = (token: string) => {
  const { data } = useQuery({
    queryKey: [token],
    queryFn: () => token && getCurrentUser(token),
  });
  return data;
};
