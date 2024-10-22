import { Box, Button } from '@radix-ui/themes';
import { Control, Controller, FieldErrors } from 'react-hook-form';

import HourlyRangeContainer from '@/components/BasicSetting/HourlyRange/HourlyRangeContainer';
import HourlyRangeErrorMessage from '@/components/BasicSetting/HourlyRange/HourlyRangeErrorMessage';
import HourlyRangeInput from '@/components/BasicSetting/HourlyRange/HourlyRangeInput';
import HourlyRangeInputContainer from '@/components/BasicSetting/HourlyRange/HourlyRangeInputContainer';
import HourlyRangeSelect, {
  THourlyRangeSelectType,
} from '@/components/BasicSetting/HourlyRange/HourlyRangeSelect';
import { IHourWageTemplatesForm } from '@/models/hour-wage-templates';
import { THourlyRangeEditMode } from '@/pages/basicSetting/HourlyRangePage';

interface IProps {
  parts: THourlyRangeSelectType;
  control: Control<IHourWageTemplatesForm>;
  onSubmit: () => void;
  editMode: THourlyRangeEditMode;
  handleCloseEditMode: () => void;
  formErrors: FieldErrors<IHourWageTemplatesForm>;
}

export default function HourlyRangeCreate({
  parts,
  onSubmit,
  control,
  handleCloseEditMode,
  editMode,
  formErrors,
}: IProps) {
  const hourValidationRules = {
    required: '시간을 입력해주세요',
    min: { value: 0, message: '유효한 시간을 입력해주세요. (0 이상)' },
    max: { value: 23, message: '유효한 시간을 입력해주세요. (23 이하)' },
  };
  const minutesValidationRules = {
    required: '시간을 입력해주세요',
    min: { value: 0, message: '유효한 시간을 입력해주세요. (0 이상)' },
    max: { value: 59, message: '유효한 시간을 입력해주세요. (59 이하)' },
  };

  return (
    <HourlyRangeContainer title="시급입력" width="w-[30%]">
      <form onSubmit={onSubmit} className="px-4 py-6 w-full">
        <div className="flex flex-col gap-2 w-full mb-4">
          <fieldset className="flex gap-2 items-center">
            <label className="w-24 text-sm font-bold">템플릿명</label>
            <Controller
              name="name"
              control={control}
              rules={{ required: '템플릿명을 입력해주세요.' }}
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <HourlyRangeInput
                  placeholder="템플릿명"
                  name="name"
                  value={value}
                  onChange={onChange}
                  error={error}
                  required
                />
              )}
            />
          </fieldset>
          {formErrors?.name && <HourlyRangeErrorMessage message={formErrors.name.message} />}

          <fieldset className="flex gap-2 items-center">
            <label className="w-24 text-sm font-bold">직책</label>
            <Controller
              name="part_id"
              control={control}
              render={({ field: { value, onChange } }) => (
                <HourlyRangeSelect
                  isWidthFull
                  value={value}
                  content={parts}
                  isBorder
                  onChange={onChange}
                  defaultValue={value}
                  name="part_id"
                />
              )}
            />
          </fieldset>
        </div>

        <Box className="flex flex-col h-4/6 gap-2 bg-gray-10 p-5 mb-4">
          <HourlyRangeInputContainer title="시업시간" width="w-20">
            <Controller
              name="start_time_hour"
              control={control}
              rules={hourValidationRules}
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <HourlyRangeInput
                  label="시"
                  name="start_time_hour"
                  value={value}
                  onChange={onChange}
                  error={error}
                  required
                />
              )}
            />
            <Controller
              name="start_time_minutes"
              control={control}
              rules={minutesValidationRules}
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <HourlyRangeInput
                  label="분"
                  name="start_time_minutes"
                  value={value}
                  onChange={onChange}
                  error={error}
                  required
                />
              )}
            />
          </HourlyRangeInputContainer>
          {formErrors?.start_time_hour && (
            <HourlyRangeErrorMessage message={formErrors.start_time_hour.message} />
          )}
          {formErrors?.start_time_minutes && (
            <HourlyRangeErrorMessage message={formErrors.start_time_minutes.message} />
          )}

          <HourlyRangeInputContainer title="종업시간" width="w-20">
            <Controller
              name="end_time_hour"
              control={control}
              rules={hourValidationRules}
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <HourlyRangeInput
                  label="시"
                  name="end_time_hour"
                  value={value}
                  onChange={onChange}
                  error={error}
                  required
                />
              )}
            />
            <Controller
              name="end_time_minutes"
              control={control}
              rules={minutesValidationRules}
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <HourlyRangeInput
                  label="분"
                  name="end_time_minutes"
                  value={value}
                  onChange={onChange}
                  error={error}
                  required
                />
              )}
            />
          </HourlyRangeInputContainer>
          {formErrors?.end_time_hour && (
            <HourlyRangeErrorMessage message={formErrors.end_time_hour.message} />
          )}
          {formErrors?.end_time_minutes && (
            <HourlyRangeErrorMessage message={formErrors.end_time_minutes.message} />
          )}

          <HourlyRangeInputContainer title="시급" width="w-20">
            <Controller
              name="hour_wage"
              control={control}
              rules={{
                required: '시급은 필수 입력입니다.',
                min: { value: 0, message: '유효하지 않은 시급입니다. (0 이상)' },
              }}
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <HourlyRangeInput
                  label="원"
                  name="hour_wage"
                  value={value.toLocaleString()}
                  onChange={onChange}
                  error={error}
                  required
                />
              )}
            />
          </HourlyRangeInputContainer>
          {formErrors?.hour_wage && (
            <HourlyRangeErrorMessage message={formErrors.hour_wage.message} />
          )}

          <HourlyRangeInputContainer title="재택근무시급" width="w-20">
            <Controller
              name="home_hour_wage"
              control={control}
              rules={{
                min: { value: 0, message: '유효하지 않은 시급입니다. (0 이상)' },
              }}
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <HourlyRangeInput
                  label="원"
                  name="home_hour_wage"
                  value={value.toLocaleString()}
                  onChange={onChange}
                  error={error}
                />
              )}
            />
          </HourlyRangeInputContainer>
          {formErrors?.hour_wage && (
            <HourlyRangeErrorMessage message={formErrors.hour_wage.message} />
          )}
        </Box>

        <div className="flex justify-center gap-3">
          <Button size="3" className="bg-black" type="submit">
            {editMode.isEdit ? '수정하기' : '저장하기'}
          </Button>

          {editMode.isEdit && (
            <Button color="gray" size="3" onClick={() => handleCloseEditMode()}>
              취소
            </Button>
          )}
        </div>
      </form>
    </HourlyRangeContainer>
  );
}
