import { Button, Table } from '@radix-ui/themes';

import SelectBox from '@/components/Common/Select';
import MemberBasicInfoDatePicker from '@/components/MemberInfo/MemberInfoCommon/MemberBasicInfoDatePicker';
import MemberInfoButton from '@/components/MemberInfo/MemberInfoCommon/MemberInfoButton';
import MemberInfoInput from '@/components/MemberInfo/MemberInfoCommon/MemberInfoInput';
import {
  MEMBER_BASIC_INFO_TITLE1,
  MEMBER_BASIC_INFO_TITLE2,
} from '@/constants/memberManagementTableTitle';
import { useGetCurrentUserInfo } from '@/hooks/apis/useUserManagement';
import { useBranchList } from '@/hooks/useBranchList';
import { usePartList } from '@/hooks/usePartList';

export default function MemberBasicInfoTable() {
  const { data: currentUserInfo } = useGetCurrentUserInfo();
  console.log(currentUserInfo);
  const branchList = useBranchList();
  const partList = usePartList();
  const genderList = ['남자', '여자', '기타'];

  return (
    <Table.Root className="table-fixed h-full">
      <Table.Header>
        <Table.Row className="bg-gray-200">
          <Table.ColumnHeaderCell colSpan={4}>기본정보</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {MEMBER_BASIC_INFO_TITLE1.map((title, index) => (
          <Table.Row className="h-12" key={title}>
            <Table.RowHeaderCell className="align-middle bg-gray-200 font-bold h-12 w-[12.5%]">
              {title}
            </Table.RowHeaderCell>
            <Table.Cell key={title} className="flex items-center py-8 gap-2 h-12">
              {(() => {
                switch (index) {
                  case 0:
                    return (
                      <SelectBox
                        title={currentUserInfo?.branch.name || '지점 선택'}
                        style="h-10"
                        options={branchList.map((branch, index) => ({
                          id: index,
                          name: branch,
                          action: () => {},
                        }))}
                      />
                    );
                  case 1:
                    return (
                      <div className="h-[50px] translate-y-1">
                        <MemberInfoInput defaultValue={currentUserInfo?.name} />
                      </div>
                    );
                  case 2:
                    return <MemberInfoInput defaultValue={currentUserInfo?.phone_number} />;
                  case 3:
                    return (
                      <div className="flex items-center gap-2">
                        <MemberInfoButton text="주소입력" />
                        <MemberInfoInput size="small" defaultValue={currentUserInfo?.address} />
                      </div>
                    );
                  case 4:
                    return <MemberInfoButton text="학력입력" />;
                  case 5:
                    return <MemberBasicInfoDatePicker defaultValue={currentUserInfo?.birth_date} />;
                  case 6:
                    return <MemberBasicInfoDatePicker defaultValue={currentUserInfo?.hire_date} />;
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
                <Table.Cell className="flex items-center py-8 gap-2 h-12">
                  {(() => {
                    switch (index) {
                      case 0:
                        return (
                          <>
                            <SelectBox
                              title={currentUserInfo?.role || '권한 선택'}
                              style="h-10"
                              options={branchList.map((branch, index) => ({
                                id: index,
                                name: branch,
                                action: () => {},
                              }))}
                            />
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
                          <div className="h-[38px]">
                            <SelectBox
                              title={currentUserInfo?.gender || '성별 선택'}
                              style="h-10"
                              options={genderList.map((gender, index) => ({
                                id: index,
                                name: gender,
                              }))}
                            />
                          </div>
                        );
                      case 2:
                        return (
                          <MemberInfoInput size="large" defaultValue={currentUserInfo?.email} />
                        );
                      case 4:
                        return <MemberInfoButton text="경력입력" />;
                      case 5:
                        return (
                          <SelectBox
                            title={currentUserInfo?.part.name || '근무 파트 선택'}
                            style="h-10"
                            options={partList.map((part, index) => ({
                              id: index,
                              name: part,
                            }))}
                          />
                        );
                      case 6:
                        return (
                          <MemberBasicInfoDatePicker
                            defaultValue={currentUserInfo?.resignation_date || '근무 중'}
                          />
                        );
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
