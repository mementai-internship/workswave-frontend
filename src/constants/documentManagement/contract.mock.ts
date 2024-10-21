import { IContractData } from '@/models/document.model';

export const contract: IContractData[] = [
  {
    id: 1,
    branch: '서울지점',
    name: '김철수',
    workPart: '간호사',
    requestDate: '2023-10-15',
    manager: '박관리',
    overallStatus: '진행중',
    detailStatus: '검토중',
    contractName: '2023년 계약서',
    adminMemo: '추가 서류 필요',
    userWriteDate: '2023-10-14',
  },
  {
    id: 2,
    branch: '부산지점',
    name: '이영희',
    workPart: '의사',
    requestDate: '2023-10-16',
    manager: '최담당',
    overallStatus: '완료',
    detailStatus: '승인',
    contractName: '2023년 의사 계약서',
    adminMemo: '정상 처리',
    userWriteDate: '2023-10-13',
  },
  {
    id: 3,
    branch: '대구지점',
    name: '박지민',
    workPart: '간호조무사',
    requestDate: '2023-10-17',
    manager: '정매니저',
    overallStatus: '보류',
    detailStatus: '서류미비',
    contractName: '2023년 조무사 계약서',
    adminMemo: '서류 보완 요청',
    userWriteDate: '2023-10-16',
  },
];