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
import { ToolBarButton } from '@/components/BasicSetting/Contract/Editor/ToolBarButton';

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

  const handleUndo = () => {
    editor.chain().focus().undo().run();
  };
  const handleRedo = () => {
    editor.chain().focus().redo().run();
  };
  const handleToggleUnderline = () => {
    editor.chain().focus().toggleUnderline().run();
  };
  const handleToggleItalic = () => {
    editor.chain().focus().toggleItalic().run();
  };
  const handleToggleBold = () => {
    editor.chain().focus().toggleBold().run();
  };
  const handleToggleStrike = () => {
    editor.chain().focus().toggleStrike().run();
  };
  const handleAlignLeft = () => {
    editor.chain().focus().setTextAlign('left').run();
  };
  const handleAlignCenter = () => {
    editor.chain().focus().setTextAlign('center').run();
  };
  const handleAlignRight = () => {
    editor.chain().focus().setTextAlign('right').run();
  };
  if (!editor) {
    return null;
  }

  return (
    <>
      <div className="bg-[#5b5b5b] control-group text-white w-full h-12 p-2">
        <div className="flex items-center justify-around h-full button-group gap-x-2">
          <EditorPopover editor={editor} />

          <ToolBarButton
            onClick={handleUndo}
            icon={MdOutlineUndo}
            size={16}
            disabled={!editor.can().undo()}
          />
          <ToolBarButton
            onClick={handleRedo}
            icon={MdOutlineRedo}
            size={16}
            disabled={!editor.can().redo()}
          />
          <ToolBarButton onClick={handleToggleUnderline} icon={PiTextAUnderlineBold} size={16} />

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
          <ToolBarButton onClick={handleToggleItalic} icon={MdOutlineFormatItalic} size={20} />
          <ToolBarButton onClick={handleToggleBold} icon={MdOutlineFormatBold} size={20} />
          <ToolBarButton onClick={handleToggleStrike} icon={MdFormatStrikethrough} size={20} />
          <ToolBarButton onClick={handleAlignLeft} icon={BiAlignLeft} size={16} />
          <ToolBarButton onClick={handleAlignCenter} icon={BiAlignMiddle} size={16} />
          <ToolBarButton onClick={handleAlignRight} icon={BiAlignRight} size={16} />
        </div>
      </div>
    </>
  );
}

export default ToolBar;
