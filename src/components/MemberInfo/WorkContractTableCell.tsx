import SelectBox from '@/components/Common/Select';
import { Table } from '@radix-ui/themes';

export default function WorkContractTableCell({ height }: { height?: string }) {
  return (
    <Table.Cell className={`flex items-center gap-4 ${height ? height : 'h-12'} py-8`}>
      <p className="font-bold">시업시간</p>
      <div className="flex items-center gap-2">
        <SelectBox title="시간선택" options={[]} size="xSmall" />
        <SelectBox title="시간선택" options={[]} size="xSmall" />
      </div>
      <p className="font-bold">종업시간</p>
      <div className="flex items-center gap-2">
        <SelectBox title="시간선택" options={[]} size="xSmall" />
        <SelectBox title="시간선택" options={[]} size="xSmall" />
      </div>
    </Table.Cell>
  );
}
