import { Button, Dialog } from '@radix-ui/themes';
import React from 'react';

import Title from '@/components/Common/Title';

interface IProps {
  children: React.ReactNode;
  height?: string;
  onSubmit: () => void;
}

export default function SuperManagerSettingModalContainer({ children, height, onSubmit }: IProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button
          variant="surface"
          radius="none"
          color="gray"
          size="3"
          className="font-semibold text-black text-sm py-4 px-8 bg-gray-200 border-gray-10"
        >
          권한변경
        </Button>
      </Dialog.Trigger>
      <Dialog.Content className="overflow-y-hidden">
        <Dialog.Title className="absolute t-0 l-0 text-transparent">
          파트/통합관리자관리
        </Dialog.Title>
        <Dialog.Description></Dialog.Description>

        <form onSubmit={onSubmit} className="">
          <div>
            <Title content="세부권한" />
          </div>
          <div className={`p-4 ${height ? `${height} overflow-y-auto` : ''}`}>{children}</div>
          <div className="flex justify-center pt-2">
            <Button size="3" className="bg-black">
              수정하기
            </Button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}
