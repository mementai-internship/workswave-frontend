import HourlyRangeContainer from '@/components/BasicSetting/HourlyRange/HourlyRangeContainer';
import HourlyRangeInput from '@/components/BasicSetting/HourlyRange/HourlyRangeInput';
import HourlyRangeInputContainer from '@/components/BasicSetting/HourlyRange/HourlyRangeInputContainer';
import HourlyRangeSelect from '@/components/BasicSetting/HourlyRange/HourlyRangeSelect';
import { useHourlyRange } from '@/hooks/useHourlyRange';
import { Box, Button } from '@radix-ui/themes';

export default function HourlyRangeCreate() {
  const { isEditMode, handleCloseEditMode, onSubmit, register, control, DUMMY_DATA_POSITION } =
    useHourlyRange();

  return (
    <HourlyRangeContainer title="시급입력" width="w-[30%]">
      <form onSubmit={onSubmit} className="px-4 py-6 w-full h-full">
        <div className="flex flex-col gap-2 w-full mb-4">
          <fieldset className="flex gap-2 items-center">
            <label className="w-28 text-sm font-bold">템플릿명</label>
            <HourlyRangeInput
              type="text"
              placeholder="템플릿명"
              {...register('templateName')}
              name="templateName"
              control={control}
            />
          </fieldset>
          <fieldset className="flex gap-2 items-center">
            <label className="w-28 text-sm font-bold">직책</label>
            <HourlyRangeSelect
              content={DUMMY_DATA_POSITION}
              isBorder
              defaultValue="ROLE_004"
              register={register}
              name="positionId"
              control={control}
            />
          </fieldset>
        </div>

        <Box className="flex flex-col h-4/6 gap-2 bg-gray-10 p-2 p-5 mb-4">
          <HourlyRangeInputContainer title="시업시간" width="w-20">
            <HourlyRangeInput
              label="시"
              {...register('startTimeHour')}
              name="startTimeHour"
              control={control}
            />
            <HourlyRangeInput
              label="분"
              {...register('startTimeMinute')}
              name="startTimeMinute"
              control={control}
            />
          </HourlyRangeInputContainer>

          <HourlyRangeInputContainer title="종업시간" width="w-20">
            <HourlyRangeInput
              label="시"
              {...register('endTimeHour')}
              name="endTimeHour"
              control={control}
            />
            <HourlyRangeInput
              label="분"
              {...register('endTimeMinute')}
              name="endTimeMinute"
              control={control}
            />
          </HourlyRangeInputContainer>

          <HourlyRangeInputContainer title="시급" width="w-20">
            <HourlyRangeInput
              label="원"
              {...register('hourlyWage')}
              name="hourlyWage"
              control={control}
            />
          </HourlyRangeInputContainer>

          <HourlyRangeInputContainer title="재택근무시급" width="w-20">
            <HourlyRangeInput
              label="원"
              {...register('remoteHourlyWage')}
              name="remoteHourlyWage"
              control={control}
            />
          </HourlyRangeInputContainer>
        </Box>

        <div className="flex justify-center gap-3">
          <Button size="3" style={{ backgroundColor: '#000000' }} type="submit">
            {isEditMode ? '수정하기' : '저장하기'}
          </Button>

          {isEditMode && (
            <Button color="gray" size="3" onClick={() => handleCloseEditMode()}>
              취소
            </Button>
          )}
        </div>
      </form>
    </HourlyRangeContainer>
  );
}
