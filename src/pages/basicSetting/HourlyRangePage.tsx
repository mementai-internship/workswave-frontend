import HourlyRangeCreate from '@/components/BasicSetting/HourlyRange/HourlyRangeCreate';
import HourlyRangeList from '@/components/BasicSetting/HourlyRange/HourlyRangeList';

export default function HourlyRangePage() {
  return (
    <div className="flex items-start gap-1 min-w-[1120px] h-[calc(100vh-160px)] mx-auto ">
      <HourlyRangeList />
      <HourlyRangeCreate />
    </div>
  );
}
