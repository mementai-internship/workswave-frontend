import CustomButton from '@/components/Common/CustomButton';

function AddModifyDocument() {
  const buttonLabels = [
    '타이틀 생성',
    '문구 추가+',
    '라디오 버튼 추가+',
    '표 추가+',
    '서명버튼 추가+',
    '공백 추가+',
  ];

  return (
    <div className="border-[1px] border-gray-300">
      <p className="px-6 py-4 text-lg font-semibold border-b-[1px]">추가/수정하기</p>
      <div className="flex flex-col gap-1 px-5 py-5">
        {buttonLabels.map((label) => (
          <CustomButton key={label} label={label} />
        ))}
      </div>
    </div>
  );
}

export default AddModifyDocument;
