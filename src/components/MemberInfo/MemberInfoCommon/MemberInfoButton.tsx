import { Button } from '@radix-ui/themes';

interface MemberInfoButtonProps {
  text: string;
}

export default function MemberInfoButton({ text }: MemberInfoButtonProps) {
  return (
    <Button variant="outline" size="2" color="purple" className="text-purple w-44 h-10 px-8">
      {text}
    </Button>
  );
}
