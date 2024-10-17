import Title from '@/components/Common/Title';
import MemberInfoBasicTable from '@/components/MemberInfo/MemberBasicInfoTable';
import ContractInfoBar from '@/components/MemberInfo/MemberInfoCommon/ContractInfoBar';
import MemberInfoButtonBar from '@/components/MemberInfo/MemberInfoCommon/MemberInfoButtonBar';
import SalaryContractTable from '@/components/MemberInfo/SalaryContractTable';
import WorkContractTable from '@/components/MemberInfo/WorkContractTable';
import { useState } from 'react';

export default function MemberInfoPage() {
  const [selectedTab, setSelectedTab] = useState<'info' | 'contract' | 'document'>('info');
  function handleTabClick(tab: 'info' | 'contract' | 'document') {
    setSelectedTab(tab);
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <Title content="회원관리" />
      <div>
        <div className="flex gap-2">
          <button
            className={`${selectedTab === 'info' ? 'font-bold border-b-2 border-black' : ''} text-xl px-2 py-1`}
            onClick={() => handleTabClick('info')}
          >
            정보
          </button>
          <button
            className={`${selectedTab === 'contract' ? 'font-bold border-b-2 border-black' : ''} text-xl px-2 py-1`}
            onClick={() => handleTabClick('contract')}
          >
            계약
          </button>
          <button
            className={`${selectedTab === 'document' ? 'font-bold border-b-2 border-black' : ''} text-xl px-2 py-1`}
            onClick={() => handleTabClick('document')}
          >
            문서·증명서
          </button>
        </div>
        <hr className="w-min-screen h-0.5 bg-gray-300" />
      </div>
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
        <></>
      )}
    </div>
  );
}
