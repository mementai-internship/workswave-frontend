import { Button } from '@radix-ui/themes';
import { useState } from 'react';
import { PiGear } from 'react-icons/pi';
import { Link, useLocation } from 'react-router-dom';

import Pagination from '@/components/Common/Pagination';
import TitleContainer from '@/components/Common/TitleContainer';
import MemberManagementFilterBar from '@/components/MemberManagement/MemberManagementFilterBar';
import MemberManagementTable from '@/components/MemberManagement/MemberManagementTable';
import { useGetUsers } from '@/hooks/apis/useUserManagement';

export default function MemberManagementPage() {
  const [selectedTab, setSelectedTab] = useState<string>('all');
  function handleTabClick(tab: string) {
    setSelectedTab(tab);
  }

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentPage = parseInt(queryParams.get('page') || '1', 10);
  const itemsPerPage = 10;

  const { data: userList } = useGetUsers(currentPage, itemsPerPage);

  const tabList = [
    {
      name: '전체',
      value: 'all',
    },
    {
      name: '퇴사자',
      value: 'resignee',
    },
    {
      name: '휴직자',
      value: 'vacation',
    },
    {
      name: '삭제회원',
      value: 'deleted',
    },
  ];

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <TitleContainer content="회원관리" />
          <Link to="/member-management/supermanager-setting">
            <Button color="gray" variant="soft" radius="full">
              <PiGear />
              최고/지점관리자 설정
            </Button>
          </Link>
        </div>
        <div className="flex justify-end">
          <Button
            variant="surface"
            color="gray"
            size="3"
            className="font-bold text-black text-sm p-4 bg-gray-200 border-gray-10"
            onClick={() => {}}
          >
            계약 변경 내역
          </Button>
        </div>
      </div>
      <hr className="w-min-screen h-0.5 bg-gray-300" />
      <div className="flex gap-2 border-b-2 border-gray-300 justify-between items-center">
        <div className="flex gap-2">
          {tabList.map((tab) => (
            <button
              key={tab.value}
              className={`${selectedTab === tab.value ? 'font-bold border-black' : 'text-gray-50 border-transparent'} border-b-2 text-xl px-2 py-4 h-16`}
              onClick={() => handleTabClick(tab.value)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <MemberManagementFilterBar />
      </div>
      <MemberManagementTable data={userList?.data} tab={selectedTab} />
      <Pagination totalItems={userList?.total} itemsPerPage={userList?.record_size} />
    </div>
  );
}
