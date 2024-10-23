import * as Popover from '@radix-ui/react-popover';
import React from 'react';
import { AiOutlineMergeCells, AiOutlineSplitCells } from 'react-icons/ai';
import { IoCloseSharp } from 'react-icons/io5';
import {
  RiDeleteColumn,
  RiDeleteRow,
  RiInsertColumnLeft,
  RiInsertColumnRight,
  RiInsertRowBottom,
  RiInsertRowTop,
} from 'react-icons/ri';
import { TbTableOff, TbTableOptions, TbTablePlus } from 'react-icons/tb';

import { ToolBarButton } from '@/components/BasicSetting/Contract/Editor/ToolBarButton';

function EditorPopover({ editor }) {
  const handleInsertTable = () => {
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  };
  const handleDeleteTable = () => {
    editor.chain().focus().deleteTable().run();
  };
  const handleAddColumnBefore = () => {
    editor.chain().focus().addColumnBefore().run();
  };
  const handleAddColumnAfter = () => {
    editor.chain().focus().addColumnAfter().run();
  };
  const handleDeleteColumn = () => {
    editor.chain().focus().deleteColumn().run();
  };
  const handleAddRowBefore = () => {
    editor.chain().focus().addRowBefore().run();
  };
  const handleAddRowAfter = () => {
    editor.chain().focus().addRowAfter().run();
  };
  const handleDeleteRow = () => {
    editor.chain().focus().deleteRow().run();
  };
  const handleMergeCells = () => {
    editor.chain().focus().mergeCells().run();
  };
  const handleSplitCell = () => {
    editor.chain().focus().splitCell().run();
  };
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="duration-200 hover:scale-110" aria-label="Table options">
          <TbTableOptions />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="px-2 ml-40 PopoverContent">
          <div className="flex p-5 gap-x-4">
            <ToolBarButton onClick={handleInsertTable} icon={TbTablePlus} size={20} />
            <ToolBarButton onClick={handleDeleteTable} icon={TbTableOff} size={20} />
            <ToolBarButton onClick={handleAddColumnBefore} icon={RiInsertColumnLeft} size={20} />
            <ToolBarButton onClick={handleAddColumnAfter} icon={RiInsertColumnRight} size={20} />
            <ToolBarButton onClick={handleDeleteColumn} icon={RiDeleteColumn} size={20} />
            <ToolBarButton onClick={handleAddRowBefore} icon={RiInsertRowTop} size={20} />
            <ToolBarButton onClick={handleAddRowAfter} icon={RiInsertRowBottom} size={20} />
            <ToolBarButton onClick={handleDeleteRow} icon={RiDeleteRow} size={20} />
            <ToolBarButton onClick={handleMergeCells} icon={AiOutlineMergeCells} size={20} />
            <ToolBarButton onClick={handleSplitCell} icon={AiOutlineSplitCells} size={20} />
          </div>
          <Popover.Close className="PopoverClose" aria-label="Close">
            <IoCloseSharp />
          </Popover.Close>
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default EditorPopover;
