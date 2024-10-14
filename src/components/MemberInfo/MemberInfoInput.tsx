import { TextField } from '@radix-ui/themes';

export default function MemberInfoInput() {
  return (
    <TextField.Root className="flex items-center justify-center w-44 h-10 justify-between bg-light-gray border border-gray-30 border-solid text-black rounded-sm p-1">
      <TextField.Slot />
    </TextField.Root>
  );
}
