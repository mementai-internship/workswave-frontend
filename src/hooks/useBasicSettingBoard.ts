import { IBoardPostRequest } from '@/models/basicSetting.model';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

export const useBasicSettingBoard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { control, handleSubmit, reset, setValue, formState } = useForm<IBoardPostRequest>({
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

  const isFormValid = useCallback(() => {
    const { categoryName, categoryDesc } = formState.dirtyFields;
    return categoryName && categoryDesc && formState.isValid;
  }, [formState]);

  const onSubmit = (/*data: IBoardPostRequest*/) => {
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
    isFormValid: isFormValid(),
    handleSubmit,
    onSubmit,
    setIsDialogOpen,
    setValue,
  };
};
