// 타이틀과 설명 flex-col / 드롭다운 버튼
import { Txt } from '@/components/Common/Txt';
import * as Accordion from '@radix-ui/react-accordion';
import { useEffect, useState } from 'react';
import { PiArrowDownBold, PiArrowUpBold } from 'react-icons/pi';

interface IPropsType {
  title: string;
  content: string;
  children: React.ReactNode;
  isBranchSelected: boolean;
}

export default function WorkingSettingTitle({
  title,
  content,
  children,
  isBranchSelected,
}: IPropsType) {
  const [isOpen, setIsOpen] = useState(!isBranchSelected ? false : true);

  useEffect(() => {
    setIsOpen(isBranchSelected ? false : true);
  }, [isBranchSelected]);

  return (
    <>
      <Accordion.Root
        className="w-full"
        type="single"
        value={isOpen ? title : undefined}
        collapsible
      >
        <Accordion.Item value={title}>
          <Accordion.Header>
            <div className="w-full flex justify-between items-center border-b p-10 bg-white">
              <div className="flex flex-col text-left">
                <Txt variant="h6" color="gray-30">
                  {title}
                </Txt>
                <Txt variant="body2" color="gray-50">
                  {content}
                </Txt>
              </div>
              <Accordion.Trigger
                className="rounded-full bg-purple-50 p-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                {!isOpen ? <PiArrowDownBold color="white" /> : <PiArrowUpBold color="white" />}
              </Accordion.Trigger>
            </div>
          </Accordion.Header>
          <Accordion.Content className="border-b">{children}</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </>
  );
}
