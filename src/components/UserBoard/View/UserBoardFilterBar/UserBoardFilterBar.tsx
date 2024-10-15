import SelectBox from '@/components/Common/Select';
import React from 'react';

export default function UserBoardFilterBar() {
  return (
    <div className="flex gap-4">
      <SelectBox
        title="회원 검색"
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

      {/* 공통컴포넌트 생기면 추가 */}
    </div>
  );
}
