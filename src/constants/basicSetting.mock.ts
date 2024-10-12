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
    title: '외래팀 메뉴얼',
    subTitle: [
      { title: '열람권한', content: '전체' },
      { title: '글쓰기권한', content: '통합관리자' },
      { title: '공지권한', content: '통합관리자' },
      { title: '파트구분', content: '미사용' },
      { title: '댓글사용여부', content: '사용' },
    ],
  },
  {
    id: '4',
    title: '외래팀 메뉴얼',
    subTitle: [
      { title: '열람권한', content: '전체' },
      { title: '글쓰기권한', content: '통합관리자' },
      { title: '공지권한', content: '통합관리자' },
      { title: '파트구분', content: '미사용' },
      { title: '댓글사용여부', content: '사용' },
    ],
  },
  {
    id: '3',
    title: '외래팀 메뉴얼',
    subTitle: [
      { title: '열람권한', content: '전체' },
      { title: '글쓰기권한', content: '통합관리자' },
      { title: '공지권한', content: '통합관리자' },
      { title: '파트구분', content: '미사용' },
      { title: '댓글사용여부', content: '사용' },
    ],
  },
  {
    id: '2',
    title: '외래팀 메뉴얼',
    subTitle: [
      { title: '열람권한', content: '전체' },
      { title: '글쓰기권한', content: '통합관리자' },
      { title: '공지권한', content: '통합관리자' },
      { title: '파트구분', content: '미사용' },
      { title: '댓글사용여부', content: '사용' },
    ],
  },
  {
    id: '6',
    title: '외래팀 메뉴얼',
    subTitle: [
      { title: '열람권한', content: '전체' },
      { title: '글쓰기권한', content: '통합관리자' },
      { title: '공지권한', content: '통합관리자' },
      { title: '파트구분', content: '미사용' },
      { title: '댓글사용여부', content: '사용' },
    ],
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
