import { IBoardPostRequest } from '@/models/basicSetting.model';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const useBasicSettingBoard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { defaultValues },
    reset,
    watch,
  } = useForm<IBoardPostRequest>({
    defaultValues: {
      categoryName: '',
      categoryDesc: '',
      readAuthority: '사원',
      writeAuthority: '사원',
      notifyAuthority: 'MSO 최고권한',
      partDivision: 'use',
      commentDivision: 'use',
    },
  });

  const onSubmit = (data: IBoardPostRequest) => {
    console.log('called');
    console.log(data);
    /**
     * TODO: POST 로직
     * TODO: 다이얼로그 닫기 전 로딩 or toast 띄우기
     */
    if (isDialogOpen) {
      setIsDialogOpen(false);
    }
    reset();
  };

  return {
    control,
    onSubmit,
    handleSubmit,
    defaultValues,
    reset,
    watch,
    isDialogOpen,
    setIsDialogOpen,
  };
};
