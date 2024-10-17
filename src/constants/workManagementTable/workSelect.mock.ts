import { IWorkStatistics, TWorkOption } from '@/models/work.model';

// 지점 선택을 위한 간단한 mock 데이터
export const branchMockData: TWorkOption[] = [
  {
    id: 0,
    name: '전체',
    action: () => {
      console.log('뮤즈의원(강남점)');
    },
  },
  {
    id: 1,
    name: '서울 강남점',
    action: () => {
      console.log('뮤즈의원(강남점)');
    },
  },
  {
    id: 2,
    name: '서울 종로점',
    action: () => {
      console.log('뮤즈의원(종로점)');
    },
  },
  {
    id: 3,
    name: '부산 해운대점',
    action: () => {
      console.log('뮤즈의원(해운대점)');
    },
  },
  {
    id: 4,
    name: '대구 중앙점',
    action: () => {
      console.log('뮤즈의원(중앙점)');
    },
  },
  {
    id: 5,
    name: '인천 공항점',
    action: () => {
      console.log('뮤즈의원(공항점)');
    },
  },
];

// 파트(부서) 선택을 위한 간단한 mock 데이터
export const departmentMockData: TWorkOption[] = [
  { id: 0, name: '전체', action: () => console.log('전체') },
  { id: 1, name: '영업팀', action: () => console.log('영업팀') },
  { id: 2, name: '마케팅팀', action: () => console.log('마케팅팀') },
  { id: 3, name: '고객서비스팀', action: () => console.log('고객서비스팀') },
  { id: 4, name: 'IT지원팀', action: () => console.log('IT지원팀') },
];

export const mockStatistics: IWorkStatistics = {
  totalWorkers: 100,
  overtimeWorkers: 5,
  lateWorkers: 2,
  holidayWorkers: 3,
  dayOffWorkers: 10,
  remoteWorkers: 15,
};
