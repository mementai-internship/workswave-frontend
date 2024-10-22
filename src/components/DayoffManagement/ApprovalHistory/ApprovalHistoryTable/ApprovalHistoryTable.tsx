import { Table } from '@radix-ui/themes';
import React from 'react';

import Pagination from '@/components/Common/Pagination';

export default function ApprovalHistoryTable() {
  return (
    <section>
      <Table.Root>
        <Table.Header className="bg-gray-200 text-xs text-gray-700 whitespace-nowrap border-t border-gray-300">
          <Table.Row>
            <Table.ColumnHeaderCell align="center">지점 </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell align="center">이름</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell align="center">근무파트</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell align="center">입사일</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell align="center">총연차</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell align="center">사용연차</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell align="center">잔여연차</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell align="center">무급</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell align="center">정기휴무</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body></Table.Body>
      </Table.Root>
      <Pagination totalItems={100} itemsPerPage={10} />
    </section>
  );
}
