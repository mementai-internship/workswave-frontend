import Bold from '@tiptap/extension-bold';
import { Color } from '@tiptap/extension-color';
import Document from '@tiptap/extension-document';
import Heading from '@tiptap/extension-heading';
import History from '@tiptap/extension-history';
import Italic from '@tiptap/extension-italic';
import Paragraph from '@tiptap/extension-paragraph';
import Strike from '@tiptap/extension-strike';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import Text from '@tiptap/extension-text';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import { useEffect } from 'react';


import ToolBar from '@/components/BasicSetting/Contract/Editor/ToolBar';
import { FontSize } from '@/components/BasicSetting/Contract/Editor/lib/font-size';

import './editorStyle/editorCss.css';

export default function EditorComponent({ setEditor }) {
  const localEditor = useEditor({
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
      },
    },
    extensions: [
      Document,
      Paragraph,
      Text,
      Bold,
      Italic,
      Underline,
      Strike,
      Color,
      TextStyle,
      TableRow,
      TableCell,
      TableHeader,
      FontSize,
      History,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: `
        <h3 style="text-align: center">근로 계약서</h3>
        <p><span style="font-size: 16px">지점명 와 근로자성명 은 아래와 같이 근로계약을 쳬결하고 상호 성실히 이행할 것을 약정한다.</span></p><p><span style="font-size: 16px">
        <strong>제 1조 [근로계약기간]</strong></span></p>
        <p><span style="font-size: 16px">1. "근로자"의 근로계약기간은 계약시작일 부터 계약종료일 로 한다.</span></p>
        <p><span style="font-size: 16px">2. 종사업무는 근로자업무 및 그와 관련된 업무로 한다.</span></p>
        <p><span style="font-size: 16px">3. 제1항 및 제2항에도 불구하고, "사용자"는 업무상 필요가 있는 경우, "근로자"의 근무장소 및 업무내용을 변경 할 수 있으며, 이 경우 "근로자"는 특별한 사정이 없는 한 이에 따라야 한다.</span></p>
      `,
    onCreate({ editor }) {
      editor.chain().focus().setFontSize('16px').run();
    },
  });
  // 해당 메서드로 html 값 얻을 수 있음

  // console.log(localEditor.getHTML());

  useEffect(() => {
    if (localEditor) {
      setEditor(localEditor);
    }
  }, [localEditor, setEditor]);

  return (
    <div className="relative w-full h-full max-h-[610px]  ">
      <div className="flex flex-col items-center w-full h-full ">
        <ToolBar editor={localEditor} />
        <EditorContent editor={localEditor} className="editor-content" />
      </div>
    </div>
  );
}
