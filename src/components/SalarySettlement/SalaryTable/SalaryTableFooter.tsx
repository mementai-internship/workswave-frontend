import { Txt } from '@/components/Common/Txt';
import { useSalarySummary } from '@/hooks/SalarySettlement/useSalarySummary';
import { IEmployeeSalarySettlement } from '@/models/salarySettlement.model';

interface ISalaryTableFooterProps {
  filteredEmployees: IEmployeeSalarySettlement[];
}

export function SalaryTableFooter({ filteredEmployees }: ISalaryTableFooterProps) {
  const calculateSummary = useSalarySummary(filteredEmployees);

  return (
    <div className="bg-gray-800 fixed bottom-0 left-0 right-0 py-3">
      <div className="flex justify-between px-28 items-center mx-auto">
        <section className="flex space-x-4">
          <div className="flex flex-col items-center w-24">
            <Txt variant="h6" color="white">
              {calculateSummary.totalEmployees}명
            </Txt>
            <Txt variant="body2" color="gray-50">
              전체 인원
            </Txt>
          </div>
          <div className="flex flex-col items-center w-36">
            <Txt variant="h6" color="white">
              {calculateSummary.totalSalary.toLocaleString()}원
            </Txt>
            <Txt variant="body2" color="gray-50">
              총 월급
            </Txt>
          </div>
        </section>
        <section className="flex space-x-4">
          <div className="flex flex-col items-center w-32">
            <Txt variant="h6" color="white">
              {calculateSummary.totalPreviousMonthUnpaid > 0
                ? calculateSummary.totalPreviousMonthUnpaid.toLocaleString()
                : '0'}
              원
            </Txt>
            <Txt variant="body2" color="gray-50">
              전월미지급
            </Txt>
          </div>
          <div className="flex flex-col items-center w-32">
            <Txt variant="h6" color="white">
              {calculateSummary.totalOvertimePay.toLocaleString()}원
            </Txt>
            <Txt variant="body2" color="gray-50">
              OT수당
            </Txt>
          </div>
          <div className="flex flex-col items-center w-32">
            <Txt variant="h6" color="white">
              {calculateSummary.totalWeekendWorkPay.toLocaleString()}원
            </Txt>
            <Txt variant="body2" color="gray-50">
              주말근로수당
            </Txt>
          </div>
          <div className="flex flex-col items-center w-52">
            <Txt variant="h6" color="white">
              {calculateSummary.totalPay.toLocaleString()}원
            </Txt>
            <Txt variant="body2" color="gray-50">
              총 급여합계
            </Txt>
          </div>
        </section>
      </div>
    </div>
  );
}
