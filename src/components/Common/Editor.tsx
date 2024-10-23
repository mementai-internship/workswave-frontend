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
import { useCallback, useState } from 'react';
import { BiAlignLeft, BiAlignMiddle, BiAlignRight } from 'react-icons/bi';
import {
  MdFormatStrikethrough,
  MdOutlineFormatBold,
  MdOutlineFormatItalic,
  MdOutlineRedo,
  MdOutlineUndo,
} from 'react-icons/md';
import { PiTextAUnderlineBold } from 'react-icons/pi';

import EditorDropdownMenu from '@/components/Common/EditorDropdownMenu';
import EditorPopover from '@/components/Common/EditorPopover';
import { FontSize } from '@/components/Common/font-size';

import './editorCss.css';

// TODO FontSize 위치 수정
// TODO EditorDropdownMenu 위치 수정
// TODO Dropdown관련 함수 . 및 사이즈 위치 고려 . 후수정
const sizes = ['14', '16', '18', '24', '28', '30', '34', '38'];
export default function Editor() {
  const [, setFontSize] = useState('24px');
  const editor = useEditor({
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
        <h3 style="text-align:center">
          Devs Just Want to Have Fun by Cyndi Lauper
        </h3>
        <p style="text-align:center">
          I come home in the morning light<br>
          My mother says, <mark>“When you gonna live your life right?”</mark><br>
          Oh mother dear we’re not the fortunate ones<br>
          And devs, they wanna have fun<br>
          Oh devs just want to have fun</p>
        <p style="text-align:center">
          The phone rings in the middle of the night<br>
          My father yells, "What you gonna do with your life?"<br>
          Oh daddy dear, you know you’re still number one<br>
          But <s>girls</s>devs, they wanna have fun<br>
          Oh devs just want to have
        </p>
        <p style="text-align:center">
          That’s all they really want<br>
          Some fun<br>
          When the working day is done<br>
          Oh devs, they wanna have fun<br>
          Oh devs just wanna have fun<br>
          (devs, they wanna, wanna have fun, devs wanna have)
        </p>
      `,
  });

  const handleFontSizeChange = useCallback(
    (fontSize: string) => {
      if (!editor) return null;
      if (fontSize) {
        setFontSize(`${fontSize}px`);
        editor.chain().focus().setFontSize(`${fontSize}px`).run();
      }
    },
    [editor]
  );
  if (!editor) {
    return null;
  }
  return (
    <div className="relative w-full max-h-[500px] overflow-scroll ">
      <div className="flex flex-col items-center w-full h-full">
        <div className="bg-[#5b5b5b] control-group fixed text-white w-full">
          <div className="flex items-center justify-around button-group gap-x-2">
            <EditorPopover editor={editor} />
            <button
              onClick={() => editor.chain().focus().undo().run()}
              disabled={!editor.can().undo()}
            >
              <MdOutlineUndo />
            </button>
            <button
              onClick={() => editor.chain().focus().redo().run()}
              disabled={!editor.can().redo()}
            >
              <MdOutlineRedo />
            </button>
            <EditorDropdownMenu sizes={sizes} handleFontSizeChange={handleFontSizeChange} />
            {/* //TODO 컬러 설정 후 바로 닫히지 않고 화면을 클릭해야 닫힘 */}
            <input
              type="color"
              onChange={(event) => {
                const color = (event.target as HTMLInputElement).value;
                editor.chain().focus().setColor(color).run();
              }}
              value={editor.getAttributes('textStyle').color || '#000000'}
              data-id="setColor"
              className="w-6 h-7 color-picker"
            />
            <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={editor.isActive('underline') ? 'is-active' : ''}
            >
              <PiTextAUnderlineBold />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive('italic') ? 'is-active' : ''}
            >
              <MdOutlineFormatItalic />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive('italic') ? 'is-active' : ''}
            >
              <MdOutlineFormatBold />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={editor.isActive('strike') ? 'is-active' : ''}
            >
              <MdFormatStrikethrough />
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign('left').run()}
              className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
            >
              <BiAlignLeft />
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign('center').run()}
              className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
            >
              <BiAlignMiddle />
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign('right').run()}
              className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
            >
              <BiAlignRight />
            </button>
          </div>
        </div>

        <EditorContent editor={editor} className="editor-content" />
      </div>
    </div>
  );
}
