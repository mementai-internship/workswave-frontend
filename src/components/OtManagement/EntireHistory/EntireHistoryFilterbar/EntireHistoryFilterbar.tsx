import React from 'react';

import ContactSearchInput from '@/components/Common/ContactSearchInput';
import SelectBox from '@/components/Common/Select';
import WeekSelector from '@/components/OtManagement/EntireHistory/EntireHistoryFilterbar/WeekSelector';

const dummyBranch = [
  {
    id: 1,
    name: '뮤즈의원(강남점)',
    action: () => {},
  },
];

const dummyPart = [
  {
    id: 1,
    name: '상담실장',
    action: () => {},
  },
];

const dummyStatus = [
  {
    id: 1,
    name: '근무자',
    action: () => {},
  },
  {
    id: 2,
    name: '퇴사자',
    action: () => {},
  },
];

export default function EntireHistoryFilterbar() {
  return (
    <div className="flex gap-4 justify-between">
      <div className="flex items-center gap-2">
        <SelectBox size="small" title="지점 선택" options={dummyBranch} />
        <SelectBox size="small" title="파트 선택" options={dummyPart} />
        <SelectBox size="small" title="근무내역 선택" options={dummyStatus} />
      </div>
      <WeekSelector />
      <ContactSearchInput />
    </div>
  );
}
