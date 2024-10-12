import BasicSettingSubTitle from '@/components/Common/BasicSettingSubTitle';
import { Txt } from '@/components/Common/Txt';
import { IBoardReponse } from '@/models/basicSetting.model';
import { Button } from '@radix-ui/themes';
import { PiXBold } from 'react-icons/pi';

export default function BoardItem({ id, title, subTitle }: IBoardReponse) {
  const handleClickUpdateItem = (id: string) => {
    /**
     * TODO:
     * update 상태 변화
     * 현재 id와 isModifyingId가 다르면 disable 처리
     *  */
    console.log(id, 'update');
  };

  const handleEnterUpdateItem = (id: string) => {
    console.log(id, 'update');
  };

  const handleClickDeleteItem = (id: string) => {
    /**
     * TODO:
     * 삭제 로직 작성 -> tanstack query
     */

    console.log(id, 'delete');
  };

  const handleEnterDeleteItem = (id: string) => {
    console.log(id, 'delete');
  };
  return (
    <section className="w-full flex items-center justify-between border px-4 py-3 border-gray-300 bg-blue-10">
      <div className="flex flex-col">
        <Txt variant="h4">{title}</Txt>
        <div className="flex gap-x-10 my-2">
          {subTitle.map(({ title, content }, idx: number) => (
            <BasicSettingSubTitle
              key={idx}
              title={title}
              content={content}
              flexAlign="col"
              titleColor="gray"
            />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-x-4 ml-4">
        <Button
          tabIndex={0}
          onClick={() => handleClickUpdateItem(id)}
          onKeyDown={(e) => e.key === 'Enter' && handleEnterUpdateItem(id)}
          size="2"
          radius="full"
          variant="outline"
          color="gray"
          className="py-1 px-8 bg-white cursor-pointer hover:bg-gray-100 active:bg-gray-200"
        >
          수정하기
        </Button>
        <PiXBold
          size="20"
          className="cursor-pointer hover:text-gray-500 active:text-gray-700"
          tabIndex={0}
          onClick={() => handleClickDeleteItem(id)}
          onKeyDown={(e) => e.key === 'Enter' && handleEnterDeleteItem(id)}
        />
      </div>
    </section>
  );
}
