import { IEmployeeSalarySettlement } from '@/models/salarySettlement.model';
import { Checkbox, Table } from '@radix-ui/themes';

interface ISalaryTableHeaderProps {
  employees: IEmployeeSalarySettlement[];
  handleAllCheckbox: () => void;
}

export function SalaryTableHeader({ employees, handleAllCheckbox }: ISalaryTableHeaderProps) {
  return (
    <Table.Header className="whitespace-nowrap">
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
  );
}
