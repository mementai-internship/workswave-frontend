import ContactSearchInput from '@/components/Common/ContactSearchInput';
import SelectBox from '@/components/Common/Select';
import TitleContainer from '@/components/Common/TitleContainer';
import { Button, Table } from '@radix-ui/themes';
import { PiGear } from 'react-icons/pi';

export default function SuperManagerSetting() {
  // 회원관리 버튼 클릭 시
  const handleMemberManagementButtonClick = () => {};

  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-2 items-center w-full">
        <TitleContainer content="파트/통합관리자 관리" />
        <Button
          color="gray"
          variant="soft"
          radius="full"
          onClick={handleMemberManagementButtonClick}
        >
          <PiGear />
          회원 관리
        </Button>
      </div>
      <hr className="w-min-screen h-0.5 bg-gray-300" />
      <div className="flex items-center justify-between py-4">
        <div className="flex gap-2">
          <SelectBox
            title="지점"
            size="small"
            options={[
              {
                id: 1,
                name: '뮤즈의원(강남점)',
                action: () => {},
              },
              {
                id: 2,
                name: '뮤즈의원(수원인계점)',
                action: () => {},
              },
            ]}
          />
          <SelectBox
            title="권한"
            size="small"
            options={[
              {
                id: 1,
                name: '전체 선택',
                action: () => {},
              },
              {
                id: 2,
                name: '통합관리자',
                action: () => {},
              },
              {
                id: 3,
                name: '파트관리자',
                action: () => {},
              },
            ]}
          />
        </div>
        <ContactSearchInput />
      </div>
      <Table.Root className="w-full">
        <Table.Header>
          <Table.Row className="bg-gray-300">
            {Object.keys(SUPERMANAGERSETTING_TABLE_TITLE[0]).map((title) => (
              <Table.ColumnHeaderCell className="p-2 text-center align-middle" key={title}>
                {title}
              </Table.ColumnHeaderCell>
            ))}
            <Table.ColumnHeaderCell className="p-2 text-center align-middle">
              상태변경
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Object.values(SUPERMANAGERSETTING_TABLE_TITLE).map((data, dataIndex) => (
            <Table.Row key={dataIndex} align="center">
              {Object.entries(data).map(([key, value], entryIndex) => {
                return key === '파트' ? (
                  <Table.Cell justify="center" align="center" key={entryIndex}>
                    <div className="flex gap-2">
                      {data[key].map((part, index) => (
                        <div key={index} className="bg-gray-200 rounded-md px-1.5">
                          {part}
                        </div>
                      ))}
                    </div>
                  </Table.Cell>
                ) : (
                  <Table.Cell justify="center" align="center" key={entryIndex}>
                    {value}
                  </Table.Cell>
                );
              })}
              <Table.Cell justify="center" align="center">
                <Button
                  variant="surface"
                  radius="none"
                  color="gray"
                  size="3"
                  className="font-semibold text-black text-sm py-4 px-8 bg-gray-200 border-gray-10"
                  onClick={() => {}}
                >
                  권한변경
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}

//API 연결 후 삭제
type TSUPERMANAGERSETTING_TABLE_TITLE = {
  번호: number;
  이름: string;
  근무파트: string;
  연락처: string;
  이메일: string;
  권한: string;
  파트: string[];
}[];

const SUPERMANAGERSETTING_TABLE_TITLE: TSUPERMANAGERSETTING_TABLE_TITLE = [
  {
    번호: 12,
    이름: '홍길동',
    근무파트: '피부관리사',
    연락처: '010-1234-5678',
    이메일: 'email@mement.ai',
    권한: '통합관리자',
    파트: ['코디', '코디', '코디', '코디'],
  },
  {
    번호: 11,
    이름: '홍길동2',
    근무파트: '의사',
    연락처: '010-1234-5678',
    이메일: 'email@mement.ai',
    권한: '통합관리자',
    파트: ['전체'],
  },
  {
    번호: 10,
    이름: '홍길동',
    근무파트: '피부관리사',
    연락처: '010-1234-5678',
    이메일: 'email@mement.ai',
    권한: '통합관리자',
    파트: ['전체'],
  },
  {
    번호: 9,
    이름: '홍길동',
    근무파트: '피부관리사',
    연락처: '010-1234-5678',
    이메일: 'email@mement.ai',
    권한: '통합관리자',
    파트: ['전체'],
  },
  {
    번호: 8,
    이름: '홍길동',
    근무파트: '피부관리사',
    연락처: '010-1234-5678',
    이메일: 'email@mement.ai',
    권한: '통합관리자',
    파트: ['전체'],
  },
  {
    번호: 7,
    이름: '홍길동',
    근무파트: '피부관리사',
    연락처: '010-1234-5678',
    이메일: 'email@mement.ai',
    권한: '통합관리자',
    파트: ['전체'],
  },
  {
    번호: 6,
    이름: '홍길동',
    근무파트: '피부관리사',
    연락처: '010-1234-5678',
    이메일: 'email@mement.ai',
    권한: '통합관리자',
    파트: ['전체'],
  },
  {
    번호: 5,
    이름: '홍길동',
    근무파트: '피부관리사',
    연락처: '010-1234-5678',
    이메일: 'email@mement.ai',
    권한: '통합관리자',
    파트: ['전체'],
  },
  {
    번호: 4,
    이름: '홍길동',
    근무파트: '피부관리사',
    연락처: '010-1234-5678',
    이메일: 'email@mement.ai',
    권한: '통합관리자',
    파트: ['전체'],
  },
  {
    번호: 3,
    이름: '홍길동',
    근무파트: '피부관리사',
    연락처: '010-1234-5678',
    이메일: 'email@mement.ai',
    권한: '통합관리자',
    파트: ['전체'],
  },
];
