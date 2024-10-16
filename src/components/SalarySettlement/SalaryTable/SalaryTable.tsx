import { SalaryTableBody } from '@/components/SalarySettlement/SalaryTable/SalaryTableBody';
import { SalaryTableFooter } from '@/components/SalarySettlement/SalaryTable/SalaryTableFooter';
import { SalaryTableHeader } from '@/components/SalarySettlement/SalaryTable/SalaryTableHeader';
import { useFilteredEmployees } from '@/hooks/SalarySettlement/useFilteredEmployees';
import { useEmployees } from '@/hooks/SalarySettlement/useSettlementEmployee';
import { IEmployeeSalarySettlement } from '@/models/salarySettlement.model';
import { Table } from '@radix-ui/themes';
import { useEffect } from 'react';

interface ISalaryTableProps {
  salarySettlementData: IEmployeeSalarySettlement[];
  selectedRegion: string | undefined;
  selectedPart: string | undefined;
  selectedJob: string | undefined;
  resetTrigger: boolean;
}

export default function SalaryTable({
  salarySettlementData,
  selectedRegion,
  selectedPart,
  selectedJob,
  resetTrigger,
}: ISalaryTableProps) {
  const { employees, handleAllowance, handleCheckbox, handleAllCheckbox, resetEmployees } =
    useEmployees(salarySettlementData);

  useEffect(() => {
    resetEmployees();
  }, [resetTrigger, resetEmployees]);

  const filteredEmployees = useFilteredEmployees(
    employees,
    selectedRegion,
    selectedPart,
    selectedJob
  );

  return (
    <div className="justify-center items-start pb-7">
      <Table.Root variant="surface">
        <SalaryTableHeader employees={employees} handleAllCheckbox={handleAllCheckbox} />
        <SalaryTableBody
          filteredEmployees={filteredEmployees}
          handleCheckbox={handleCheckbox}
          handleAllowance={handleAllowance}
        />
      </Table.Root>

      <SalaryTableFooter filteredEmployees={filteredEmployees} />
    </div>
  );
}
