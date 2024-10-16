import { getCurrentUser } from '@/apis/auth.api';
import { atom } from 'jotai';
import { atomWithQuery } from 'jotai-tanstack-query';
import { atomWithStorage } from 'jotai/utils';

export const userTokenAtom = atomWithStorage<string | null>('accessToken', null);

export const isLoggedInAtom = atom((get) => get(userTokenAtom) !== null);

export const currentUserAtom = atomWithQuery((get) => ({
  queryKey: ['currentUser', get(userTokenAtom)],
  queryFn: async () => {
    const token = get(userTokenAtom);
    if (!token) throw new Error('No token available');
    const response = await getCurrentUser(token);
    return response.data;
  },
}));
