import SalaryPageHadderDropBox from '../SalaryPage/SalaryPageHadderDropBox';

export default function SalaryPageHadder() {
  return (
    <div className="flex items-center justify-between py-6">
      <div className="flex items-center gap-4">
        <SalaryPageHadderDropBox title="지점 선택" contents={DUMMY_REGION} />
        <SalaryPageHadderDropBox title="파트 선택" contents={DUMMY_PART} />
        <SalaryPageHadderDropBox title="직원" contents={DUMMY_EMPLOYEE} />
      </div>
      <>검색 컴포넌트 공간</>
    </div>
  );
}

// DUMMY_DATA
const DUMMY_REGION = ['서울', '경기', '인천'];
const DUMMY_PART = ['파트1', '파트2', '파트3'];
const DUMMY_EMPLOYEE = ['직원1', '직원2', '직원3'];
