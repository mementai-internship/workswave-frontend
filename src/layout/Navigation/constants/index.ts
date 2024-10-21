const SUPREME_AUTH_NAVIGATION = [
  {
    path: '/member-management',
    content: '회원관리',
  },

  {
    path: '/dayoff-management',
    content: '연차관리',
  },
  {
    path: '/ot-management',
    content: 'O.T관리',
  },
  // {
  //   path: '/hr-management',
  //   content: '인사관리',
  // },
  {
    path: '/work-management',
    content: '근로관리',
  },
  {
    path: '/document-management',
    content: '문서관리',
    children: [
      {
        childPath: '/document-management/certificate-management',
        childContent: '증명서 관리',
      },
      {
        childPath: '/document-management/contract-management',
        childContent: '계약서 관리',
      },
      {
        childPath: '/document-management/holiday-management',
        childContent: '휴무 관리',
      },
    ],
  },
  {
    path: '/salary-settlement',
    content: '급여정산',
  },
  {
    path: '/holiday-calander',
    content: '휴무캘린더',
  },
  {
    path: '/basic-setting',
    content: '기본설정',
    children: [
      {
        childPath: '/basic-setting/working',
        childContent: '근무 설정',
      },
      {
        childPath: '/basic-setting/contract',
        childContent: '계약서 설정',
      },
      {
        childPath: '/basic-setting/document',
        childContent: '문서 설정',
      },
      {
        childPath: '/basic-setting/certificate',
        childContent: '증명서 설정',
      },
      {
        childPath: '/basic-setting/wage',
        childContent: '임금 설정',
      },
      {
        childPath: '/basic-setting/hourly-range',
        childContent: '시급 설정',
      },
      {
        childPath: '/basic-setting/day-off',
        childContent: '연차 설정',
      },
      {
        childPath: '/basic-setting/calendar',
        childContent: '캘린더 설정',
      },
      // {
      //   childPath: '/basic-setting/hr',
      //   childContent: '인사기록 설정',
      // },

      {
        childPath: '/basic-setting/salary-range',
        childContent: '급여구간표 설정',
      },
    ],
  },
  {
    path: '/office-setting',
    content: '지점설정',
  },
];

const PART_MANAGER_AUTH_NAVIGATION = [
  {
    path: '/member-management',
    content: '회원관리',
  },

  {
    path: '/dayoff-management',
    content: '연차관리',
  },
  {
    path: '/ot-management',
    content: 'O.T관리',
  },
  // {
  //   path: '/hr-management',
  //   content: '인사관리',
  // },
  {
    path: '/work-management',
    content: '근로관리',
  },
  {
    path: '/document-management',
    content: '문서관리',
  },
  {
    path: '/holiday-calander',
    content: '휴무캘린더',
  },
  {
    path: '/basic-setting',
    content: '기본설정',
    children: [
      {
        childPath: '/basic-setting/working',
        childContent: '근무 설정',
      },
      {
        childPath: '/basic-setting/contract',
        childContent: '계약서 설정',
      },
      {
        childPath: '/basic-setting/document',
        childContent: '문서 설정',
      },
      {
        childPath: '/basic-setting/certificate',
        childContent: '증명서 설정',
      },
      {
        childPath: '/basic-setting/wage',
        childContent: '임금 설정',
      },
      {
        childPath: '/basic-setting/hourly-range',
        childContent: '시급 설정',
      },
      {
        childPath: '/basic-setting/holiday',
        childContent: '연차 설정',
      },
      {
        childPath: '/basic-setting/calendar',
        childContent: '캘린더 설정',
      },
      // {
      //   childPath: '/basic-setting/hr',
      //   childContent: '인사기록 설정',
      // },

      {
        childPath: '/basic-setting/salary-range',
        childContent: '급여구간표 설정',
      },
    ],
  },
];

const STAFF_AUTH_NAVIGATION = [
  {
    path: '/member-management',
    content: '회원관리',
  },

  {
    path: '/dayoff-management',
    content: '연차관리',
  },
  {
    path: '/ot-management',
    content: 'O.T관리',
  },
  {
    path: '/holiday-calander',
    content: '휴무캘린더',
  },
];

export const NAVIGATION_CONTENTS = {
  'MSO 최고권한': SUPREME_AUTH_NAVIGATION,
  최고관리자: SUPREME_AUTH_NAVIGATION,
  관리자: PART_MANAGER_AUTH_NAVIGATION,
  사원: STAFF_AUTH_NAVIGATION,
  퇴사자: {},
};
