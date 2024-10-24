import { Table } from '@radix-ui/themes';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ExportExcelButton from '@/components/WorkManagement/ExportExcelButton';
import WorkTableRows from '@/components/WorkManagement/Work/WorkTableRows';
import { TOptions } from '@/components/WorkManagement/WorkSelect';
import { WORKTABLE } from '@/constants/workManagement/workTable';
import { IWorkData } from '@/models/work.model';
// import { workMockData } from '@/constants/workManagement/workTable.mock';
import { selectedBranchAtom, selectedDepartmentAtom } from '@/store/atoms';

const MOCK_Users: IWorkData[] = [
  {
    annualLeaveUsed: 2,
    branch: '뮤즈 (서초점)',
    days: 4,
    department: '간호사',
    gender: 0,
    holidayWork: 0,
    id: 0,
    leaveDate: 0,
    name: '박간호사',
    overtimeCount30min: 3,
    overtimeCount60min: 1,
    overtimeCount90min: 0,
    regularDaysOff: 1,
    totalOvertime: 5000,
    unpaidLeaveUsed: 0,
    weekendWorkHours: 0,
    weekendWorkPay: 0,
    workDate: 1,
    workFromHome: 1,
  },
  {
    annualLeaveUsed: 2,
    branch: '뮤즈 (인천점)',
    days: 4,
    department: '의사',
    gender: 0,
    holidayWork: 0,
    id: 0,
    leaveDate: 0,
    name: '김의사',
    overtimeCount30min: 3,
    overtimeCount60min: 1,
    overtimeCount90min: 0,
    regularDaysOff: 1,
    totalOvertime: 5000,
    unpaidLeaveUsed: 0,
    weekendWorkHours: 0,
    weekendWorkPay: 0,
    workDate: 1,
    workFromHome: 1,
  },
  {
    annualLeaveUsed: 2,
    branch: '뮤즈 (대구점)',
    days: 4,
    department: '간호사',
    gender: 0,
    holidayWork: 0,
    id: 0,
    leaveDate: 0,
    name: '나간호사',
    overtimeCount30min: 3,
    overtimeCount60min: 1,
    overtimeCount90min: 0,
    regularDaysOff: 1,
    totalOvertime: 5000,
    unpaidLeaveUsed: 0,
    weekendWorkHours: 0,
    weekendWorkPay: 0,
    workDate: 1,
    workFromHome: 1,
  },
  {
    annualLeaveUsed: 2,
    branch: '평양점',
    days: 4,
    department: '의사',
    gender: 0,
    holidayWork: 0,
    id: 0,
    leaveDate: 0,
    name: '나의사',
    overtimeCount30min: 3,
    overtimeCount60min: 1,
    overtimeCount90min: 0,
    regularDaysOff: 1,
    totalOvertime: 5000,
    unpaidLeaveUsed: 0,
    weekendWorkHours: 0,
    weekendWorkPay: 0,
    workDate: 1,
    workFromHome: 1,
  },
  {
    annualLeaveUsed: 2,
    branch: '뮤즈 (서초점)',
    days: 4,
    department: '간호사',
    gender: 0,
    holidayWork: 0,
    id: 0,
    leaveDate: 0,
    name: '김영희',
    overtimeCount30min: 3,
    overtimeCount60min: 1,
    overtimeCount90min: 0,
    regularDaysOff: 1,
    totalOvertime: 5000,
    unpaidLeaveUsed: 0,
    weekendWorkHours: 0,
    weekendWorkPay: 0,
    workDate: 1,
    workFromHome: 1,
  },
  {
    annualLeaveUsed: 2,
    branch: '뮤즈 (인천점)',
    days: 4,
    department: '의사',
    gender: 0,
    holidayWork: 0,
    id: 0,
    leaveDate: 0,
    name: '박철수',
    overtimeCount30min: 3,
    overtimeCount60min: 1,
    overtimeCount90min: 0,
    regularDaysOff: 1,
    totalOvertime: 5000,
    unpaidLeaveUsed: 0,
    weekendWorkHours: 0,
    weekendWorkPay: 0,
    workDate: 1,
    workFromHome: 1,
  },
  {
    annualLeaveUsed: 2,
    branch: '뮤즈 (대구점)',
    days: 4,
    department: '간호사',
    gender: 0,
    holidayWork: 0,
    id: 0,
    leaveDate: 0,
    name: '이성령',
    overtimeCount30min: 3,
    overtimeCount60min: 1,
    overtimeCount90min: 0,
    regularDaysOff: 1,
    totalOvertime: 5000,
    unpaidLeaveUsed: 0,
    weekendWorkHours: 0,
    weekendWorkPay: 0,
    workDate: 1,
    workFromHome: 1,
  },
  {
    annualLeaveUsed: 2,
    branch: '평양점',
    days: 4,
    department: '의사',
    gender: 0,
    holidayWork: 0,
    id: 0,
    leaveDate: 0,
    name: '박지인',
    overtimeCount30min: 3,
    overtimeCount60min: 1,
    overtimeCount90min: 0,
    regularDaysOff: 1,
    totalOvertime: 5000,
    unpaidLeaveUsed: 0,
    weekendWorkHours: 0,
    weekendWorkPay: 0,
    workDate: 1,
    workFromHome: 1,
  },
];
const MOCK_Users_Page = [
  {
    annualLeaveUsed: 2,
    branch: '뮤즈 (서초점)',
    days: 4,
    department: '간호사',
    gender: 0,
    holidayWork: 0,
    id: 0,
    leaveDate: 0,
    name: '박간호사',
    overtimeCount30min: 3,
    overtimeCount60min: 1,
    overtimeCount90min: 0,
    regularDaysOff: 1,
    totalOvertime: 5000,
    unpaidLeaveUsed: 0,
    weekendWorkHours: 0,
    weekendWorkPay: 0,
    workDate: 1,
    workFromHome: 1,
    pageNum: 1,
  },
  {
    annualLeaveUsed: 2,
    branch: '뮤즈 (인천점)',
    days: 4,
    department: '의사',
    gender: 0,
    holidayWork: 0,
    id: 0,
    leaveDate: 0,
    name: '김의사',
    overtimeCount30min: 3,
    overtimeCount60min: 1,
    overtimeCount90min: 0,
    regularDaysOff: 1,
    totalOvertime: 5000,
    unpaidLeaveUsed: 0,
    weekendWorkHours: 0,
    weekendWorkPay: 0,
    workDate: 1,
    workFromHome: 1,
    pageNum: 1,
  },
  {
    annualLeaveUsed: 2,
    branch: '뮤즈 (대구점)',
    days: 4,
    department: '간호사',
    gender: 0,
    holidayWork: 0,
    id: 0,
    leaveDate: 0,
    name: '나간호사',
    overtimeCount30min: 3,
    overtimeCount60min: 1,
    overtimeCount90min: 0,
    regularDaysOff: 1,
    totalOvertime: 5000,
    unpaidLeaveUsed: 0,
    weekendWorkHours: 0,
    weekendWorkPay: 0,
    workDate: 1,
    workFromHome: 1,
    pageNum: 1,
  },
  {
    annualLeaveUsed: 2,
    branch: '평양점',
    days: 4,
    department: '의사',
    gender: 0,
    holidayWork: 0,
    id: 0,
    leaveDate: 0,
    name: '나의사',
    overtimeCount30min: 3,
    overtimeCount60min: 1,
    overtimeCount90min: 0,
    regularDaysOff: 1,
    totalOvertime: 5000,
    unpaidLeaveUsed: 0,
    weekendWorkHours: 0,
    weekendWorkPay: 0,
    workDate: 1,
    workFromHome: 1,
    pageNum: 1,
  },
  {
    annualLeaveUsed: 2,
    branch: '뮤즈 (서초점)',
    days: 4,
    department: '간호사',
    gender: 0,
    holidayWork: 0,
    id: 0,
    leaveDate: 0,
    name: '김영희',
    overtimeCount30min: 3,
    overtimeCount60min: 1,
    overtimeCount90min: 0,
    regularDaysOff: 1,
    totalOvertime: 5000,
    unpaidLeaveUsed: 0,
    weekendWorkHours: 0,
    weekendWorkPay: 0,
    workDate: 1,
    workFromHome: 1,
    pageNum: 2,
  },
  {
    annualLeaveUsed: 2,
    branch: '뮤즈 (인천점)',
    days: 4,
    department: '의사',
    gender: 0,
    holidayWork: 0,
    id: 0,
    leaveDate: 0,
    name: '박철수',
    overtimeCount30min: 3,
    overtimeCount60min: 1,
    overtimeCount90min: 0,
    regularDaysOff: 1,
    totalOvertime: 5000,
    unpaidLeaveUsed: 0,
    weekendWorkHours: 0,
    weekendWorkPay: 0,
    workDate: 1,
    workFromHome: 1,
    pageNum: 2,
  },
  {
    annualLeaveUsed: 2,
    branch: '뮤즈 (대구점)',
    days: 4,
    department: '간호사',
    gender: 0,
    holidayWork: 0,
    id: 0,
    leaveDate: 0,
    name: '이성령',
    overtimeCount30min: 3,
    overtimeCount60min: 1,
    overtimeCount90min: 0,
    regularDaysOff: 1,
    totalOvertime: 5000,
    unpaidLeaveUsed: 0,
    weekendWorkHours: 0,
    weekendWorkPay: 0,
    workDate: 1,
    workFromHome: 1,
    pageNum: 2,
  },
  {
    annualLeaveUsed: 2,
    branch: '평양점',
    days: 4,
    department: '의사',
    gender: 0,
    holidayWork: 0,
    id: 0,
    leaveDate: 0,
    name: '박지인',
    overtimeCount30min: 3,
    overtimeCount60min: 1,
    overtimeCount90min: 0,
    regularDaysOff: 1,
    totalOvertime: 5000,
    unpaidLeaveUsed: 0,
    weekendWorkHours: 0,
    weekendWorkPay: 0,
    workDate: 1,
    workFromHome: 1,
    pageNum: 2,
  },
];
export interface WorkTableContext {
  selectedBranch: TOptions | null;
  selectedDepartment: TOptions | null;
}

