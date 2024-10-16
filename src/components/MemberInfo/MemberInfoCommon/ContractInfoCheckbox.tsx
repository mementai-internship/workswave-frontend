import { Checkbox, Flex, Text } from '@radix-ui/themes';

export default function ContractInfoCheckbox({ text }: { text: string }) {
  return (
    <Text as="label" size="1" className="font-bold text-xs whitespace-nowrap">
      <Flex align="center" gap="1px">
        <Checkbox size="2" color="purple" variant="surface" />
        {text}
      </Flex>
    </Text>
  );
}
