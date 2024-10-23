import { useState } from 'react';
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

export default function ContractTemplate() {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return contractTemplateData.map((data, index) => (
    <div
      key={index}
      className={`flex text-sm border text-[12px] items-center gap-2 p-2 cursor-pointer 
          ${activeIndex === index ? 'border-blue-500' : 'border-gray-300'}`}
      onClick={() => handleClick(index)}
    >
      <HiOutlineDocumentText size="15" />
      <div className="text-xs truncate">{data}</div>
    </div>
  ));
}
