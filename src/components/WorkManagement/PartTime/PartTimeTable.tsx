import { Table } from '@radix-ui/themes';

import GenderIcon from '@/components/WorkManagement/GenderIcon';
import DetailPartTime from '@/components/WorkManagement/PartTime/DetailPartTime';
import { PARTTIMEHEADTABLE } from '@/constants/workManagement/workTable';
import { partTimeMockData } from '@/constants/workManagement/workTable.mock';

export default function PartTime() {
  return (
    <Table.Root className="mb-5">
      <Table.Header className="bg-gray-200 text-xs text-gray-700 whitespace-nowrap border-t border-gray-300">
        <Table.Row>
          {PARTTIMEHEADTABLE.map((head) => {
            return (
              <Table.ColumnHeaderCell key={head} align="center">
                {head}
              </Table.ColumnHeaderCell>
            );
          })}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {partTimeMockData.map((row) => (
          <Table.Row key={row.id}>
            <Table.Cell align="center" className="align-middle">
              {row.id}
            </Table.Cell>
            <Table.Cell align="center" className="align-middle">
              {row.branch}
            </Table.Cell>
            <Table.Cell align="center" className="align-middle">
              <div className="flex gap-2 items-center">
                <GenderIcon gender={row.gender} />
                {row.name}
              </div>
            </Table.Cell>
            <Table.Cell align="center" className="align-middle">
              {row.workPart}
            </Table.Cell>
            <Table.Cell align="center" className="align-middle">
              {row.workDate}
            </Table.Cell>
            <Table.Cell align="center" className="align-middle">
              {row.hospitalWork}
            </Table.Cell>
            <Table.Cell align="center" className="align-middle">
              {row.remoteWork}
            </Table.Cell>
            <Table.Cell align="center" className="align-middle">
              {row.holidayWork}
            </Table.Cell>
            <Table.Cell align="center" className="align-middle">
              {row.totalWorkHours}
            </Table.Cell>
            <Table.Cell align="center" className="align-middle">
              {row.totalSalary}
            </Table.Cell>
            <Table.Cell align="center" className="align-middle">
              <DetailPartTime />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
