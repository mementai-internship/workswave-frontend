import Title from '@/components/Common/Title';
import MemberInfoBasicTable from '@/components/MemberInfo/MemberBasicInfoTable';
import { Button } from '@radix-ui/themes';

export default function MemberInfoPage() {
  return (
    <div className="flex flex-col gap-2">
      <Title content="회원관리" />
      <hr className="w-min-screen h-0.5 bg-gray-300" />
      <div className="flex items-center justify-end gap-2">
        <Button
          variant="surface"
          color="gray"
          size="2"
          className="font-bold text-black h-8 px-4 bg-gray-200 border-gray-30"
        >
          증명서 신청
        </Button>
        <Button
          variant="surface"
          color="gray"
          size="2"
          className="font-bold text-black h-8 px-4 bg-gray-200 border-gray-30"
        >
          신청 리스트
        </Button>
      </div>
      <MemberInfoBasicTable />
    </div>
  );
}
