import { DocumentMapData } from '@/components/BasicSetting/Contract/DocumentHeader';

interface IContractText_mock_type {
  memberName: string;
  branchName: string;
  branchAddress: string;
  exponentName: string;
  exponentJourneyman: string;
  exponentNameplate: string;
  workerName: string;
  workerSpot: string;
  workerWork: string;
  workerPhoneNumber: string;
  workerEmail: string;
  workerBrithDay: string;
  engagedWork: string;
  businessRegistrationNumber: string;
  joinDay: string;
  quitDay: string;
  contractStartDay: string;
  contractEndDay: string;
}

const ContractTextData: IContractText_mock_type = {
  memberName: '의원명',
  branchName: '지점명',
  branchAddress: '지점주소',
  exponentName: '대표자성명',
  exponentJourneyman: '대표자직인',
  exponentNameplate: '대표자명판',
  workerName: '근로자성명',
  workerSpot: '근로자직위',
  workerWork: '근로자업무',
  workerPhoneNumber: '근로자연락처',
  workerEmail: '근로자이메일',
  workerBrithDay: '근로자생년월일',
  engagedWork: '종사업무',
  businessRegistrationNumber: '사업자등록번호',
  joinDay: '입사일',
  quitDay: '퇴사일',
  contractStartDay: '계약시작일',
  contractEndDay: '계약종료일',
};

interface IContractTextListProps {
  documentType: 'contract' | 'document' | 'certificate';
}

export default function ContractTextList({ documentType }: IContractTextListProps) {
  return (
    <div className="flex flex-col w-1/5 gap-4 p-4 truncate bg-white border border-b-0 border-l-0 ">
      <div className="flex flex-col text-xs">
        <div>※ {DocumentMapData[documentType]} 작성 시,</div>
        <div className="truncate"> 복사하여 사용해주세요.</div>
      </div>
      <div className="flex flex-col gap-2">
        {Object.entries(ContractTextData).map(([key, value]) => (
          <div key={key} className="text-xs truncate text-slate-400">{`[${value}]`}</div>
        ))}
      </div>
    </div>
  );
}
