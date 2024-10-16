import { useSalarySummary } from '@/hooks/SalarySettlement/useSalarySummary';
import { IEmployeeSalarySettlement } from '@/models/salarySettlement.model';

interface ISalaryTableFooterProps {
  filteredEmployees: IEmployeeSalarySettlement[];
}

export function SalaryTableFooter({ filteredEmployees }: ISalaryTableFooterProps) {
  const calculateSummary = useSalarySummary(filteredEmployees);

  return (
    <div className="bg-gray-800 fixed bottom-0 left-0 right-0 py-2 px-4 ">
      <div className="flex justify-between items-center mx-auto">
        <section className="flex space-x-4">
          <div className="flex flex-col items-center w-24">
            <span className="text-white font-bold truncate">
              {calculateSummary.totalEmployees}명
            </span>
            <span className="text-gray-50 text-sm">전체 인원</span>
          </div>
          <div className="flex flex-col items-center w-36">
            <span className="text-white font-bold truncate">
              {calculateSummary.totalSalary.toLocaleString()}원
            </span>
            <span className="text-gray-50 text-sm">총 월급</span>
          </div>
        </section>
        <section className="flex space-x-4">
          <div className="flex flex-col items-center w-24">
            <span className="text-white font-bold truncate">
              {calculateSummary.totalPreviousMonthUnpaid > 0
                ? calculateSummary.totalPreviousMonthUnpaid.toLocaleString()
                : '0'}
              원
            </span>
            <span className="text-gray-50 text-sm">전월미지급</span>
          </div>
          <div className="flex flex-col items-center w-24">
            <span className="text-white font-bold truncate">
              {calculateSummary.totalOvertimePay.toLocaleString()}원
            </span>
            <span className="text-gray-50 text-sm">OT수당</span>
          </div>
          <div className="flex flex-col items-center w-24">
            <span className="text-white font-bold truncate">
              {calculateSummary.totalWeekendWorkPay.toLocaleString()}원
            </span>
            <span className="text-gray-50 text-sm">주말근로수당</span>
          </div>
          <div className="flex flex-col items-center w-52">
            <span className="text-white font-bold overflow-hidden">
              {calculateSummary.totalPay.toLocaleString()}원
            </span>
            <span className="text-gray-50 text-sm">총 급여합계</span>
          </div>
        </section>
      </div>
    </div>
  );
}
