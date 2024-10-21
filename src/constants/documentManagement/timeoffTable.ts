export const TIMEOFF_TABLE_HEADERS = [
  '번호',
  '지점',
  '이름',
  '근무파트',
  '신청일',
  '상태',
  '기간',
  '휴직 사유',
  '관리자',
];

// 백엔드 DataType과 동일하게 수정 필요
export type ITimeoff_mock_type = {
  id: number;
  branch: string;
  name: string;
  part: string;
  applyDate: Date;
  status: '승인' | '휴가' | '복직';
  startDate: Date;
  endDate: Date;
  timeoffType: '유급' | '무급';
  timeoffTypeDetail: '산재' | '육아휴직' | '병가';
  reason: string;
  manager: string;
};
