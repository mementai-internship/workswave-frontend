import { Table } from '@radix-ui/themes';

import { TIMEOFF_TABLE_HEADERS } from '@/constants/documentManagement/timeoffTable';

export default function TimeoffManagementTableHeader() {
  return (
    <Table.Header className="bg-gray-200 text-xs text-gray-700 whitespace-nowrap border-t border-gray-300">
      <Table.Row>
        {TIMEOFF_TABLE_HEADERS.map((header) => (
          <Table.ColumnHeaderCell key={header} align="center">
            {header}
          </Table.ColumnHeaderCell>
        ))}
      </Table.Row>
    </Table.Header>
  );
}
