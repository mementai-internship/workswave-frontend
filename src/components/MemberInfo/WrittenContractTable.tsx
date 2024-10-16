import MemberInfoButtonBar from '@/components/MemberInfo/MemberInfoCommon/MemberInfoButtonBar';
import WrittenContractCheckBox from '@/components/MemberInfo/MemberInfoCommon/WrittenContractCheckBox';
import { CheckboxCards, Table } from '@radix-ui/themes';

// 테스트 데이터
const testDataArray = [
  { titleText: '사진/영상 촬영 동의서', date: '2024-10-01', name: '김철수', sending: '1' },
  {
    titleText: '개인정보 제공 동의서 (기본문서)',
    date: '2024-10-02',
    name: '이영희',
    sending: '2',
  },
  { titleText: '보안서약서 (기본문서)', date: '2024-10-03', name: '박민수', sending: '0' },
  {
    titleText: '퇴직연금 규약 동의서 (기본문서)',
    date: '2024-10-04',
    name: '최지현',
    sending: '1',
  },
  { titleText: '근로계약서', date: '2024-10-05', name: '정수빈', sending: '1' },
  { titleText: '임금계약서', date: '2024-10-06', name: '김하늘', sending: '1' },
  { titleText: '임금계약서', date: '2024-10-07', name: '홍길동', sending: '1' },
  { titleText: '임금계약서', date: '2024-10-08', name: '이준호', sending: '1' },
  { titleText: '임금계약서', date: '2024-10-09', name: '박수진', sending: '1' },
  { titleText: '임금계약서', date: '2024-10-10', name: '최준혁', sending: '1' },
  { titleText: '임금계약서', date: '2024-10-11', name: '김다은', sending: '4' },
  { titleText: '임금계약서', date: '2024-10-12', name: '이서연', sending: '5' },
  { titleText: '임금계약서', date: '2024-10-13', name: '박지훈', sending: '6' },
  { titleText: '임금계약서', date: '2024-10-14', name: '김민정', sending: '7' },
  { titleText: '임금계약서', date: '2024-10-15', name: '이승민', sending: '8' },
  { titleText: '사직원', date: '2024-10-16', name: '정유진', sending: '4' },
  { titleText: '퇴사자보안서약서', date: '2024-10-17', name: '박영수', sending: '2' },
];

export default function WrittenContract() {
  return (
    <Table.Root className="table-fixed h-full">
      <Table.Header>
        <Table.Row>
          <div className="py-4">
            <MemberInfoButtonBar
              leftButton={{ text: '메일 보내기', onClick: () => {} }}
              rightButton={{ text: '보낸 내역보기', onClick: () => {} }}
            />
          </div>
        </Table.Row>
        <Table.Row className="bg-gray-200">
          <Table.ColumnHeaderCell colSpan={1}>작성된 계약서</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell className="flex items-center gap-2 p-1 h-72">
            <CheckboxCards.Root defaultValue={['1']} columns={{ initial: '3', sm: '6' }}>
              {testDataArray.map((data, index) => (
                <WrittenContractCheckBox
                  key={index}
                  titleText={data.titleText}
                  date={data.date}
                  name={data.name}
                  sending={data.sending}
                />
              ))}
            </CheckboxCards.Root>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
}
