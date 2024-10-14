import UserBoardFilterBarDropdown from '@/components/UserBoard/View/UserBoardFilterBar/UserBoardFilterBarDropdown/UserBoardFilterBarDropdown';
import React from 'react';

export default function UserBoardFilterBar() {
  return (
    <div className="flex gap-4">
      <UserBoardFilterBarDropdown />

      {/* 공통컴포넌트 생기면 추가 */}
    </div>
  );
}
