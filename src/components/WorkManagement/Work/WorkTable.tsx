import { Table } from '@radix-ui/themes';
import { useAtom } from 'jotai';

import WorkTableRows from '@/components/WorkManagement/Work/WorkTableRows';
import { TOptions } from '@/components/WorkManagement/WorkSelect';
import { WORKTABLE } from '@/constants/workManagement/workTable';
// import { workMockData } from '@/constants/workManagement/workTable.mock';
import { selectedBranchAtom, selectedDepartmentAtom } from '@/store/atoms';

const MOCK_Users = [
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
];

export interface WorkTableContext {
  selectedBranch: TOptions | null;
  selectedDepartment: TOptions | null;
}
export default function WorkTable() {
  const [selectedBranch] = useAtom(selectedBranchAtom);
  const [selectedDepartment] = useAtom(selectedDepartmentAtom);

  // 모든 정보 data로 받아옴
  // branch만 있을 때, 둘 다 있을 때 분기처리로 데이터 가공

  //기존 로직
  // const filteredData = workMockData.filter((data) => {

  const filteredData = MOCK_Users.filter((data) => {
    if (selectedBranch === null) return data;
    const branchMatch = !selectedBranch || data.branch === selectedBranch.name;
    const departmentMatch = !selectedDepartment || data.department === selectedDepartment.name;
    if (!selectedDepartment) return branchMatch;
    return branchMatch && departmentMatch;
  });
  console.log(filteredData);
  return (
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

      <Table.Body>
        {filteredData.map((data) => {
          return <WorkTableRows key={data.id} data={data} />;
        })}
      </Table.Body>
    </Table.Root>
  );
}
