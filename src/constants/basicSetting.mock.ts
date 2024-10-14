import {
  IAnnualLeaveResponse,
  IBoardReponse,
  IHolidayResponse,
  IHumanRecordResponse,
} from '@/models/basicSetting.model';

export const ANNUALLEAVE_LIST: IAnnualLeaveResponse[] = [
  {
    id: '1',
    title: '유급 휴가',
    subTitle: [
      { title: '휴무날짜', content: '2024-10-09' },
      { title: '휴무메모', content: '휴무' },
      { title: '제외파트', content: '외래팀 / 관리 / 의사' },
    ],
  },
];

export const BOARD_LIST: IBoardReponse[] = [
  {
    id: '1',
    categoryName: '외래팀 메얼',
    categoryDesc: '외래팀 메뉴얼',
    readAuthority: 'MSO 최고권한',
    writeAuthority: '통합관리자',
    notifyAuthority: '통합관리자',
    partDivision: true,
    commentDivision: false,
  },
  {
    id: '4',
    categoryName: '외래팀 메뉴',
    categoryDesc: '외래팀 메뉴얼',
    readAuthority: 'MSO 최고권한',
    writeAuthority: '통합관리자',
    notifyAuthority: '통합관리자',
    partDivision: true,
    commentDivision: false,
  },
  {
    id: '3',
    categoryName: '외래팀 메뉴얼',
    categoryDesc: '외래팀 메뉴',
    readAuthority: 'MSO 최고권한',
    writeAuthority: '통합관리자',
    notifyAuthority: '통합관리자',
    partDivision: true,
    commentDivision: false,
  },
  {
    id: '2',
    categoryName: '외래팀 메뉴얼1',
    categoryDesc: '외래팀 메뉴1',
    readAuthority: 'MSO 최고권한',
    writeAuthority: '통합관리자',
    notifyAuthority: '통합관리자',
    partDivision: true,
    commentDivision: false,
  },
  {
    id: '6',
    categoryName: '외래팀 메뉴얼3',
    categoryDesc: '외래팀 메뉴얼1',
    readAuthority: 'MSO 최고권한',
    writeAuthority: '통합관리자',
    notifyAuthority: '통합관리자',
    partDivision: true,
    commentDivision: false,
  },
  {
    id: '7',
    categoryName: '외래팀 메뉴얼',
    categoryDesc: '외래팀 메뉴얼',
    readAuthority: 'MSO 최고권한',
    writeAuthority: '통합관리자',
    notifyAuthority: '통합관리자',
    partDivision: true,
    commentDivision: false,
  },
  {
    id: '8',
    categoryName: '외래팀 메뉴얼',
    categoryDesc: '외래팀 메뉴얼',
    readAuthority: 'MSO 최고권한',
    writeAuthority: '통합관리자',
    notifyAuthority: '통합관리자',
    partDivision: true,
    commentDivision: false,
  },
  {
    id: '9',
    categoryName: '외래팀 메뉴얼',
    categoryDesc: '외래팀 메뉴얼',
    readAuthority: 'MSO 최고권한',
    writeAuthority: '통합관리자',
    notifyAuthority: '통합관리자',
    partDivision: true,
    commentDivision: false,
  },
  {
    id: '10',
    categoryName: '외래팀 메뉴얼',
    categoryDesc: '외래팀 메뉴얼',
    readAuthority: 'MSO 최고권한',
    writeAuthority: '통합관리자',
    notifyAuthority: '통합관리자',
    partDivision: true,
    commentDivision: false,
  },
];

export const HOLIDAY_LIST: IHolidayResponse[] = [
  {
    id: '1',
    subTitle: [
      { title: '휴무날짜', content: '2024-10-09' },
      { title: '휴무메모', content: '휴무' },
    ],
  },
];

export const HUMAN_RECORD_LIST: IHumanRecordResponse[] = [
  {
    id: '1',
    title: '수습기간 근무 평가 면담',
    subTitle: { title: '구분', content: '선택' },
  },
];
