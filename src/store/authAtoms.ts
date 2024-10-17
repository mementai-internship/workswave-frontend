import { atom } from 'jotai';
import { atomWithQuery } from 'jotai-tanstack-query';
import { atomWithStorage } from 'jotai/utils';

import { getCurrentUser } from '@/apis/auth.api';
import { TUser } from '@/models/user.model';

export const userTokenAtom = atomWithStorage<string | null>('accessToken', null);

export const isLoggedInAtom = atom((get) => get(userTokenAtom) !== null);

export const currentUserAtom = atomWithQuery<TUser>((get) => ({
  queryKey: ['currentUser', get(userTokenAtom)],
  queryFn: async () => {
    const token = get(userTokenAtom);
    if (!token) throw new Error('No token available');
    const response = await getCurrentUser(token);
    return response.data;
  },
}));

export const userAtom = atom(
  (get) => {
    const queryResult = get(currentUserAtom);
    return queryResult.data ?? null;
  },
  (_, set) => {
    set(userTokenAtom, null);
    set(currentUserAtom);
  }
);
