import { BiSelectMultiple } from 'react-icons/bi';
import { BsArrowReturnRight } from 'react-icons/bs';
import { CiSaveDown2 } from 'react-icons/ci';
import { FaFileSignature } from 'react-icons/fa';
import { IoMdRadioButtonOn } from 'react-icons/io';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { LuTable } from 'react-icons/lu';
import { MdTitle } from 'react-icons/md';

import DocsAddButton from '@/components/BasicSetting/Contract/DocsAddButton';

function AddModifyDocument({ editor }) {
  const buttons = [
    {
      icon: MdTitle,
      label: '타이틀 생성',
      action: () => {
        if (editor) {
          editor.chain().focus().insertContent('<h1>타이틀 입력</h1>').run();
        }
      },
    },
    {
      icon: IoDocumentTextOutline,
      label: '문구 추가 +',
      action: () => {
        if (editor) {
          editor.chain().focus().insertContent('<p>문구를 입력하세요...</p>').run();
        }
      },
    },
    {
      icon: IoMdRadioButtonOn,
      label: '라디오 버튼 추가 +',
      action: () => {
        if (editor) {
          editor
            .chain()
            .focus()
            .insertContent(
              `
              <label>
                <input type="radio" name="option" /> 옵션 1
              </label>
            `
            )
            .run();
        }
      },
    },
    {
      icon: LuTable,
      label: '표 추가 +',
      action: () => {
        if (editor) {
          editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
        }
      },
    },
    {
      icon: FaFileSignature,
      label: '서명칸 추가 +',
      action: () => {
        if (editor) {
          editor
            .chain()
            .focus()
            .insertContent(
              "<div style={border: '1px solid gray' width: '20px' height: '20px'}>(인)</div>"
            )
            .run();
        }
      },
    },
    {
      icon: BsArrowReturnRight,
      label: '공백 추가 +',
      action: () => {
        if (editor) {
          editor.chain().focus().insertContent('<p> </p>').run();
        }
      },
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <p className="px-6 py-4 text-lg font-semibold border-b-[1px]">추가/수정하기</p>
      <div className="flex flex-col gap-1 px-5 py-5">
        {buttons.map((button, index) => (
          <DocsAddButton
            key={index}
            icon={button.icon}
            label={button.label}
            onClick={button.action}
          />
        ))}
      </div>
      <div className="flex w-full mt-auto">
        <button className="flex-1 flex h-[50px] items-center justify-center gap-2 p-6 text-white bg-[#5640E7]">
          <CiSaveDown2 />
          저장하기
        </button>
        <button className="flex-1 flex h-[50px] items-center justify-center gap-2 p-6 bg-[#eeeeee]">
          <BiSelectMultiple />
          확인하기
        </button>
      </div>
    </div>
  );
}

export default AddModifyDocument;
