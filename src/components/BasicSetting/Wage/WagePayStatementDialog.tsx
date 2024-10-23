import { Button, CheckboxCards, Dialog, Select } from '@radix-ui/themes';
import { Controller, useForm } from 'react-hook-form';
import { PiGear } from 'react-icons/pi';

import WagePayStatementFiled from '@/components/BasicSetting/Wage/WagePayStatementField';
import { Txt } from '@/components/Common/Txt';

// 옵션의 타입
interface IWageStatementOption {
  name: string;
  id: number;
}

// 디비 스키마에 맞춰서 변경되어야합니다.
interface IWagePayStatement {
  working_days: number;
  default_hourly_wage: IWageStatementOption[];
  regular_employee_calculation: {
    unuse_leave_pay: IWageStatementOption[];
    extra_overtime_pay: IWageStatementOption[];
    extra_holiday_pay: IWageStatementOption[];
    annual_leave_deduction: IWageStatementOption[];
    work_deduction: IWageStatementOption[];
  };
  partTime_calculation: IWageStatementOption[];
}

export default function WagePayStatement() {
  const daysOptions = Array(30)
    .fill(0)
    .map((_, i) => ({ id: i + 1, name: i + 1 }));

  const part_checkbox_grid_Style = 'grid-cols-[repeat(auto-fit,minmax(120px,1fr))]';

  // 파트타이머 입금설정내역 (디비에서 가져올지, 프론트엔드에서 처리할지 정하시고 수정하시면 됩니다.)
  const partTimerOptions = [
    { id: 1, name: '기본급(평일)' },
    { id: 2, name: '기본급(재택)' },
    { id: 3, name: '연차수당' },
    { id: 4, name: '연장근로수당' },
    { id: 5, name: '휴일근로수당' },
  ];

  // 임금명세서 기본 설정 가져오는 로직
  // 파트 정보 가져오는 로직 또는 임금설정 페이지에서 파트 전달

  const { control } = useForm<IWagePayStatement>({
    defaultValues: {
      working_days: 30,
      default_hourly_wage: [],
      regular_employee_calculation: {
        unuse_leave_pay: [
          { id: 1, name: '간호조무사' },
          { id: 2, name: '상담실장' },
          { id: 3, name: '의사' },
          { id: 4, name: '코디네이터' },
          { id: 5, name: '피부관리사' },
        ],
        extra_overtime_pay: [{ id: 3, name: '의사' }],
        extra_holiday_pay: [
          { id: 2, name: '상담실장' },
          { id: 3, name: '의사' },
        ],
        annual_leave_deduction: [],
        work_deduction: [],
      },
      partTime_calculation: [
        { name: '기본급(평일)', id: 1 },
        { name: '연차수당', id: 3 },
        { name: '연장근로수당', id: 4 },
      ],
    },
  });

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button color="gray" variant="outline">
          <PiGear />
          임금명세서설정
        </Button>
      </Dialog.Trigger>
      <Dialog.Content size="3" maxWidth="700px">
        <Dialog.Title className="absolute t-0 l-0 text-transparent">임금명세서 설정</Dialog.Title>
        <div className="h-full">
          <div className="mb-4 border-b border-b-zinc-300 pb-5">
            <Txt variant="h4">임금명세서 설정</Txt>
          </div>
          <form className="h-[calc(100vh-250px)] overflow-y-scroll">
            <WagePayStatementFiled title="급여지급일 지정">
              <div className="flex gap-2 items-center">
                <label>매월</label>
                <Controller
                  name="working_days"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select.Root defaultValue={value.toString()} onValueChange={onChange}>
                      <Select.Trigger placeholder="선택" />
                      <Select.Content>
                        {daysOptions.map((day) => (
                          <Select.Item value={day.id.toString()} key={day.id}>
                            {day.name}
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select.Root>
                  )}
                />
                <p>일</p>
              </div>
            </WagePayStatementFiled>

            <WagePayStatementFiled title="기준시급 설정" subTitle="계약서 기준">
              <Controller
                name="default_hourly_wage"
                control={control}
                render={({ field }) => (
                  <CheckboxCards.Root
                    className="grid-cols-[auto,auto,auto]"
                    defaultValue={field.value.map((p) => p.id.toString())}
                    // onValueChange={}
                  >
                    {DUMMY_DATA_PAY_STATEMENT.map((part) => (
                      <CheckboxCards.Item className="w-32" value={part.id.toString()}>
                        {part.name}
                      </CheckboxCards.Item>
                    ))}
                  </CheckboxCards.Root>
                )}
              />
            </WagePayStatementFiled>

            <WagePayStatementFiled title="계산방법 표시여부" subTitle="상용근무자">
              <div className="my-2">
                <Txt>1. 미사용연차수당</Txt>
                <Controller
                  name="regular_employee_calculation.unuse_leave_pay"
                  control={control}
                  render={({ field }) => (
                    <CheckboxCards.Root
                      className={part_checkbox_grid_Style}
                      defaultValue={field.value.map((p) => p.id.toString())}
                    >
                      {DUMMY_DATA_PARTS.map((part) => (
                        <CheckboxCards.Item value={part.id.toString()}>
                          {part.name}
                        </CheckboxCards.Item>
                      ))}
                    </CheckboxCards.Root>
                  )}
                />
              </div>

              <div className="my-2">
                <Txt>2. 추가시간외수당</Txt>
                <Controller
                  control={control}
                  name="regular_employee_calculation.extra_overtime_pay"
                  render={({ field }) => (
                    <CheckboxCards.Root
                      className={part_checkbox_grid_Style}
                      defaultValue={field.value.map((p) => p.id.toString())}
                    >
                      {DUMMY_DATA_PARTS.map((part) => (
                        <CheckboxCards.Item value={part.id.toString()}>
                          {part.name}
                        </CheckboxCards.Item>
                      ))}
                    </CheckboxCards.Root>
                  )}
                />
              </div>

              <div className="my-2">
                <Txt>3. 추가휴일수당(공휴일근로)</Txt>
                <Controller
                  control={control}
                  name="regular_employee_calculation.extra_holiday_pay"
                  render={({ field }) => (
                    <CheckboxCards.Root
                      className={part_checkbox_grid_Style}
                      defaultValue={field.value.map((p) => p.id.toString())}
                    >
                      {DUMMY_DATA_PARTS.map((part) => (
                        <CheckboxCards.Item value={part.id.toString()}>
                          {part.name}
                        </CheckboxCards.Item>
                      ))}
                    </CheckboxCards.Root>
                  )}
                />
              </div>

              <div className="my-2">
                <Txt>4. 연차사용공제</Txt>
                <Controller
                  control={control}
                  name="regular_employee_calculation.annual_leave_deduction"
                  render={({ field }) => (
                    <CheckboxCards.Root
                      className={part_checkbox_grid_Style}
                      defaultValue={field.value.map((p) => p.id.toString())}
                    >
                      {DUMMY_DATA_PARTS.map((part) => (
                        <CheckboxCards.Item value={part.id.toString()}>
                          {part.name}
                        </CheckboxCards.Item>
                      ))}
                    </CheckboxCards.Root>
                  )}
                />
              </div>

              <div className="my-2">
                <Txt>5. 근태공제</Txt>
                <Controller
                  name="regular_employee_calculation.work_deduction"
                  control={control}
                  render={({ field }) => (
                    <CheckboxCards.Root
                      className={part_checkbox_grid_Style}
                      defaultValue={field.value.map((p) => p.id.toString())}
                    >
                      {DUMMY_DATA_PARTS.map((part) => (
                        <CheckboxCards.Item value={part.id.toString()}>
                          {part.name}
                        </CheckboxCards.Item>
                      ))}
                    </CheckboxCards.Root>
                  )}
                />
              </div>
            </WagePayStatementFiled>

            <WagePayStatementFiled subTitle="파트타이머">
              <Controller
                name="partTime_calculation"
                control={control}
                render={({ field }) => (
                  <CheckboxCards.Root
                    className={part_checkbox_grid_Style}
                    defaultValue={field.value.map((p) => p.id.toString())}
                  >
                    {partTimerOptions.map((part) => (
                      <CheckboxCards.Item value={part.id.toString()}>
                        {part.name}
                      </CheckboxCards.Item>
                    ))}
                  </CheckboxCards.Root>
                )}
              />
            </WagePayStatementFiled>

            <div className="flex justify-center py-3">
              <Button size="3" type="submit" className="bg-black mx-auto">
                저장하기
              </Button>
            </div>
          </form>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}

// 기준 시급 설정 내역 (서버에서 받아와야하는 데이터)
const DUMMY_DATA_PAY_STATEMENT = [
  { id: 1, name: '기본급' },
  { id: 2, name: '식대' },
  { id: 3, name: '직무수당' },
];

// 해당 지점의 파트 (서버에서 받아와야하는 데이터)
const DUMMY_DATA_PARTS = [
  { id: 1, name: '간호조무사' },
  { id: 2, name: '상담실장' },
  { id: 3, name: '의사' },
  { id: 4, name: '코디네이터' },
  { id: 5, name: '피부관리사' },
];
