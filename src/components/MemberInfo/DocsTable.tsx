import SelectBox from '@/components/Common/Select';
import { Table } from '@radix-ui/themes';

export default function DocsTable() {
  return (
    <Table.Root className="table-fixed h-full">
      <Table.Header>
        <Table.Row className="bg-gray-200 justify-between flex items-center pr-4">
          <Table.ColumnHeaderCell colSpan={1}>문서</Table.ColumnHeaderCell>
          <SelectBox title="전체문서" options={[]} size="xSmall" border={false} />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell className="flex items-center gap-2" />
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
}
