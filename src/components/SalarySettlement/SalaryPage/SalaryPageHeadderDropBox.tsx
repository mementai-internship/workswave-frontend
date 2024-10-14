import { Button, DropdownMenu } from '@radix-ui/themes';

interface ISalaryPageHadderDropBoxProps {
  title: string;
  contents: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

export default function SalaryPageHeadderDropBox({
  title,
  contents,
  selectedValue,
  onSelect,
}: ISalaryPageHadderDropBoxProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center justify-center w-28 py-4 gap-5 border bg-white border-gray-50 border-solid rounded-sm">
        <Button variant="soft" highContrast>
          {selectedValue || title}
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {contents.map((item, index) => (
          <DropdownMenu.Item key={index} onSelect={() => onSelect(item)}>
            {item}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
