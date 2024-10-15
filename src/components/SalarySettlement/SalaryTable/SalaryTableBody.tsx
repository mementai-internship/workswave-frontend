import { IEmployeeSalarySettlement } from '@/models/salarySettlement.model';
import { Checkbox, Table, TextField } from '@radix-ui/themes';

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
    <Table.Body>
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
              type="number"
              size="1"
              value={employee.incentive === 0 ? '' : employee.incentive.toString()}
              onChange={(e) => handleAllowance(employee.id, 'incentive', e.target.value)}
              placeholder="0"
              maxLength={9}
            />
          </Table.Cell>
          <Table.Cell align="center">{employee.attendanceDeduction.toLocaleString()}</Table.Cell>
          <Table.Cell align="center">
            <TextField.Root
              className="w-20"
              type="number"
              size="1"
              value={
                employee.previousMonthUnpaid === 0 ? '' : employee.previousMonthUnpaid.toString()
              }
              onChange={(e) => handleAllowance(employee.id, 'previousMonthUnpaid', e.target.value)}
              placeholder="0"
              maxLength={9}
            />
          </Table.Cell>
          <Table.Cell align="center">{employee.overtimePay.toLocaleString()}</Table.Cell>
          <Table.Cell align="center">{employee.weekendWorkPay.toLocaleString()}</Table.Cell>
          <Table.Cell align="center" className="whitespace-nowrap overflow-hidden text-ellipsis">
            {employee.totalPay?.toLocaleString()}
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
}
