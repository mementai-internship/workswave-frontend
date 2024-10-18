import { Button, Table } from '@radix-ui/themes';
import { PiMagnifyingGlass } from 'react-icons/pi';

import { contract } from '@/constants/documentManagement/contract.mock';
import { CONTRACT_TABLE_HEADERS } from '@/constants/documentManagement/contractTable';

export default function ContractTable() {
  const cellClasses = 'text-center align-middle';

  return (
    <Table.Root className=" mb-5">
      <Table.Header className="bg-gray-200 text-xs text-gray-700 whitespace-nowrap border-t border-gray-300">
        <Table.Row>
          {CONTRACT_TABLE_HEADERS.map((header) => (
            <Table.ColumnHeaderCell key={header} align="center">
              {header}
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {contract.map((row) => (
          <Table.Row key={row.id}>
            <Table.Cell className={cellClasses}>{row.id}</Table.Cell>
            <Table.Cell className={cellClasses}>{row.branch}</Table.Cell>
            <Table.Cell className={cellClasses}>{row.name}</Table.Cell>
            <Table.Cell className={`w-40 ${cellClasses}`}>{row.workPart}</Table.Cell>
            <Table.Cell className={cellClasses}>{row.requestDate}</Table.Cell>
            <Table.Cell className={cellClasses}>{row.manager}</Table.Cell>
            <Table.Cell className={cellClasses}>{row.overallStatus}</Table.Cell>
            <Table.Cell className={cellClasses}>{row.detailStatus}</Table.Cell>
            <Table.Cell className={cellClasses}>{row.contractName}</Table.Cell>
            <Table.Cell className={`w-96 ${cellClasses}`}>{row.adminMemo}</Table.Cell>
            <Table.Cell className={cellClasses}>{row.userWriteDate}</Table.Cell>
            <Table.Cell className={cellClasses}>
              <Button className="bg-gray-50">
                <PiMagnifyingGlass />
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
