import { Checkbox, Flex, Text } from '@radix-ui/themes';

export default function ContractInfoCheckbox({ text }: { text: string }) {
  return (
    <Text as="label" size="2" className="font-bold">
      <Flex align="center" gap="2">
        <Checkbox size="3" color="purple" variant="surface" />
        {text}
      </Flex>
    </Text>
  );
}
