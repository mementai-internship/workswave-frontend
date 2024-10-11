import { Txt } from '@/components/common/Txt';

interface ITitle {
  content: string;
}

export default function Title({ content }: ITitle) {
  return (
    <div>
      <Txt variant="subtitle2">{content}</Txt>
    </div>
  );
}
