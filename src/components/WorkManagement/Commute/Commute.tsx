import { Table } from '@radix-ui/themes';
import { Dayjs } from 'dayjs';
import React from 'react';
import { useMemo } from 'react';

export default function Commute({ currentDate }: { currentDate: Dayjs }) {
  const generateCommuteHeadTable = useMemo(() => {
    const daysInMonth = currentDate.daysInMonth();
    const baseHeaders = ['번호', '지점', '이름', '근무파트'];
    const dayHeaders = Array.from({ length: daysInMonth }, (_, i) => `${i + 1}일`);
    return [...baseHeaders, ...dayHeaders] as const;
  }, [currentDate]);
  return (
    <Table.Root className="mb-5">
      <Table.Header className="bg-gray-200 text-xs text-gray-700 whitespace-nowrap border-t border-gray-300">
        <Table.Row>
          {generateCommuteHeadTable.map((header, index) => (
            <Table.ColumnHeaderCell key={index}>{header}</Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body></Table.Body>
    </Table.Root>
  );
}
