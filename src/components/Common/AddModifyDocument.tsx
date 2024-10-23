import { BsArrowReturnRight } from 'react-icons/bs';
import { FaFileSignature } from 'react-icons/fa';
import { IoMdRadioButtonOn } from 'react-icons/io';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { LuTable } from 'react-icons/lu';
import { MdTitle } from 'react-icons/md';

import DocsAddButton from '@/components/Common/DocsAddButton';

function AddModifyDocument() {
  const buttons = [
    { icon: MdTitle, label: '타이틀 생성' },
    { icon: IoDocumentTextOutline, label: '문구 추가 +' },
    { icon: IoMdRadioButtonOn, label: '라디오 버튼 추가 +' },
    { icon: LuTable, label: '표 추가 +' },
    { icon: FaFileSignature, label: '서명버튼 추가 +' },
    { icon: BsArrowReturnRight, label: '공백 추가 +' },
  ];

  return (
    <div className="border-[1px] border-gray-300">
      <p className="px-6 py-4 text-lg font-semibold border-b-[1px]">추가/수정하기</p>
      <div className="flex flex-col gap-1 px-5 py-5">
        {buttons.map((button, index) => (
          <DocsAddButton key={index} icon={button.icon} label={button.label} />
        ))}
      </div>
    </div>
  );
}

export default AddModifyDocument;
