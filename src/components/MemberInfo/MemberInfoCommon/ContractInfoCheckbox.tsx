import { Checkbox, Flex } from '@radix-ui/themes';

import { Txt } from '@/components/Common/Txt';

export default function ContractInfoCheckbox({
  text,
  onChange,
}: {
  text: string;
  onChange: (checked: boolean) => void;
}) {
  return (
    <Txt variant="caption">
      <Flex align="center" className="gap-1">
        <Checkbox size="2" color="purple" variant="surface" onCheckedChange={onChange} />
        {text}
      </Flex>
    </Txt>
  );
}
