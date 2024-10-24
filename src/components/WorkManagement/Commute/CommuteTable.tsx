import { Table } from '@radix-ui/themes';
import { useAtom } from 'jotai';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ExportExcelButton from '@/components/WorkManagement/ExportExcelButton';
import GenderIcon from '@/components/WorkManagement/GenderIcon';
import {
  commuteMockData,
  commuteMockDataWithPageNum,
} from '@/constants/workManagement/workTable.mock';
import { ICommuteData } from '@/models/work.model';
import { selectedBranchAtom, selectedDepartmentAtom } from '@/store/atoms';

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
  <Table.Header className="text-xs text-gray-700 bg-gray-200 whitespace-nowrap border-gray-10">
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
      <div className="flex items-center gap-2">
        <GenderIcon gender={employee.gender} />
        {employee.name}
      </div>
    </Table.Cell>
    <Table.Cell>
      {employee.department}
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
  const [selectedBranch] = useAtom(selectedBranchAtom);
  const [selectedDepartment] = useAtom(selectedDepartmentAtom);
  const [filteredData, setFilteredData] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentPage = Number(queryParams.get('page')) || 1;
  useEffect(() => {
    const filteredData = commuteMockDataWithPageNum.filter((data) => {
      if (selectedBranch === null) return data;
      const branchMatch = !selectedBranch || data.branch === selectedBranch.name;
      const departmentMatch = !selectedDepartment || data.department === selectedDepartment.name;
      if (!selectedDepartment) return branchMatch;
      return branchMatch && departmentMatch;
    });
    setFilteredData(filteredData);
  }, [currentPage, selectedBranch, selectedDepartment]);

  const { dayHeaders } = useMemo(() => {
    const lastDay = Math.max(
      ...commuteMockDataWithPageNum.flatMap((employee) =>
        Object.keys(employee.schedule).map(Number)
      )
    );
    return { dayHeaders: Array.from({ length: lastDay }, (_, i) => `${i + 1}일`) };
  }, []);

  return (
    <>
      <ExportExcelButton data={commuteMockData} fileName="commute_table" />
      <Table.Root className="w-full mb-5 table-fixed">
        <TableHeader dayHeaders={dayHeaders} />
        <Table.Body>
          {filteredData
            .filter((data) => data.pageNum === currentPage)
            .map((employee) => (
              <EmployeeRow
                key={employee.id}
                employee={employee}
                dayHeaders={dayHeaders}
                onClick={() => handleShowAllStatus(employee)}
              />
            ))}
        </Table.Body>
      </Table.Root>
    </>
  );
}
