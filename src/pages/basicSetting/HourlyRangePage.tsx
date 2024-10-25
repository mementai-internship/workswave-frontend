import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import HourlyRangeCreate from '@/components/BasicSetting/HourlyRange/HourlyRangeCreate';
import HourlyRangeList from '@/components/BasicSetting/HourlyRange/HourlyRangeList';
import { THourlyRangeSelectType } from '@/components/BasicSetting/HourlyRange/HourlyRangeSelect';
import { useGetBranches } from '@/hooks/apis/useBranches';
import {
  useDeleteHourWageTemplates,
  useGetHourWageTemplates,
  usePatchHourWageTemplates,
  usePostHourWageTemplates,
} from '@/hooks/apis/useHourWageTemplates';
import { useGetParts } from '@/hooks/apis/useParts';
import { IHourWageTemplatesForm } from '@/models/hour-wage-templates';
import { convertFormToTemplate, convertTemplateToForm } from '@/utils/convertHourWageTemplates';

export type THourlyRangeEditMode = { editItemId: null | number; isEdit: boolean };

export default function HourlyRangePage() {
  const { data: branchesDB, isLoading } = useGetBranches('0');
  const [selectedBranchId, setSelectedBranchId] = useState<number | null>(null);
  const [selectPartId, setSelectPartId] = useState<number | null>(null);
  const [editMode, setEditMode] = useState<THourlyRangeEditMode>({
    isEdit: false,
    editItemId: null,
  });

  const {
    reset,
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IHourWageTemplatesForm>({
    mode: 'onChange',
    defaultValues: {
      id: null,
      part_id: 0,
      name: '',
      start_time_hour: 0,
      start_time_minutes: 0,
      end_time_hour: 0,
      end_time_minutes: 0,
      hour_wage: 0,
      home_hour_wage: 0,
    },
  });

  const { data: hourWageTemplates, refetch: refetchGetHourWageTemplates } =
    useGetHourWageTemplates(selectedBranchId);
  const { mutate: postHourWageTemplates } = usePostHourWageTemplates(selectedBranchId);
  const { mutate: patchHourWageTemplates } = usePatchHourWageTemplates(selectedBranchId);
  const { mutate: deleteHourWageTemplates } = useDeleteHourWageTemplates(selectedBranchId);
  const { data: dbParts } = useGetParts(selectedBranchId);

  useEffect(() => {
    if (branchesDB) {
      setSelectedBranchId(branchesDB.list[0].id);
    }
  }, [branchesDB]);

  const branches: THourlyRangeSelectType =
    branchesDB?.list?.map((branch) => ({ id: branch.id, name: branch.name })) || [];

  const parts = dbParts?.reduce<THourlyRangeSelectType>(
    (acc, part) => [...acc, { id: part.id, name: part.name }],
    [{ id: 0, name: '공통' }]
  );

  const list: IHourWageTemplatesForm[] = hourWageTemplates?.map((template) =>
    convertTemplateToForm(template)
  );

  const handleSelectBranch = (id: string) => {
    setSelectedBranchId(Number(id));
  };

  const handleSelectPart = (id: string) => {
    setSelectPartId(Number(id));
  };

  const activateEditMode = (id: number) => {
    setEditMode({ editItemId: id, isEdit: true });

    const item = list.find((item) => item.id === id);
    Object.entries(item).forEach(([key, value]) =>
      setValue(key as keyof IHourWageTemplatesForm, value)
    );
  };

  const handleCloseEditMode = () => {
    setEditMode({ editItemId: null, isEdit: false });
    reset();
  };

  const handleDeleteItem = (id: number) => {
    deleteHourWageTemplates(id, {
      onSuccess: () => {
        refetchGetHourWageTemplates();
      },
    });
  };

  const onSubmit = handleSubmit((data: IHourWageTemplatesForm) => {
    const convertedData = convertFormToTemplate(data);

    if (convertedData.end_time < convertedData.start_time) {
      alert('종업시간이 시업시간보다 이를 수는 없습니다.');
      return;
    }

    if (editMode.isEdit) {
      patchHourWageTemplates(
        { data: convertedData, templateId: editMode.editItemId },
        {
          onSuccess: () => {
            refetchGetHourWageTemplates();
            reset();
            setEditMode({ editItemId: null, isEdit: false });
          },
        }
      );
    } else {
      postHourWageTemplates(convertedData, {
        onSuccess: () => {
          refetchGetHourWageTemplates();
          reset();
          setEditMode({ editItemId: null, isEdit: false });
        },
      });
    }
  });

  return (
    <div className="w-full overflow-x-scroll overflow-y-scroll max-h-[calc(100vh-200px)]">
      <div className="flex items-start gap-1 min-w-[1120px] h-full">
        {!isLoading && (
          <>
            <HourlyRangeList
              editMode={editMode}
              branches={branches}
              parts={parts}
              list={list}
              selectedBranchId={selectedBranchId}
              activateEditMode={activateEditMode}
              handleDeleteItem={handleDeleteItem}
              handleSelectBranch={handleSelectBranch}
              handleSelectPart={handleSelectPart}
              selectPartId={selectPartId}
            />
            <HourlyRangeCreate
              control={control}
              onSubmit={onSubmit}
              editMode={editMode}
              handleCloseEditMode={handleCloseEditMode}
              formErrors={errors}
              parts={parts}
            />
          </>
        )}
      </div>
    </div>
  );
}
