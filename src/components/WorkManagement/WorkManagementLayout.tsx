import dayjs from 'dayjs';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import WorkFilter from '@/components/WorkManagement/WorkFilter';
import WorkHeader from '@/components/WorkManagement/WorkHeader';
import { TAB_ITEMS, TabItem } from '@/constants/workManagement/workManagement';
import { curDateAtom } from '@/store/atoms';

export default function WorkManagementLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentDate, setCurrentDate] = useAtom<dayjs.Dayjs>(curDateAtom);
  const [selectTab, setSelectTab] = useState<TabItem>(() => {
    return TAB_ITEMS.find((tab) => tab.path === location.pathname) || TAB_ITEMS[0];
  });

  // 최 상단에서
  const handleTabChange = (newTab: TabItem) => {
    setSelectTab(newTab);
    navigate(newTab.path);
  };

  const handleChangeMonth = (newDate: dayjs.Dayjs) => {
    setCurrentDate(newDate);
    // backend API 연결
  };
  return (
    <div className="w-full min-w-[1380px]">
      <WorkHeader
        selectTab={selectTab}
        onTabChange={handleTabChange}
        currentDate={currentDate}
        onChangeMonth={handleChangeMonth}
      />
      <WorkFilter />

      <Outlet />
    </div>
  );
}
