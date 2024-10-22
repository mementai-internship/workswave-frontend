import { Select } from '@radix-ui/themes';

export type TOptions = {
  id: number;
  name: string;
};
interface IWorkSelectProps {
  options: TOptions[];
  value: string | null;
  onChange: (value: TOptions) => void;
  defaultValue: string;
}

export default function WorkSelect({ options, value, onChange, defaultValue }: IWorkSelectProps) {
  return (
    <Select.Root
      size="2"
      onValueChange={(selectedValue) => {
        const selectedOption = options.find((option) => option.name === selectedValue);
        if (selectedOption) {
          onChange(selectedOption);
        }
      }}
      value={value || defaultValue}
    >
      <Select.Trigger variant="surface" className="min-w-36">
        {value || defaultValue}
      </Select.Trigger>
      <Select.Content>
        {options.map((option) => (
          <Select.Item key={option.id} value={option.name}>
            {option.name}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
