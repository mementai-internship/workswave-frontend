import SelectBox from '@/components/Common/Select';
import ContractInfoCheckbox from '@/components/MemberInfo/MemberInfoCommon/ContractInfoCheckbox';
import MemberBasicInfoDatePicker from '@/components/MemberInfo/MemberInfoCommon/MemberBasicInfoDatePicker';
import MemberInfoInput from '@/components/MemberInfo/MemberInfoCommon/MemberInfoInput';
import { infoTestData } from '@/components/MemberManagement/MemberManagementTable';
import { SALARY_CONTRACT_TITLE1, SALARY_CONTRACT_TITLE2 } from '@/constants/memberInfoTable';
import { Button, Table } from '@radix-ui/themes';
import { Link } from 'react-router-dom';

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
              {index === 0 ? (
                <Table.RowHeaderCell className="align-middle bg-gray-200 font-bold h-12">
                  <div className="flex flex-row items-center justify-start gap-4">
                    <p>{title}</p>
                    <SelectBox title="템플릿 선택" options={[]} border={false} size="xSmall" />
                  </div>
                </Table.RowHeaderCell>
              ) : index === 4 || index === 5 ? (
                <Table.RowHeaderCell className="align-middle bg-gray-200 font-bold h-12">
                  <div className="flex flex-row items-center justify-between gap-4">
                    <p>{title}</p>
                    <ContractInfoCheckbox text="사용" />
                  </div>
                </Table.RowHeaderCell>
              ) : (
                <Table.RowHeaderCell className="align-middle bg-gray-200 font-bold h-12">
                  {title}
                </Table.RowHeaderCell>
              )}
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
                  {index === 0 ? (
                    <Table.RowHeaderCell
                      key={SALARY_CONTRACT_TITLE2[index]}
                      className="align-middle bg-gray-200 font-bold h-12"
                    >
                      <div className="flex flex-row items-center justify-start gap-4">
                        <p>{SALARY_CONTRACT_TITLE2[index]}</p>
                        <Button variant="surface" size="1" color="gray">
                          <Link to="/basic-setting/salary-range">급여구간표</Link>
                        </Button>
                      </div>
                    </Table.RowHeaderCell>
                  ) : (
                    <Table.RowHeaderCell
                      key={SALARY_CONTRACT_TITLE2[index]}
                      className="align-middle bg-gray-200 font-bold h-12"
                    >
                      {SALARY_CONTRACT_TITLE2[index]}
                    </Table.RowHeaderCell>
                  )}
                  <Table.Cell
                    key={SALARY_CONTRACT_TITLE2[index]}
                    className="flex items-center py-8 gap-2 h-12"
                  >
                    {(() => {
                      switch (index) {
                        case 0:
                          return (
                            <>
                              <MemberInfoInput
                                defaultValue={infoTestData[0].contractPeriod.salary}
                              />
                              <ContractInfoCheckbox text="직접입력" />
                            </>
                          );
                        case 1:
                          return (
                            <>
                              <MemberInfoInput
                                defaultValue={infoTestData[0].contractPeriod.salary}
                              />
                              <MemberInfoInput
                                defaultValue={infoTestData[0].contractPeriod.salary}
                                directInputButton
                              />
                            </>
                          );
                        case 2:
                          return <MemberInfoInput defaultValue="0" filterButton />;
                        case 3:
                          return (
                            <>
                              <MemberInfoInput
                                defaultValue={infoTestData[0].contractPeriod.salary}
                                directInputButton
                              />
                              <MemberInfoInput
                                defaultValue={infoTestData[0].contractPeriod.salary}
                                directInputButton
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
