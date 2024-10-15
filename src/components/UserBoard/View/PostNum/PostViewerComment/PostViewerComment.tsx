import { Button, Table, TextField } from '@radix-ui/themes';
import React from 'react';

// 댓글 타입 정의
interface Comment {
  id: number;
  author: string;
  content: string;
  createdAt: string;
}

// 임시 댓글 데이터
const initialComments: Comment[] = [
  { id: 1, author: '홍길동', content: '좋은 글이네요!', createdAt: '2023-04-15' },
  { id: 2, author: '김철수', content: '감사합니다.', createdAt: '2023-04-15' },
];

export default function PostViewerComment() {
  return (
    <div>
      <Table.Root className="w-full mb-4 bg-white">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell className="w-1/6">작성자</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="w-3/6">내용</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="w-1/6">작성일</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {initialComments.map((comment) => (
            <Table.Row key={comment.id}>
              <Table.Cell>{comment.author}</Table.Cell>
              <Table.Cell>{comment.content}</Table.Cell>
              <Table.Cell>{comment.createdAt}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <form className="mt-4 flex justify-between gap-2">
        <TextField.Root className="mb-2 w-full" placeholder="댓글을 입력하세요" />

        <Button type="submit" className="bg-purple-50">
          댓글 작성
        </Button>
      </form>
    </div>
  );
}
