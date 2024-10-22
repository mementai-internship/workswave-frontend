import { Table } from '@radix-ui/themes';
import { useEffect } from 'react';

import { SalaryTableBody } from '@/components/SalarySettlement/SalaryTable/SalaryTableBody';
import { SalaryTableFooter } from '@/components/SalarySettlement/SalaryTable/SalaryTableFooter';
import { SalaryTableHeader } from '@/components/SalarySettlement/SalaryTable/SalaryTableHeader';
import { useFilteredEmployees } from '@/hooks/SalarySettlement/useFilteredEmployees';
import { useEmployees } from '@/hooks/SalarySettlement/useSettlementEmployee';
import { IEmployeeSalarySettlement } from '@/models/salarySettlement.model';

interface ISalaryTableProps {
  salarySettlementData: IEmployeeSalarySettlement[];
  selectedRegion: string | undefined;
  selectedJob: string | undefined;
  resetTrigger: boolean;
}

export default function SalaryTable({
  salarySettlementData,
  selectedRegion,
  selectedJob,
  resetTrigger,
}: ISalaryTableProps) {
  const { employees, handleAllowance, handleCheckbox, handleAllCheckbox, resetEmployees } =
    useEmployees(salarySettlementData);

  useEffect(() => {
    resetEmployees();
  }, [resetTrigger, resetEmployees]);

  const filteredEmployees = useFilteredEmployees(employees, selectedRegion, selectedJob);

  return (
    <div className="justify-center items-start pb-10">
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
