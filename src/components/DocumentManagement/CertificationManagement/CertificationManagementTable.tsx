// import { useOutletContext } from 'react-router-dom';
import { useMemo } from 'react';

import Pagination from '@/components/Common/Pagination';
import CertificationManagementItem from '@/components/DocumentManagement/CertificationManagement/CertificationManagementItem';
import { TUser } from '@/models/user.model';

interface ICertificationManagementTableProps {
  currUser: TUser;
}

export default function CertificationManagementTable({
  currUser,
}: ICertificationManagementTableProps) {
  // TODO : branchId, partId로 데이터 조회 후 내려주는 로직 필요 // 또는 outlet으로 partname을 받아서 branchId로 받아온 전체 데이터에 대해 필터링 해주는 로직 필요
  // const { branchId, partId } = useOutletContext<{
  //   branchId: number;
  //   partId: number;
  // }>();

  // TODO : 지금 로직은 현재 유저의 신청 증명서를 보여주는 로직이 'name'으로 값을 찾고 있음 -> 동명이인 등의 문제가 발생 할 수 있으니 user의 고유한 id 값으로 찾을 수 있도록 수정해야 함.
  // 이 때, 증명서 신청 목록에도 user 객체에 대한 정보가 증명서 테이블에 join 되어 있어야 함.

  // TODO : 페이지네이션 추가 구현 필요 ( 백엔드 API에 params로 처리 )

  const sortedTableData = useMemo(() => {
    if (!currUser) return TABLE_DATA;

    return [...TABLE_DATA].sort((a, b) => {
      if (a.name === currUser.name) return -1;
      if (b.name === currUser.name) return 1;
      return 0;
    });
  }, [currUser]);

  return (
    <div className="flex flex-col gap-2">
      {sortedTableData.map((item) => (
        <CertificationManagementItem
          key={item.id}
          {...item}
          isCurrentUser={item.name === currUser?.name}
        />
      ))}
      <Pagination totalItems={100} itemsPerPage={10} />
    </div>
  );
}

// 목 데이터
const TABLE_DATA = [
  {
    id: 2097,
    part: '피부관리사',
    name: '김채은',
    applyDate: '2024-10-05',
    applyType: '재직증명서',
    applyManager: '이서인',
    applyStatus: '승인',
    applyUse: '은행 제출',
    applyMemo:
      '긴급 처리 요청긴급 처리 요청긴급 처리 요청긴급 처리 요청긴급 처리 요청긴급 처리 요청긴급 처리 요청긴급 처리 요청긴급 처리 요청긴급 처리 요청긴급 처리 요청긴급 처리 요청긴급 처리 요청',
    applyTreatDate: new Date('2024-10-06'),
  },
  {
    id: 2096,
    part: '마케터',
    name: '신수정',
    applyDate: '2024-09-23',
    applyType: '재직증명서',
    applyManager: '이서인',
    applyStatus: '관리자 확인중',
    applyUse: '은행 제출',
    applyMemo: '추가 서류 요청됨',
    applyTreatDate: null,
  },
  {
    id: 2095,
    part: '피부관리사',
    name: '김민정',
    applyDate: '2024-09-20',
    applyType: '재직증명서',
    applyManager: '이서인',
    applyStatus: '관리자 확인중',
    applyUse: '',
    applyMemo: '',
    applyTreatDate: null,
  },
  {
    id: 2094,
    part: '코디네이터',
    name: '최지수',
    applyDate: '2024-09-10',
    applyType: '재직증명서',
    applyManager: '이서인',
    applyStatus: '관리자 확인중',
    applyUse: '은행 제출',
    applyMemo: '',
    applyTreatDate: null,
  },
  {
    id: 2093,
    part: '의사',
    name: '김재환',
    applyDate: '2024-08-12',
    applyType: '6월, 7월 급여명세서',
    applyManager: '이서인',
    applyStatus: '관리자 확인중',
    applyUse: '은행 제출',
    applyMemo: '',
    applyTreatDate: null,
  },
  {
    id: 2092,
    part: '코디네이터',
    name: '강유선',
    applyDate: '2024-08-08',
    applyType: '원천징수영수증',
    applyManager: '이서인',
    applyStatus: '승인',
    applyUse: '2023년 원천징수영수증 2024년 원천징수영수증',
    applyMemo: '2개년도 자료 제공 완료',
    applyTreatDate: new Date('2024-08-10'),
  },
  {
    id: 2091,
    part: '총괄실장',
    name: '하민정',
    applyDate: '2024-07-22',
    applyType: '재직증명서',
    applyManager: '이서인',
    applyStatus: '관리자 확인중',
    applyUse: '은행업무',
    applyMemo: '',
    applyTreatDate: null,
  },
  {
    id: 2090,
    part: '피부관리사',
    name: '조경옥',
    applyDate: '2024-07-11',
    applyType: '근로소득원천징수영수증(직인,최근2개년)',
    applyManager: '이서인',
    applyStatus: '관리자 확인중',
    applyUse: '중도금',
    applyMemo: '',
    applyTreatDate: null,
  },
  {
    id: 2089,
    part: '의사',
    name: '신동수',
    applyDate: '2024-7-11',
    applyType: '2024년 5월 급여명세서',
    applyManager: '이서인',
    applyStatus: '승인',
    applyUse: '서류제출용',
    applyMemo: '급여 정보 확인 완료',
    applyTreatDate: new Date('2024-07-13'),
  },
  {
    id: 2088,
    part: '의사',
    name: '신동수',
    applyDate: '2024-07-11',
    applyType: '2024년 6월 급여명세서',
    applyManager: '이서인',
    applyStatus: '관리자 확인중',
    applyUse: '서류제출용',
    applyMemo: '',
    applyTreatDate: null,
  },
  {
    id: 2087,
    part: '의사',
    name: '이서인22',
    applyDate: '2024-07-05',
    applyType: '2024년 갑종근로소득세 원천징수영수증',
    applyManager: '이서인',
    applyStatus: '승인',
    applyUse: '기관 제출용',
    applyMemo: '세금 정보 확인 완료',
    applyTreatDate: new Date('2024-07-07'),
  },
  {
    id: 2086,
    part: '지점장',
    name: '이서인22',
    applyDate: '2024-07-05',
    applyType: '재직증명서',
    applyManager: '홍길동',
    applyStatus: '관리자 확인중',
    applyUse: '',
    applyMemo: '',
    applyTreatDate: null,
  },
];
