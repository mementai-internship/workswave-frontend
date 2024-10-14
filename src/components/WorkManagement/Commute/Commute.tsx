import { COMMUTEHEADTABLE } from '@/constants/workManagementTable/workTable';
import { commuteMockData } from '@/constants/workManagementTable/workTable.mock';
import { Table } from '@radix-ui/themes';

import CommuteTableRows from './CommuteTableRows';

export default function Commute() {
  return (
    <Table.Root className="mb-5">
      <Table.Header>
        <Table.Row>
          {COMMUTEHEADTABLE.map((head) => {
            return (
              <Table.ColumnHeaderCell key={head} align="center">
                {head}
              </Table.ColumnHeaderCell>
            );
          })}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {commuteMockData.map((data) => {
          return <CommuteTableRows key={data.id} data={data} />;
        })}
      </Table.Body>
    </Table.Root>
  );
}
