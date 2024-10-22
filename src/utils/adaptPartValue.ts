export const adaptPartValue = (value: string) => {
  switch (value) {
    case '의사':
      return {
        name: '의사',
        is_doctor: true,
        task: '의사 진찰 업무',
        color: '#0079d6',
        required_certification: true,
      };
    case '간호사':
      return {
        name: '간호사',
        is_doctor: false,
        task: '간호사 업무',
        color: '#33fcff',
        required_certification: true,
      };
    case '간호조무사':
      return {
        name: '간호조무사',
        is_doctor: false,
        task: '간호조무사 업무',
        color: '#ff9900',
        required_certification: true,
      };
    case '상담':
      return {
        name: '상담',
        is_doctor: false,
        task: '상담 업무',
        color: '#ff6666',
        required_certification: false,
      };
    default:
      return null;
  }
};
