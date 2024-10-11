import BasicSettingSubTitle from '@/components/BasicSetting/Common/BasicSettingSubTitle';
import { IBoardReponse } from '@/components/BasicSetting/types/types';
import { Button } from '@radix-ui/themes';
import { IoClose } from 'react-icons/io5';

export default function BoardItem({ /*id*/ title, subTitle }: IBoardReponse) {
  return (
    <section className="flex items-center justify-between border-2 px-4 py-3 border-gray-300 bg-blue-10">
      {/** bg-blue-10으로 변경 */}
      {/**타이포       */}
      <div className="flex flex-col">
        <p className="text-xl font-bold">{title}</p>
        <div className="flex gap-x-10 my-2">
          {subTitle.map(({ title, content }, idx: number) => (
            <BasicSettingSubTitle key={idx} title={title} content={content} flexStyle="flex-col" />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <Button
          onClick={() => alert('ㅗㅑ')}
          size="2"
          radius="full"
          variant="outline"
          color="gray"
          className="py-1 px-8 bg-white"
          // 양 옆 패딩 스타일, bg color, text 설정 추가
        >
          수정하기
        </Button>
        <IoClose size="20" className="cursor-pointer hover:text-gray-500 active:text-gray-700" />
      </div>
    </section>
  );
}
