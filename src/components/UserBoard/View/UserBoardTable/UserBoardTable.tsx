import Pagination from '@/components/Common/Pagination';
import UserBoardTableBody from '@/components/UserBoard/View/UserBoardTable/UserBoardTableBody/UserBoardTableBody';
import UserBoardTableHeader from '@/components/UserBoard/View/UserBoardTable/UserBoardTableHeader/UserBoardTableHeader';
import { Table } from '@radix-ui/themes';
import React from 'react';

export interface IUserBoardTableProps {
  postNum: number;
  branch: string;
  category: string;
  title: string;
  writer: string;
  workingPart: string;
  createdAt: string;
  viewCount: number;
}

export default function UserBoardTable({ data }: { data: IUserBoardTableProps[] }) {
  return (
    <>
      <Table.Root variant="surface" className="w-full">
        <UserBoardTableHeader />
        <UserBoardTableBody data={data} />
      </Table.Root>
      <Pagination totalItems={100} itemsPerPage={10} />
    </>
  );
}
