import { SalaryTableHeader } from '@/components/SalarySettlement/SalaryTable/SalaryTableHeader';
import { useFilteredEmployees } from '@/hooks/SalarySettlement/useFilteredEmployees';
import { useSalarySummary } from '@/hooks/SalarySettlement/useSalarySummary';
import { useEmployees } from '@/hooks/SalarySettlement/useSettlementEmployee';
import { IEmployeeSalarySettlement } from '@/models/salarySettlement.model';
import { Checkbox, Table, TextField } from '@radix-ui/themes';

interface SalaryTableProps {
  salarySettlementData: IEmployeeSalarySettlement[];
  selectedRegion: string;
  selectedPart: string;
  selectedJob: string;
}

export default function SalaryTable({
  salarySettlementData,
  selectedRegion,
  selectedPart,
  selectedJob,
}: SalaryTableProps) {
  const { employees, handleAllowance, handleCheckbox, handleAllCheckbox } =
    useEmployees(salarySettlementData);
  const filteredEmployees = useFilteredEmployees(
    employees,
    selectedRegion,
    selectedPart,
    selectedJob
  );
  const calculateSummary = useSalarySummary(filteredEmployees);

  return (
    <div className="justify-center items-start min-h-full pb-10">
      <Table.Root className="w-full text-sm text-gray-500">
        <SalaryTableHeader employees={employees} handleAllCheckbox={handleAllCheckbox} />

        <Table.Body>
          {filteredEmployees.map((employee, index) => (
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
                  onChange={(e) => handleAllowance(index, 'incentive', e.target.value)}
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
                  onChange={(e) => handleAllowance(index, 'previousMonthUnpaid', e.target.value)}
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
