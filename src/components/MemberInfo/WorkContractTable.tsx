import { RadioCards, Select, Switch, Table } from '@radix-ui/themes';
// import { useForm } from 'react-hook-form';
import { useState } from 'react';

import TimeRangeSelector from '@/components/BasicSetting/WorkingSetting/TimeRangeSelector';
import { Txt } from '@/components/Common/Txt';
import ContractInfoCheckbox from '@/components/MemberInfo/MemberInfoCommon/ContractInfoCheckbox';
import MemberBasicInfoDatePicker from '@/components/MemberInfo/MemberInfoCommon/MemberBasicInfoDatePicker';
import { DAYS_FOR_WORK, WEEK_DAY } from '@/constants/memberInfoTable';

interface IWorkContractTableProps {
  isEditMode: boolean;
}

export default function WorkContractTable({ isEditMode }: IWorkContractTableProps) {
  // const { register: workContractRegister } = useForm({
  //   defaultValues: {
  //     start_time: '12:00',
  //     end_time: '13:00',
  //   },
  // });
  const [daysForWeek, setDaysForWeek] = useState<string>(''); // 근무 일수 선택값
  const [isNoContractEndDate, setIsNoContractEndDate] = useState(false); // 계약 기한 없음 체크
  console.log(daysForWeek);
  console.log(isEditMode);

  const [selectedFixedHoliday, setSelectedFixedHoliday] = useState<string>(''); // 고정휴무일 선택값 (스위치)
  const [isFixedHoliday, setIsFixedHoliday] = useState(false); // 고정휴무일 체크 상태 (요일)

  // 근로 기본설정
  const [weekDayStartTime, setWeekDayStartTime] = useState<string>(''); // 평일
  const [weekDayEndTime, setWeekDayEndTime] = useState<string>('');
  const [saturdayStartTime, setSaturdayStartTime] = useState<string>(''); // 토요일
  const [saturdayEndTime, setSaturdayEndTime] = useState<string>('');
  const [sundayStartTime, setSundayStartTime] = useState<string>(''); // 일요일
  const [sundayEndTime, setSundayEndTime] = useState<string>('');

  // 근로 기본설정 - 휴일 체크
  const [isWeekdayHoliday, setIsWeekdayHoliday] = useState(false);
  const [isSaturdayHoliday, setIsSaturdayHoliday] = useState(false);
  const [isSundayHoliday, setIsSundayHoliday] = useState(false);

  // 휴게시간
  const [firstBreakTimeStartTime, setFirstBreakTimeStartTime] = useState<string>('');
  const [firstBreakTimeEndTime, setFirstBreakTimeEndTime] = useState<string>('');
  const [isSecondBreakTimeDisabled, setIsSecondBreakTimeDisabled] = useState<boolean>(true); // 휴게시간 추가
  const [secondBreakTimeStartTime, setSecondBreakTimeStartTime] = useState<string>('');
  const [secondBreakTimeEndTime, setSecondBreakTimeEndTime] = useState<string>('');

  const handleFixedHolidayChange = (checked: boolean) => {
    setIsFixedHoliday(checked);
    if (!checked) {
      setSelectedFixedHoliday('');
    }
  };

  const handleWeekdayHolidayToggle = (checked: boolean) => {
    setIsWeekdayHoliday(checked);
  };

  const handleSaturdayHolidayToggle = (checked: boolean) => {
    setIsSaturdayHoliday(checked);
  };

  const handleSundayHolidayToggle = (checked: boolean) => {
    setIsSundayHoliday(checked);
  };

  const handleNoContractEndDateToggle = (checked: boolean) => {
    setIsNoContractEndDate(checked);
  };

  const handleSecondBreakTimeToggle = (checked: boolean) => {
    setIsSecondBreakTimeDisabled(!checked); // checked가 true면 disabled는 false가 됨
  };

  return (
    <div className="flex flex-col h-80 justify-evenly">
      <h2 className="px-4 py-2 text-purple-50 font-bold whitespace-nowrap">{`1) 근로계약`}</h2>

      <Table.Root className="border-t-2 border-gray-300 table-fixed w-full">
        <Table.Header>
          <Table.Row className="border-b-4 border-gray-300">
            <Table.ColumnHeaderCell
              colSpan={1}
              className="bg-gray-200 flex items-center justify-between h-full"
            >
              계약일
              <Select.Root size="2">
                <Select.Trigger
                  variant="surface"
                  className="bg-gray-200 border-2 border-gray-50 text-purple-600 font-bold"
                  placeholder="근무 일수"
                />
                <Select.Content>
                  {DAYS_FOR_WORK.map((day) => (
                    <Select.Item
                      key={day.id}
                      value={String(day.id)}
                      onClick={() => setDaysForWeek(String(day.id))}
                    >
                      {day.name}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </Table.ColumnHeaderCell>

            <Table.Cell className="bg-white">
              <div className="flex flex-row gap-3 h-14 items-center">
                <MemberBasicInfoDatePicker />
                <MemberBasicInfoDatePicker
                  disabled={isNoContractEndDate}
                  placeholder={isNoContractEndDate ? '기한 없음' : undefined}
                />
                <ContractInfoCheckbox text="기한없음" onChange={handleNoContractEndDateToggle} />
              </div>
            </Table.Cell>

            <Table.ColumnHeaderCell className="bg-white h-full" />

            <Table.Cell className="bg-white">
              <div className="flex flex-row items-center justify-end pr-10 h-8 gap-2">
                <Txt variant="subtitle1">고정 휴무일</Txt>
                <Switch
                  size="3"
                  variant="soft"
                  className="mr-3"
                  color="red"
                  checked={isFixedHoliday}
                  onCheckedChange={handleFixedHolidayChange}
                />
                <RadioCards.Root
                  size="1"
                  color="red"
                  value={selectedFixedHoliday}
                  onValueChange={setSelectedFixedHoliday}
                  className="flex flex-row items-center justify-center gap-2"
                  disabled={!isFixedHoliday}
                >
                  {WEEK_DAY.map((day) => (
                    <RadioCards.Item key={day.id} value={day.id.toString()} className="h-8 w-10">
                      {day.name}
                    </RadioCards.Item>
                  ))}
                </RadioCards.Root>
              </div>
              <div className="ml-10 h-6">
                <Txt variant="caption" color="gray-50">
                  *마우스 오른쪽으로 요일 클릭 시 격주 휴무를 만드실 수 있습니다.
                  <span className="text-red-500 font-bold text-3xl"> - </span>
                  <span>지정 휴무일</span>
                  <span className="text-green-500 font-bold text-3xl"> - </span>
                  <span>격주 휴무일</span>
                </Txt>
              </div>
            </Table.Cell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.ColumnHeaderCell className="flex flex-row items-center justify-between bg-gray-200 font-bold h-full">
              <span>
                근로 기본설정
                <br />
                [평일]
              </span>
              <ContractInfoCheckbox text="휴일" onChange={handleWeekdayHolidayToggle} />
            </Table.ColumnHeaderCell>

            <Table.Cell className="bg-white align-middle">
              <TimeRangeSelector
                startLabel="시업"
                endLabel="종업"
                initialStartTime={weekDayStartTime}
                initialEndTime={weekDayEndTime}
                onTimeRangeChange={(start, end) => {
                  setWeekDayStartTime(start);
                  setWeekDayEndTime(end);
                }}
                disabled={isWeekdayHoliday}
                size="1"
              />
            </Table.Cell>

            <Table.ColumnHeaderCell className="flex flex-row items-center justify-between bg-gray-200 font-bold align-middle h-full">
              <span>
                근로 기본설정
                <br />
                [토]
              </span>
              <ContractInfoCheckbox text="휴일" onChange={handleSaturdayHolidayToggle} />
            </Table.ColumnHeaderCell>
            <Table.Cell className=" align-middle bg-white">
              <TimeRangeSelector
                startLabel="시업"
                endLabel="종업"
                initialStartTime={saturdayStartTime}
                initialEndTime={saturdayEndTime}
                onTimeRangeChange={(start, end) => {
                  setSaturdayStartTime(start);
                  setSaturdayEndTime(end);
                }}
                disabled={isSaturdayHoliday}
                size="1"
              />
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.ColumnHeaderCell className="flex items-center justify-between bg-gray-200 font-bold h-full">
              근로 기본설정 [일]
              <ContractInfoCheckbox text="휴일" onChange={handleSundayHolidayToggle} />
            </Table.ColumnHeaderCell>

            <Table.Cell className=" align-middle bg-white border-y border-gray-300">
              <TimeRangeSelector
                startLabel="시업"
                endLabel="종업"
                initialStartTime={sundayStartTime}
                initialEndTime={sundayEndTime}
                onTimeRangeChange={(start, end) => {
                  setSundayStartTime(start);
                  setSundayEndTime(end);
                }}
                disabled={isSundayHoliday}
                size="1"
              />
            </Table.Cell>

            <Table.ColumnHeaderCell className="flex flex-row items-center justify-between bg-gray-200 font-bold align-middle h-full">
              휴게시간
              <ContractInfoCheckbox text="추가" onChange={handleSecondBreakTimeToggle} />
            </Table.ColumnHeaderCell>

            <Table.Cell className=" space-y-2 bg-white border-y border-gray-300">
              <TimeRangeSelector
                startLabel="시작"
                endLabel="종료"
                initialStartTime={firstBreakTimeStartTime}
                initialEndTime={firstBreakTimeEndTime}
                onTimeRangeChange={(start, end) => {
                  setFirstBreakTimeStartTime(start);
                  setFirstBreakTimeEndTime(end);
                }}
                size="1"
              />
              <TimeRangeSelector
                startLabel="시작"
                endLabel="종료"
                initialStartTime={secondBreakTimeStartTime}
                initialEndTime={secondBreakTimeEndTime}
                onTimeRangeChange={(start, end) => {
                  setSecondBreakTimeStartTime(start);
                  setSecondBreakTimeEndTime(end);
                }}
                disabled={isSecondBreakTimeDisabled}
                size="1"
              />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>
  );
}
