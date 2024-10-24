import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import WageCalculateContainer from '@/components/BasicSetting/Wage/WageCalculateContainer';
import WageListContainer from '@/components/BasicSetting/Wage/WageListContainer';
import { useGetBranches } from '@/hooks/apis/useBranches';
import { useGetParts } from '@/hooks/apis/useParts';
import {
  useDeleteSalaryTemplates,
  useGetSalaryTemplates,
  usePatchSalaryTemplates,
  usePostSalaryTemplates,
} from '@/hooks/apis/useSalaryTemplates';
import { ISalaryTemplatesItem } from '@/models/salary-templates.model';

export type TWageEditMode = { isEdit: boolean; editItemId: number | null };

export default function WagePage() {
  const currentYear = dayjs().year();
  const { data: branchesDB } = useGetBranches('0');

  const [editMode, setEditMode] = useState<TWageEditMode>({ isEdit: false, editItemId: null });
  const [selectedBranchId, setSelectedBranchId] = useState<number>(1);
  const [selectedPartId, setSelectedPartId] = useState<number>(null);

  const { data: salaryTemplates } = useGetSalaryTemplates(selectedBranchId);
  const { data: parts } = useGetParts(selectedBranchId);

  const { mutate: postSalaryTemplate } = usePostSalaryTemplates(selectedBranchId);
  const { mutate: patchSalaryTemplate } = usePatchSalaryTemplates(selectedBranchId);
  const { mutate: deleteSalaryTemplate } = useDeleteSalaryTemplates(selectedBranchId);

  const { watch, control, handleSubmit, reset, setValue } = useForm<ISalaryTemplatesItem>({
    defaultValues: {
      id: null,
      part_id: null,
      part_name: null,
      name: '',
      is_january_entry: false,
      weekly_work_days: 5,
      month_salary: 0,
      included_holiday_allowance: false,
      included_job_allowance: false,
      hour_wage: 0,
      basic_salary: 0,
      contractual_working_hours: 0,
      weekly_rest_hours: 0,
      annual_salary: 0,
      comprehensive_overtime_allowance: 0,
      comprehensive_overtime_hour: 0,
      annual_leave_allowance: 0,
      annual_leave_allowance_hour: 0,
      annual_leave_allowance_day: 0,
    },
  });

  const monthSalaryInput = watch('month_salary');
  const workingDays = watch('weekly_work_days');

  // 월급입력하면 계산해서 폼 데이터 수정하기
  useEffect(() => {
    const annualSalary = monthSalaryInput * 12;
    const workingHour = (workingDays * 8 + 8) * 4.35;
    const hourWage = Math.ceil(monthSalaryInput / workingHour);
    setValue('annual_salary', annualSalary);
    setValue('basic_salary', monthSalaryInput);
    setValue('hour_wage', hourWage);
  }, [monthSalaryInput, workingDays, setValue]);

  const branches = branchesDB?.list?.map((branch) => ({ id: branch.id, name: branch.name })) ?? [];

  const onSubmit = handleSubmit((data) => {
    const newItem = {
      ...data,
      part_name: parts.find((part) => part.id === Number(data.part_id)).name,
    };

    if (editMode.isEdit) {
      // 수정하기
      patchSalaryTemplate(
        { salaryTemplateId: data.id, body: newItem },
        { onSuccess: () => reset() }
      );
    } else {
      // 새로운 아이템 추가하기
      postSalaryTemplate(newItem, { onSuccess: () => reset() });
    }
  });

  const activeEditMode = (id: number) => {
    setEditMode({ editItemId: id, isEdit: true });

    const item: ISalaryTemplatesItem = salaryTemplates.find((item) => item.id === id);
    Object.entries(item).forEach(([key, value]) =>
      setValue(key as keyof ISalaryTemplatesItem, value)
    );
  };

  const handleCloseEditMode = () => {
    setEditMode({ editItemId: null, isEdit: false });
    reset();
  };

  const handleSelectBranch = (id: string) => {
    setSelectedBranchId(Number(id));
  };

  const handleSelectPart = (id: string) => {
    setSelectedPartId(Number(id));
  };

  const handleDeleteItem = (id: number) => {
    deleteSalaryTemplate(id);
  };

  return (
    <div className="w-full mx-auto overflow-x-auto">
      <div className="bg-white flex min-w-[1500px] min-h-[600px]">
        <WageListContainer
          editMode={editMode}
          activeEditMode={activeEditMode}
          handleDeleteItem={handleDeleteItem}
          handleSelectPart={handleSelectPart}
          handleSelectBranch={handleSelectBranch}
          selectedBranchId={selectedBranchId}
          selectedPartId={selectedPartId}
          branches={branches}
          parts={parts}
          list={salaryTemplates}
        />
        <WageCalculateContainer
          editMode={editMode}
          currentYear={currentYear}
          onSubmit={onSubmit}
          control={control}
          positionOptions={parts}
          reset={reset}
          handleCloseEditMode={handleCloseEditMode}
        />
      </div>
    </div>
  );
}
