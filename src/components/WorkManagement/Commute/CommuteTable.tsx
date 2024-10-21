import { Table } from '@radix-ui/themes';
import React, { useMemo } from 'react';

import GenderIcon from '@/components/WorkManagement/GenderIcon';
import { commuteMockData } from '@/constants/workManagement/workTable.mock';
import { ICommuteData } from '@/models/work.model';

interface ICommuteTableProps {
  handleShowAllStatus: (employee: ICommuteData) => void;
}

interface ITableHeaderProps {
  dayHeaders: string[];
}

interface IEmployeeRowProps {
  employee: ICommuteData;
  dayHeaders: string[];
  onClick: () => void;
}

const TableHeader = React.memo(({ dayHeaders }: ITableHeaderProps) => (
  <Table.Header className="bg-gray-200 text-xs text-gray-700 whitespace-nowrap border-gray-10">
    <Table.Row>
      {['번호', '지점', '이름', '근무파트'].map((header) => (
        <Table.ColumnHeaderCell
          key={header}
          rowSpan={2}
          className="text-center align-middle min-w-[6rem] w-24 border-r border-gray-10"
        >
          {header}
        </Table.ColumnHeaderCell>
      ))}
      {dayHeaders.map((day, index) => (
        <Table.ColumnHeaderCell
          key={index}
          colSpan={2}
          className="text-center min-w-[8rem] w-32 border-r border-gray-10"
        >
          {day}
        </Table.ColumnHeaderCell>
      ))}
    </Table.Row>
    <Table.Row>
      {dayHeaders.flatMap((_, index) => [
        <Table.ColumnHeaderCell key={`start-${index}`} className="text-center min-w-[4rem] w-16">
          출근
        </Table.ColumnHeaderCell>,
        <Table.ColumnHeaderCell key={`end-${index}`} className="text-center min-w-[4rem] w-16">
          퇴근
        </Table.ColumnHeaderCell>,
      ])}
    </Table.Row>
  </Table.Header>
));

const EmployeeRow = React.memo(({ employee, dayHeaders, onClick }: IEmployeeRowProps) => (
  <Table.Row onClick={onClick}>
    <Table.Cell>{employee.id}</Table.Cell>
    <Table.Cell>{employee.branch}</Table.Cell>
    <Table.Cell>
      <div className="flex gap-2 items-center">
        <GenderIcon gender={employee.gender} />
        {employee.name}
      </div>
    </Table.Cell>
    <Table.Cell>
      {employee.position}
      <span className="border text-xs px-1 pt-0.5">{`주 ${employee.days}일`}</span>
    </Table.Cell>
    {dayHeaders.map((_, index) => {
      const daySchedule = employee.schedule[index + 1];
      if (daySchedule?.isHoliday) {
        return (
          <Table.Cell key={index} colSpan={2} className="text-center">
            휴무
          </Table.Cell>
        );
      }
      return (
        <React.Fragment key={index}>
          <Table.Cell className="text-center">{daySchedule?.startTime || ''}</Table.Cell>
          <Table.Cell className="text-center">{daySchedule?.endTime || ''}</Table.Cell>
        </React.Fragment>
      );
    })}
  </Table.Row>
));

export default function CommuteTable({ handleShowAllStatus }: ICommuteTableProps) {
  const { dayHeaders } = useMemo(() => {
    const lastDay = Math.max(
      ...commuteMockData.flatMap((employee) => Object.keys(employee.schedule).map(Number))
    );
    return { dayHeaders: Array.from({ length: lastDay }, (_, i) => `${i + 1}일`) };
  }, []);

  return (
    <Table.Root className="mb-5 table-fixed w-full">
      <TableHeader dayHeaders={dayHeaders} />
      <Table.Body>
        {commuteMockData.map((employee) => (
          <EmployeeRow
            key={employee.id}
            employee={employee}
            dayHeaders={dayHeaders}
            onClick={() => handleShowAllStatus(employee)}
          />
        ))}
      </Table.Body>
    </Table.Root>
  );
}
