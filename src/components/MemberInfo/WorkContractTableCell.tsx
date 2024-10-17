import { Table } from '@radix-ui/themes';

import SelectBox from '@/components/Common/Select';

export default function WorkContractTableCell({ height }: { height?: string }) {
  return (
    <Table.Cell className={`flex items-center gap-4 ${height ? height : 'h-12'} py-8`}>
      <div className="flex flex-col gap-0.5">
        <p className="text-xs pl-1">
          일하는 시간<span className="text-red font-bold">˙</span>
        </p>
        <SelectBox title="시간선택" options={[]} size="small" />
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-xs pl-1">
          출근 시간<span className="text-red font-bold">˙</span>
        </p>
        <SelectBox title="시간선택" options={[]} size="small" />
      </div>
    </Table.Cell>
  );
}
