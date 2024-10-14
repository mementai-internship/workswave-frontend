import { Select } from '@radix-ui/themes';
import { useState } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface ISelectProps<T extends FieldValues> {
  name?: Path<T>;
  title: string;
  register?: UseFormRegister<T>;
  options: ISelectOption[];
  size?: 'small' | 'medium' | 'large';
  border?: boolean;
}

interface ISelectOption {
  id: number;
  name: string;
  action: () => void;
}

export default function SelectBox<T>({
  name,
  title,
  register,
  options,
  size = 'medium',
  border = true,
}: ISelectProps<T>) {
  const [selectedItem, setSelectedItem] = useState(title);

  const SelectBoxSize = {
    small: 'w-36',
    medium: 'w-44',
    large: 'w-48',
  };

  const registerOption = register && name ? register(name) : {};

  function handleOptionClick(option: ISelectOption) {
    setSelectedItem(option.name);
    option.action();
  }

  return (
    <Select.Root>
      <Select.Trigger
        {...registerOption}
        placeholder={title}
        className={`${SelectBoxSize[size]} relative flex items-center justify-center h-10 justify-between ${border ? 'border border-gray-50 border-solid' : 'border-none'} text-black px-4 py-4`}
      />
      <Select.Content className={`${SelectBoxSize[size]} top-0 left-4 absolute`}>
        {options.map((option) => (
          <Select.Group key={option.id}>
            <Select.Item value={option.name} onSelect={() => handleOptionClick(option)}>
              {selectedItem}
            </Select.Item>
            {option.id === options.length - 1 && <Select.Separator />}
          </Select.Group>
        ))}
      </Select.Content>
    </Select.Root>
  );
}

// 사용 예시
// const memberInfoDropdownMenu = [
//   {
//     id: 1,
//     name: '뮤즈의원(강남점)',
//     action: () => {},
//   },
//   {
//     id: 2,
//     name: '뮤즈의원(수원인계점)',
//     action: () => {},
//   },
// ];

// const { register, handleSubmit } = useForm();
// const selectOptions = [
//   { id: 1, name: "Option 1", action: () => {} },
//   { id: 2, name: "Option 2", action: () => {} },
//   { id: 3, name: "Option 3", action: () => {} },
// ];

// const onSubmit = (data) => {
//   console.log(data);
// };

// return (
//   <form onSubmit={handleSubmit(onSubmit)}>
//     <SelectBox title="test" name="test" register={register} options={memberInfoDropdownMenu} size="small" border={false} />
//     <button type="submit">Submit</button>
//   </form>
// );
