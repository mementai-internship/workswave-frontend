import { Editor } from '@tiptap/react';
import { useEffect, useState } from 'react';
import { CiSettings } from 'react-icons/ci';

import CertificateTemplateList from '@/components/BasicSetting/Contract/CertificateTemplateList';
import ContractTemplateList from '@/components/BasicSetting/Contract/ContractTemplateList';
import { DocumentMapData } from '@/components/BasicSetting/Contract/DocumentHeader';
import DocumentTemplateList from '@/components/BasicSetting/Contract/DocumentTemplateList';
import SelectBox from '@/components/Common/Select';

const DocumentTemplateData: IDocumentTemplate[] = [
  {
    id: 1,
    title: '시말서',
    validityPeriod: '유효기간 없음',
    type: '서명문서',
    documentState: 'send',
  },
  { id: 2, title: 'text', validityPeriod: '유효기간 없음', type: '서명문서', documentState: 'end' },
  {
    id: 3,
    title: '사유서',
    validityPeriod: '유효기간 없음',
    type: '서명문서',
    documentState: null,
  },
];

export interface IDocumentTemplate {
  id: number;
  title: string;
  validityPeriod: string;
  type: string;
  documentState: 'send' | 'end' | null;
}

interface ITemplateSettingProps {
  title: 'contract' | 'document' | 'certificate';
  editor: Editor;
}

export function TemplateSetting({ title, editor }: ITemplateSettingProps) {
  const [templateData, setTemplateData] = useState<IDocumentTemplate[]>();
  useEffect(() => {
    setTemplateData(DocumentTemplateData);
  }, []);

  const onSelectFilter = (filter?) => {
    if (filter) {
      return DocumentTemplateData.filter((item) => item.documentState === filter);
    } else {
      return DocumentTemplateData;
    }
  };

  return (
    <div className="flex flex-col w-1/5 p-4 bg-white border">
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between mb-1">
          <div className="font-medium">{DocumentMapData[title]} 템플릿 설정</div>
          <CiSettings
            size="20"
            className="cursor-pointer hover:text-gray-500 active:text-gray-700"
            tabIndex={0}
            onClick={() => {}}
          />
        </div>
        {title === 'document' && (
          <SelectBox
            title="지점"
            size="2xSmall"
            style="text-xs w-24"
            options={[
              {
                id: 1,
                name: '전체 문서',
                action: () => {
                  setTemplateData(onSelectFilter(''));
                },
              },
              {
                id: 2,
                name: '발송된 문서',
                action: () => {
                  setTemplateData(onSelectFilter('send'));
                },
              },
              {
                id: 3,
                name: '마감된 문서',
                action: () => {
                  setTemplateData(onSelectFilter('end'));
                },
              },
            ]}
          />
        )}

        {title === 'contract' ? (
          <ContractTemplateList editor={editor} />
        ) : title === 'document' ? (
          <DocumentTemplateList templateData={templateData} editor={editor} />
        ) : (
          <CertificateTemplateList editor={editor} />
        )}
      </div>
    </div>
  );
}
