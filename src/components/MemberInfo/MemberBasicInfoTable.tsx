import { Button, Popover, Table } from '@radix-ui/themes';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import MemberBasicInfoDatePicker from '@/components/MemberInfo/MemberInfoCommon/MemberBasicInfoDatePicker';
import MemberInfoButton from '@/components/MemberInfo/MemberInfoCommon/MemberInfoButton';
import MemberInfoInput from '@/components/MemberInfo/MemberInfoCommon/MemberInfoInput';
import MemberInfoSelect from '@/components/MemberInfo/MemberInfoCommon/MemberInfoSelect';
import {
  MEMBER_BASIC_INFO_TITLE1,
  MEMBER_BASIC_INFO_TITLE2,
} from '@/constants/memberManagementTableTitle';
import { useGetBranches } from '@/hooks/apis/useBranches';
import { useGetParts } from '@/hooks/apis/useParts';
import { useGetCurrentUserInfo, usePatchUser } from '@/hooks/apis/useUserManagement';
import { TZipCode } from '@/models/zipCode.model';

export default function MemberBasicInfoTable() {
  const { data: currentUserInfo } = useGetCurrentUserInfo();

  const branchList = useGetBranches('0');
  const partList = useGetParts(currentUserInfo?.branch.id);
  const genderList = [
    { id: 1, name: '남자' },
    { id: 2, name: '여자' },
    { id: 3, name: '기타' },
  ];

  const [, setBranchId] = useState(currentUserInfo?.branch.id);
  const [, setPartId] = useState(currentUserInfo?.part.id);
  const [, setGenderId] = useState(currentUserInfo?.gender);

  function handleBranchChange(id: number) {
    setBranchId(id);
    basicInfoSetValue('branch_id', id);
    patchUser(basicInfoGetValues());
  }

  function handlePartChange(id: number) {
    setPartId(id);
    basicInfoSetValue('part_id', id);
    patchUser(basicInfoGetValues());
  }

  function handleGenderChange(gender: string) {
    setGenderId(gender);
    basicInfoSetValue('gender', gender);
    patchUser(basicInfoGetValues());
  }

  const {
    register: basicInfoRegister,
    handleSubmit: handleBasicInfoSubmit,
    getValues: basicInfoGetValues,
    control: basicInfoControl,
    setValue: basicInfoSetValue,
  } = useForm({
    defaultValues: {
      name: currentUserInfo?.name || '',
      email: currentUserInfo?.email || '',
      phone_number: currentUserInfo?.phone_number || '',
      address: currentUserInfo?.address || '',
      education: currentUserInfo?.education || '',
      birth_date: currentUserInfo?.birth_date || '2024-10-01',
      hire_date: currentUserInfo?.hire_date || '2024-10-01',
      resignation_date: currentUserInfo?.resignation_date || '2024-10-01',
      gender: currentUserInfo?.gender || '',
      part_id: Number(currentUserInfo?.part.id) || 0,
      branch_id: Number(currentUserInfo?.branch.id) || 0,
      last_company: currentUserInfo?.last_company || '',
      last_position: currentUserInfo?.last_position || '',
      last_career_start_date: currentUserInfo?.last_career_start_date || '2024-10-01',
      last_career_end_date: currentUserInfo?.last_career_end_date || '2024-10-01',
    },
  });

  const { mutate: patchUser } = usePatchUser(currentUserInfo?.id);
  function onSubmitBasicInfo(data) {
    const basicInfo = basicInfoGetValues();
    if (basicInfo.resignation_date === '근무 중' || basicInfo.resignation_date === '') {
      basicInfo.resignation_date = '2024-10-01';
    }
    if (!basicInfo.last_career_start_date) {
      basicInfo.resignation_date = '2024-10-01';
    }

    if (!basicInfo.last_career_end_date) {
      basicInfo.resignation_date = '2024-10-01';
    }
    console.log(data);
    patchUser(data);
  }

  function handleClickAddressButton(e) {
    const buttonRect = e.currentTarget.getBoundingClientRect();
    new window.daum.Postcode({
      oncomplete: function (data: TZipCode) {
        basicInfoSetValue('address', data.address.toString());
        patchUser(basicInfoGetValues());
      },
      left: buttonRect.right + window.scrollX,
      top: buttonRect.bottom + window.scrollY,
    }).open();
  }

  if (!currentUserInfo) {
    <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleBasicInfoSubmit(onSubmitBasicInfo)}>
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
                        <div className="h-[19px] -translate-y-2.5">
                          <Controller
                            name="branch_id"
                            control={basicInfoControl}
                            render={({ field: { value } }) => (
                              <MemberInfoSelect
                                value={value}
                                content={branchList.data?.list}
                                defaultValue={currentUserInfo?.branch.id}
                                name="branch_id"
                                placeholder={currentUserInfo?.branch.name}
                                onChange={handleBranchChange}
                              />
                            )}
                          />
                        </div>
                      );
                    case 1:
                      return (
                        <Controller
                          control={basicInfoControl}
                          name="name"
                          render={({ field }) => (
                            <div className="h-[50px] translate-y-1">
                              <MemberInfoInput defaultValue={currentUserInfo?.name} {...field} />
                            </div>
                          )}
                        />
                      );
                    case 2:
                      return (
                        <Controller
                          control={basicInfoControl}
                          name="phone_number"
                          render={({ field }) => (
                            <MemberInfoInput
                              defaultValue={currentUserInfo?.phone_number}
                              {...field}
                            />
                          )}
                        />
                      );
                    case 3:
                      return (
                        <>
                          <Button
                            variant="outline"
                            size="2"
                            color="purple"
                            className="text-purple w-44 h-10 px-8"
                            id="postcodeButton"
                            onClick={handleClickAddressButton}
                          >
                            주소입력
                          </Button>
                          <Controller
                            control={basicInfoControl}
                            name="address"
                            render={({ field }) => (
                              <MemberInfoInput defaultValue={currentUserInfo?.address} {...field} />
                            )}
                          />
                        </>
                      );
                    case 4:
                      return (
                        <Popover.Root>
                          <Popover.Trigger>
                            <Button
                              variant="outline"
                              size="2"
                              color="purple"
                              className="text-purple w-44 h-10 px-8"
                            >
                              학력입력
                            </Button>
                          </Popover.Trigger>
                          <Popover.Content
                            width="100%"
                            height="80px"
                            className="flex flex-col gap-2"
                          >
                            <iframe
                              src="http://api.data.go.kr/openapi/tn_pubr_public_univ_info_api?ServiceKey=XGTV%2BCkrGAVh6KuNSSJQL0IAxRaHnLh3Jnq3cy9uKj6J8ECU82jrsObbZeewBiqNrkVJto%2BqPJcuDosR4xTz%2FA%3D%3D"
                              name="학력"
                              width="1000"
                              height="1200"
                              className="border-width:0px border-color:white border-style:solid;"
                            >
                              {' '}
                            </iframe>
                            <Popover.Close>
                              <Button size="1">추가하기</Button>
                            </Popover.Close>
                          </Popover.Content>
                        </Popover.Root>
                      );
                    case 5:
                      return (
                        <MemberBasicInfoDatePicker
                          defaultValue={currentUserInfo?.birth_date}
                          {...basicInfoRegister('birth_date')}
                        />
                      );
                    case 6:
                      return (
                        <MemberBasicInfoDatePicker
                          defaultValue={currentUserInfo?.hire_date}
                          {...basicInfoRegister('hire_date')}
                        />
                      );
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
                            <div className="h-[30px] -translate-y-1.5">
                              <Controller
                                name="gender"
                                control={basicInfoControl}
                                render={({ field: { value } }) => (
                                  <MemberInfoSelect
                                    value={value}
                                    content={genderList}
                                    defaultValue={currentUserInfo?.gender}
                                    name="gender"
                                    onChange={handleGenderChange}
                                    placeholder={currentUserInfo?.gender}
                                  />
                                )}
                              />
                            </div>
                          );
                        case 2:
                          return (
                            <Controller
                              control={basicInfoControl}
                              name="email"
                              render={({ field }) => (
                                <MemberInfoInput
                                  size="large"
                                  {...field}
                                  defaultValue={currentUserInfo?.email}
                                />
                              )}
                            />
                          );
                        case 4:
                          return (
                            <Popover.Root>
                              <Popover.Trigger>
                                <Button
                                  variant="outline"
                                  size="2"
                                  color="purple"
                                  className="text-purple w-44 h-10 px-8"
                                >
                                  경력입력
                                </Button>
                              </Popover.Trigger>
                              <Popover.Content width="360px" className="flex flex-col gap-2">
                                경력 추가하기
                                <Popover.Close>
                                  <Button size="1">추가하기</Button>
                                </Popover.Close>
                              </Popover.Content>
                            </Popover.Root>
                          );
                        case 5:
                          return (
                            <Controller
                              name="part_id"
                              control={basicInfoControl}
                              render={({ field: { value } }) => (
                                <MemberInfoSelect
                                  value={value}
                                  content={partList.data?.list}
                                  defaultValue={currentUserInfo?.part.id}
                                  name="part_id"
                                  onChange={handlePartChange}
                                  placeholder={currentUserInfo?.part.name}
                                />
                              )}
                            />
                          );
                        case 6:
                          return (
                            <MemberBasicInfoDatePicker
                              defaultValue={currentUserInfo?.resignation_date || '근무 중'}
                              {...basicInfoRegister('resignation_date')}
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
    </form>
  );
}
