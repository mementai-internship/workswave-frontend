import { Table } from '@radix-ui/themes';

import WorkTableRows from '@/components/WorkManagement/Work/WorkTableRows';
import { WORKTABLE } from '@/constants/workManagement/workTable';
import { workMockData } from '@/constants/workManagement/workTable.mock';

export default function WorkTable() {
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
        {workMockData.map((data) => {
          return <WorkTableRows key={data.id} data={data} />;
        })}
      </Table.Body>
    </Table.Root>
  );
}
