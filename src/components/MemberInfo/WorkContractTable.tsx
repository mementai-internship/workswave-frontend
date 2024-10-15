import SelectBox from '@/components/Common/Select';
import ContractInfoCheckbox from '@/components/MemberInfo/MemberInfoCommon/ContractInfoCheckbox';
import MemberBasicInfoDatePicker from '@/components/MemberInfo/MemberInfoCommon/MemberBasicInfoDatePicker';
import MemberInfoInput from '@/components/MemberInfo/MemberInfoCommon/MemberInfoInput';
import WorkContractTableCell from '@/components/MemberInfo/WorkContractTableCell';
import { WEEK_DAY } from '@/constants/memberInfoTable';
import { RadioCards, Switch, Table } from '@radix-ui/themes';

export default function WorkContractTable() {
  return (
    <>
      <h2 className="px-4 py-2 text-purple-50 font-bold">1) 근로계약</h2>
      <hr className="border-gray-200 w-full border-2" />
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell
              colSpan={4}
              className="bg-gray-200 flex items-center gap-4 h-24 py-8"
            >
              계약일
              <SelectBox title="일수 선택" options={[]} size="xSmall" />
            </Table.ColumnHeaderCell>
            <Table.Cell className="align-middle">
              <div className="flex items-center gap-4">
                <MemberBasicInfoDatePicker />
                <MemberBasicInfoDatePicker />
                <div className="flex flex-row items-center justify-center">
                  <div className="flex gap-2 justify-center items-center">
                    <ContractInfoCheckbox text="기한없음" />
                    <p className="font-bold">|</p>
                    <SelectBox title="필터" options={[]} border={false} size="xSmall" />
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-end gap-2">
                  <p className="font-bold text-[14px]">고정휴무일</p>
                  <Switch size="3" variant="surface" />
                  <RadioCards.Root className="flex flex-row gap-0.5 h-8">
                    {WEEK_DAY.map((day) => (
                      <RadioCards.Item key={day.id} value={day.id.toString()}>
                        {day.name}
                      </RadioCards.Item>
                    ))}
                  </RadioCards.Root>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <p className="text-gray-500 text-[12px]">
                    *마우스 오른쪽으로 요일 클릭 시 격주 휴무를 만드실 수 있습니다.
                  </p>
                  <p className="text-gray-500 text-sm">
                    <span className="text-red text-lg font-bold">- </span>지정휴무일
                  </p>
                  <p className="text-gray-500 text-sm">
                    <span className="text-purple-50 text-lg font-bold">- </span>격주휴무일
                  </p>
                </div>
              </div>
            </Table.Cell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.ColumnHeaderCell className="bg-gray-200 font-bold align-middle">
              <div className="flex flex-row items-center justify-between">
                근로기본설정[평일]
                <ContractInfoCheckbox text="휴일" />
              </div>
            </Table.ColumnHeaderCell>
            <WorkContractTableCell />
            <Table.ColumnHeaderCell className="bg-gray-200 font-bold align-middle">
              <div className="flex flex-row items-center justify-between">
                근로기본설정[토요일]
                <ContractInfoCheckbox text="휴일" />
              </div>
            </Table.ColumnHeaderCell>
            <WorkContractTableCell />
          </Table.Row>
          <Table.Row>
            <Table.ColumnHeaderCell className="bg-gray-200 font-bold align-middle h-28">
              <div className="flex flex-row items-center justify-between">
                근로기본설정[일요일]
                <ContractInfoCheckbox text="휴일" />
              </div>
            </Table.ColumnHeaderCell>
            <WorkContractTableCell height="h-28" />
            <Table.ColumnHeaderCell className="bg-gray-200 font-bold align-middle">
              휴게시간
            </Table.ColumnHeaderCell>
            <Table.Cell>
              <div className="flex flex-col gap-2">
                <MemberInfoInput size="large" defaultValue={'09:00'} />
                <MemberInfoInput size="large" defaultValue={'18:00'} />
              </div>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </>
  );
}
