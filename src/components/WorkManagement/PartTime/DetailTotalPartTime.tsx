interface WorkSummaryProps {
  workDays: number;
  totalWorkHours: string;
  hospitalWorkHours: string;
  remoteWorkHours: string;
  holidayWorkHours: string;
  totalSalary: string;
}

const SummaryItem = ({ label, value }: { label: string; value: string | number }) => (
  <div className="flex flex-col items-center px-4">
    <span className="text-sm text-gray-600">{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);

export default function DetailTotalPartTime({
  workDays,
  totalWorkHours,
  hospitalWorkHours,
  remoteWorkHours,
  holidayWorkHours,
  totalSalary,
}: WorkSummaryProps) {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
      <SummaryItem label="근무일자" value={`${workDays}일`} />
      <SummaryItem label="총 근무시간" value={totalWorkHours} />
      <SummaryItem label="병원근무" value={hospitalWorkHours} />
      <SummaryItem label="재택근무" value={remoteWorkHours} />
      <SummaryItem label="휴일근무" value={holidayWorkHours} />
      <div className="flex flex-col items-center px-4 rounded-md ">
        <span className="text-sm text-gray-600">급여 합계</span>
        <span className="font-bold text-lg text-blue-600">{totalSalary}</span>
      </div>
    </div>
  );
}
