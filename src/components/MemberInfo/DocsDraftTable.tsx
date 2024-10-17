import MemberInfoButtonBar from '@/components/MemberInfo/MemberInfoCommon/MemberInfoButtonBar';
import { CheckboxCards, Table, Text } from '@radix-ui/themes';

const testDataArray = [
  { id: '1', title: '사진/영상 촬영 동의서' },
  { id: '2', title: '개인정보 제공 동의서 (기본문서)' },
  { id: '3', title: '보안서약서 (기본문서)' },
  { id: '4', title: '퇴직연금 규약 동의서 (기본문서)' },
  { id: '5', title: '근로계약서(인턴)' },
  { id: '6', title: '근로계약서(계약직)' },
  { id: '7', title: '[기타1] 근로계약서' },
  { id: '8', title: '[기타2] 근로계약서' },
  { id: '9', title: '근로계약서' },
  { id: '10', title: '임금계약서(인턴)' },
  { id: '11', title: '임금계약서(계약직)' },
  { id: '12', title: '[기타1] 임금계약서' },
  { id: '13', title: '[기타2] 임금계약서' },
  { id: '14', title: '임금계약서' },
  { id: '15', title: '사직원' },
  { id: '16', title: '퇴사자보안서약서' },
  { id: '17', title: '외국인 고용보험 가입 동의서' },
];

export default function DocsDraftTable() {
  return (
    <Table.Root className="table-fixed h-full">
      <Table.Header>
        <Table.Row>
          <div className="py-4">
            <MemberInfoButtonBar
              leftButton={{ text: '보낸 내역보기', onClick: () => {} }}
              rightButton={{ text: '문서 업로드', onClick: () => {} }}
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
                <>
                  <CheckboxCards.Item key={index} value={data.id} className="w-[210px] h-12">
                    <Text className="text-xs whitespace-nowrap">{data.title}</Text>
                  </CheckboxCards.Item>
                </>
              ))}
            </CheckboxCards.Root>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
}
