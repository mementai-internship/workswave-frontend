import BasicSettingSubTitle from '@/components/Common/BasicSettingSubTitle';
import { Txt } from '@/components/Common/Txt';
import { IBoardReponse } from '@/models/basicSetting.model';
import { Button } from '@radix-ui/themes';
import { PiXBold } from 'react-icons/pi';

export default function BoardItem({ id, title, subTitle }: IBoardReponse) {
  const handleClickUpdateItem = (id: string) => {
    return id;
    /**
     * TODO:
     * update 상태 변화
     * 모달 띄우기 or id를 추가하기 폼에 전달하고 나머지 수정하기 값 disabled 처리
     *  */
  };

  const handleEnterUpdateItem = (id: string) => {
    return id;
  };

  const handleClickDeleteItem = (id: string) => {
    return id;
    /**
     * TODO:
     * 삭제 로직 작성 -> tanstack query
     */
  };

  const handleEnterDeleteItem = (id: string) => {
    return id;
  };
  return (
    <section className="w-full flex items-center justify-between border px-4 py-3 border-gray-300 bg-blue-10">
      <div className="flex flex-col">
        <Txt variant="h4">{title}</Txt>
        <div className="flex gap-x-10 my-2">
          {subTitle.map(({ title, content }, idx: number) => (
            <BasicSettingSubTitle key={idx} title={title} content={content} flexAlign="col" />
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
