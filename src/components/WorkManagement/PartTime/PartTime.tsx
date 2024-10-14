import { PARTTIMEHEADTABLE } from '@/constants/workManagementTable/workTable';
import { partTimeMockData } from '@/constants/workManagementTable/workTable.mock';
import { Table } from '@radix-ui/themes';

import PartTimeTableRows from './PartTimeTableRows';

export default function PartTime() {
  return (
    <Table.Root className="mb-5">
      <Table.Header>
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
        {partTimeMockData.map((data) => {
          return <PartTimeTableRows key={data.id} data={data} />;
        })}
      </Table.Body>
    </Table.Root>
  );
}
