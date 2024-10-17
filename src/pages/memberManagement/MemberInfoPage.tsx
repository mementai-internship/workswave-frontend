import { Button } from '@radix-ui/themes';
import { useState } from 'react';
import { PiGear } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import TitleContainer from '@/components/Common/TitleContainer';
import DocsDraftTable from '@/components/MemberInfo/DocsDraftTable';
import DocsRegisterTable from '@/components/MemberInfo/DocsRegisterTable';
import DocsTable from '@/components/MemberInfo/DocsTable';
import MemberInfoBasicTable from '@/components/MemberInfo/MemberBasicInfoTable';
import ContractInfoBar from '@/components/MemberInfo/MemberInfoCommon/ContractInfoBar';
import MemberInfoButtonBar from '@/components/MemberInfo/MemberInfoCommon/MemberInfoButtonBar';
import SalaryContractTable from '@/components/MemberInfo/SalaryContractTable';
import WorkContractTable from '@/components/MemberInfo/WorkContractTable';
import WrittenContract from '@/components/MemberInfo/WrittenContractTable';

export default function MemberInfoPage() {
  const [selectedTab, setSelectedTab] = useState<'info' | 'contract' | 'document'>('info');
  function handleTabClick(tab: 'info' | 'contract' | 'document') {
    setSelectedTab(tab);
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex gap-2 items-center w-full">
        <TitleContainer content="회원상세" />
        <Link to="/member-management">
          <Button color="gray" variant="soft" radius="full">
            <PiGear />
            회원관리
          </Button>
        </Link>
      </div>
      <div className="flex gap-2">
        <button
          className={`${selectedTab === 'info' ? 'font-bold border-b-2 border-black' : 'border-b-2 border-gray-10 text-gray-50'} text-xl px-2 py-1`}
          onClick={() => handleTabClick('info')}
        >
          정보
        </button>
        <button
          className={`${selectedTab === 'contract' ? 'font-bold border-b-2 border-black' : 'border-b-2 border-gray-10 text-gray-50'} text-xl px-2 py-1`}
          onClick={() => handleTabClick('contract')}
        >
          계약
        </button>
        <button
          className={`${selectedTab === 'document' ? 'font-bold border-b-2 border-black' : 'border-b-2 border-gray-10 text-gray-50'} text-xl px-2 py-1`}
          onClick={() => handleTabClick('document')}
        >
          문서·증명서
        </button>
      </div>
      <hr className="w-min-screen h-0.5 bg-gray-300" />
      {selectedTab === 'info' ? (
        <>
          <MemberInfoButtonBar
            leftButton={{ text: '증명서 신청' }}
            rightButton={{ text: '신청 리스트' }}
          />
          <MemberInfoBasicTable />
        </>
      ) : selectedTab === 'contract' ? (
        <>
          <MemberInfoButtonBar
            leftButton={{ text: '휴직신청' }}
            rightButton={{ text: '신청 리스트' }}
          />
          <ContractInfoBar />
          <WorkContractTable />
          <SalaryContractTable />
        </>
      ) : (
        <>
          <DocsRegisterTable />
          <WrittenContract />
          <DocsTable />
          <DocsDraftTable />
        </>
      )}
    </div>
  );
}
