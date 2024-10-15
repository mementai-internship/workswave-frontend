import { Button } from '@radix-ui/themes';

interface MemberInfoButtonBarProps {
  leftButton: {
    text: string;
    onClick: () => void;
  };
  rightButton: {
    text: string;
    onClick: () => void;
  };
}

export default function MemberInfoButtonBar({ leftButton, rightButton }: MemberInfoButtonBarProps) {
  return (
    <div className="flex items-center justify-end gap-2">
      <Button
        variant="surface"
        color="gray"
        size="2"
        className="font-bold text-black h-8 px-4 bg-gray-200 border-gray-30"
        onClick={leftButton.onClick}
      >
        {leftButton.text}
      </Button>
      <Button
        variant="surface"
        color="gray"
        size="2"
        className="font-bold text-black h-8 px-4 bg-gray-200 border-gray-30"
        onClick={rightButton.onClick}
      >
        {rightButton.text}
      </Button>
    </div>
  );
}
