import { Button, Table } from '@radix-ui/themes';
import { PiArrowUUpRightFill, PiCheck } from 'react-icons/pi';

import {
  TABLE_DATA,
  TABLE_HEAD,
} from '@/pages/documentManagement/certificationManagement/constants';

export default function CertificateManagement() {
  // 승인 함수
  const handleApproveButtonClick = () => {};

  // 반려 함수
  const handleRejectButtonClick = () => {};

  return (
    <div className="flex flex-col w-full">
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
  );
}
