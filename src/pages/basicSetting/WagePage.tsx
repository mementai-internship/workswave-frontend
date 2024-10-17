import WageCalculate from '@/components/BasicSetting/Wage/WageCalculate';
import WageList from '@/components/BasicSetting/Wage/WageList';
import { useWageSetting } from '@/hooks/useWageSetting';

export default function WagePage() {
  const {
    data,
    currentYear,
    yearsArrayOptions,
    workingDaysOptions,
    positionOptions,
    control,
    onSubmit,
    reset,
    handleOpenEditMode,
    editMode,
    handleCloseEditMode,
    handleDeleteItem,
  } = useWageSetting();

  return (
    <div className="w-full bg-white flex">
      <WageList
        editMode={editMode}
        handleOpenEditMode={handleOpenEditMode}
        handleDeleteItem={handleDeleteItem}
        positionOptions={positionOptions}
        list={data}
      />
      <WageCalculate
        editMode={editMode}
        currentYear={currentYear}
        yearsArrayOptions={yearsArrayOptions}
        workingDaysOptions={workingDaysOptions}
        onSubmit={onSubmit}
        control={control}
        positionOptions={positionOptions}
        reset={reset}
        handleCloseEditMode={handleCloseEditMode}
      />
    </div>
  );
}
