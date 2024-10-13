import { IUserBoardTableProps } from '@/components/UserBoard/UserBoardTable/UserBoardTable';
import { Button, Table } from '@radix-ui/themes';
import React from 'react';
import { PiTrashDuotone } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

export default function UserBoardTableBody({ data }: { data: IUserBoardTableProps[] }) {
  const navigate = useNavigate();
  const handleClickPost = (postNum: number) => {
    navigate(`/board/view/${postNum}`);
  };

  return (
    <Table.Body>
      {data.map((item, index) => (
        <Table.Row key={index}>
          <Table.Cell>{item.postNum}</Table.Cell>
          <Table.Cell>{item.branch}</Table.Cell>
          <Table.Cell>{item.category}</Table.Cell>
          <Table.Cell onClick={() => handleClickPost(item.postNum)}>
            <span className="cursor-pointer hover:underline">{item.title}</span>
          </Table.Cell>
          <Table.Cell>{item.writer}</Table.Cell>
          <Table.Cell>{item.workingPart}</Table.Cell>
          <Table.Cell>{item.createdAt}</Table.Cell>
          <Table.Cell>{item.viewCount}</Table.Cell>
          <Table.Cell>
            <Button variant="ghost" size="3" className="cursor-pointer">
              <PiTrashDuotone />
            </Button>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
}
