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
        <Table.ColumnHeaderCell className="w-10">
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
        <Table.ColumnHeaderCell justify="center" className="w-32">
          입사일/퇴사일
        </Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell justify="center" className="w-24">
          월급
        </Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell justify="center" className="w-24">
          기본급
        </Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell justify="center" className="w-32">
          포괄연장수당
        </Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell justify="center" className="w-24">
          연차수당
        </Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell justify="center" className="w-24">
          휴일수당
        </Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell justify="center" className="w-24">
          직무수당
        </Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell justify="center" className="w-24">
          인센티브
        </Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell justify="center" className="w-24">
          근태공제
        </Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell justify="center" className="w-28">
          전월미지급
        </Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell justify="center" className="w-24">
          O.T 수당
        </Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell justify="center" className="w-28">
          주말근로수당
        </Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell justify="center" className="w-32">
          급여합계
        </Table.ColumnHeaderCell>
      </Table.Row>
    </Table.Header>
  );
}
