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
    content: ``,
    onCreate({ editor }) {
      editor.chain().focus().setFontSize('16px').run();
    },
  });
  // 해당 메서드로 html 값 얻을 수 있음

  console.log(localEditor.getHTML());

  useEffect(() => {
    if (localEditor) {
      setEditor(localEditor);
    }
  }, [localEditor, setEditor]);

  return (
    <div className="relative w-full h-full max-h-[780px]">
      <div className="flex flex-col items-center w-full h-full ">
        <ToolBar editor={localEditor} />
        <EditorContent editor={localEditor} className="editor-content" />
      </div>
    </div>
  );
}
