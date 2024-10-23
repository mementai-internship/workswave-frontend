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
import { useCallback, useEffect, useState } from 'react';

import EditorDropdownMenu from '@/components/BasicSetting/Contract/Editor/EditorDropdownMenu';
import { FontSize } from '@/components/BasicSetting/Contract/Editor/lib/font-size';

const sizes = ['14', '16', '18', '24', '28', '30', '34', '38'];

export default function EditorComponent({ setEditor }) {
  const [, setFontSize] = useState('24px');

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
      Table.configure({ resizable: true }),
      TableRow,
      TableCell,
      TableHeader,
      FontSize,
      History,
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

  useEffect(() => {
    if (localEditor) {
      setEditor(localEditor);
    }
  }, [localEditor, setEditor]);

  const handleFontSizeChange = useCallback(
    (fontSize: string) => {
      if (!localEditor) return null;
      if (fontSize) {
        setFontSize(`${fontSize}px`);
        localEditor.chain().focus().setFontSize(`${fontSize}px`).run();
      }
    },
    [localEditor]
  );

  if (!localEditor) {
    return null;
  }

  return (
    <div className="flex flex-col items-center w-full max-h-[500px] overflow-scroll">
      <div className="bg-[#5b5b5b] control-group text-white w-full">
        <div className="flex items-center justify-around button-group gap-x-2">
          <button
            onClick={() => localEditor.chain().focus().undo().run()}
            disabled={!localEditor.can().undo()}
          >
            Undo
          </button>
          <button
            onClick={() => localEditor.chain().focus().redo().run()}
            disabled={!localEditor.can().redo()}
          >
            Redo
          </button>
          <EditorDropdownMenu sizes={sizes} handleFontSizeChange={handleFontSizeChange} />
          <input
            type="color"
            onChange={(event) => {
              const color = (event.target as HTMLInputElement).value;
              localEditor.chain().focus().setColor(color).run();
            }}
            value={localEditor.getAttributes('textStyle').color || '#000000'}
            data-id="setColor"
            className="w-6 h-7 colorPicker"
          />
          <button
            onClick={() => localEditor.chain().focus().toggleUnderline().run()}
            className={localEditor.isActive('underline') ? 'is-active' : ''}
          >
            underline
          </button>
          <button
            onClick={() => localEditor.chain().focus().toggleItalic().run()}
            className={localEditor.isActive('italic') ? 'is-active' : ''}
          >
            italic
          </button>
          <button
            onClick={() => localEditor.chain().focus().toggleBold().run()}
            className={localEditor.isActive('italic') ? 'is-active' : ''}
          >
            bold
          </button>
          <button
            onClick={() => localEditor.chain().focus().toggleStrike().run()}
            className={localEditor.isActive('strike') ? 'is-active' : ''}
          >
            strike
          </button>
          <button
            onClick={() => localEditor.chain().focus().setTextAlign('left').run()}
            className={localEditor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
          >
            Left
          </button>
          <button
            onClick={() => localEditor.chain().focus().setTextAlign('center').run()}
            className={localEditor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
          >
            Center
          </button>
          <button
            onClick={() => localEditor.chain().focus().setTextAlign('right').run()}
            className={localEditor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
          >
            Right
          </button>
        </div>
      </div>
      <EditorContent editor={localEditor} />
    </div>
  );
}
