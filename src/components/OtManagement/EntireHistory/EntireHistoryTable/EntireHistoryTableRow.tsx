import { Table } from '@radix-ui/themes';
import React from 'react';

interface IEntireHistoryTableRowProps {
  otNumber: number;
  branch: string;
  name: string;
  part: string;
  ot30: number;
  ot30Amount: number;
  ot60: number;
  ot60Amount: number;
  ot90: number;
  ot90Amount: number;
  totalOtCount: number;
  totalOtTime: number;
  totalAmount: number;
}

export default function EntireHistoryTableRow({
  otNumber,
  branch,
  name,
  part,
  ot30,
  ot30Amount,
  ot60,
  ot60Amount,
  ot90,
  ot90Amount,
  totalOtCount,
  totalOtTime,
  totalAmount,
}: IEntireHistoryTableRowProps) {
  return (
    <Table.Row>
      <Table.Cell align="center">{otNumber}</Table.Cell>
      <Table.Cell align="center">{branch}</Table.Cell>
      <Table.Cell align="center">{name}</Table.Cell>
      <Table.Cell align="center">{part}</Table.Cell>
      <Table.Cell align="center">{ot30}</Table.Cell>
      <Table.Cell align="center">{ot30Amount}</Table.Cell>
      <Table.Cell align="center">{ot60}</Table.Cell>
      <Table.Cell align="center">{ot60Amount}</Table.Cell>
      <Table.Cell align="center">{ot90}</Table.Cell>
      <Table.Cell align="center">{ot90Amount}</Table.Cell>
      <Table.Cell align="center">{totalOtCount}</Table.Cell>
      <Table.Cell align="center">{totalOtTime}</Table.Cell>
      <Table.Cell align="center">{totalAmount}</Table.Cell>
    </Table.Row>
  );
}
