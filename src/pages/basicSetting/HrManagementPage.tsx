import { Select } from '@radix-ui/themes';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import HrManagementForm from '@/components/BasicSetting/HrManagement/HrManagementForm';
import HrManagementItem from '@/components/BasicSetting/HrManagement/HrManagementItem';
import Title from '@/components/Common/Title';
import { Txt } from '@/components/Common/Txt';
import { useGetBranches } from '@/hooks/apis/useBranches';
import { IHrRequest, IHrResponse } from '@/models/hr.model';

const HRITEM: IHrResponse[] = [
  {
    id: 1,
    name: '인사기록',
    categoryDivision: true,
  },
  {
    id: 2,
    name: '출퇴근',
    categoryDivision: false,
  },
  {
    id: 3,
    name: '휴가',
    categoryDivision: false,
  },
];

export default function HrManagementSettingPage() {
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [currentBranch, setCurrentBranch] = useState({ id: null, name: '' });
  const { data } = useGetBranches('0');
  const branches = data?.list;

  const {
    handleSubmit: hrHandleSubmit,
    setValue: hrSetValue,
    register: hrRegister,
    watch: hrWatch,
    reset: hrReset,
  } = useForm<IHrRequest>({
    defaultValues: {
      id: 0,
      name: '',
      categoryDivision: true,
    },
  });

  const handleChangeEditMode = (boolean: boolean) => {
    setIsEditingMode(boolean);
  };

  const handleChangeBranch = (branchId: string) => {
    const selectedBranch = branches.find((branch) => branch.id.toString() === branchId);
    setCurrentBranch({ ...selectedBranch, id: selectedBranch.id, name: selectedBranch.name });
  };

  return (
    <section className="w-full mx-auto flex p-5 gap-x-2 overflow-x-auto">
      <section className="bg-white border min-w-[600px] grow overflow-y-scroll h-[calc(100vh-100px)]">
        <div className="flex items-center justify-between gap-x-8 px-10 py-5 sticky top-0 left-0 z-[2] bg-white border-b">
          <Title content="지점명" />
          {branches && branches.length > 1 ? (
            <div className="flex-1">
              <Select.Root
                value={currentBranch.id?.toString() || ''}
                onValueChange={(branch) => handleChangeBranch(branch)}
                size="3"
              >
                <Select.Trigger
                  variant="ghost"
                  className="text-xl font-bold"
                  placeholder="지점 선택"
                />
                <Select.Content>
                  <Select.Group className="p-2">
                    {branches.map(({ id, name }) => (
                      <Select.Item key={id} value={id.toString()}>
                        {name}
                      </Select.Item>
                    ))}
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </div>
          ) : (
            <div className="flex-1">
              <Txt variant="h5">{currentBranch.name}</Txt>
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col gap-y-3">
          {HRITEM.map((hrItem) => (
            <HrManagementItem
              key={hrItem.id}
              setValue={hrSetValue}
              onChangeEditMode={handleChangeEditMode}
              hrItem={hrItem}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-y-4 min-w-[540px] flex-1 h-[calc(100vh-100px)] overflow-y-scroll">
        <div className="border bg-white">
          <HrManagementForm
            isEditingMode={isEditingMode}
            handleSubmit={hrHandleSubmit}
            setValue={hrSetValue}
            register={hrRegister}
            watch={hrWatch}
            onChangeEditMode={handleChangeEditMode}
            reset={hrReset}
          />
        </div>
      </section>
    </section>
  );
}
