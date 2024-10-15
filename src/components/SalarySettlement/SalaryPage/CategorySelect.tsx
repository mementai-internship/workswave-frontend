import { Select } from '@radix-ui/themes';

interface ICategorySelectProps {
  options: string[];
  value: string | undefined;
  onChange: (value: string) => void;
  placeholder: string;
}

export default function CategorySelect({
  options,
  value,
  onChange,
  placeholder,
}: ICategorySelectProps) {
  return (
    <Select.Root size="2" onValueChange={onChange} value={value} key={value}>
      <Select.Trigger placeholder={placeholder} variant="surface" className="min-w-36">
        {value || placeholder}
      </Select.Trigger>
      <Select.Content>
        {options.map((option) => (
          <Select.Item key={option} value={option}>
            {option}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
