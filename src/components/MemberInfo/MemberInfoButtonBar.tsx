import { Button } from '@radix-ui/themes';

interface MemberInfoButtonBarProps {
  leftButton: {
    text: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
  };
  rightButton: {
    text: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
  };
}

export default function MemberInfoButtonBar({ leftButton, rightButton }: MemberInfoButtonBarProps) {
  return (
    <div className="flex items-center justify-end gap-2">
      <Button
        variant="surface"
        color="gray"
        size="2"
        className={`${leftButton.className} text-black w-28 p-4 bg-gray-200 border-gray-30`}
        onClick={leftButton.onClick}
        disabled={leftButton.disabled}
      >
        {leftButton.text}
      </Button>
      <Button
        variant="surface"
        color="gray"
        size="2"
        className={`${rightButton.className} text-black w-28 p-4 bg-gray-200 border-gray-30`}
        onClick={rightButton.onClick}
        disabled={rightButton.disabled}
      >
        {rightButton.text}
      </Button>
    </div>
  );
}
