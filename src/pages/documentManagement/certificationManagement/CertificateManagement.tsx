import Title from '@/components/Common/Title';
import { Button, Table } from '@radix-ui/themes';

export default function CertificateManagement() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center">
          <Title content="증명서관리" />
          <span className="text-purple-50 px-4">
            승인 후 '저장되었습니다'가 뜰때까지 기다려주세요
          </span>
        </div>
        <Button variant="outline" color="gray" className="bg-gray-10 p-4 text-black">
          삭제 리스트 관리
        </Button>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            <span>지점</span>
            <div>셀렉트1</div>
            <div>셀렉트2</div>
          </div>
          <div>검색바</div>
        </div>
        <div>
          <Table.Root>
            <Table.Header className="bg-gray-10">
              <Table.Row>
                <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                <Table.Cell>danilo@example.com</Table.Cell>
                <Table.Cell>Developer</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                <Table.Cell>zahra@example.com</Table.Cell>
                <Table.Cell>Admin</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
                <Table.Cell>jasper@example.com</Table.Cell>
                <Table.Cell>Developer</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
      </div>
    </div>
  );
}
