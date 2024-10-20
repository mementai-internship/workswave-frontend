import { Button } from '@radix-ui/themes';
import { Fragment } from 'react';

import ContactSearchInput from '@/components/Common/ContactSearchInput';
import SelectBox from '@/components/Common/Select';
import Title from '@/components/Common/Title';
import { memberInfoDropdownMenu } from '@/pages/documentManagement/certificationManagement/constants';

export default function DocumentManagementHeader() {
  //  함수
  // const handleCertificateIssuanceButtonClick = () => { };

  return (
    <Fragment>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center">
          <Title content="증명서관리" />
          <span className="text-purple-50 px-4">
            승인 후 '저장되었습니다'가 뜰때까지 기다려주세요
          </span>
        </div>
        <Button variant="surface" color="gray" className="bg-gray-10 text-black">
          삭제 리스트 관리
        </Button>
      </div>
      <div>
        <div className="flex items-center justify-between py-5">
          <div className="flex gap-2">
            <SelectBox
              title="지점"
              name="office"
              options={memberInfoDropdownMenu}
              size="small"
              border={false}
            />
            <SelectBox
              title="전체 선택"
              name="지점"
              options={memberInfoDropdownMenu}
              size="small"
              border={false}
            />
            <SelectBox
              title="상태 선택"
              name="지점"
              options={memberInfoDropdownMenu}
              size="small"
              border={false}
            />
          </div>
          <div className="flex items-center justify-center gap-1">
            <div className="flex items-center justify-center gap-3">
              <span className="text-sm">검색</span>
              <ContactSearchInput />
            </div>
            {
              // 플로팅 버튼으로 변경
              /* <Button
              variant="surface"
              size="3"
              radius="none"
              color="gray"
              onClick={handleCertificateIssuanceButtonClick}
            >
              증명서 발급
            </Button> */
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}
