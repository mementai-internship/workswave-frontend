import { Button, Checkbox, TextField } from '@radix-ui/themes';
import { useState } from 'react';
import { Control, Controller, UseFormReset } from 'react-hook-form';
import { PiCaretDown, PiCaretUp, PiDeviceRotate } from 'react-icons/pi';

import WageAutoSettingRow from '@/components/BasicSetting/Wage/WageAutoSettingRow';
import WageContainer from '@/components/BasicSetting/Wage/WageContainer';
import WageFieldset from '@/components/BasicSetting/Wage/WageFieldset';
import WageSelect, { IWageSelectType } from '@/components/BasicSetting/Wage/WageSelect';
import { Txt } from '@/components/Common/Txt';
import useGetSalaryBracket from '@/hooks/apis/useSalaryBracket';
import { ISalaryTemplatesItem } from '@/models/salary-templates.model';
import { TWageEditMode } from '@/pages/basicSetting/WagePage';

interface IProps {
  positionOptions: IWageSelectType[];
  control: Control<ISalaryTemplatesItem>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  reset: UseFormReset<ISalaryTemplatesItem>;
  currentYear: number;
  editMode: TWageEditMode;
  handleCloseEditMode: () => void;
}

export default function WageCalculate({
  positionOptions,
  control,
  reset,
  onSubmit,
  editMode,
  handleCloseEditMode,
  currentYear,
}: IProps) {
  const { data: salaryBracket } = useGetSalaryBracket(currentYear.toString());
  const [isOpen, setIsOpen] = useState<boolean>(true);

  // 연차수당 일수 체크
  const [isAnnualLeaveAllowanceDayChecked, setIsAnnualLeaveAllowanceDayChecked] =
    useState<boolean>(false);
  // 연차시간 체크
  const [isAnnualLeaveAllowanceHourChecked, setIsAnnualLeaveAllowanceHourChecked] =
    useState<boolean>(false);
  // 주휴일
  const [isWeeklyRestHoursChecked, setIsWeeklyRestHoursChecked] = useState<boolean>(false);

  // 년도 옵션 (현재 년도 기준 앞뒤 10년)
  // const yearsArrayOptions = Array.from({ length: 21 }, (_, index) => index - 10).reduce(
  //   (acc, yearOffset) => {
  //     const year = currentYear + yearOffset;
  //     acc.push({ id: year, name: year + '년', action: () => {} });
  //     return acc;
  //   },
  //   []
  // );

  // 월급여를 입력하면 시급, 기본급, 연봉 계산...하기
  // 월급 * 12
  //

  // 근무일
  const workingDaysOptions = Array.from({ length: 7 }).map((_, i) => ({
    id: i + 1,
    name: `${i + 1}일`,
  }));

  return (
    <WageContainer
      title="연봉 계산기"
      width="w-[38%]"
      position="right"
      rightChild={<p>최저임금: {salaryBracket?.minimum_hourly_rate.toLocaleString()}원</p>}
    >
      <form onSubmit={onSubmit}>
        <div className="flex ">
          {/* left */}
          <div className="flex flex-col flex-1 p-6 gap-2">
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <WageFieldset label="템플릿명">
                  <TextField.Root placeholder="템플릿명" value={value} onChange={onChange} />
                </WageFieldset>
              )}
            />

            <WageFieldset label="직책명">
              <Controller
                control={control}
                name="part_id"
                render={({ field: { value, onChange } }) => (
                  <WageSelect
                    placeholder="직책 선택"
                    content={positionOptions}
                    defaultValue={value}
                    onChange={onChange}
                  />
                )}
              />
            </WageFieldset>

            <WageFieldset label="입사년도">
              <div>
                {/* <Controller
                  name="hireYear"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <WageSelect
                      defaultValue={value}
                      content={yearsArrayOptions}
                      onChange={onChange}
                    />
                  )}
                /> */}
                <div className="flex gap-2 items-center mt-1">
                  <Controller
                    control={control}
                    name="is_january_entry"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <Checkbox
                        size="1"
                        onBlur={onBlur}
                        ref={ref}
                        checked={value}
                        onClick={() => {
                          onChange(!value);
                        }}
                      />
                    )}
                  />
                  <Txt variant="caption">1월 입사</Txt>
                </div>
              </div>
            </WageFieldset>

            <WageFieldset label="근무일 수">
              <Controller
                name="weekly_work_days"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <WageSelect
                    defaultValue={value}
                    content={workingDaysOptions}
                    onChange={onChange}
                  />
                )}
              />
            </WageFieldset>

            <WageFieldset
              label="월 급여"
              extraChildren={
                <>
                  <div className="flex items-center gap-1">
                    <Controller
                      name="included_holiday_allowance"
                      control={control}
                      render={({ field: { onChange, value, ref } }) => (
                        <Checkbox
                          size="1"
                          ref={ref}
                          checked={value}
                          onClick={() => onChange(!value)}
                        />
                      )}
                    />

                    <Txt variant="caption">휴일수당 포함</Txt>
                  </div>
                  <div className="flex items-center gap-1">
                    <Controller
                      control={control}
                      name="included_job_allowance"
                      render={({ field: { onChange, value, ref } }) => (
                        <Checkbox
                          size="1"
                          ref={ref}
                          checked={value}
                          onClick={() => {
                            onChange(!value);
                          }}
                        />
                      )}
                    />

                    <Txt variant="caption">직무수당</Txt>
                  </div>
                </>
              }
            >
              <Controller
                name="month_salary"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField.Root
                    type="text"
                    onChange={onChange}
                    value={value}
                    placeholder="월 급여"
                  />
                )}
              />
            </WageFieldset>

            <WageFieldset label="시급">
              <Controller
                name="hour_wage"
                control={control}
                render={({ field: { value } }) => (
                  <TextField.Root placeholder="0" value={value} className="bg-gray" disabled>
                    <TextField.Slot side="right">원</TextField.Slot>
                  </TextField.Root>
                )}
              />
            </WageFieldset>

            <WageFieldset
              label="기본급"
              extraChildren={
                <>
                  <div className="flex items-center justify-between">
                    <Txt variant="caption">소정근로시간</Txt>
                    <TextField.Root
                      size="1"
                      placeholder="0"
                      disabled
                      className="bg-gray"
                      style={{
                        width: '32px',
                        textAlign: 'center',
                      }}
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-1">
                      <Txt variant="caption">주휴일 (시간)</Txt>
                      <Checkbox
                        size="1"
                        onClick={() => setIsWeeklyRestHoursChecked(!isWeeklyRestHoursChecked)}
                      />
                      <Txt variant="caption">직접입력</Txt>
                    </div>
                    <Controller
                      name="weekly_rest_hours"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextField.Root
                          size="1"
                          placeholder="0"
                          className="bg-gray"
                          value={value}
                          type="text"
                          onChange={onChange}
                          disabled={!isWeeklyRestHoursChecked}
                          style={{
                            width: '32px',
                            textAlign: 'center',
                          }}
                        />
                      )}
                    />
                  </div>
                </>
              }
            >
              <Controller
                name="basic_salary"
                control={control}
                render={({ field: { value } }) => (
                  <TextField.Root placeholder="0" value={value} className="bg-gray" disabled>
                    <TextField.Slot side="right">원</TextField.Slot>
                  </TextField.Root>
                )}
              />
            </WageFieldset>

            <WageFieldset label="연봉">
              <Controller
                name="annual_salary"
                control={control}
                render={({ field: { value } }) => (
                  <TextField.Root placeholder="0" value={value} className="bg-gray" disabled>
                    <TextField.Slot side="right">원</TextField.Slot>
                  </TextField.Root>
                )}
              />
            </WageFieldset>
          </div>

          {/* right */}
          <div className="flex-1 p-3 pl-0">
            <Txt
              variant="caption"
              role="button"
              className="flex items-center gap-1 justify-end mb-3"
              onClick={() => setIsOpen(!isOpen)}
            >
              자동설정 {isOpen ? <PiCaretUp /> : <PiCaretDown />}
            </Txt>

            {isOpen && (
              <div className="bg-gray-10 p-3 h-[95%]">
                <div className="mb-4">
                  <WageAutoSettingRow>
                    <Txt color="gray-50" variant="caption">
                      포괄산정 연장근로시간
                    </Txt>
                    <div className="flex items-center">
                      <div className="w-8">
                        <Controller
                          name="annual_leave_allowance_day"
                          control={control}
                          render={({ field: { value } }) => (
                            <TextField.Root value={value} readOnly disabled />
                          )}
                        />
                      </div>
                      <Txt variant="caption">시간</Txt>
                    </div>
                  </WageAutoSettingRow>

                  <WageAutoSettingRow>
                    <Txt color="gray-50" variant="caption">
                      포괄산정 연장근로수당
                    </Txt>
                    <div className="flex items-center">
                      <div className="w-20">
                        <Controller
                          name="annual_leave_allowance_day"
                          control={control}
                          render={({ field: { value } }) => (
                            <TextField.Root value={value} readOnly disabled />
                          )}
                        />
                      </div>
                      <Txt variant="caption">원</Txt>
                    </div>
                  </WageAutoSettingRow>
                </div>

                <WageAutoSettingRow>
                  <div className="flex gap-1 items-center">
                    <Txt color="gray-50" variant="caption">
                      연차수당 일수
                    </Txt>

                    <Checkbox
                      onClick={() =>
                        setIsAnnualLeaveAllowanceDayChecked(!isAnnualLeaveAllowanceDayChecked)
                      }
                    />
                    <Txt variant="caption">직접입력</Txt>
                  </div>
                  <div className="w-12">
                    <Controller
                      name="annual_leave_allowance_day"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextField.Root
                          value={value}
                          onChange={onChange}
                          disabled={!isAnnualLeaveAllowanceDayChecked}
                        />
                      )}
                    />
                  </div>
                </WageAutoSettingRow>

                <WageAutoSettingRow>
                  <div className="flex gap-1 items-center">
                    <Txt color="gray-50" variant="caption">
                      연차시간
                    </Txt>
                    <Checkbox
                      onClick={() =>
                        setIsAnnualLeaveAllowanceHourChecked(!isAnnualLeaveAllowanceHourChecked)
                      }
                    />
                    <Txt variant="caption">직접입력</Txt>
                  </div>
                  <div className="w-8">
                    <Controller
                      name="annual_leave_allowance_hour"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextField.Root
                          value={value}
                          onChange={onChange}
                          disabled={!isAnnualLeaveAllowanceHourChecked}
                        />
                      )}
                    />
                  </div>
                </WageAutoSettingRow>

                <WageAutoSettingRow>
                  <Txt color="gray-50" variant="caption">
                    연차수당
                  </Txt>
                  <div className="w-24">
                    <Controller
                      name="annual_leave_allowance"
                      control={control}
                      render={() => (
                        <Controller
                          name="annual_leave_allowance_hour"
                          control={control}
                          render={({ field: { value } }) => (
                            <TextField.Root readOnly disabled value={value} />
                          )}
                        />
                      )}
                    />
                  </div>
                </WageAutoSettingRow>
              </div>
            )}
            <div
              className="flex gap-1 text-gray-50 text-xs justify-end items-center mt-2"
              role="button"
              onClick={() => reset()}
            >
              <PiDeviceRotate />
              초기화
            </div>
          </div>
        </div>
        <div className="flex justify-center my-4 gap-2">
          <Button type="submit" className="bg-black" size="3">
            {editMode.isEdit ? '수정' : '저장'}하기
          </Button>
          {editMode.isEdit && (
            <Button color="gray" size="3" onClick={handleCloseEditMode}>
              취소
            </Button>
          )}
        </div>
      </form>
    </WageContainer>
  );
}
