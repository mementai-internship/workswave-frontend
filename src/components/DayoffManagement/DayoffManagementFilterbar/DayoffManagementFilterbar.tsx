import React from 'react';

import ContactSearchInput from '@/components/Common/ContactSearchInput';
import SelectBox from '@/components/Common/Select';
import WeekSelector from '@/components/DayoffManagement/DayoffManagementFilterbar/WeekSelector';

const dummyPart = [
  {
    id: 1,
    name: '코디',
    action: () => {},
  },
  {
    id: 2,
    name: '제모',
    action: () => {},
  },
  {
    id: 3,
    name: '상담',
    action: () => {},
  },
];

export default function DayoffManagementFilterbar() {
  return (
    <div className="flex gap-4 justify-between">
      <div>
        <SelectBox
          size="small"
          title="지점 선택"
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
        <SelectBox size="small" title="파트선택" options={dummyPart} />
        <SelectBox
          size="small"
          title="상태 변경"
          options={[
            {
              id: 1,
              name: '승인',
              action: () => {},
            },
            {
              id: 2,
              name: '반려',
              action: () => {},
            },
            {
              id: 3,
              name: '대기',
              action: () => {},
            },
          ]}
        />
      </div>
      <WeekSelector />

      <div>
        <div className="flex items-center justify-center gap-3">
          <span className="text-sm">검색</span>
          <ContactSearchInput />
        </div>
      </div>
    </div>
  );
}
