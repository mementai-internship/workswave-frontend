import dayjs from 'dayjs';
import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import WorkFilter from '@/components/WorkManagement/WorkFilter';
import WorkHeader from '@/components/WorkManagement/WorkHeader';
import { TOptions } from '@/components/WorkManagement/WorkSelect';
import { TAB_ITEMS, TabItem } from '@/constants/workManagement/workManagement';

export default function WorkManagementLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectTab, setSelectTab] = useState<TabItem>(() => {
    return TAB_ITEMS.find((tab) => tab.path === location.pathname) || TAB_ITEMS[0];
  });

  const [selectedBranch, setSelectedBranch] = useState<TOptions | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<TOptions | null>(null);

  const handleTabChange = (newTab: TabItem) => {
    setSelectTab(newTab);
    navigate(newTab.path);
  };

  const handleChangeMonth = (newDate: dayjs.Dayjs) => {
    setCurrentDate(newDate);
    // backend API 연결
  };
  return (
    <div className="w-full">
      <WorkHeader
        selectTab={selectTab}
        onTabChange={handleTabChange}
        currentDate={currentDate}
        onChangeMonth={handleChangeMonth}
      />
      <WorkFilter
        selectedBranch={selectedBranch}
        setSelectedBranch={setSelectedBranch}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
      />

      <Outlet />
    </div>
  );
}
