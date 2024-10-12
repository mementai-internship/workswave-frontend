import { LABORHEADTABLE } from '@/constants/workManagementTable/workTable';
import { workMockData } from '@/constants/workManagementTable/workTable.mock';
import { Table } from '@radix-ui/themes';

import WorkTableRows from './WorkTableRows';

export default function WorkTable() {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          {LABORHEADTABLE.map((head) => {
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
