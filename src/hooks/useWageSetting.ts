import dayjs from 'dayjs';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { IWageSetting } from '@/models/wageSetting.model';

export interface IWageSettingEditMode {
  isEdit: boolean;
  itemId?: string;
}

export const useWageSetting = () => {
  const currentYear = dayjs().year();
  const [list, setList] = useState<IWageSetting[]>(DUMMY_DATA_WAGE);
  const [editMode, setEditMode] = useState<IWageSettingEditMode>({
    isEdit: false,
    itemId: undefined,
  });

  const { handleSubmit, control, reset, setValue } = useForm<IWageSetting>({
    defaultValues: {
      templateId: undefined,
      templateName: '',
      positionName: undefined,
      positionId: undefined,
      hireYear: currentYear,
      isJanuaryHire: false,
      workingDays: 5,
      monthlySalary: 0,
      hourlyWage: 0,
      baseSalary: 0,
      annualSalary: 0,
      includesHolidayAllowance: false,
      checksDutyAllowance: false,
      weeklyRestHours: 0,
      annualAllowanceDays: 0,
      annualLeaveHours: 0,
      inclusiveOvertimeAllowance: 0,
      overtimeHDays: 0,
      annualAllowance: 0,
      holidayAllowance: 0,
      holidayHours: 0,
      dutyAllowance: 0,
      mealAllowance: 0,
    },
  });

  const yearsArrayOptions = Array.from({ length: 21 }, (_, index) => index - 10).reduce(
    (acc, yearOffset) => {
      const year = currentYear + yearOffset;
      acc.push({ id: year, name: year + '년', action: () => {} });
      return acc;
    },
    []
  );

  const workingDaysOptions = Array.from({ length: 7 }).map((_, i) => ({
    id: i + 1,
    name: `${i + 1}일`,
  }));

  const onSubmit = handleSubmit((data: IWageSetting) => {
    if (!data.templateName || !data.positionId || !data.monthlySalary) {
      alert('입력되지 않은 값이 있습니다.');
      return;
    }

    const numberMonthlySalary = Number(data.monthlySalary);
    const calcData = {
      ...data,
      hourlySalary: calcHourlySalary(numberMonthlySalary),
      annualSalary: numberMonthlySalary * 12,
    };

    if (editMode.isEdit) {
      const editList = list.map((item) =>
        item.templateId === data.templateId ? { ...calcData } : item
      );
      setList(editList);
    } else {
      setList([...list, calcData]);
    }

    setEditMode({ itemId: undefined, isEdit: false });
  });

  const calcHourlySalary = (salary: number) => salary / 209;

  const handleOpenEditMode = (id?: string) => {
    setEditMode({ isEdit: true, itemId: id });
    if (id) {
      const currentEditItem = list.find((item) => item.templateId === id);
      Object.entries(currentEditItem).forEach(([key, value]) =>
        setValue(key as keyof typeof currentEditItem, value)
      );
    }
  };

  const handleCloseEditMode = () => {
    setEditMode({ itemId: undefined, isEdit: false });
    reset();
  };

  const handleDeleteItem = (id: string) => {
    const filteredList = list.filter((item) => item.templateId !== id);
    setList(filteredList);
  };

  return {
    data: list,
    currentYear,
    yearsArrayOptions,
    workingDaysOptions,
    positionOptions: POSITION_OPTIONS,
    control,
    onSubmit,
    reset,
    handleOpenEditMode,
    editMode,
    handleCloseEditMode,
    handleDeleteItem,
  };
};

const POSITION_OPTIONS = [
  { id: 1, name: '사원' },
  { id: 2, name: '매니저' },
  { id: 3, name: '임원' },
  { id: 4, name: '파트타이머' },
];
const DUMMY_DATA_WAGE = [
  {
    templateName: '기본 템플릿',
    templateId: 'TMP001',
    positionName: '사원',
    positionId: 1,
    hireYear: 2020,
    isJanuaryHire: true,
    workingDays: 5,
    monthlySalary: 3000000,
    hourlyWage: 187.5, // 시급 (3000000 / (20 days * 8 hours))
    baseSalary: 3000000, // 기본급
    annualSalary: 36000000, // 연봉 (3000000 * 12)
    includesHolidayAllowance: false,
    checksDutyAllowance: true,
    weeklyRestHours: 8,
    annualAllowanceDays: 15,
    annualLeaveHours: 120,
    inclusiveOvertimeAllowance: 200000,
    overtimeHDays: 10,
    annualAllowance: 150000,
    holidayAllowance: 50000,
    holidayHours: 5,
    dutyAllowance: 100000,
    mealAllowance: 200000,
  },
  {
    templateName: '매니저 템플릿',
    templateId: 'TMP002',
    positionName: '매니저',
    positionId: 2,
    hireYear: 2018,
    isJanuaryHire: false,
    workingDays: 5,
    monthlySalary: 4000000,
    hourlyWage: 250, // 시급 (4000000 / (20 days * 8 hours))
    baseSalary: 4000000, // 기본급
    annualSalary: 48000000, // 연봉 (4000000 * 12)
    includesHolidayAllowance: true,
    checksDutyAllowance: false,
    weeklyRestHours: 10,
    annualAllowanceDays: 12,
    annualLeaveHours: 100,
    inclusiveOvertimeAllowance: 300000,
    overtimeHDays: 15,
    annualAllowance: 200000,
    holidayAllowance: 60000,
    holidayHours: 8,
    dutyAllowance: 200000,
    mealAllowance: 250000,
  },
  {
    templateName: '임원 템플릿',
    templateId: 'TMP003',
    positionName: '임원',
    positionId: 3,
    hireYear: 2015,
    isJanuaryHire: true,
    workingDays: 5,
    monthlySalary: 6000000,
    hourlyWage: 375, // 시급 (6000000 / (20 days * 8 hours))
    baseSalary: 6000000, // 기본급
    annualSalary: 72000000, // 연봉 (6000000 * 12)
    includesHolidayAllowance: true,
    checksDutyAllowance: true,
    weeklyRestHours: 6,
    annualAllowanceDays: 20,
    annualLeaveHours: 150,
    inclusiveOvertimeAllowance: 400000,
    overtimeHDays: 20,
    annualAllowance: 300000,
    holidayAllowance: 80000,
    holidayHours: 10,
    dutyAllowance: 300000,
    mealAllowance: 300000,
  },
  {
    templateName: '파트타임 템플릿',
    templateId: 'TMP004',
    positionName: '파트타이머',
    positionId: 4,
    hireYear: 2021,
    isJanuaryHire: false,
    workingDays: 5,
    monthlySalary: 1500000,
    hourlyWage: 93.75, // 시급 (1500000 / (20 days * 8 hours))
    baseSalary: 1500000, // 기본급
    annualSalary: 18000000, // 연봉 (1500000 * 12)
    includesHolidayAllowance: false,
    checksDutyAllowance: false,
    weeklyRestHours: 4,
    annualAllowanceDays: 5,
    annualLeaveHours: 40,
    inclusiveOvertimeAllowance: 100000,
    overtimeHDays: 5,
    annualAllowance: 50000,
    holidayAllowance: 30000,
    holidayHours: 3,
    dutyAllowance: 50000,
    mealAllowance: 100000,
  },
];
