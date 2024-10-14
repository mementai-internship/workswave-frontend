import { TextField } from '@radix-ui/themes';

interface IMemberInfoInputProps {
  size?: 'large' | 'medium' | 'small';
  defaultValue?: string;
}

const MemberInfoInputSize = {
  large: 'w-96',
  medium: 'w-60',
  small: 'w-44',
};

export default function MemberInfoInput({ size = 'small', defaultValue }: IMemberInfoInputProps) {
  return (
    <TextField.Root
      placeholder={defaultValue}
      className={`flex items-center justify-center ${MemberInfoInputSize[size]} h-10 justify-between bg-light-gray border border-gray-30 border-solid text-black rounded-sm p-1`}
    >
      <TextField.Slot />
    </TextField.Root>
  );
}
