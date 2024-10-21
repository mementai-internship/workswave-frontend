import { Select } from '@radix-ui/themes';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface ISelectProps<T extends FieldValues> {
  name?: Path<T>;
  title: string;
  register?: UseFormRegister<T>;
  options: ISelectOption[];
  size?: '2xSmall' | 'xSmall' | 'small' | 'medium' | 'large';
  border?: boolean;
  style?: string;
}

interface ISelectOption {
  id: number;
  name: string;
  action?: () => void;
}

export default function SelectBox<T>({
  name,
  title,
  register,
  options,
  size = 'medium',
  border = true,
  style,
}: ISelectProps<T>) {
  const SelectBoxSize = {
    '2xSmall': 'w-12',
    xSmall: 'w-24',
    small: 'w-36',
    medium: 'w-44',
    large: 'w-48',
  };

  const registerOption = register && name ? register(name) : {};

  function handleSelectChange(value: string) {
    const selectedOption = options.find((option) => option.name === value);
    if (selectedOption) {
      selectedOption.action();
    }
  }

  return (
    <Select.Root
      onValueChange={handleSelectChange}
      defaultValue={options[0]?.name}
      disabled={disabled}
    >
      <Select.Trigger
        {...registerOption}
        placeholder={title}
        className={`${SelectBoxSize[size]} ${style} relative justify-between text-black`}
        variant={border ? 'surface' : 'ghost'}
      />
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
