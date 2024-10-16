import WorkingSettingPartForm from '@/components/BasicSetting/WorkingSetting/SetPart/SetPartForm';
import WorkingSettingSetPartItem from '@/components/BasicSetting/WorkingSetting/SetPart/SetPartItem';
import { WORKING_SETTING_PART_RESPONSE } from '@/constants/workingSetting.mock';
import { IWorkingSettingPartResponse } from '@/models/workingSetting.model';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function WorkingSettingSetPart() {
  const [isEditingMode, setIsEditingMode] = useState<boolean>(false);
  const {
    setValue: setPartValue,
    control: partControl,
    formState: partFormState,
    handleSubmit: partHandleSubmit,
  } = useForm<IWorkingSettingPartResponse>({
    defaultValues: {
      id: 0,
      name: '',
      task: '',
      is_doctor: false,
      required_certification: false,
    },
  });

  // handleChange? onChange?
  const handleClickEditMode = (boolean: boolean) => {
    setIsEditingMode(boolean);
  };

  return (
    <div className="w-full flex border-b min-h-[600px] max-h-[calc(100vh-300px)]">
      <div className="flex flex-col gap-y-4 p-10 flex-1 overflow-y-scroll ">
        {WORKING_SETTING_PART_RESPONSE.map(({ id, ...data }) => (
          <WorkingSettingSetPartItem
            key={id}
            id={id}
            setValue={setPartValue}
            {...data}
            onChangeEditMode={handleClickEditMode}
          />
        ))}
      </div>
      <WorkingSettingPartForm
        handleSubmit={partHandleSubmit}
        onChangeEditMode={handleClickEditMode}
        setValue={setPartValue}
        control={partControl}
        formState={partFormState}
        isEditingMode={isEditingMode}
      />
    </div>
  );
}
