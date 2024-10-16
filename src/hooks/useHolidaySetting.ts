import { IHolidaySetting } from '@/models/holidaySetting.model';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const useHolidaySetting = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { formState, handleSubmit, reset, setValue, register } = useForm<IHolidaySetting>({
    defaultValues: {
      id: 0,
      name: '',
      leave_count: 0,
      is_paid: true,
    },
  });

  const handleChangeDialogOpen = (isDialogOpen: boolean) => {
    setIsDialogOpen(isDialogOpen);
  };

  const onSubmit = (data: IHolidaySetting) => {
    console.log(data);
    // TODO: POST 로직

    if (isDialogOpen) {
      //TODO: 다이얼로그 닫기 전 로딩 or toast 띄우기
      setIsDialogOpen(false);
    }
    reset();
  };

  return {
    isDialogOpen,
    formState,
    handleSubmit,
    handleChangeDialogOpen,
    onSubmit,
    register,
    setValue,
    reset,
  };
};
