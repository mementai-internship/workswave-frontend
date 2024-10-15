import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const userTokenAtom = atomWithStorage<string | null>('accessToken', null);

export const isLoggedInAtom = atom((get) => get(userTokenAtom) !== null);
