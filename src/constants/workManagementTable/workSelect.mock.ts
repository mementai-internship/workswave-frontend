import { TWorkOption } from '@/models/workManagement/work.model';

// 지점 선택을 위한 간단한 mock 데이터
export const branchMockData: TWorkOption[] = [
  { id: 0, value: '지점 선택' },
  { id: 1, value: '서울 강남점' },
  { id: 2, value: '서울 종로점' },
  { id: 3, value: '부산 해운대점' },
  { id: 4, value: '대구 중앙점' },
  { id: 5, value: '인천 공항점' },
  { id: 6, value: '광주 도심점' },
  { id: 7, value: '대전 유성점' },
  { id: 8, value: '울산 남구점' },
  { id: 9, value: '세종 정부청사점' },
  { id: 10, value: '제주 서귀포점' },
];

// 파트(부서) 선택을 위한 간단한 mock 데이터
export const departmentMockData: TWorkOption[] = [
  { id: 0, value: '부서 선택' },
  { id: 1, value: '영업팀' },
  { id: 2, value: '마케팅팀' },
  { id: 3, value: '고객서비스팀' },
  { id: 4, value: 'IT지원팀' },
  { id: 5, value: '인사팀' },
  { id: 6, value: '재무팀' },
  { id: 7, value: '상품개발팀' },
  { id: 8, value: '물류팀' },
  { id: 9, value: '법무팀' },
  { id: 10, value: '연구개발팀' },
];
