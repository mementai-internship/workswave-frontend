import Title from '@/components/Common/Title';
import BoardEditor from '@/components/UserBoard/Write/BoardEditor';
import React from 'react';

export default function BoardWritePage() {
  return (
    <main className="flex flex-col gap-4 h-full w-full">
      <Title content="게시글 작성" />
      <BoardEditor />
    </main>
  );
}
