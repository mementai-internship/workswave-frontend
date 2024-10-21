export type TabItem = (typeof TAB_ITEMS)[number];

export const TAB_ITEMS = [
  { id: 0, title: '근로 관리', path: '/work-management/working' },
  { id: 1, title: '파트타이머 관리', path: '/work-management/partTime' },
  { id: 2, title: '출퇴근 관리', path: '/work-management/commute' },
] as const;
