import { IWorkStatistics } from '@/models/work.model';

const StatisticItem = ({ label, value }: { label: string; value: number }) => (
  <div className="flex flex-col items-center ">
    <span className="text-sm mb-2">{label}</span>
    <span className="text-xl text-gray-400  font-semibold">{value}</span>
  </div>
);
export default function DetailCommuteRecord({ statistics }: { statistics: IWorkStatistics }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <div className="text-s font-semibold">출퇴근 기록 관리 상세현황</div>
        <div className="text-sm text-gray-500 cursor-pointer">전체보기</div>
      </div>
      <div className="border border-gray-300 rounded-lg mb-5 bg-white">
        <div className="p-6">
          <div className="flex justify-between items-center px-5">
            <StatisticItem label="근무자" value={statistics.totalWorkers} />
            <StatisticItem label="근무 시간 초과" value={statistics.overtimeWorkers} />
            <StatisticItem label="지각" value={statistics.lateWorkers} />
            <StatisticItem label="휴일근무" value={statistics.holidayWorkers} />
            <StatisticItem label="휴무" value={statistics.dayOffWorkers} />
            <StatisticItem label="재택" value={statistics.remoteWorkers} />
          </div>
        </div>
      </div>
    </div>
  );
}
