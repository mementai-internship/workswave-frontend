import { Button } from '@radix-ui/themes';
import React from 'react';
import { Control, UseFormSetValue } from 'react-hook-form';

import { Txt } from '@/components/Common/Txt';
import OfficeSettingCreateRow from '@/components/OfficeSetting/OfficeSettingCreateRow';
import OfficeSettingFileUpload from '@/components/OfficeSetting/OfficeSettingFileUpload';
import { IBranchesRequest } from '@/models/branches.model';

interface IProps {
  control: Control<IBranchesRequest>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setValue: UseFormSetValue<IBranchesRequest>;
}

export default function OfficeSettingCreate({ setValue, control, onSubmit }: IProps) {
  return (
    <div className="w-1/3 max-w-[420px] h-[48px]">
      <form onSubmit={onSubmit}>
        <div className="bg-gray-300 px-3 py-2 flex items-center justify-between">
          <Txt variant="h6">지점정보</Txt>
          <Button variant="outline" color="gray">
            등록
          </Button>
        </div>
        <div className="border border-[#dadce0]">
          <OfficeSettingCreateRow
            label="지점코드"
            placeholder="지점코드"
            name="code"
            control={control}
          />
          <OfficeSettingCreateRow
            label="사업체 명"
            placeholder="지점명"
            name="name"
            control={control}
          />
          <OfficeSettingCreateRow
            label="대표원장"
            placeholder="대표원장"
            name="representative_name"
            control={control}
          />
          <OfficeSettingCreateRow
            label="사업자번호"
            placeholder="사업자번호"
            name="registration_number"
            control={control}
          />
          <OfficeSettingCreateRow
            label="전화번호"
            placeholder="전화번호"
            name="call_number"
            control={control}
          />
          <OfficeSettingCreateRow
            label="주소"
            placeholder="주소"
            name="address"
            control={control}
          />
          <OfficeSettingCreateRow
            label="직인/명판"
            placeholder="직인/명판"
            name="corporate_seal"
            control={control}
          >
            <OfficeSettingFileUpload title="직인등록" setValue={setValue} name="corporate_seal" />
            <OfficeSettingFileUpload title="명판등록" setValue={setValue} name="nameplate" />
          </OfficeSettingCreateRow>
          <OfficeSettingCreateRow
            label="메일"
            placeholder="example@mail.com"
            name="mail_address"
            control={control}
          />
        </div>
      </form>
    </div>
  );
}
