import { Checkbox, Table, TextField } from '@radix-ui/themes';

import { MAX_SALARY } from '@/constants/salarySettlement';
import { IEmployeeSalarySettlement } from '@/models/salarySettlement.model';

interface ISalaryTableBodyProps {
  filteredEmployees: IEmployeeSalarySettlement[];
  handleCheckbox: (id: string) => void;
  handleAllowance: (id: string, field: string, value: string) => void;
}

export function SalaryTableBody({
  filteredEmployees,
  handleCheckbox,
  handleAllowance,
}: ISalaryTableBodyProps) {
  return (
    <Table.Body className="w-full mx-auto">
      {filteredEmployees.map((employee) => (
        <Table.Row
          key={employee.id}
          align="center"
          className="text-center bg-white hover:bg-purple-10"
        >
          <Table.Cell>
            <Checkbox
              size="1"
              color="gray"
              checked={employee.isSelected}
              onCheckedChange={() => handleCheckbox(employee.id)}
            />
          </Table.Cell>
          <Table.Cell className="max-w-24">
            <div className="text-ellipsis overflow-hidden whitespace-nowrap">{employee.name}</div>
            <div className="text-ellipsis overflow-hidden whitespace-nowrap text-gray-50">
              {employee.department}
            </div>
          </Table.Cell>
          <Table.Cell align="center" className="min-w-28 max-w-28 p-0">
            {employee.salary.toLocaleString()}
          </Table.Cell>
          <Table.Cell align="center" className="min-w-28 max-w-28 p-0">
            {employee.basePay.toLocaleString()}
          </Table.Cell>
          <Table.Cell align="center" className="w-24">
            {employee.comprehensiveOvertimePay.toLocaleString()}
          </Table.Cell>
          <Table.Cell align="center" className="w-24">
            {employee.annualLeavePay.toLocaleString()}
          </Table.Cell>
          <Table.Cell align="center" className="w-24">
            {employee.holidayPay.toLocaleString()}
          </Table.Cell>
          <Table.Cell align="center" className="w-24">
            {employee.jobAllowance.toLocaleString()}
          </Table.Cell>
          <Table.Cell align="center" className="w-28">
            <TextField.Root
              className="w-20"
              type="number"
              size="1"
              value={employee.incentive === 0 ? '' : employee.incentive.toString()}
              onChange={(e) => handleAllowance(employee.id, 'incentive', e.target.value)}
              placeholder="0"
              max={MAX_SALARY}
            />
          </Table.Cell>
          <Table.Cell align="center" className="w-24">
            {employee.attendanceDeduction.toLocaleString()}
          </Table.Cell>
          <Table.Cell align="center" className="w-28">
            <TextField.Root
              className="w-20"
              type="number"
              size="1"
              value={
                employee.previousMonthUnpaid === 0 ? '' : employee.previousMonthUnpaid.toString()
              }
              onChange={(e) => handleAllowance(employee.id, 'previousMonthUnpaid', e.target.value)}
              placeholder="0"
              max={MAX_SALARY}
            />
          </Table.Cell>
          <Table.Cell align="center" className="w-24">
            {employee.overtimePay.toLocaleString()}
          </Table.Cell>
          <Table.Cell align="center" className="w-24">
            {employee.weekendWorkPay.toLocaleString()}
          </Table.Cell>
          <Table.Cell
            align="center"
            className="min-w-32 max-w-32 overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {employee.totalPay?.toLocaleString()}
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
}
