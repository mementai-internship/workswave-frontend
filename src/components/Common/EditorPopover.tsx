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

function EditorPopover({ editor }) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="duration-200 hover:scale-110" aria-label="Table options">
          <TbTableOptions />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent">
          <div className="flex p-5 gap-x-4">
            <button
              onClick={() =>
                editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
              }
              className=""
            >
              <TbTablePlus size={30} />
            </button>
            <button onClick={() => editor.chain().focus().deleteTable().run()}>
              <TbTableOff size={30} />
            </button>
            <button onClick={() => editor.chain().focus().addColumnBefore().run()}>
              <RiInsertColumnLeft size={30} />
            </button>
            <button onClick={() => editor.chain().focus().addColumnAfter().run()}>
              <RiInsertColumnRight size={30} />
            </button>
            <button onClick={() => editor.chain().focus().deleteColumn().run()}>
              <RiDeleteColumn size={30} />
            </button>
            <button onClick={() => editor.chain().focus().addRowBefore().run()}>
              <RiInsertRowTop size={30} />
            </button>
            <button onClick={() => editor.chain().focus().addRowAfter().run()}>
              <RiInsertRowBottom size={30} />
            </button>
            <button onClick={() => editor.chain().focus().deleteRow().run()}>
              <RiDeleteRow size={30} />
            </button>
            <button onClick={() => editor.chain().focus().mergeCells().run()}>
              <AiOutlineMergeCells size={30} />
            </button>
            <button onClick={() => editor.chain().focus().splitCell().run()}>
              <AiOutlineSplitCells size={30} />
            </button>
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
