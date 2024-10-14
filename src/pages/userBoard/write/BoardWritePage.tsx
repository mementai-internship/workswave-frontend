import Title from '@/components/Common/Title';
import BoardEditor from '@/components/UserBoard/Write/BoardEditor';
import React from 'react';

export default function BoardWritePage() {
  return (
    <main className="flex flex-col gap-4 px-10 py-10">
      <Title content="게시물 작성" />
      <BoardEditor />
    </main>
  );
