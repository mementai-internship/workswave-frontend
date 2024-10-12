import Title from '@/components/Common/Title';
import UserBoardFilterBar from '@/components/UserBoard/UserBoardFilterBar/UserBoardFilterBar';
import UserBoardTable from '@/components/UserBoard/UserBoardTable/UserBoardTable';
import React from 'react';

export default function UserBoardPage() {
  return (
    <main>
      <Title content="회원게시판" />
      <UserBoardFilterBar />
      <UserBoardTable data={DUMMY_DATA} />
    </main>
  );
}
const DUMMY_DATA = [
  {
    postNum: 1,
    branch: '서울',
    category: '공지사항',
    title: '2024년 신년 인사',
    writer: '김관리',
    workingPart: '인사팀',
    createdAt: '2024-01-01',
    viewCount: 150,
  },
  {
    postNum: 2,
    branch: '부산',
    category: '파트별 게시판',
    title: '여름 휴가 계획 공유',
    writer: '이벤트',
    workingPart: '마케팅팀',
    createdAt: '2024-05-15',
    viewCount: 89,
  },
  {
    postNum: 3,
    branch: '대전',
    category: '자유게시판',
    title: '신규 프로젝트 킥오프 미팅',
    writer: '박매니저',
    workingPart: '개발팀',
    createdAt: '2024-03-10',
    viewCount: 120,
  },
  {
    postNum: 4,
    branch: '광주',
    category: '사내소식',
    title: '분기별 실적 보고',
    writer: '최보고',
    workingPart: '재무팀',
    createdAt: '2024-04-01',
    viewCount: 75,
  },
  {
    postNum: 5,
    branch: '대구',
    category: '파트별 게시판',
    title: '신입사원 온보딩 프로그램 안내',
    writer: '정교육',
    workingPart: '인사팀',
    createdAt: '2024-02-20',
    viewCount: 100,
  },
];
