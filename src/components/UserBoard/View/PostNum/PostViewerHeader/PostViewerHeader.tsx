import { Table } from '@radix-ui/themes';
import React from 'react';

interface IPostHeaderProps {
  title: string;
  author: string;
  date: string;
  category: string;
  workPart: string;
}

export default function PostViewerHeader({
  title,
  author,
  date,
  category,
  workPart,
}: IPostHeaderProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <Table.Root className="w-full">
        <Table.Body>
          <Table.Row>
            <Table.Cell
              className="py-2 px-2 font-semibold w-1/12 bg-gray-100
            "
            >
              작성자
            </Table.Cell>
            <Table.Cell className="py-2 px-2 w-2/12">{author}</Table.Cell>
            <Table.Cell className="py-2 px-2 font-semibold w-1/12 bg-gray-100">작성일</Table.Cell>
            <Table.Cell className="py-2 px-2 w-2/12">{date}</Table.Cell>
            <Table.Cell className="py-2 px-2 font-semibold w-1/12 bg-gray-100">카테고리</Table.Cell>
            <Table.Cell className="py-2 px-2 w-2/12">{category}</Table.Cell>
            <Table.Cell className="py-2 px-2 font-semibold w-1/12 bg-gray-100">근무파트</Table.Cell>
            <Table.Cell className="py-2 px-2 w-2/12">{workPart}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>
  );
}
