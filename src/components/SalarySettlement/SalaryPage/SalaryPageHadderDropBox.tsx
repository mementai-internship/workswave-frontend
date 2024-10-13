import { Button, DropdownMenu } from '@radix-ui/themes';

interface ISalaryPageHadderDropBoxProps {
  title: string;
  contents: string[];
}

export default function SalaryPageHadderDropBox({
  title,
  contents,
}: ISalaryPageHadderDropBoxProps) {
  // TODO: 드롭박스 아이템(지점, 파트, 직원) 부모에게 전달해야 함

  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="flex items-center justify-center gap-5 border bg-white border-gray-50 border-solid rounded-sm px-4 py-4">
          <Button variant="soft" highContrast>
            {title}
            <DropdownMenu.TriggerIcon />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          {contents.map((item, index) => (
            <DropdownMenu.Item key={index}>{item}</DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </>
  );
}
