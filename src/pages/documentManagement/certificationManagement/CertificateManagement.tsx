import ContactSearchInput from '@/components/Common/ContactSearchInput';
import SelectBox from '@/components/Common/Select';
import Title from '@/components/Common/Title';
import {
  TABLE_DATA,
  TABLE_HEAD,
  memberInfoDropdownMenu,
} from '@/pages/documentManagement/certificationManagement/constants';
import { Button, Table } from '@radix-ui/themes';
import { PiArrowUUpRightFill, PiCheck } from 'react-icons/pi';

export default function CertificateManagement() {
  // 승인 함수
  const handleApproveButtonClick = () => {};

  // 반려 함수
  const handleRejectButtonClick = () => {};

  // 증명서 발급 함수
  const handleCertificateIssuanceButtonClick = () => {};

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center">
          <Title content="증명서관리" />
          <span className="text-purple-50 px-4">
            승인 후 '저장되었습니다'가 뜰때까지 기다려주세요
          </span>
        </div>
        <Button variant="surface" color="gray" className="bg-gray-10 text-black">
          삭제 리스트 관리
        </Button>
      </div>
      <div>
        <div className="flex items-center justify-between py-5">
          <div className="flex gap-2">
            <SelectBox
              title="지점"
              name="office"
              options={memberInfoDropdownMenu}
              size="small"
              border={false}
            />
            <SelectBox
              title="전체 선택"
              name="지점"
              options={memberInfoDropdownMenu}
              size="small"
              border={false}
            />
            <SelectBox
              title="상태 선택"
              name="지점"
              options={memberInfoDropdownMenu}
              size="small"
              border={false}
            />
          </div>
          <div className="flex items-center justify-center gap-1">
            <div className="flex items-center justify-center gap-3">
              <span className="text-sm">검색</span>
              <ContactSearchInput />
            </div>
            <Button
              variant="surface"
              size="3"
              radius="none"
              color="gray"
              onClick={handleCertificateIssuanceButtonClick}
            >
              증명서 발급
            </Button>
          </div>
        </div>
        <div className="flex justify-center min-h-full">
          <Table.Root className="w-full text-sm">
            <Table.Header className="bg-gray-10 text-sm whitespace-nowrap">
              <Table.Row align="center">
                {TABLE_HEAD.map((data, index) => (
                  <Table.ColumnHeaderCell justify="center" key={index}>
                    {data}
                  </Table.ColumnHeaderCell>
                ))}
              </Table.Row>
            </Table.Header>

            <Table.Body className="text-xs">
              {TABLE_DATA.map(
                ({
                  number,
                  office,
                  name,
                  part,
                  enroll_date,
                  type,
                  status,
                  use,
                  memo,
                  treat_date,
                  manager,
                  applicant,
                }) => (
                  <Table.Row align="center" key={number}>
                    <Table.RowHeaderCell>{number}</Table.RowHeaderCell>
                    <Table.Cell justify="center" align="center">
                      {office}
                    </Table.Cell>
                    <Table.Cell justify="center" align="center">
                      {name}
                    </Table.Cell>
                    <Table.Cell justify="center" align="center">
                      {part}
                    </Table.Cell>
                    <Table.Cell justify="center" align="center">
                      {enroll_date}
                    </Table.Cell>
                    <Table.Cell justify="center" align="center">
                      {type}
                    </Table.Cell>
                    <Table.Cell justify="center" align="center">
                      {status}
                    </Table.Cell>
                    <Table.Cell justify="center" align="center">
                      {use}
                    </Table.Cell>
                    <Table.Cell justify="center" align="center">
                      {memo}
                    </Table.Cell>
                    <Table.Cell justify="center" align="center">
                      {treat_date}
                    </Table.Cell>
                    <Table.Cell justify="center" align="center">
                      {manager}
                    </Table.Cell>
                    <Table.Cell justify="center" align="center">
                      {applicant}
                    </Table.Cell>
                    <Table.Cell justify="center" align="center">
                      <div className="flex gap-2">
                        <Button variant="soft" color="gray" onClick={handleApproveButtonClick}>
                          <PiCheck />
                          승인
                        </Button>
                        <Button variant="soft" color="gray" onClick={handleRejectButtonClick}>
                          <PiArrowUUpRightFill />
                          반려
                        </Button>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                )
              )}
            </Table.Body>
          </Table.Root>
        </div>
      </div>
    </div>
  );
}
