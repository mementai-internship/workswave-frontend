import { MOCK_HOLIDAY_SETTINGS } from '@/constants/holidaySetting.mock';

export const useGetHolidaySetting = () => {
  // return useQuery<IHolidaySettingResponse>({
  // queryKey: ['holidaySetting'],
  // queryFn: () => getHolidaySetting(),
  // });
  return { data: MOCK_HOLIDAY_SETTINGS };
};
