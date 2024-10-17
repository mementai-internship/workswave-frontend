import PostViewerBody from '@/components/UserBoard/View/PostNum/PostViewerBody/PostViewerBody';
import PostViewerComment from '@/components/UserBoard/View/PostNum/PostViewerComment/PostViewerComment';
import PostViewerHeader from '@/components/UserBoard/View/PostNum/PostViewerHeader/PostViewerHeader';
import React from 'react';

export default function BoardViewPostPage() {
  return (
    <main className="flex flex-col gap-4 w-full">
      <PostViewerHeader
        title="2024년 상반기 프로젝트 계획"
        author="김철수"
        date="2024-03-15"
        category="프로젝트 관리"
        workPart="개발팀"
      />
      <PostViewerBody
        content={`
          <h2>프로젝트 개요</h2>
          <p>안녕하세요, 개발팀 여러분. 2024년 상반기 주요 프로젝트에 대해 안내드립니다.</p>
          <h3>1. 모바일 앱 리뉴얼</h3>
          <ul>
            <li>기간: 2024년 3월 ~ 6월</li>
            <li>목표: 사용자 경험 개선 및 신규 기능 추가</li>
            <li>담당: UI/UX팀, 모바일 개발팀</li>
          </ul>
          <h3>2. 백엔드 인프라 개선</h3>
          <ul>
            <li>기간: 2024년 4월 ~ 7월</li>
            <li>목표: 시스템 안정성 향상 및 확장성 확보</li>
            <li>담당: 백엔드팀, 인프라팀</li>
          </ul>
          <p><strong>각 팀장님들께서는 세부 계획을 수립하여 다음 주 금요일까지 제출 부탁드립니다.</strong></p>
          <img src="https://example.com/project-timeline.png" alt="프로젝트 타임라인" />
        `}
      />
      <PostViewerComment />
    </main>
  );
}
