import { ICommuteData, IWorkData } from '@/models/work.model';
import { Table } from '@radix-ui/themes';
import { PiGenderFemaleBold, PiGenderMaleBold } from 'react-icons/pi';

const GenderIcon = ({ gender }: { gender: number }) => {
  return gender ? (
    <PiGenderFemaleBold className="text-pink-600" />
  ) : (
    <PiGenderMaleBold className="text-blue-500" />
  );
};

const CellWithUnit = ({ value, unit }: { value: number | string; unit: string }) => {
  return (
    <>
      {value}
      {unit}
    </>
  );
};

export default function CommuteTableRows({ data }: { data: IWorkData }) {
  const workDatas = [
    { key: 'id', isHeader: true },
    { key: 'branch' },
    {
      key: 'name',
      render: (value: number | string) => (
        <div className="flex gap-2 items-center">
          <GenderIcon gender={data.gender} />
          <div>{value}</div>
        </div>
      ),
    },
    {
      key: 'department',
      render: (value: number | string) => (
        <div className="flex gap-1">
          {value}
          <span className="border text-xs px-1 pt-0.5">{` 주 ${data.days}일`}</span>
        </div>
      ),
    },
    { key: 'workDate' },
    { key: 'leaveDate' },
    { key: 'regularDaysOff' },
    { key: 'unpaidLeaveUsed' },
    { key: 'annualLeaveUsed' },
    { key: 'workFromHome', unit: '일' },
    { key: 'holidayWork', unit: '일' },
    { key: 'weekendWorkHours', unit: '시간' },
    { key: 'weekendWorkPay' },
    { key: 'overtimeCount30min' },
    { key: 'overtimeCount60min' },
    { key: 'overtimeCount90min' },
    { key: 'totalOvertime' },
  ];
  return (
    <Table.Row>
      {workDatas.map(({ key, isHeader, render, unit }) => {
        const CellComponent = isHeader ? Table.RowHeaderCell : Table.Cell;
        const value = data[key as keyof ICommuteData];
        return (
          <CellComponent key={key} align="center">
            {render ? (
              render(value)
            ) : unit ? (
              <CellWithUnit value={value} unit={unit} />
            ) : (
              value.toLocaleString()
            )}
          </CellComponent>
        );
      })}
    </Table.Row>
  );
}
