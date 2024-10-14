import MemberInfoButton from '@/components/MemberInfo/MemberInfoButton';
import MemberInfoDropdown from '@/components/MemberInfo/MemberInfoDropdownMenu';
import MemberInfoInput from '@/components/MemberInfo/MemberInfoInput';
import { Button, Table } from '@radix-ui/themes';

export const MEMBERBASICINFOTITLE1 = [
  '지점',
  '이름',
  '전화번호',
  '주소',
  '학력',
  '생년월일',
  '입사일',
  'O.T관리',
];
export const MEMBERBASICINFOTITLE2 = [
  '권한',
  '성별',
  '메일',
  '',
  '경력',
  '근무파트',
  '퇴사일',
  '연차관리',
];

//test data API 연결 후 삭제
const memberInfoDropdownMenu = [
  {
    id: 1,
    name: '뮤즈의원(강남점)',
    link: '/member-info/gangnam',
  },
  {
    id: 2,
    name: '뮤즈의원(수원인계점)',
    link: '/member-info/suwon',
  },
];

export default function MemberBasicInfoTable() {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row className="bg-gray-200">
          <Table.ColumnHeaderCell colSpan={4}>기본정보</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {MEMBERBASICINFOTITLE1.map((title, index) => (
          <Table.Row className="h-12">
            <Table.RowHeaderCell key={title} className="align-middle bg-gray-200 font-bold h-12">
              {title}
            </Table.RowHeaderCell>
            <Table.Cell key={title} className="flex items-center py-8 gap-2 h-12">
              {(() => {
                switch (index) {
                  case 0:
                    return <MemberInfoDropdown title="지점 선택" menu={memberInfoDropdownMenu} />;
                  case 1:
                    return <MemberInfoInput />;
                  case 2:
                    return <MemberInfoInput />;
                  case 3:
                    return <MemberInfoButton text="주소입력" />;
                  case 4:
                    return <MemberInfoButton text="학력입력" />;
                  case 5:
                    return <MemberInfoInput date={new Date()} />;
                  case 6:
                    return <MemberInfoInput date={new Date()} />;
                  case 7:
                    return <MemberInfoButton text="OT신청" />;
                  default:
                    return null;
                }
              })()}
            </Table.Cell>
            {index !== 3 ? (
              <>
                <Table.RowHeaderCell
                  key={MEMBERBASICINFOTITLE2[index]}
                  className="align-middle bg-gray-200 font-bold h-12"
                >
                  {MEMBERBASICINFOTITLE2[index]}
                </Table.RowHeaderCell>
                <Table.Cell
                  key={MEMBERBASICINFOTITLE2[index]}
                  className="flex items-center py-8 gap-2 h-12"
                >
                  {(() => {
                    switch (index) {
                      case 0:
                        return (
                          <>
                            <MemberInfoDropdown title="권한 선택" menu={memberInfoDropdownMenu} />
                            <Button
                              variant="surface"
                              color="gray"
                              size="2"
                              className="font-bold text-black h-10 px-8 bg-gray-200 border-gray-30"
                            >
                              세부권한
                            </Button>
                          </>
                        );
                      case 1:
                        return (
                          <MemberInfoDropdown title="성별 선택" menu={memberInfoDropdownMenu} />
                        );
                      case 2:
                        return <MemberInfoInput />;
                      case 4:
                        return <MemberInfoButton text="경력입력" />;
                      case 5:
                        return (
                          <MemberInfoDropdown title="근무파트 선택" menu={memberInfoDropdownMenu} />
                        );
                      case 6:
                        return <MemberInfoInput date={new Date()} />;
                      case 7:
                        return <MemberInfoButton text="연차신청" />;
                      default:
                        return null;
                    }
                  })()}
                </Table.Cell>
              </>
            ) : (
              <>
                <Table.RowHeaderCell></Table.RowHeaderCell>
                <Table.Cell></Table.Cell>
              </>
            )}
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
