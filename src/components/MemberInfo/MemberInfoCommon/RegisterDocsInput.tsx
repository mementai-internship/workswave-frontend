import { Button, TextField } from '@radix-ui/themes';
import { PiMagnifyingGlass, PiXCircleFill } from 'react-icons/pi';

export default function RegisterDocsInput({ defaultDocs }: { defaultDocs: string }) {
  return (
    <div className="flex items-center w-72 h-14">
      <TextField.Root
        defaultValue={defaultDocs}
        size="3"
        variant="classic"
        radius="none"
        className="border-none h-12"
      >
        <TextField.Slot />
        <div className="flex items-center gap-0.5 pr-4">
          <PiXCircleFill size={20} color="gray" />
          <PiMagnifyingGlass size={20} color="gray" />
        </div>
      </TextField.Root>
      <Button size="3" className="bg-gray-300 text-black h-12" radius="none">
        첨부파일
      </Button>
    </div>
  );
}
