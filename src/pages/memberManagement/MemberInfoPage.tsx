import Title from '@/components/Common/Title';
import MemberInfoBasicTable from '@/components/MemberInfo/MemberBasicInfoTable';
import ContractInfoBar from '@/components/MemberInfo/MemberInfoCommon/ContractInfoBar';
import MemberInfoButtonBar from '@/components/MemberInfo/MemberInfoCommon/MemberInfoButtonBar';
import WorkContractTable from '@/components/MemberInfo/WorkContractTable';

export default function MemberInfoPage() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Title content="회원관리" />
      <hr className="w-min-screen h-0.5 bg-gray-300" />
      <MemberInfoButtonBar
        leftButton={{ text: '증명서 신청' }}
        rightButton={{ text: '신청 리스트' }}
      />
      <MemberInfoBasicTable />
      <MemberInfoButtonBar
        leftButton={{ text: '휴직신청' }}
        rightButton={{ text: '신청 리스트' }}
      />
      <ContractInfoBar />
      <WorkContractTable />
    </div>
  );
}
