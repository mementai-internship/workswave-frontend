import { Switch } from '@radix-ui/themes';

export default function ContractInfoBar() {
  return (
    <div className="flex items-center justify-between w-full bg-gray-200 h-10 p-4">
      <p className="font-bold text-[14px]">계약정보</p>
      <div className="flex items-center gap-2">
        <p className="font-bold text-[14px]">수정하기</p>
        <Switch size="3" variant="surface" />
        <p className="font-bold text-[14px]">OFF</p>
      </div>
    </div>
  );
}
