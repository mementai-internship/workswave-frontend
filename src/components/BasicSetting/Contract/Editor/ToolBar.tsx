import React, { useCallback, useState } from 'react';
import { BiAlignLeft, BiAlignMiddle, BiAlignRight } from 'react-icons/bi';
import {
  MdFormatStrikethrough,
  MdOutlineFormatBold,
  MdOutlineFormatItalic,
  MdOutlineRedo,
  MdOutlineUndo,
} from 'react-icons/md';
import { PiTextAUnderlineBold } from 'react-icons/pi';

import EditorDropdownMenu from '@/components/BasicSetting/Contract/Editor/EditorDropdownMenu';
import EditorPopover from '@/components/BasicSetting/Contract/Editor/EditorPopover';

function ToolBar({ editor }) {
  const SIZES = ['14', '16', '18', '24', '28', '30', '34', '38'];
  const [, setFontSize] = useState('24px');

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
    <>
      <div className="bg-[#5b5b5b] control-group sticky text-white w-full p-2">
        <div className="flex items-center justify-around button-group gap-x-2">
          <EditorPopover editor={editor} />
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
          >
            <MdOutlineUndo size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
          >
            <MdOutlineRedo size={16} />
          </button>
          <EditorDropdownMenu sizes={SIZES} handleFontSizeChange={handleFontSizeChange} />
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
            <PiTextAUnderlineBold size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'is-active' : ''}
          >
            <MdOutlineFormatItalic size={20} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('italic') ? 'is-active' : ''}
          >
            <MdOutlineFormatBold size={20} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? 'is-active' : ''}
          >
            <MdFormatStrikethrough size={20} />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
          >
            <BiAlignLeft size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
          >
            <BiAlignMiddle size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
          >
            <BiAlignRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
}

export default ToolBar;
