import { Table } from '@radix-ui/themes';
import { PiMagnifyingGlass } from 'react-icons/pi';

import { GenderIcon } from '@/components/WorkManagement/Work/WorkTableRows';
import { PARTTIMEHEADTABLE } from '@/constants/workManagementTable/workTable';
import { partTimeMockData } from '@/constants/workManagementTable/workTable.mock';

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
            <Table.Cell align="center">{row.id}</Table.Cell>
            <Table.Cell align="center">{row.branch}</Table.Cell>
            <Table.Cell align="center" className="flex gap-2 items-center">
              <GenderIcon gender={row.gender} />
              {row.name}
            </Table.Cell>
            <Table.Cell align="center">{row.workPart}</Table.Cell>
            <Table.Cell align="center">{row.workDate}</Table.Cell>
            <Table.Cell align="center">{row.hospitalWork}</Table.Cell>
            <Table.Cell align="center">{row.remoteWork}</Table.Cell>
            <Table.Cell align="center">{row.holidayWork}</Table.Cell>
            <Table.Cell align="center">{row.totalWorkHours}</Table.Cell>
            <Table.Cell align="center">{row.totalSalary}</Table.Cell>
            <Table.Cell align="center">
              <PiMagnifyingGlass />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
