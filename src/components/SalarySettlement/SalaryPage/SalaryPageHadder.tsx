import SalaryPageHadderDropBox from '../SalaryPage/SalaryPageHadderDropBox';

export default function SalaryPageHadder() {
  return (
    <div className="flex items-center justify-between py-6">
      <div className="flex items-center gap-4">
        <SalaryPageHadderDropBox title="지점 선택" contents={regionContents} />
        <SalaryPageHadderDropBox title="파트 선택" contents={regionContents} />
        <SalaryPageHadderDropBox title="직원" contents={regionContents} />
      </div>
      <>검색 컴포넌트 공간</>
    </div>
  );
}

const regionContents = ['서울', '경기', '인천'];
