import HourlyRangeContainer from '@/components/BasicSetting/HourlyRange/HourlyRangeContainer';
import HourlyRangeItem from '@/components/BasicSetting/HourlyRange/HourlyRangeItem';
import HourlyRangeSelect from '@/components/BasicSetting/HourlyRange/HourlyRangeSelect';
import { useHourlyRange } from '@/hooks/useHourlyRange';

export default function HourlyRangeList() {
  const { data } = useHourlyRange();
  return (
    <HourlyRangeContainer
      title="시급설정"
      width="w-[70%]"
      subTitleElement={
        <>
          <HourlyRangeSelect content={DUMMY_DATA_OFFICE} defaultValue={0} isTitle />
          <HourlyRangeSelect
            content={DUMMY_DATA_POSITION}
            placeholder="직책선택"
            name="positionId"
            isTitle
          />
        </>
      }
    >
      <ul className="flex flex-col gap-2 py-3">
        {data.map((item) => (
          <HourlyRangeItem key={item.templateId} item={item} />
        ))}
      </ul>
    </HourlyRangeContainer>
  );
}

const DUMMY_DATA_POSITION = [
  {
    name: '의사',
    id: 'ROLE_001',
  },
  {
    name: '상담실장',
    id: 'ROLE_002',
  },
  {
    name: '간호조무사',
    id: 'ROLE_003',
  },
  {
    name: '코디네이터',
    id: 'ROLE_004',
  },
  {
    name: '피부관리사',
    id: 'ROLE_005',
  },
];

const DUMMY_DATA_OFFICE = [
  {
    name: '뮤즈의원(강남점)',
    id: '0',
  },
];
