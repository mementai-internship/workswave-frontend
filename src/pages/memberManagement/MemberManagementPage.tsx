import Pagination from '@/components/Common/Pagination';
import TitleContainer from '@/components/Common/TitleContainer';
import MemberManagementFilterBar from '@/components/MemberManagement/MemberManagementFilterBar';
import MemberManagementTable from '@/components/MemberManagement/MemberManagementTable';
import { Button } from '@radix-ui/themes';
import { useState } from 'react';
import { PiGear } from 'react-icons/pi';
import { Link } from 'react-router-dom';

export default function MemberManagementPage() {
  const itemsPerPage = 10;
  const [selectedTab, setSelectedTab] = useState<string>('info');
  function handleTabClick(tab: string) {
    setSelectedTab(tab);
  }

  const tabList = [
    {
      name: '전체',
      value: 'info',
    },
    {
      name: '퇴사자',
      value: 'contract',
    },
    {
      name: '휴직자',
      value: 'document',
    },
    {
      name: '삭제회원',
      value: 'delete',
    },
  ];

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <TitleContainer content="회원관리" />
          <Link to="/member-management/supermanager-setting">
            <Button color="gray" variant="soft" radius="full" onClick={() => {}}>
              <PiGear />
              최고관리자 설정
            </Button>
          </Link>
          <Button color="gray" variant="soft" radius="full" onClick={() => {}}>
            <PiGear />
            파트/통합관리자 설정
          </Button>
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
              className={`${selectedTab === tab.value ? 'font-bold border-b-2 border-black' : 'text-gray-50'} text-xl px-2 py-4 h-16`}
              onClick={() => handleTabClick(tab.value)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <MemberManagementFilterBar />
      </div>
      <MemberManagementTable />
      <Pagination totalItems={500} itemsPerPage={itemsPerPage} />
    </div>
  );
}
