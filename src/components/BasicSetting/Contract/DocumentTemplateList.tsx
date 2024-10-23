import { GrDocumentMissing } from 'react-icons/gr';
import { IoMdStopwatch } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import { TbMailDown, TbMailUp } from 'react-icons/tb';

import { IDocumentTemplate } from '@/components/BasicSetting/Contract/TemplateSetting';

interface IDocumentTemplateListProps {
  templateData: IDocumentTemplate[];
}

export default function DocumentTemplateList({ templateData }: IDocumentTemplateListProps) {
  return (
    <div className="flex flex-col gap-1 border">
      {templateData?.map((data) => (
        <div className="relative flex flex-col gap-2 border border-b-0 border-x-0" key={data.id}>
          <div className="first:border-t-0 flex text-sm border  border-x-0 text-[12px] items-center p-2 cursor-pointer">
            <div className="flex flex-col">
              <div className="flex gap-2">
                <div className="flex items-center justify-center h-full px-1 text-xs text-white bg-orange-600 rounded-sm">
                  개별
                </div>
                <div>
                  <div className="text-xs truncate">{data.title}</div>
                  <ul className="text-[10px] list-disc text-slate-400 ml-3">
                    <li>{data.validityPeriod}</li>
                    <li>{data.type}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {data.documentState && (
            <div className="absolute top-0 left-0 w-full h-full bg-black cursor-pointer bg-opacity-60">
              <div className="absolute text-xs text-white top-2 right-2">
                {data.documentState === 'send' ? '발송된 문서' : '마감된 문서'}
              </div>
            </div>
          )}
        </div>
      ))}
      <div className="flex flex-col gap-1 m-2">
        <div className="p-2 text-sm bg-gray-200 rounded-sm cursor-pointer">
          <TbMailUp />
          문서 보내기
        </div>
        <div className="p-2 text-sm bg-gray-200 cursor-pointer">
          <TbMailDown />
          답변 내역보기
        </div>
        <div className="p-2 text-sm bg-gray-200 cursor-pointer">
          <GrDocumentMissing />
          문서 취소
        </div>
        <div className="p-2 text-sm bg-gray-200 cursor-pointer">
          <IoMdStopwatch />
          문서 마감
        </div>
        <div className="p-2 text-sm bg-gray-200 cursor-pointer">
          <RxCross2 />
          문서 삭제
        </div>
      </div>
    </div>
  );
}
