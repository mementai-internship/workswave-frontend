import { Table } from '@radix-ui/themes';
import { PiPencilSimple } from 'react-icons/pi';

import SelectBox from '@/components/Common/Select';
import DetailTotalPartTime from '@/components/WorkManagement/PartTime/DetailTotalPartTime';
import { DETAILPARTTIMEHEADTABLE } from '@/constants/workManagement/workTable';
import { IDetailPartTimeData } from '@/models/work.model';

export default function DetailPartTimeList({
  detailPartTimeData,
}: {
  detailPartTimeData: IDetailPartTimeData[];
}) {
  const editableColumns = ['근무부분', '설정시간', '휴게시간'];

  const EditableBadge = () => (
    <span className="ml-1 px-1 py-0.5 text-sm font-medium ">
      <PiPencilSimple />
    </span>
  );

  const HeaderCell = ({ header }: { header: string }) => (
    <div className="flex items-center justify-center">
      {header}
      {editableColumns.includes(header) && <EditableBadge />}
    </div>
  );

  return (
    <>
      <Table.Root className="w-full mb-5">
        <Table.Header className="bg-gray-200 text-xs text-gray-700 whitespace-nowrap border-t border-gray-300 align-middle">
          <Table.Row>
            {DETAILPARTTIMEHEADTABLE.map((header) => (
              <Table.ColumnHeaderCell key={header} align="center">
                <HeaderCell header={header} />
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {detailPartTimeData.map((row, index) => (
            <Table.Row key={index}>
              <Table.Cell align="center" className="align-middle">
                {row.date}
              </Table.Cell>
              <Table.Cell align="center" className="align-middle">
                {row.department}
              </Table.Cell>
              <Table.Cell align="center" className="align-middle">
                <SelectBox title={row.workSection} options={[]} size="xSmall" />
              </Table.Cell>

              <Table.Cell align="center" className="align-middle">
                {row.startTime}
              </Table.Cell>
              <Table.Cell align="center" className="align-middle">
                {row.endTime}
              </Table.Cell>
              <Table.Cell align="center">
                <SelectBox title={row.settingTime} options={[]} size="xSmall" />
              </Table.Cell>
              <Table.Cell align="center" className="align-middle">
                {row.workHours}
              </Table.Cell>
              <Table.Cell align="center">
                <SelectBox title={row.breakTime} options={[]} size="xSmall" />
              </Table.Cell>
              <Table.Cell align="center" className="align-middle">
                {row.finalAmount}
              </Table.Cell>
              <Table.Cell align="center" className="align-middle">
                {row.registrationDate}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <DetailTotalPartTime
        workDays={15}
        totalWorkHours="132시간 30분"
        hospitalWorkHours="132시간 30분"
        remoteWorkHours="0시간"
        holidayWorkHours="0시간"
        totalSalary="1,500,000원"
      />
    </>
  );
}