// TODO 후에 백단에 브런치와 파트의 정보만 쏴주면 필터링된 데이터가 돌아올 것
export default function WorkTable() {
  const [selectedBranch] = useAtom(selectedBranchAtom);
  const [selectedDepartment] = useAtom(selectedDepartmentAtom);
  const [filteredData, setFilteredData] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentPage = Number(queryParams.get('page')) || 1;
  //useQuery에 page, 지점, 파트, 이름, 전화번호를 전달해주는 함수가 필요함

  // 모든 정보 data로 받아옴
  // branch만 있을 때, 둘 다 있을 때 분기처리로 데이터 가공
  //기존 로직
  // const filteredData = workMockData.filter((data) => {
  console.log(filteredData);
  useEffect(() => {
    const filteredData = MOCK_Users_Page.filter((data) => {
      if (selectedBranch === null) return data;
      const branchMatch = !selectedBranch || data.branch === selectedBranch.name;
      const departmentMatch = !selectedDepartment || data.department === selectedDepartment.name;
      if (!selectedDepartment) return branchMatch;
      return branchMatch && departmentMatch;
    });
    setFilteredData(filteredData);
  }, [queryParams.get('page'), selectedBranch, selectedDepartment]);
  return (
    <>
      <ExportExcelButton data={MOCK_Users} />
      <Table.Root className="mb-5">
        <Table.Header className="text-xs text-gray-700 bg-gray-200 border-t border-gray-300 whitespace-nowrap">
          <Table.Row>
            {WORKTABLE.map((head) => {
              return (
                <Table.ColumnHeaderCell key={head} align="center">
                  {head}
                </Table.ColumnHeaderCell>
              );
            })}
          </Table.Row>
        </Table.Header>

        {filteredData && (
          <Table.Body>
            {filteredData
              .filter((data) => data.pageNum === currentPage)
              .map((data) => {
                return <WorkTableRows key={data.id} data={data} />;
              })}
          </Table.Body>
        )}
      </Table.Root>
    </>
  );
}
