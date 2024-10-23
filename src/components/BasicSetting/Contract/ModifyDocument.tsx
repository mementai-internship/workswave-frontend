import { useState } from 'react';
import { CiSaveDown2 } from 'react-icons/ci';
import { GrPowerReset } from 'react-icons/gr';
import { IoCloseOutline } from 'react-icons/io5';
import { IoArrowUndoSharp } from 'react-icons/io5';
import { IoArrowRedoSharp } from 'react-icons/io5';
import { PiPlus } from 'react-icons/pi';

import AddModifyDocument from '@/components/BasicSetting/Contract/AddModifyDocument';

function ModifyDocument() {
  const [showAddModify, setShowAddModify] = useState(false);

  const handleAddClick = () => {
    setShowAddModify(true);
  };

  return (
    <div className="flex flex-col h-full">
      {showAddModify ? (
        <AddModifyDocument />
      ) : (
        <>
          <p className="px-6 py-4 text-lg font-semibold">수정하기</p>
          <div className="w-full flex items-center justify-center border-t-[1px] border-b-[1px]">
            <button className="flex-grow flex justify-center items-center gap-2 p-4 border-r-[1px] border-[#d7d7d7] text-[#d7d7d7] text-[13px] font-semibold">
              <IoArrowUndoSharp color="#d7d7d7" />
              되돌리기
            </button>
            <button className="flex-grow flex justify-center items-center gap-2 p-4 text-[#d7d7d7] text-[13px] font-semibold">
              재실행
              <IoArrowRedoSharp color="#d7d7d7" />
            </button>
          </div>
          <div className="flex flex-col gap-1 px-6 py-5">
            <button
              onClick={handleAddClick}
              className="flex items-center text-[13px] gap-2 pl-3 py-2 border-[1px] border-gray-300 w-[250px] bg-gray-100 hover:bg-gray-200"
            >
              <PiPlus color="gray" size={16} />
              항목추가
            </button>
            <button className="flex items-center text-[13px] gap-2 pl-3 py-2 border-[1px] border-gray-300 w-[250px] bg-gray-100 hover:bg-gray-200">
              <IoCloseOutline color="gray" size={16} />
              선택삭제
            </button>
            <button className="flex items-center text-[13px] gap-2 pl-3 py-2 border-[1px] border-gray-300 w-[250px] bg-gray-100 hover:bg-gray-200">
              <CiSaveDown2 color="gray" size={16} />
              저장하기
            </button>
          </div>

          <button className="flex items-center justify-end px-6 py-4 mt-auto gap-1 text-[14px] text-gray-500">
            <GrPowerReset color="gray" size={14} />
            초기화
          </button>
        </>
      )}
    </div>
  );
}

export default ModifyDocument;
