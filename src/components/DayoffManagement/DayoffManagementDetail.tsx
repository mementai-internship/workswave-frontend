interface IDayoffManagementDetailProps {
  autoDayoff: number;
  remainingDayoff: number;
  usedDayoff: number;
}

export default function DayoffManagementDetail({
  autoDayoff,
  remainingDayoff,
  usedDayoff,
}: IDayoffManagementDetailProps) {
  return (
    <div className="flex items-center justify-around p-7 bg-white border rounded-xl w-full">
      <div className="flex flex-col items-start">
        <p className="text-sm font-semibold text-green-600">자동 지급</p>
        <p className="text-lg font-bold text-green-600">
          {autoDayoff > 0 ? `+ ${autoDayoff}일` : '없음'}
        </p>
      </div>
      <div className="flex flex-col items-start">
        <p className="text-sm font-semibold text-gray-500">잔여</p>
        <p className="text-lg font-bold text-gray-500">
          {remainingDayoff > 0 ? `+ ${remainingDayoff}일` : '없음'}
        </p>
      </div>
      <div className="flex flex-col items-start">
        <p className="text-sm font-semibold text-red">사용</p>
        <p className="text-lg font-bold text-red">
          {usedDayoff > 0 ? `- ${usedDayoff}일` : '없음'}
        </p>
      </div>
    </div>
  );
}
