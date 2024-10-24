import { atom } from 'jotai';

import { TOptions } from '@/components/WorkManagement/WorkSelect';

export const selectedBranchAtom = atom<TOptions>();
export const selectedDepartmentAtom = atom<TOptions>();
