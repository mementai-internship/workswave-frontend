import { useSetAtom } from 'jotai';

import { Toast, toastAtom } from '@/store/toastAtoms';

export const useToast = () => {
  const setToastValue = useSetAtom(toastAtom);

  const removeToast = (toastId: Toast['id']) => {
    setToastValue((prev) => prev.filter((toast) => toast.id === toastId));
  };

  const fireToast = (toast: Toast) => {
    setToastValue((prev) => [...prev, { ...toast, id: toast.id ?? new Date().toString() }]);
    setTimeout(() => removeToast(toast.id), toast.timer ?? 1000);
  };

  const toast = {
    success: (message: string, options: Partial<Toast> = {}) => {
      fireToast({
        message,
        type: 'success',
        ...options,
      });
    },
    error: (message: string, options: Partial<Toast> = {}) => {
      fireToast({
        message,
        type: 'failed',
        ...options,
      });
    },

    notice: (message: string, options: Partial<Toast> = {}) => {
      fireToast({
        message,
        type: 'notice',
        ...options,
      });
    },
  };
  return toast;
};
