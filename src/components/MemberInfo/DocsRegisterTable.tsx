import { Table } from '@radix-ui/themes';

import RegisterDocsInput from '@/components/MemberInfo/MemberInfoCommon/RegisterDocsInput';

export default function DocsRegisterTable() {
  return (
    <Table.Root className="table-fixed h-full">
      <Table.Header>
        <Table.Row className="bg-gray-200">
          <Table.ColumnHeaderCell colSpan={1}>서류등록</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell className="flex items-center gap-2 py-12">
            <RegisterDocsInput defaultDocs="신분증" />
            <RegisterDocsInput defaultDocs="통장사본" />
            <RegisterDocsInput defaultDocs="퇴직연금 통장사본" />
            <RegisterDocsInput defaultDocs="자격증" />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
}
