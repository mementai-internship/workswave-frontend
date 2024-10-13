import { Table } from '@radix-ui/themes';
import React from 'react';

export default function UserBoardTableHeader() {
  return (
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeaderCell className="w-16">번호</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell className="w-24">지점</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell className="w-28">카테고리</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell className="w-1/3">제목</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell className="w-24">작성자</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell className="w-28">근무파트</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell className="w-28">작성일</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell className="w-20">조회수</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell className="w-20"></Table.ColumnHeaderCell>
      </Table.Row>
    </Table.Header>
  );
}
