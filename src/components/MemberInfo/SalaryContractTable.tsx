import { Select, Table } from '@radix-ui/themes';

import ContractInfoCheckbox from '@/components/MemberInfo/MemberInfoCommon/ContractInfoCheckbox';
import MemberBasicInfoDatePicker from '@/components/MemberInfo/MemberInfoCommon/MemberBasicInfoDatePicker';
import MemberInfoInput from '@/components/MemberInfo/MemberInfoCommon/MemberInfoInput';
import { SALARY_CONTRACT_TITLE1, SALARY_CONTRACT_TITLE2 } from '@/constants/memberInfoTable';

interface ISalaryContractTableProps {
  isEditMode: boolean;
}

export default function SalaryContractTable({ isEditMode }: ISalaryContractTableProps) {
  console.log(isEditMode);

  return (
    <div className="flex flex-col h-1/3 justify-evenly">
      <h2 className="px-4 py-2 text-purple-50 font-bold whitespace-nowrap">{`2) 임금계약`}</h2>

      <Table.Root className="border-t-2 border-gray-300 table-fixed w-full">
        <Table.Header>
          <Table.Row className="border-b-4 border-gray-300">
            <Table.ColumnHeaderCell className="bg-gray-200 flex items-center justify-between h-full">
              연봉계약일
            </Table.ColumnHeaderCell>

            <Table.Cell className="bg-white h-14">
              <div className="flex items-center gap-3">
                <MemberBasicInfoDatePicker />
                <MemberBasicInfoDatePicker />
                <Select.Root size="1">
                  <Select.Trigger
                    placeholder="필터"
                    variant="ghost"
                    className="w-12 text-base font-bold"
                  />
                  <Select.Content>
                    <Select.Item value="1">1</Select.Item>
                    <Select.Item value="2">2</Select.Item>
                    <Select.Item value="3">3</Select.Item>
                  </Select.Content>
                </Select.Root>
              </div>
            </Table.Cell>

            <Table.ColumnHeaderCell className="bg-white"></Table.ColumnHeaderCell>
            <Table.Cell className="bg-white h-14"></Table.Cell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {SALARY_CONTRACT_TITLE1.map((title, index) => (
            <Table.Row>
              {index === 0 ? (
                <Table.ColumnHeaderCell className="flex flex-row items-center justify-between bg-gray-200 font-bold h-full">
                  {title}
                  <Select.Root size="2">
                    <Select.Trigger
                      variant="surface"
                      className="bg-gray-200 border-2 border-gray-50 text-purple-600 font-bold"
                      placeholder="탬플릿 선택"
                    />
                    <Select.Content>
                      <Select.Item value="1">1</Select.Item>
                      <Select.Item value="2">2</Select.Item>
                      <Select.Item value="3">3</Select.Item>
                    </Select.Content>
                  </Select.Root>
                </Table.ColumnHeaderCell>
              ) : index === 4 || index === 5 ? (
                <Table.ColumnHeaderCell className="flex flex-row items-center justify-between bg-gray-200 font-bold h-full">
                  {title}
                  <ContractInfoCheckbox text="사용" onChange={() => {}} />
                </Table.ColumnHeaderCell>
              ) : (
                <Table.ColumnHeaderCell className="flex flex-row items-center justify-between bg-gray-200 font-bold h-full">
                  {title}
                </Table.ColumnHeaderCell>
              )}

              <Table.Cell key={title} className="bg-white h-14">
                {(() => {
                  switch (index) {
                    case 0:
                      return <MemberInfoInput defaultValue={'1'} />;
                    case 1:
                      return <MemberInfoInput defaultValue={'1'} />;
                    case 2:
                      return <MemberInfoInput defaultValue={'0'} />;
                    case 3:
                      return <MemberInfoInput defaultValue={'1'} />;
                    case 4:
                      return <MemberInfoInput defaultValue={'1'} />;
                    case 5:
                      return <MemberInfoInput defaultValue={'1'} />;
                    default:
                      return null;
                  }
                })()}
              </Table.Cell>

              {index !== 5 ? (
                <>
                  {index === 0 ? (
                    <Table.ColumnHeaderCell
                      key={SALARY_CONTRACT_TITLE2[index]}
                      className="flex flex-row items-center justify-between bg-gray-200 font-bold align-middle h-full"
                    >
                      {SALARY_CONTRACT_TITLE2[index]}
                    </Table.ColumnHeaderCell>
                  ) : (
                    <Table.ColumnHeaderCell
                      key={SALARY_CONTRACT_TITLE2[index]}
                      className="flex flex-row items-center justify-between bg-gray-200 font-bold align-middle h-full"
                    >
                      {SALARY_CONTRACT_TITLE2[index]}
                    </Table.ColumnHeaderCell>
                  )}

                  <Table.Cell key={SALARY_CONTRACT_TITLE2[index]} className="bg-white h-14">
                    {(() => {
                      switch (index) {
                        case 0:
                          return <MemberInfoInput defaultValue={'1'} />;
                        case 1:
                          return (
                            <div className="flex flex-row items-center gap-2">
                              <MemberInfoInput defaultValue={'1'} />
                              <MemberInfoInput defaultValue={'1'} directInputButton />
                            </div>
                          );
                        case 2:
                          return <MemberInfoInput defaultValue="0" />;
                        case 3:
                          return (
                            <div className="flex flex-row items-center gap-2">
                              <MemberInfoInput defaultValue={'1'} directInputButton />
                              <MemberInfoInput defaultValue={'1'} directInputButton />
                            </div>
                          );
                        case 4:
                          return <MemberInfoInput defaultValue={'1'} />;
                        default:
                          return null;
                      }
                    })()}
                  </Table.Cell>
                </>
              ) : (
                <>
                  <Table.RowHeaderCell className="bg-gray-200 h-full"></Table.RowHeaderCell>
                  <Table.Cell className="bg-white h-14"></Table.Cell>
                </>
              )}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
