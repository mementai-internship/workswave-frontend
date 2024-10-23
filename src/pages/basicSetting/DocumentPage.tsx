import ContractTextList from '@/components/BasicSetting/Contract/ContractTextList';
import { DocumentHeader } from '@/components/BasicSetting/Contract/DocumentHeader';
import Editor from '@/components/BasicSetting/Contract/Editor/Editor';
import ModifyDocument from '@/components/BasicSetting/Contract/ModifyDocument';
import { TemplateSetting } from '@/components/BasicSetting/Contract/TemplateSetting';

export default function DocumentPage() {
  return (
    <div className="flex w-full gap-2">
      <div className="flex flex-col w-full border bg-light-gray">
        <DocumentHeader title="document" />
        <div className="flex h-full gap-4">
          <ContractTextList documentType="document" />
          <div className="flex items-center justify-center w-2/3 mb-2 bg-white border">
            <Editor />
          </div>
          <div className="flex items-center justify-center w-1/3 mb-2 mr-4 bg-white border">
            <ModifyDocument />
          </div>
        </div>
      </div>
      <TemplateSetting title="document" />
    </div>
  );
}
