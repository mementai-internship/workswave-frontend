import ContractTextList from '@/components/Common/ContractTextList';
import { DocumentHeader } from '@/components/Common/DocumentHeader';
import { TemplateSetting } from '@/components/Common/TemplateSetting';

export default function ContractPage() {
  return (
    <div className="flex w-full gap-2">
      <div className="flex flex-col w-full border bg-light-gray">
        <DocumentHeader title="contract" />
        <div className="flex h-full gap-4">
          <ContractTextList documentName={'계약서'} />
          <div className="flex items-center justify-center w-2/3 mb-2 bg-white border">에디터</div>
          <div className="flex items-center justify-center w-1/3 mb-2 mr-4 bg-white border">
            추가/수정하기
          </div>
        </div>
      </div>
      <TemplateSetting title={'계약서'} />
    </div>
  );
}
