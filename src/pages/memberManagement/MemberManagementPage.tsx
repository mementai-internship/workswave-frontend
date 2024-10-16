import Pagination from '@/components/Common/Pagination';
import Title from '@/components/Common/Title';
import MemberManagementFilterBar from '@/components/MemberManagement/MemberManagementFilterBar';
import MemberManagementTable from '@/components/MemberManagement/MemberManagementTable';
import { useState } from 'react';

export default function MemberManagementPage() {
  const [listPage, setListPage] = useState<number>(1);
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
      <Title content="회원관리" />
      <hr className="w-min-screen h-0.5 bg-gray-300" />
      <div className="flex gap-2 border-b-2 border-gray-300">
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
      <MemberManagementTable />
      <Pagination
        totalItems={500}
        itemsPerPage={itemsPerPage}
        currentPage={listPage}
        onChangePage={setListPage}
      />
    </div>
  );
}
