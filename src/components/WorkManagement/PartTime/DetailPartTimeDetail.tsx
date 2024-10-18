import { Table } from '@radix-ui/themes';

import SelectBox from '@/components/Common/Select';
import DetailTotalPartTime from '@/components/WorkManagement/PartTime/DetailTotalPartTime';
import { DETAILPARTTIMEHEADTABLE } from '@/constants/workManagementTable/workTable';
import { IDetailPartTimeData } from '@/models/work.model';

export default function DetailPartTimeList({
  detailPartTimeData,
}: {
  detailPartTimeData: IDetailPartTimeData[];
}) {
  return (
    <>
      <Table.Root className="w-full mb-5">
        <Table.Header className="bg-gray-200 text-xs text-gray-700 whitespace-nowrap border-t border-gray-300">
          <Table.Row>
            {DETAILPARTTIMEHEADTABLE.map((header) => (
              <Table.ColumnHeaderCell key={header} align="center">
                {header}
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {detailPartTimeData.map((row, index) => (
            <Table.Row key={index}>
              <Table.Cell align="center">{row.date}</Table.Cell>
              <Table.Cell align="center">{row.department}</Table.Cell>
              <Table.Cell align="center">
                <SelectBox title={row.workSection} options={[]} size="xSmall" />
              </Table.Cell>

              <Table.Cell align="center">{row.startTime}</Table.Cell>
              <Table.Cell align="center">{row.endTime}</Table.Cell>
              <Table.Cell align="center">
                <SelectBox title={row.settingTime} options={[]} size="xSmall" />
              </Table.Cell>
              <Table.Cell align="center">{row.workHours}</Table.Cell>
              <Table.Cell align="center">
                <SelectBox title={row.breakTime} options={[]} size="xSmall" />
              </Table.Cell>
              <Table.Cell align="center">{row.finalAmount}</Table.Cell>
              <Table.Cell align="center">{row.registrationDate}</Table.Cell>
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
