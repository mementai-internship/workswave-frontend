import MemberBasicInfoDatePicker from '@/components/MemberInfo/MemberInfoCommon/MemberBasicInfoDatePicker';
import MemberInfoButton from '@/components/MemberInfo/MemberInfoCommon/MemberInfoButton';
import MemberInfoDropdown from '@/components/MemberInfo/MemberInfoCommon/MemberInfoDropdownMenu';
import MemberInfoInput from '@/components/MemberInfo/MemberInfoCommon/MemberInfoInput';
import {
  MEMBER_BASIC_INFO_TITLE1,
  MEMBER_BASIC_INFO_TITLE2,
} from '@/constants/memberManagementTableTitle';
import { Button, Table } from '@radix-ui/themes';

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
    <Table.Root className="table-fixed h-full">
      <Table.Header>
        <Table.Row className="bg-gray-200">
          <Table.ColumnHeaderCell colSpan={4}>기본정보</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {MEMBER_BASIC_INFO_TITLE1.map((title, index) => (
          <Table.Row className="h-12">
            <Table.RowHeaderCell
              key={title}
              className="align-middle bg-gray-200 font-bold h-12 w-[12.5%]"
            >
              {title}
            </Table.RowHeaderCell>
            <Table.Cell key={title} className="flex items-center py-8 gap-2 h-12">
              {(() => {
                switch (index) {
                  case 0:
                    return <MemberInfoDropdown title="지점 선택" menu={memberInfoDropdownMenu} />;
                  case 1:
                    return <MemberInfoInput defaultValue={'이서인'} />;
                  case 2:
                    return <MemberInfoInput defaultValue={'01036270286'} />;
                  case 3:
                    return (
                      <div className="flex items-center gap-2">
                        <MemberInfoButton text="주소입력" />
                        <MemberInfoInput size="small" defaultValue={'서울특별시 강남구'} />
                      </div>
                    );
                  case 4:
                    return <MemberInfoButton text="학력입력" />;
                  case 5:
                    return <MemberBasicInfoDatePicker />;
                  case 6:
                    return <MemberBasicInfoDatePicker />;
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
                  key={MEMBER_BASIC_INFO_TITLE2[index]}
                  className="align-middle bg-gray-200 font-bold h-12 w-[12.5%]"
                >
                  {MEMBER_BASIC_INFO_TITLE2[index]}
                </Table.RowHeaderCell>
                <Table.Cell
                  key={MEMBER_BASIC_INFO_TITLE2[index]}
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
                        return <MemberInfoInput size="large" defaultValue={'seoin@test.com'} />;
                      case 4:
                        return <MemberInfoButton text="경력입력" />;
                      case 5:
                        return (
                          <MemberInfoDropdown title="근무파트 선택" menu={memberInfoDropdownMenu} />
                        );
                      case 6:
                        return <MemberBasicInfoDatePicker />;
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
                <Table.RowHeaderCell className="w-[12.5%]"></Table.RowHeaderCell>
                <Table.Cell className="w-[37.5%]"></Table.Cell>
              </>
            )}
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
