import { Table } from '@radix-ui/themes';
import React from 'react';

import Pagination from '@/components/Common/Pagination';
import EntireHistoryTableRow from '@/components/OtManagement/EntireHistory/EntireHistoryTable/EntireHistoryTableRow';

const ENTIRE_HISTORY_TABLE = [
  '번호',
  '지점',
  '이름',
  '근무파트',
  '30분 O.T',
  '30분 총금액',
  '60분 O.T',
  '60분 총금액',
  '90분 O.T',
  '90분 총금액',
  '총초과횟수',
  '총초과시간',
  '총금액',
];

const ENTIRE_HISTORY_TABLE_DATA = [
  {
    otNumber: 1,
    branch: '서울',
    name: '홍길동',
    part: '개발',
    ot30: 1,
    ot30Amount: 10000,
    ot60: 1,
    ot60Amount: 20000,
    ot90: 1,
    ot90Amount: 30000,
    totalOtCount: 1,
    totalOtTime: 1,
    totalAmount: 100000,
  },
];
export default function EntireHistoryTable() {
  return (
    <div>
      <Table.Root className="mb-5">
        <Table.Header className="bg-gray-200 text-xs text-gray-700 whitespace-nowrap border-t border-gray-300">
          {ENTIRE_HISTORY_TABLE.map((head) => {
            return (
              <Table.ColumnHeaderCell key={head} align="center">
                {head}
              </Table.ColumnHeaderCell>
            );
          })}
        </Table.Header>
        <Table.Body>
          {ENTIRE_HISTORY_TABLE_DATA.map((data) => {
            return <EntireHistoryTableRow key={data.otNumber} {...data} />;
          })}
        </Table.Body>
      </Table.Root>
      <Pagination totalItems={100} itemsPerPage={10} />
    </div>
  );
}
