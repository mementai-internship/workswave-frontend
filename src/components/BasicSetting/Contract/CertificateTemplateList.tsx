import { Editor } from '@tiptap/react';
import { useState } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

import { setDocumentToEditor } from '@/components/BasicSetting/Contract/Editor/lib/getDocument';

interface ICertificateTemplateData {
  id: number;
  title: string;
  isBookmark: boolean;
  type: string;
  isForm: boolean;
}

const CertificateTemplateData: ICertificateTemplateData[] = [
  {
    id: 1,
    title: '퇴직증명서',
    isBookmark: true,
    type: 'base',
    isForm: true,
  },
  {
    id: 2,
    title: '재직증명서',
    isBookmark: true,
    type: 'base',
    isForm: true,
  },
  {
    id: 3,
    title: '경력증명서',
    isBookmark: true,
    type: 'base',
    isForm: true,
  },
  {
    id: 4,
    title: '그 외 증명서',
    isBookmark: false,
    type: 'base',
    isForm: false,
  },
  {
    id: 5,
    title: '시말서',
    isBookmark: true,
    type: 'individual',
    isForm: true,
  },
];

interface ICertificateTemplateListProps {
  editor: Editor;
}

export default function CertificateTemplateList({ editor }: ICertificateTemplateListProps) {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex flex-col gap-1">
      {CertificateTemplateData.map((data) => (
        <div
          onClick={() => {
            setDocumentToEditor('certificate', editor);
          }}
          className="relative"
        >
          <div
            key={data.id}
            className={`flex text-sm border text-[12px] items-center p-2 cursor-pointer 
            ${activeIndex === data.id ? 'border-purple-50' : 'border-gray-300'}`}
            onClick={() => handleClick(data.id)}
          >
            <div className="flex flex-col w-full">
              <div className="flex">
                <div className="flex w-full gap-2">
                  <div
                    className={`h-4 flex items-center justify-center px-1 text-xs text-white rounded-sm ${data.type === 'base' ? 'bg-purple-50' : 'bg-orange-600'}`}
                  >
                    {data.type === 'base' ? '기본' : '개별'}
                  </div>
                  <div>
                    <div className="text-xs truncate">{data.title}</div>
                    <ul className="text-[10px] list-disc text-slate-400 ml-3">
                      <li>{data.isForm ? '양식있음' : '양식없음'}</li>
                    </ul>
                  </div>
                </div>
                {data.isBookmark ? <IoIosStar className="text-yellow-50" /> : <IoIosStarOutline />}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex flex-col gap-1 m-2"></div>
    </div>
  );
}
