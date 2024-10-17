import React from 'react';

import Pagination from '@/components/Common/Pagination';
import OtManagementListItem from '@/components/OtManagement/OtManagementList/OtManagementTableItem';

// 더미 데이터 연차관리용으로 수정

const dummyData = [
  {
    id: 1,
    part: '코디',
    name: '김민수',
    applyDate: '2024/11/15',
    otTime: 30,
    managerName: '김진영',
  },
  {
    id: 2,
    part: '코디',
    name: '김민수',
    applyDate: '2024/11/15',
    otTime: 30,
    managerName: '김진영',
  },
];

export default function OtManagementList() {
  return (
    <div>
      {dummyData.map((item) => (
        <OtManagementListItem key={item.id} {...item} />
      ))}
      <Pagination totalItems={100} itemsPerPage={10} />
    </div>
  );
}
