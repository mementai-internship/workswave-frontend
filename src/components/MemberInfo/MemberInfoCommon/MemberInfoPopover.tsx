import { Button, Popover } from '@radix-ui/themes';
import { PropsWithChildren } from 'react';

interface IMemberInfoPopoverProps {
  title: string;
  buttonText: string;
}

export default function MemberInfoPopover({
  title,
  buttonText,
  children,
}: PropsWithChildren<IMemberInfoPopoverProps>) {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="outline" size="2" color="purple" className="text-purple w-44 h-10 px-8">
          {title}
        </Button>
      </Popover.Trigger>
      <Popover.Content width="100%" height="80px" className="flex flex-col gap-2">
        {children}
        <Popover.Close>
          <Button size="1">{buttonText}</Button>
        </Popover.Close>
      </Popover.Content>
    </Popover.Root>
  );
}
