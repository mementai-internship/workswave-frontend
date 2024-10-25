import { useState } from 'react';
import { useForm } from 'react-hook-form';

import WorkingSettingPartForm from '@/components/BasicSetting/WorkingSetting/SetPart/SetPartForm';
import WorkingSettingSetPartItem from '@/components/BasicSetting/WorkingSetting/SetPart/SetPartItem';
import { useGetParts, usePatchParts, usePostParts } from '@/hooks/apis/useParts';
import { IPartsResponse } from '@/models/parts';

export default function WorkingSettingSetPart({ branchId }: { branchId: number }) {
  const {
    control: partControl,
    formState: partFormState,
    setValue: setPartValue,
    handleSubmit: handlePartSubmit,
    register: partRegister,
    watch: partWatch,
    reset: partReset,
  } = useForm<IPartsResponse>({
    defaultValues: {
      id: 0,
      name: '',
      task: '',
      color: '#dddddd',
      is_doctor: false,
      required_certification: false,
      leave_granting_authority: false,
    },
  });
  const [isEditingMode, setIsEditingMode] = useState<boolean>(false);

  const { data: parts } = useGetParts(branchId);
  const { mutate: postParts } = usePostParts(branchId);
  const { mutate: patchParts } = usePatchParts(branchId);

  const handleClickEditMode = (boolean: boolean) => {
    setIsEditingMode(boolean);
  };

  const onSubmitSettingPart = async (data: IPartsResponse) => {
    if (isEditingMode) {
      patchParts(data);

      partReset();
      setIsEditingMode(false);
    } else {
      postParts(data);
      partReset();
    }
    return data;
  };

  return (
    <div className="w-full flex border-b min-h-[600px] max-h-[calc(100vh-300px)]">
      <div className="flex flex-col gap-y-4 p-10 flex-1 overflow-y-scroll ">
        {parts &&
          !!parts.length &&
          parts.map(({ id, ...data }) => (
            <WorkingSettingSetPartItem
              key={id}
              id={id}
              branchId={branchId}
              setValue={setPartValue}
              onChangeEditMode={handleClickEditMode}
              {...data}
            />
          ))}
      </div>
      <WorkingSettingPartForm
        handleSubmit={handlePartSubmit}
        onChangeEditMode={handleClickEditMode}
        setValue={setPartValue}
        register={partRegister}
        watch={partWatch}
        onSubmit={onSubmitSettingPart}
        control={partControl}
        formState={partFormState}
        isEditingMode={isEditingMode}
        branchId={branchId}
        parts={parts}
      />
    </div>
  );
}
