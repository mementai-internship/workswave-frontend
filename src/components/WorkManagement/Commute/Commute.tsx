import { commuteMockData } from '@/constants/workManagementTable/workTable.mock';
import { Table } from '@radix-ui/themes';
import { Dayjs } from 'dayjs';
import React from 'react';
import { useMemo } from 'react';

export default function Commute({ currentDate }: { currentDate: Dayjs }) {
  const generateCommuteHeadTable = useMemo(() => {
    const lastDay = Math.max(
      ...commuteMockData.flatMap((employee) => Object.keys(employee.schedule).map(Number))
    );

    const baseHeaders = ['번호', '지점', '이름', '근무파트'];
    const dayHeaders = Array.from({ length: lastDay }, (_, i) => `${i + 1}일`);
    return { baseHeaders, dayHeaders };
  }, [currentDate]);

  return (
    <Table.Root className="mb-5 table-fixed w-full">
      <Table.Header className="bg-gray-200 text-xs text-gray-700 whitespace-nowrap border-gray-10">
        <Table.Row>
          <Table.ColumnHeaderCell
            rowSpan={2}
            className="text-center align-middle min-w-[4rem] w-16 border-r border-gray-10"
          >
            번호
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell
            rowSpan={2}
            className="text-center align-middle min-w-[8rem] w-32 border-r border-gray-10"
          >
            지점
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell
            rowSpan={2}
            className="text-center align-middle min-w-[6rem] w-24 border-r border-gray-10"
          >
            이름
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell
            rowSpan={2}
            className="text-center align-middle min-w-[8rem] w-32 border-r border-gray-10"
          >
            근무파트
          </Table.ColumnHeaderCell>
          {generateCommuteHeadTable.dayHeaders.map((day, index) => (
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
          {generateCommuteHeadTable.dayHeaders.map((_, index) => (
            <React.Fragment key={index}>
              <Table.ColumnHeaderCell className="text-center min-w-[4rem] w-16  ">
                출근
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="text-center min-w-[4rem] w-16">
                퇴근
              </Table.ColumnHeaderCell>
            </React.Fragment>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {commuteMockData.map((employee) => (
          <Table.Row key={employee.id}>
            <Table.Cell>{employee.id}</Table.Cell>
            <Table.Cell>{employee.branch}</Table.Cell>
            <Table.Cell>{employee.name}</Table.Cell>
            <Table.Cell>{employee.position}</Table.Cell>
            {generateCommuteHeadTable.dayHeaders.map((_, index) => {
              const daySchedule = employee.schedule[index + 1];
              return (
                <>
                  <Table.Cell className="text-center">
                    {daySchedule ? daySchedule.startTime : '-'}
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    {daySchedule ? daySchedule.endTime : '-'}
                  </Table.Cell>
                </>
              );
            })}
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
