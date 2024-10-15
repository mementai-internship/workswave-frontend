export const adaptTaskToColor = (task: string) => {
  switch (task.slice(0, 2)) {
    case '의사':
      return 'green';
    case '간호':
      return 'orange';
    case '코디':
      return 'blue';
    case '피부':
      return 'pink';
    case '상담':
      return 'purple';

    default:
      return 'gray';
  }
};
