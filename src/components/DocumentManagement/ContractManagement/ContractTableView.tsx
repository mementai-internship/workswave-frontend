import { Button, Dialog } from '@radix-ui/themes';
import { PiMagnifyingGlass, PiXBold } from 'react-icons/pi';

export default function ContractTableView({ contract }: { contract: string }) {
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button className="bg-gray-50">
            <PiMagnifyingGlass />
          </Button>
        </Dialog.Trigger>

        <Dialog.Content className="w-[90vw] max-w-[1000px]">
          <div className="flex justify-between mb-5">
            <Dialog.Title className="mb-5 flex">{contract}</Dialog.Title>
            <Dialog.Close className="bg-white">
              <PiXBold />
            </Dialog.Close>
          </div>
          <div className="flex justify-center">
            <img src={contract} alt="계약서" />
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
}
