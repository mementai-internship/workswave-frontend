import { useState } from 'react';

import ContractTextList from '@/components/BasicSetting/Contract/ContractTextList';
import { DocumentHeader } from '@/components/BasicSetting/Contract/DocumentHeader';
import EditorComponent from '@/components/BasicSetting/Contract/Editor/Editor';
import ModifyDocument from '@/components/BasicSetting/Contract/ModifyDocument';
import { TemplateSetting } from '@/components/BasicSetting/Contract/TemplateSetting';

export default function DocumentPage() {
  const [editor, setEditor] = useState(null);
  return (
    <div className="flex w-full gap-2">
      <div className="flex flex-col w-full border bg-light-gray">
        <DocumentHeader title="document" />
        <div className="flex h-full gap-4">
          <ContractTextList documentType="document" />
          <div className="flex items-center justify-center w-2/3 mb-2 bg-white border">
            <EditorComponent setEditor={setEditor} />
          </div>
          <div className="flex items-start justify-center w-1/3 mr-4 bg-white border">
            <ModifyDocument editor={editor} />
          </div>
        </div>
      </div>
      <TemplateSetting editor={editor} title="document" />
    </div>
  );
}
