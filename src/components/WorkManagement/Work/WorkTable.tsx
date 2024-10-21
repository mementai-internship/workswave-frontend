import { Table } from '@radix-ui/themes';
import { useOutletContext } from 'react-router-dom';

import WorkTableRows from '@/components/WorkManagement/Work/WorkTableRows';
import { TOptions } from '@/components/WorkManagement/WorkSelect';
import { WORKTABLE } from '@/constants/workManagement/workTable';
import { workMockData } from '@/constants/workManagement/workTable.mock';

interface WorkTableContext {
  selectedBranch: TOptions | null;
  selectedDepartment: TOptions | null;
}
export default function WorkTable() {
  const context = useOutletContext<WorkTableContext>();
  const { selectedBranch, selectedDepartment } = context || {
    selectedBranch: null,
    selectedDepartment: null,
  };
  const filteredData = workMockData.filter((data) => {
    const branchMatch = !selectedBranch || data.branch === selectedBranch.name;
    const departmentMatch = !selectedDepartment || data.department === selectedDepartment.name;
    return branchMatch && departmentMatch;
  });

  return (
    <Table.Root className="mb-5">
      <Table.Header className="bg-gray-200 text-xs text-gray-700 whitespace-nowrap border-t border-gray-300">
        <Table.Row>
          {WORKTABLE.map((head) => {
            return (
              <Table.ColumnHeaderCell key={head} align="center">
                {head}
              </Table.ColumnHeaderCell>
            );
          })}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {filteredData.map((data) => {
          return <WorkTableRows key={data.id} data={data} />;
        })}
      </Table.Body>
    </Table.Root>
  );
}
