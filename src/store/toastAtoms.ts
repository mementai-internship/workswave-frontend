import { atom } from 'jotai';

type ToastType = 'failed' | 'success' | 'notice';

export interface Toast {
  id?: string;
  type?: ToastType;
  timer?: number;
  message: string;
  position?: 'top' | 'bottom';
}

export const toastAtom = atom<Toast[]>([]);
