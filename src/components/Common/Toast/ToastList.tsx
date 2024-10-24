import { useAtomValue } from 'jotai';

import ToastItem from '@/components/Common/Toast/ToastItem';
import { toastAtom } from '@/store/toastAtoms';

export default function ToastList() {
  const toasts = useAtomValue(toastAtom);
  return (
    <div className="fixed bottom-0 left-0 z-[999999]">
      {!!toasts.length && toasts.map((toast) => <ToastItem {...toast} />)}
    </div>
  );
}
