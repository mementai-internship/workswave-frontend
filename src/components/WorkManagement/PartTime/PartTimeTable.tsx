import { Table } from '@radix-ui/themes';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ExportExcelButton from '@/components/WorkManagement/ExportExcelButton';
import GenderIcon from '@/components/WorkManagement/GenderIcon';
import DetailPartTime from '@/components/WorkManagement/PartTime/DetailPartTime';
import { PARTTIMEHEADTABLE } from '@/constants/workManagement/workTable';
import {
  partTimeMockData,
  partTimeMockDataWithPageNum,
} from '@/constants/workManagement/workTable.mock';
import { selectedBranchAtom, selectedDepartmentAtom } from '@/store/atoms';

//Filter부터
export default function PartTime() {
  const [selectedBranch] = useAtom(selectedBranchAtom);
  const [selectedDepartment] = useAtom(selectedDepartmentAtom);
  const [filteredData, setFilteredData] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentPage = Number(queryParams.get('page')) || 1;

  useEffect(() => {
    const filteredData = partTimeMockDataWithPageNum.filter((data) => {
      if (selectedBranch === null) return data;
      const branchMatch = !selectedBranch || data.branch === selectedBranch.name;
      const departmentMatch = !selectedDepartment || data.department === selectedDepartment.name;
      if (!selectedDepartment) return branchMatch;
      return branchMatch && departmentMatch;
    });
    setFilteredData(filteredData);
  }, [currentPage, selectedBranch, selectedDepartment]);

  return (
    <>
      <ExportExcelButton data={partTimeMockData} fileName="partTime_table" />
      <Table.Root className="mb-5">
        <Table.Header className="text-xs text-gray-700 bg-gray-200 border-t border-gray-300 whitespace-nowrap">
          <Table.Row>
            {PARTTIMEHEADTABLE.map((head) => {
              return (
                <Table.ColumnHeaderCell key={head} align="center">
                  {head}
                </Table.ColumnHeaderCell>
              );
            })}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {filteredData
            .filter((data) => data.pageNum === currentPage)
            .map((row) => (
              <Table.Row key={row.id}>
                <Table.Cell align="center" className="align-middle">
                  {row.id}
                </Table.Cell>
                <Table.Cell align="center" className="align-middle">
                  {row.branch}
                </Table.Cell>
                <Table.Cell align="center" className="align-middle">
                  <div className="flex items-center gap-2">
                    <GenderIcon gender={row.gender} />
                    {row.name}
                  </div>
                </Table.Cell>
                <Table.Cell align="center" className="align-middle">
                  {row.department}
                </Table.Cell>
                <Table.Cell align="center" className="align-middle">
                  {row.workDate}
                </Table.Cell>
                <Table.Cell align="center" className="align-middle">
                  {row.hospitalWork}
                </Table.Cell>
                <Table.Cell align="center" className="align-middle">
                  {row.remoteWork}
                </Table.Cell>
                <Table.Cell align="center" className="align-middle">
                  {row.holidayWork}
                </Table.Cell>
                <Table.Cell align="center" className="align-middle">
                  {row.totalWorkHours}
                </Table.Cell>
                <Table.Cell align="center" className="align-middle">
                  {row.totalSalary}
                </Table.Cell>
                <Table.Cell align="center" className="align-middle">
                  <DetailPartTime />
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>
    </>
  );
}
