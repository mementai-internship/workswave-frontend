module.exports = {
  // 코드가 실행될 환경 설정
  env: {
    browser: true, // 브라우저 전역 변수 사용 가능
    es2021: true, // ES2021 문법 사용 가능
  },
  // 사용할 규칙 세트 설정
  extends: [
    'eslint:recommended', // ESLint 추천 규칙
    'plugin:react/recommended', // React 추천 규칙
    'plugin:@typescript-eslint/recommended', // TypeScript 추천 규칙
    'plugin:react-hooks/recommended', // React Hooks 추천 규칙
    'plugin:prettier/recommended', // Prettier와 통합
  ],
  overrides: [], // 특정 파일에 대한 별도 규칙 설정 (현재 비어있음)
  parser: '@typescript-eslint/parser', // TypeScript 파서 사용
  parserOptions: {
    ecmaVersion: 'latest', // 최신 ECMAScript 버전 사용
    sourceType: 'module', // 모듈 시스템 사용
  },
  // 사용할 플러그인 목록
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  // 개별 규칙 설정
  rules: {
    'react/react-in-jsx-scope': 'off', // React를 import 하지 않아도 JSX 사용 가능
    '@typescript-eslint/no-unused-vars': 'warn', // 사용하지 않는 변수에 대해 경고
    'react/prop-types': 'off', // prop-types 검사 비활성화 (TypeScript 사용 시 불필요)
    'jsx-a11y/click-events-have-key-events': 'warn', // 클릭 이벤트에 키보드 이벤트도 필요 (접근성)
    'jsx-a11y/no-static-element-interactions': 'warn', // 상호작용 요소에 의미론적 요소 사용 권장
    'react-hooks/rules-of-hooks': 'error', // Hooks 규칙 위반 시 에러
    'react-hooks/exhaustive-deps': 'warn', // useEffect의 의존성 배열 검사
    'no-console': 'warn', // console.log 사용 시 경고
    eqeqeq: ['warn', 'always'], // 항상 === 연산자 사용 권장
    'prefer-const': 'warn', // 가능한 경우 const 사용 권장
    'no-var': 'warn', // var 대신 let과 const 사용 권장
    '@typescript-eslint/explicit-function-return-type': 'off', // 함수 반환 타입 명시 강제하지 않음
    '@typescript-eslint/no-explicit-any': 'warn', // any 타입 사용 시 경고
    'react/display-name': 'off', // 컴포넌트의 display name 설정 강제하지 않음
    'react/jsx-uses-react': 'off', // React를 사용하지 않아도 경고하지 않음
  },
  settings: {
    react: {
      version: 'detect', // React 버전 자동 감지
    },
  },
};
