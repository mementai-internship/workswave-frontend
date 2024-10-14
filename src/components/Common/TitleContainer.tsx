import Title from '@/components/Common/Title';
import { Flex } from '@radix-ui/themes';

interface ITitleContainer {
  content: string;
  children?: React.ReactNode;
}

export default function TitleContainer({ content, children }: ITitleContainer) {
  return (
    <Flex align="center">
      <Title content={content} />
      {children}
    </Flex>
  );
}
