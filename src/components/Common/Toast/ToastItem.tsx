/* eslint-disable react-hooks/exhaustive-deps */
import { debounce } from 'es-toolkit';
import { useCallback, useEffect, useState } from 'react';
import { PiCheckBold, PiWarning, PiWarningCircle } from 'react-icons/pi';

import { Toast } from '@/store/toastAtoms';

export default function ToastItem({
  message,
  type = 'success',
  timer = 1000,
  position = 'bottom',
}: Toast) {
  const [viewToast, setViewToast] = useState(true);

  const closeToast = useCallback(() => {
    debounce(() => {
      setViewToast(false);
    }, timer);
  }, [timer]);

  useEffect(() => {
    closeToast();
  }, []);

  return (
    <div
      className={`overflow-hidden h-24 w-[600px] fixed bottom-0 left-1/2 -translate-x-1/2 z-[999999] 
  ${position === 'bottom' && 'bottom-4'}
  ${position === 'top' && 'top-4'}`}
    >
      {viewToast && type == 'failed' && (
        <div
          className={`w-64 py-1 px-1 mx-auto text-sm border border-[#ee2222] bg-[#fcfcfc] rounded-md shadow-md flex justify-center items-center
      ${position === 'bottom' && 'animate-toast'}
      ${position === 'top' && 'animate-drop'}`}
        >
          <span>
            <PiWarning size={24} className="text-[#ee2222] " />
          </span>

          <div className="p-4 break-words text-[#333] text-center font-semibold">{message}</div>
        </div>
      )}
      {viewToast && type == 'success' && (
        <div
          className={`w-64 py-1 px-1 mx-auto text-sm border border-[#00a120] bg-[#fcfcfc] rounded-md shadow-md flex justify-center items-center
      ${position === 'bottom' && 'animate-toast'}
      ${position === 'top' && 'animate-drop'}`}
        >
          <span>
            <PiCheckBold size={24} className="text-[#00a120] " />
          </span>

          <div className="p-4 break-words text-[#333] text-center font-semibold">{message}</div>
        </div>
      )}
      {viewToast && type == 'notice' && (
        <div
          className={`w-64 py-1 px-1 mx-auto text-sm border border-[#f2e12c] bg-[#fcfcfc] rounded-md shadow-md flex justify-center items-center
      ${position === 'bottom' && 'animate-toast'}
      ${position === 'top' && 'animate-drop'}`}
        >
          <span>
            <PiWarningCircle size={24} className="text-[#f2e12c] " />
          </span>
          <div className="p-4 break-words text-[#333] text-center font-semibold">{message}</div>
        </div>
      )}
    </div>
  );
}
