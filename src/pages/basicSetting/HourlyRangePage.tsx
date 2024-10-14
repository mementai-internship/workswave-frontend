import HourlyRangeCreate from '@/components/BasicSetting/HourlyRange/HourlyRangeCreate';
import HourlyRangeList from '@/components/BasicSetting/HourlyRange/HourlyRangeList';

export default function HourlyRangePage() {
  return (
    <div
      className="flex items-start gap-1 min-w-[1160px] max-w-[1500px] mx-auto overflow-x-scroll"
      style={{ height: 'calc(100vh - 106px - 8rem)' }}
    >
      <HourlyRangeList />
      <HourlyRangeCreate />
    </div>
  );
}
