import SelectBox from '@/components/Common/Select';
import MemberBasicInfoDatePicker from '@/components/MemberInfo/MemberInfoCommon/MemberBasicInfoDatePicker';
import MemberInfoInput from '@/components/MemberInfo/MemberInfoCommon/MemberInfoInput';
import { infoTestData } from '@/components/MemberManagement/MemberManagementTable';
import { SALARY_CONTRACT_TITLE1, SALARY_CONTRACT_TITLE2 } from '@/constants/memberInfoTable';
import { Table } from '@radix-ui/themes';

export default function SalaryContractTable() {
  return (
    <>
      <h2 className="px-4 py-2 text-purple-50 font-bold">2) 임금계약</h2>
      <hr className="border-gray-200 w-full border-2" />
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell
              colSpan={4}
              className="bg-gray-200 flex items-center gap-4 h-24 py-8"
            >
              연봉계약일
            </Table.ColumnHeaderCell>
            <Table.Cell className="align-middle">
              <div className="flex items-center gap-4">
                <MemberBasicInfoDatePicker />
                <MemberBasicInfoDatePicker />
                <SelectBox title="필터" options={[]} border={false} size="xSmall" />
              </div>
            </Table.Cell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {SALARY_CONTRACT_TITLE1.map((title, index) => (
            <Table.Row className="h-12">
              <Table.RowHeaderCell key={title} className="align-middle bg-gray-200 font-bold h-12">
                {title}
              </Table.RowHeaderCell>
              <Table.Cell key={title} className="flex items-center py-8 gap-2 h-12">
                {(() => {
                  switch (index) {
                    case 0:
                      return (
                        <MemberInfoInput
                          defaultValue={infoTestData[0].contractPeriod.annualSalary}
                        />
                      );
                    case 1:
                      return (
                        <MemberInfoInput defaultValue={infoTestData[0].contractPeriod.salary} />
                      );
                    case 2:
                      return <MemberInfoInput defaultValue="0" />;
                    case 3:
                      return (
                        <MemberInfoInput
                          defaultValue={infoTestData[0].contractPeriod.annualSalary}
                        />
                      );
                    case 4:
                      return (
                        <MemberInfoInput defaultValue={infoTestData[0].contractPeriod.salary} />
                      );
                    case 5:
                      return (
                        <MemberInfoInput defaultValue={infoTestData[0].contractPeriod.salary} />
                      );
                    default:
                      return null;
                  }
                })()}
              </Table.Cell>
              {index !== 5 ? (
                <>
                  <Table.RowHeaderCell
                    key={SALARY_CONTRACT_TITLE2[index]}
                    className="align-middle bg-gray-200 font-bold h-12"
                  >
                    {SALARY_CONTRACT_TITLE2[index]}
                  </Table.RowHeaderCell>
                  <Table.Cell
                    key={SALARY_CONTRACT_TITLE2[index]}
                    className="flex items-center py-8 gap-2 h-12"
                  >
                    {(() => {
                      switch (index) {
                        case 0:
                          return (
                            <MemberInfoInput defaultValue={infoTestData[0].contractPeriod.salary} />
                          );
                        case 1:
                          return (
                            <>
                              <MemberInfoInput
                                defaultValue={infoTestData[0].contractPeriod.salary}
                              />
                              <MemberInfoInput
                                defaultValue={infoTestData[0].contractPeriod.salary}
                              />
                            </>
                          );
                        case 2:
                          return <MemberInfoInput defaultValue="0" />;
                        case 3:
                          return (
                            <>
                              <MemberInfoInput
                                defaultValue={infoTestData[0].contractPeriod.salary}
                              />
                              <MemberInfoInput
                                defaultValue={infoTestData[0].contractPeriod.salary}
                              />
                            </>
                          );
                        case 4:
                          return (
                            <MemberInfoInput defaultValue={infoTestData[0].contractPeriod.salary} />
                          );
                        default:
                          return null;
                      }
                    })()}
                  </Table.Cell>
                </>
              ) : (
                <>
                  <Table.RowHeaderCell></Table.RowHeaderCell>
                  <Table.Cell></Table.Cell>
                </>
              )}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
}
