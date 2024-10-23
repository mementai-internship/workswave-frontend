import { useState } from 'react';
import { CiSettings } from 'react-icons/ci';
import { HiOutlineDocumentText } from 'react-icons/hi2';

const contractTemplateData: string[] = [
  '개인정보 제공 동의서(기본문서)',
  '보안서약서(기본문서)',
  '퇴직연금 규약 동의서(기본문서)',
  '[일반] 근로계약서(수습)',
  '[일반] 근로계약서',
  '[의사] 근로계약서',
  '임금계약서(수습)',
  '임금계약서',
  '파트타임 근로계약서',
  '사직원',
  '퇴사자보안서약서',
  '외국인 고용보험 가입 동의서',
  '외국인 고용보험 가입 동의서',
  '외국인 고용보험 가입 동의서',
  '외국인 고용보험 가입 동의서',
];

interface ITemplateSettingProps {
  title: string;
}

export function TemplateSetting({ title }: ITemplateSettingProps) {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // 같은 요소를 클릭하면 비활성화
  };
  return (
    <div className="flex flex-col w-1/5 p-4 bg-white border">
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between mb-2">
          <div className="font-medium">{title} 템플릿 설정</div>
          <CiSettings
            size="20"
            className="cursor-pointer hover:text-gray-500 active:text-gray-700"
            tabIndex={0}
            onClick={() => {}}
          />
        </div>
        {contractTemplateData.map((data, index) => (
          <div
            key={index}
            className={`flex text-sm border text-[12px] items-center gap-2 p-2 cursor-pointer 
              ${activeIndex === index ? 'border-blue-500' : 'border-gray-300'}`}
            onClick={() => handleClick(index)}
          >
            <HiOutlineDocumentText size="20" />
            <div className="truncate">{data}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
