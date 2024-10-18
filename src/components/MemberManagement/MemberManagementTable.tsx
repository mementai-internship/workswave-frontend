import { Table } from '@radix-ui/themes';
import React from 'react';

import MemberManagementTableCell from '@/components/MemberManagement/MemberManagementTableCell';
import { MEMBER_MANAGEMENT_TABLE_TITLE } from '@/constants/memberManagementTableTitle';

export interface IMemberManagementTableProps {
  data: IMemberManagementTableData[];
  tab: string;
}

export interface IMemberManagementTableData {
  id: number;
  name: string;
  birth_date: string | null;
  phone_number: string;
  email: string;
  hire_date: string | null;
  monthly_salary: number;
  annual_salary: number;
  part: string;
  branch: string;
}
//API 연결 후 삭제
export const userId = 142;

export const infoTestData: IMemberManagementTableProps[] = [];

export default function MemberManagementTable({ data, tab }: IMemberManagementTableProps) {
  console.log(data);
  if (!data) {
    return <div>데이터가 없습니다.</div>;
  }
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row className="bg-gray-300">
          {MEMBER_MANAGEMENT_TABLE_TITLE.map((title) => (
            <Table.ColumnHeaderCell
              className="p-2 text-center align-middle whitespace-nowrap"
              key={title}
            >
              {title}
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data
          ?.filter((data) => data.id === userId)
          .map((data) => (
            <React.Fragment key={data.id}>
              <MemberManagementTableCell data={data} tab={tab} />
            </React.Fragment>
          ))}
        {data
          .filter((data) => data.id !== userId)
          .map((data: IMemberManagementTableData) => (
            <React.Fragment key={data.id}>
              <MemberManagementTableCell data={data} tab={tab} />
            </React.Fragment>
          ))}
      </Table.Body>
    </Table.Root>
  );
}
