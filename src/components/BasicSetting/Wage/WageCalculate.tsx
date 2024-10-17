import { Button, Checkbox, TextField } from '@radix-ui/themes';
import { useState } from 'react';
import { Control, Controller, UseFormReset } from 'react-hook-form';
import { PiCaretDown, PiCaretUp, PiDeviceRotate } from 'react-icons/pi';

import WageAutoSettingRow from '@/components/BasicSetting/Wage/WageAutoSettingRow';
import WageContainer from '@/components/BasicSetting/Wage/WageContainer';
import WageFieldset from '@/components/BasicSetting/Wage/WageFieldset';
import WageSelect from '@/components/BasicSetting/Wage/WageSelect';
import { Txt } from '@/components/Common/Txt';
import { IWageSettingEditMode } from '@/hooks/useWageSetting';
import { IWageSetting } from '@/models/wageSetting.model';
import { validateOnBlurForInputNumber } from '@/utils/validateOnBlurForInputNumber';

type TOptionType = {
  id: number;
  name: string;
}[];

interface IProps {
  positionOptions: TOptionType;
  yearsArrayOptions: TOptionType;
  workingDaysOptions: TOptionType;
  control: Control<IWageSetting>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  reset: UseFormReset<IWageSetting>;
  currentYear: number;
  editMode: IWageSettingEditMode;
  handleCloseEditMode: () => void;
}

export default function WageCalculate({
  yearsArrayOptions,
  workingDaysOptions,
  positionOptions,
  control,
  reset,
  onSubmit,
  editMode,
  handleCloseEditMode,
}: IProps) {
  // 휴일수당 포함여부, 직무수당이 체크되었을 때 어떤 기능이 나오는지 알 수 없어서 사용하지는 않았음
  // const [includeHolidayAllowanceChecked, setIncludeHolidayAllowanceChecked] =  useState<boolean>(false); // 휴일수당 포함여부
  // const [includeDutyAllowanceChecked, setIncludeDutyAllowanceChecked] = useState<boolean>(false); // 직무수당 체크여부
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isHolidayWorkingHourChecked, setIsHolidayWorkingHourChecked] = useState<boolean>(false); // 주휴일(시간) 체크여부
  const [isCustomOvertimeAllowanceDaysChecked, setIsCustomOvertimeAllowanceDaysChecked] =
    useState<boolean>(false); // 연차수당 일수 체크여부
  const [isCustomOvertimeHoursChecked, setIsCustomOvertimeHoursChecked] = useState<boolean>(false); // 연차시간 체크여부

  return (
    <WageContainer title="연봉 계산기" width="w-[40%]" position="right">
      <form onSubmit={onSubmit}>
        <div className="flex ">
          <div className="flex flex-col flex-1 p-6 gap-2">
            <Controller
              control={control}
              name="templateName"
              render={({ field: { onChange, value } }) => (
                <WageFieldset label="템플릿명">
                  <TextField.Root placeholder="템플릿명" value={value} onChange={onChange} />
                </WageFieldset>
              )}
            />

            <WageFieldset label="직책명">
              <WageSelect
                placeholder="직책 선택"
                name="positionId"
                content={positionOptions}
                control={control}
              />
            </WageFieldset>

            <WageFieldset label="입사년도">
              <div>
                <WageSelect name="hireYear" content={yearsArrayOptions} control={control} />
                <div className="flex gap-2 items-center mt-1">
                  <Controller
                    control={control}
                    name="isJanuaryHire"
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
              <WageSelect name="workingDays" content={workingDaysOptions} control={control} />
            </WageFieldset>

            <WageFieldset
              label="월 급여"
              extraChildren={
                <>
                  <div className="flex items-center gap-1">
                    <Controller
                      name="includesHolidayAllowance"
                      control={control}
                      render={({ field: { onChange, onBlur, value, ref } }) => (
                        <Checkbox
                          size="1"
                          onBlur={onBlur}
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
                      name="checksDutyAllowance"
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

                    <Txt variant="caption">직무수당</Txt>
                  </div>
                </>
              }
            >
              <Controller
                name="monthlySalary"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField.Root
                    type="text"
                    onChange={onChange}
                    value={value}
                    onBlur={() => {
                      const finalValue = validateOnBlurForInputNumber(value, '원');
                      onChange(finalValue);
                      onBlur();
                    }}
                    placeholder="월 급여"
                  />
                )}
              />
            </WageFieldset>

            <WageFieldset label="시급">
              <Controller
                name="hourlyWage"
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
                        onClick={() => setIsHolidayWorkingHourChecked(!isHolidayWorkingHourChecked)}
                      />
                      <Txt variant="caption">직접입력</Txt>
                    </div>
                    <Controller
                      name="weeklyRestHours"
                      control={control}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <TextField.Root
                          size="1"
                          placeholder="0"
                          className="bg-gray"
                          value={value}
                          type="text"
                          onChange={onChange}
                          onBlur={() => {
                            const finalValue = validateOnBlurForInputNumber(value, '시');
                            onChange(Number(finalValue));
                            onBlur();
                          }}
                          readOnly={!isHolidayWorkingHourChecked}
                          disabled={!isHolidayWorkingHourChecked}
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
                name="baseSalary"
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
                name="annualSalary"
                control={control}
                render={({ field: { value } }) => (
                  <TextField.Root placeholder="0" value={value} className="bg-gray" disabled>
                    <TextField.Slot side="right">원</TextField.Slot>
                  </TextField.Root>
                )}
              />
            </WageFieldset>
          </div>

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
                  <WageAutoSettingRow
                    leftChild={
                      <Txt color="gray-50" variant="caption">
                        포괄산정 연장근로시간
                      </Txt>
                    }
                    caption="시간"
                    value="0"
                  />
                  <WageAutoSettingRow
                    leftChild={
                      <Txt color="gray-50" variant="caption">
                        포괄산정 연장근로수당
                      </Txt>
                    }
                    value="0"
                    caption="원"
                  />
                </div>
                <WageAutoSettingRow
                  leftChild={
                    <div className="flex gap-1 items-center">
                      <Txt color="gray-50" variant="caption">
                        연차수당 일수
                      </Txt>
                      <Checkbox
                        onClick={() =>
                          setIsCustomOvertimeAllowanceDaysChecked(
                            !isCustomOvertimeAllowanceDaysChecked
                          )
                        }
                      />
                      <Txt variant="caption">직접입력</Txt>
                    </div>
                  }
                  readonly={!isCustomOvertimeAllowanceDaysChecked}
                  name="annualAllowanceDays"
                  caption="일"
                  control={control}
                  maxCount={31}
                />
                <WageAutoSettingRow
                  leftChild={
                    <div className="flex gap-1 items-center">
                      <Txt color="gray-50" variant="caption">
                        연차시간
                      </Txt>
                      <Checkbox
                        onClick={() =>
                          setIsCustomOvertimeHoursChecked(!isCustomOvertimeHoursChecked)
                        }
                      />
                      <Txt variant="caption">직접입력</Txt>
                    </div>
                  }
                  readonly={!isCustomOvertimeHoursChecked}
                  name="annualLeaveHours"
                  caption="시간"
                  control={control}
                  maxCount={23}
                />
                <WageAutoSettingRow
                  leftChild={
                    <Txt color="gray-50" variant="caption">
                      연차수당
                    </Txt>
                  }
                  value="0"
                  caption="원"
                  control={control}
                  name="annualAllowance"
                />
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
