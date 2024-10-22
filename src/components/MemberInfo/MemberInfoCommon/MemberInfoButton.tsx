import { Button } from '@radix-ui/themes';

interface MemberInfoButtonProps {
  text: string;
  onClick?: () => void;
}

export default function MemberInfoButton({ text, onClick }: MemberInfoButtonProps) {
  return (
    <Button
      variant="outline"
      size="2"
      color="purple"
      className="text-purple w-44 h-10 px-8"
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
