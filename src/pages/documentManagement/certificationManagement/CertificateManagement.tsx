import Title from '@/components/Common/Title';
import { DATA } from '@/pages/documentManagement/certificationManagement/constants';
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
                <Table.ColumnHeaderCell>번호</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>지점</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>이름</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>근무파트</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>신청날짜</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>신청증명서</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>상태</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>용도</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>관리자메모</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>처리날짜</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>담당자</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>신청자</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {DATA.map(
                ({
                  number,
                  office,
                  name,
                  part,
                  enroll_date,
                  type,
                  status,
                  use,
                  memo,
                  treat_date,
                  applicant,
                }) => (
                  <Table.Row key={number}>
                    <Table.RowHeaderCell>{number}</Table.RowHeaderCell>
                    <Table.Cell>{office}</Table.Cell>
                    <Table.Cell>{name}</Table.Cell>
                    <Table.Cell>{part}</Table.Cell>
                    <Table.Cell>{enroll_date}</Table.Cell>
                    <Table.Cell>{type}</Table.Cell>
                    <Table.Cell>{status}</Table.Cell>
                    <Table.Cell>{use}</Table.Cell>
                    <Table.Cell>{memo}</Table.Cell>
                    <Table.Cell>{treat_date}</Table.Cell>
                    <Table.Cell>{applicant}</Table.Cell>
                    <Table.Cell>
                      <Button>승인</Button>
                      <Button>반려</Button>
                    </Table.Cell>
                  </Table.Row>
                )
              )}
            </Table.Body>
          </Table.Root>
        </div>
      </div>
    </div>
  );
}
