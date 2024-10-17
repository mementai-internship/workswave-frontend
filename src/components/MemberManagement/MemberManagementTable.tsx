import MemberManagementTableCell from '@/components/MemberManagement/MemberManagementTableCell';
import { MEMBER_MANAGEMENT_TABLE_TITLE } from '@/constants/memberManagementTableTitle';
import { Table } from '@radix-ui/themes';
import React from 'react';

export interface IMemberManagementTableProps {
  id: number;
  branch: string;
  gender: string;
  name: string;
  workPart: string;
  birth: string;
  phone: string;
  email: string;
  contractPeriod: {
    start: string;
    end: string;
    workContract: string;
    annualSalaryContract: string;
    recentContract: string;
    annualSalary: string;
    salary: string;
  };
}

//test data 추후 삭제 예정
export const infoTestData: IMemberManagementTableProps[] = [
  {
    id: 1,
    branch: '뮤즈의원(수원인계점)',
    gender: '남',
    name: '최원준',
    workPart: 'Developer',
    birth: '2024-01-01',
    phone: '010-1234-5678',
    email: 'test@test.com',
    contractPeriod: {
      start: '2024-01-01',
      end: '-',
      workContract: '2024-01-01 ~ 2024-10-01',
      annualSalaryContract: '2024-01-01 ~ 2024-10-01',
      recentContract: '-',
      annualSalary: '40,000,000',
      salary: '4,000,000',
    },
  },
  {
    id: 2,
    branch: '뮤즈의원(수원인계점)',
    gender: '남',
    name: '최원준',
    workPart: 'Developer',
    birth: '2024-01-01',
    phone: '010-1234-5678',
    email: 'test@test.com',
    contractPeriod: {
      start: '2024-01-01',
      end: '-',
      workContract: '2024-01-01 ~ 2024-10-01',
      annualSalaryContract: '2024-01-01 ~ 2024-10-01',
      recentContract: '-',
      annualSalary: '40,000,000',
      salary: '4,000,000',
    },
  },
  {
    id: 3,
    branch: '뮤즈의원(수원인계점)',
    gender: '남',
    name: '최원준',
    workPart: 'Developer',
    birth: '2024-01-01',
    phone: '010-1234-5678',
    email: 'test@test.com',
    contractPeriod: {
      start: '2024-01-01',
      end: '-',
      workContract: '2024-01-01 ~ 2024-10-01',
      annualSalaryContract: '2024-01-01 ~ 2024-10-01',
      recentContract: '-',
      annualSalary: '40,000,000',
      salary: '4,000,000',
    },
  },
  {
    id: 4,
    branch: '뮤즈의원(수원인계점)',
    gender: '남',
    name: '최원준',
    workPart: 'Developer',
    birth: '2024-01-01',
    phone: '010-1234-5678',
    email: 'test@test.com',
    contractPeriod: {
      start: '2024-01-01',
      end: '-',
      workContract: '2024-01-01 ~ 2024-10-01',
      annualSalaryContract: '2024-01-01 ~ 2024-10-01',
      recentContract: '-',
      annualSalary: '40,000,000',
      salary: '4,000,000',
    },
  },
  {
    id: 5,
    branch: '뮤즈의원(수원인계점)',
    gender: '남',
    name: '최원준',
    workPart: 'Developer',
    birth: '2024-01-01',
    phone: '010-1234-5678',
    email: 'test@test.com',
    contractPeriod: {
      start: '2024-01-01',
      end: '-',
      workContract: '2024-01-01 ~ 2024-10-01',
      annualSalaryContract: '2024-01-01 ~ 2024-10-01',
      recentContract: '-',
      annualSalary: '40,000,000',
      salary: '4,000,000',
    },
  },
];

//API 연결 후 삭제
export const userId = 2;

export default function MemberManagementTable() {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row className="bg-gray-300">
          {MEMBER_MANAGEMENT_TABLE_TITLE.map((title) => (
            <Table.ColumnHeaderCell className="p-2 text-center align-middle" key={title}>
              {title}
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {infoTestData
          .filter((data) => data.id === userId)
          .map((data: IMemberManagementTableProps) => (
            <React.Fragment key={data.id}>
              <MemberManagementTableCell data={data} />
            </React.Fragment>
          ))}
        {infoTestData
          .filter((data) => data.id !== userId)
          .map((data: IMemberManagementTableProps) => (
            <React.Fragment key={data.id}>
              <MemberManagementTableCell data={data} />
            </React.Fragment>
          ))}
      </Table.Body>
    </Table.Root>
  );
}
