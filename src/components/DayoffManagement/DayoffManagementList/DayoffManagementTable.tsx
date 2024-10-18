import React from 'react';

import Pagination from '@/components/Common/Pagination';
import DayoffManagementListItem from '@/components/DayoffManagement/DayoffManagementList/DayoffManagementTableItem';

// 더미 데이터 연차관리용으로 수정

const dummyData = [
  {
    id: 1,
    part: '코디',
    name: '최주희',
    applyDate: '2024/11/15',
    dayoffType: '연차',
    dayoffCount: 1,
    dayoffDateStart: '2024/11/15',
    dayoffDateEnd: '2024/11/16',
    managerName: '김민수',
  },
  {
    id: 2,
    part: '코디',
    name: '최주희',
    applyDate: '2024/11/15',
    dayoffType: '연차',
    dayoffCount: 1,
    dayoffDateStart: '2024/11/15',
    dayoffDateEnd: '2024/11/16',
    managerName: '김민수',
  },
];

export default function DayoffManagementList() {
  return (
    <div>
      {dummyData.map((item) => (
        <DayoffManagementListItem key={item.id} {...item} />
      ))}
      <Pagination totalItems={100} itemsPerPage={10} />
    </div>
  );
}
