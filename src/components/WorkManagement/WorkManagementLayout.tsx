import dayjs from 'dayjs';
import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import WorkHeader from '@/components/WorkManagement/WorkHeader';

export interface ItabItem {
  id: number;
  title: string;
  path: string;
}

export default function WorkManagementLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentDate, setCurrentDate] = useState(dayjs());

  const tabItems: ItabItem[] = [
    { id: 0, title: '근로 관리', path: '/work-management/working' },
    { id: 1, title: '파트타이머 관리', path: '/work-management/partTime' },
    { id: 2, title: '출퇴근 관리', path: '/work-management/commute' },
  ];

  const [selectTab, setSelectTab] = useState<ItabItem>(() => {
    return tabItems.find((tab) => tab.path === location.pathname) || tabItems[0];
  });

  const handleTabChange = (newTab: ItabItem) => {
    setSelectTab(newTab);
    navigate(newTab.path);
  };

  return (
    <div className="w-full">
      <WorkHeader
        selectTab={selectTab}
        setSelectTab={handleTabChange}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
      <Outlet />
    </div>
  );
}
