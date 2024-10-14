import { IBoardReponse } from '@/models/basicSetting.model';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const useBasicSettingBoard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { control, handleSubmit, reset, setValue, formState } = useForm<IBoardReponse>({
    defaultValues: {
      id: '',
      categoryName: '',
      categoryDesc: '',
      readAuthority: '사원',
      writeAuthority: '사원',
      notifyAuthority: 'MSO 최고권한',
      partDivision: true,
      commentDivision: false,
    },
  });

  const onSubmit = (data: IBoardReponse) => {
    console.log(data);
    // TODO: POST 로직

    if (isDialogOpen) {
      //TODO: 다이얼로그 닫기 전 로딩 or toast 띄우기
      setIsDialogOpen(false);
    }
    reset();
  };

  return {
    control,
    isDialogOpen,
    formState,
    handleSubmit,
    onSubmit,
    setIsDialogOpen,
    setValue,
    reset,
  };
};
