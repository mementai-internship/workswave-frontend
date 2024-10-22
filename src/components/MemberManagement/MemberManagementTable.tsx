import { Table } from '@radix-ui/themes';
import React from 'react';

import MemberManagementTableCell from '@/components/MemberManagement/MemberManagementTableCell';
import {
  MEMBER_MANAGEMENT_TABLE_TITLE,
  MEMBER_MANAGEMENT_TABLE_TITLE_DELETED,
  MEMBER_MANAGEMENT_TABLE_TITLE_LEAVE,
  MEMBER_MANAGEMENT_TABLE_TITLE_REST,
} from '@/constants/memberManagementTableTitle';
import { TCurrentUserInfo } from '@/models/user-management.model';

export interface IMemberManagementTableProps {
  data: IMemberManagementTableData[];
  allUserList?: IMemberManagementTableData[];
  tab: string;
  currentUser: TCurrentUserInfo;
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

export const infoTestData: IMemberManagementTableProps[] = [];

export default function MemberManagementTable({
  data,
  tab,
  currentUser,
}: IMemberManagementTableProps) {
  if (!data || currentUser.id === 0) {
    return <div>Loading...</div>;
  }

  const userId = currentUser.id;
  console.log(currentUser.id);
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row className="bg-gray-300">
          {(tab === '전체'
            ? MEMBER_MANAGEMENT_TABLE_TITLE
            : tab === '퇴사자'
              ? MEMBER_MANAGEMENT_TABLE_TITLE_LEAVE
              : tab === '휴직자'
                ? MEMBER_MANAGEMENT_TABLE_TITLE_REST
                : MEMBER_MANAGEMENT_TABLE_TITLE_DELETED
          ).map((title) => (
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
              <MemberManagementTableCell data={data} tab={tab} userId={userId} />
            </React.Fragment>
          ))}
        {data
          .filter((data) => data.id !== userId)
          .map((data: IMemberManagementTableData) => (
            <React.Fragment key={data.id}>
              <MemberManagementTableCell data={data} tab={tab} userId={userId} />
            </React.Fragment>
          ))}
      </Table.Body>
    </Table.Root>
  );
}
