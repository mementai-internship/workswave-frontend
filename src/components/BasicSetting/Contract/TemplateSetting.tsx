import { CiSettings } from 'react-icons/ci';

import CertificateTemplateList from '@/components/BasicSetting/Contract/CertificateTemplateList';
import ContractTemplateList from '@/components/BasicSetting/Contract/ContractTemplateList';
import { DocumentMapData } from '@/components/BasicSetting/Contract/DocumentHeader';
import DocumentTemplateList from '@/components/BasicSetting/Contract/DocumentTemplateList';
import SelectBox from '@/components/Common/Select';

interface ITemplateSettingProps {
  title: 'contract' | 'document' | 'certificate';
}

export function TemplateSetting({ title }: ITemplateSettingProps) {
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
                action: () => {},
              },
              {
                id: 2,
                name: '발송된 문서',
                action: () => {},
              },
              {
                id: 3,
                name: '마감된 문서',
                action: () => {},
              },
            ]}
          />
        )}

        {title === 'contract' ? (
          <ContractTemplateList />
        ) : title === 'document' ? (
          <DocumentTemplateList />
        ) : (
          <CertificateTemplateList />
        )}
      </div>
    </div>
  );
}
