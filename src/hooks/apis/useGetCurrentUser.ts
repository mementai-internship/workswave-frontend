import { getCurrentUser } from '@/apis/auth.api';
import { TUserResBody } from '@/models/user.model';
import { removeTokens } from '@/utils/tokenUtils';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const useValidate = (token: string) => {
  return useQuery({
    queryKey: ['validateToken', token],
    queryFn: async () => {
      const response = await getCurrentUser(token);
      if (!response) {
        removeTokens();
      }
      return response;
    },
    enabled: !!token,
    staleTime: 60 * 1000,
  });
};

export const useGetCurrentUser = (token: string) => {
  const validateQuery = useValidate(token);
  const [currentUser, setCurrentUser] = useState<TUserResBody | null>(null);

  useEffect(() => {
    if (validateQuery.isError) {
      setCurrentUser(null);
    } else if (validateQuery.data) {
      setCurrentUser(validateQuery.data);
    }
  }, [validateQuery]);

  return currentUser;
};
