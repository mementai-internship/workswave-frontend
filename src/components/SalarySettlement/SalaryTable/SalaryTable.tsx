import { MAX_SALARY } from '@/components/SalarySettlement/SalaryTable/const';
import { IEmployeeSalarySettlement } from '@/models/salarySettlement.model';
import { Checkbox, Table, TextField } from '@radix-ui/themes';
import { useMemo, useState } from 'react';

// 급여합계 계산로직
const calculateTotalPay = (employee: IEmployeeSalarySettlement): number => {
  return (
    employee.basePay +
    employee.comprehensiveOvertimePay +
    employee.annualLeavePay +
    employee.holidayPay +
    employee.jobAllowance +
    employee.incentive -
    employee.attendanceDeduction +
    employee.previousMonthUnpaid +
    employee.overtimePay +
    employee.weekendWorkPay
  );
};

interface SalaryTableProps {
  salarySettlementData: IEmployeeSalarySettlement[];
  // TODO: 필터링을 위한 지점, 파트, 직원 값 전달 받아야 함
}

export default function SalaryTable({ salarySettlementData }: SalaryTableProps) {
  const [employees, setEmployees] = useState(
    salarySettlementData.map((employee) => ({
      ...employee,
      incentive: employee.incentive || 0,
      previousMonthUnpaid: employee.previousMonthUnpaid || 0,
      totalPay: calculateTotalPay({
        ...employee,
        incentive: employee.incentive || 0,
        previousMonthUnpaid: employee.previousMonthUnpaid || 0,
      }),
      isSelected: false,
    }))
  );

  const calculateSummary = useMemo(() => {
    const selectedEmployees = employees.filter((emp) => emp.isSelected);
    const employeesToSum = selectedEmployees.length > 0 ? selectedEmployees : employees;

    const totalEmployees = employeesToSum.length;
    const totalSalary = employeesToSum.reduce((sum, emp) => sum + emp.salary, 0);
    const totalPay = employeesToSum.reduce((sum, emp) => sum + (emp.totalPay || 0), 0);
    const totalPreviousMonthUnpaid = employeesToSum.reduce(
      (sum, emp) => sum + emp.previousMonthUnpaid,
      0
    );
    const totalOvertimePay = employeesToSum.reduce((sum, emp) => sum + emp.overtimePay, 0);
    const totalWeekendWorkPay = employeesToSum.reduce((sum, emp) => sum + emp.weekendWorkPay, 0);
    return {
      totalEmployees,
      totalSalary,
      totalPay,
      totalPreviousMonthUnpaid,
      totalOvertimePay,
      totalWeekendWorkPay,
    };
  }, [employees]);

  const handleInputChange = (
    index: number,
    field: 'incentive' | 'previousMonthUnpaid',
    value: string
  ) => {
    const numericValue = value === '' ? 0 : parseInt(value) || 0;

    if (numericValue > MAX_SALARY) {
      return;
    }

    const updatedEmployees = employees.map((employee, i) => {
      if (i === index) {
        const updatedEmployee = {
          ...employee,
          [field]: numericValue,
        };
        return {
          ...updatedEmployee,
          totalPay: calculateTotalPay(updatedEmployee),
        };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  };

  const handleCheckbox = (index: number) => {
    setEmployees(
      employees.map((emp, i) => (i === index ? { ...emp, isSelected: !emp.isSelected } : emp))
    );
  };

  const handleAllCheckbox = () => {
    const allSelected = employees.every((emp) => emp.isSelected);
    setEmployees(employees.map((emp) => ({ ...emp, isSelected: !allSelected })));
  };

  return (
    <div className="justify-center items-start min-h-full pb-10">
      <Table.Root className="w-full text-sm text-gray-500">
        <Table.Header className="text-xs text-gray-700 uppercase bg-gray-10 whitespace-nowrap">
          <Table.Row align="center">
            <Table.ColumnHeaderCell>
              <Checkbox
                size="1"
                color="gray"
                checked={employees.every((emp) => emp.isSelected)}
                onCheckedChange={handleAllCheckbox}
              />
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="center" className="w-24">
              이름/
              <br />
              근무파트
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="center">입사일/퇴사일</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="center">월급</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="center">기본급</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="center">포괄연장수당</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="center">연차수당</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="center">휴일수당</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="center">직무수당</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="center">인센티브</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="center">근태공제</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="center">전월미지급</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="center">O.T 수당</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="center">주말근로수당</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify="center" className="w-32">
              급여합계
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employees.map((employee, index) => (
            <Table.Row
              key={index}
              align="center"
              className="text-center bg-white border-b hover:bg-purple-10"
            >
              <Table.Cell>
                <Checkbox
                  size="1"
                  color="gray"
                  checked={employee.isSelected}
                  onCheckedChange={() => handleCheckbox(index)}
                />
              </Table.Cell>
              <Table.Cell className="max-w-24">
                <div className="truncate overflow-hidden whitespace-nowrap">{employee.name}</div>
                <div className="text-gray-50">{employee.department}</div>
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap">
                {employee.resignDate ? (
                  <>
                    <div>{employee.hireDate}</div>
                    <div>{employee.resignDate}</div>
                  </>
                ) : (
                  employee.hireDate
                )}
              </Table.Cell>
              <Table.Cell align="center">{employee.salary.toLocaleString()}</Table.Cell>
              <Table.Cell align="center">{employee.basePay.toLocaleString()}</Table.Cell>
              <Table.Cell align="center">
                {employee.comprehensiveOvertimePay.toLocaleString()}
              </Table.Cell>
              <Table.Cell align="center">{employee.annualLeavePay.toLocaleString()}</Table.Cell>
              <Table.Cell align="center">{employee.holidayPay.toLocaleString()}</Table.Cell>
              <Table.Cell align="center">{employee.jobAllowance.toLocaleString()}</Table.Cell>
              <Table.Cell align="center">
                <TextField.Root
                  className="w-20"
                  size="1"
                  value={employee.incentive === 0 ? '' : employee.incentive.toString()}
                  onChange={(e) => handleInputChange(index, 'incentive', e.target.value)}
                  placeholder="0"
                  maxLength={9}
                />
              </Table.Cell>
              <Table.Cell align="center">
                {employee.attendanceDeduction.toLocaleString()}
              </Table.Cell>
              <Table.Cell align="center">
                <TextField.Root
                  className="w-20"
                  size="1"
                  value={
                    employee.previousMonthUnpaid === 0
                      ? ''
                      : employee.previousMonthUnpaid.toString()
                  }
                  onChange={(e) => handleInputChange(index, 'previousMonthUnpaid', e.target.value)}
                  placeholder="0"
                  maxLength={9}
                />
              </Table.Cell>
              <Table.Cell align="center">{employee.overtimePay.toLocaleString()}</Table.Cell>
              <Table.Cell align="center">{employee.weekendWorkPay.toLocaleString()}</Table.Cell>
              <Table.Cell
                align="center"
                className="whitespace-nowrap overflow-hidden text-ellipsis"
              >
                {employee.totalPay?.toLocaleString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <div className="bg-gray-800 fixed bottom-0 left-0 right-0 py-2 px-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex space-x-4">
            <div className="flex flex-col items-center w-24">
              <div className="text-white font-bold truncate">
                {calculateSummary.totalEmployees}명
              </div>
              <div className="text-gray-50 text-sm">전체 인원</div>
            </div>
            <div className="flex flex-col items-center w-36">
              <div className="text-white font-bold truncate">
                {calculateSummary.totalSalary.toLocaleString()}원
              </div>
              <div className="text-gray-50 text-sm">총 월급</div>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex flex-col items-center w-24">
              <div className="text-white font-bold truncate">
                {calculateSummary.totalPreviousMonthUnpaid > 0
                  ? calculateSummary.totalPreviousMonthUnpaid.toLocaleString()
                  : '0'}
                원
              </div>
              <div className="text-gray-50 text-sm">전월미지급</div>
            </div>
            <div className="flex flex-col items-center w-24">
              <div className="text-white font-bold truncate">
                {calculateSummary.totalOvertimePay.toLocaleString()}원
              </div>
              <div className="text-gray-50 text-sm">OT수당</div>
            </div>
            <div className="flex flex-col items-center w-24">
              <div className="text-white font-bold truncate">
                {calculateSummary.totalWeekendWorkPay.toLocaleString()}원
              </div>
              <div className="text-gray-50 text-sm">주말근로수당</div>
            </div>
            <div className="flex flex-col items-center w-52">
              <div className="text-white font-bold overflow-hidden">
                {calculateSummary.totalPay.toLocaleString()}원
              </div>
              <div className="text-gray-50 text-sm ">총 급여합계</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
