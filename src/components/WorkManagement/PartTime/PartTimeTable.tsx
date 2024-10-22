import { Table } from '@radix-ui/themes';
import { useOutletContext } from 'react-router-dom';

import GenderIcon from '@/components/WorkManagement/GenderIcon';
import DetailPartTime from '@/components/WorkManagement/PartTime/DetailPartTime';
import { WorkTableContext } from '@/components/WorkManagement/Work/WorkTable';
import { PARTTIMEHEADTABLE } from '@/constants/workManagement/workTable';
import { partTimeMockData } from '@/constants/workManagement/workTable.mock';

export default function PartTime() {
  const context = useOutletContext<WorkTableContext>();
  const { selectedBranch, selectedDepartment } = context || {
    selectedBranch: null,
    selectedDepartment: null,
  };
  const filteredData = partTimeMockData.filter((data) => {
    const branchMatch = !selectedBranch || data.branch === selectedBranch.name;
    const departmentMatch = !selectedDepartment || data.department === selectedDepartment.name;
    return branchMatch && departmentMatch;
  });

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
        {filteredData.map((row) => (
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
              {row.department}
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
