const calculateWorkPeriod = (startDate: string, endDate: string): string => {
  const start = new Date(startDate);
  const end = new Date(endDate === '-' ? new Date() : endDate);

  let years = 0;
  let months = 0;
  let days = 0;

  let tempDate = new Date(start);

  while (tempDate <= end) {
    if (tempDate.getMonth() === start.getMonth() && tempDate.getDate() === start.getDate()) {
      if (tempDate.getFullYear() !== start.getFullYear()) {
        years++;
      }
    }
    tempDate.setFullYear(tempDate.getFullYear() + 1);
  }

  tempDate = new Date(start);
  tempDate.setFullYear(tempDate.getFullYear() + years);
  while (tempDate <= end) {
    if (tempDate.getDate() === start.getDate()) {
      if (
        tempDate.getMonth() !== start.getMonth() ||
        tempDate.getFullYear() !== start.getFullYear()
      ) {
        months++;
      }
    }
    tempDate.setMonth(tempDate.getMonth() + 1);
  }

  tempDate = new Date(start);
  tempDate.setFullYear(tempDate.getFullYear() + years);
  tempDate.setMonth(tempDate.getMonth() + months);
  while (tempDate < end) {
    days++;
    tempDate.setDate(tempDate.getDate() + 1);
  }

  const parts = [];
  if (years > 0) parts.push(`${years}년`);
  if (months > 0) parts.push(`${months}개월`);
  if (days > 0) parts.push(`${days}일`);

  return parts.join(' ');
};

export default calculateWorkPeriod;

// 사용 예시
// const workPeriod = calculateWorkPeriod('2024-01-01', '2024-10-22');
// console.log(workPeriod);
