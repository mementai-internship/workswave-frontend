import dayjs from 'dayjs';

export default function calculateWorkPeriod(startDate: string, endDate: string): string {
  const start = dayjs(startDate);
  const end = dayjs(endDate === '-' ? dayjs() : endDate).endOf('day');

  let years = end.diff(start, 'year');
  let months = 0;
  let days = 0;

  let tempDate = start.add(years, 'year');
  while (tempDate.add(1, 'month').isBefore(end) || tempDate.add(1, 'month').isSame(end, 'day')) {
    months++;
    tempDate = tempDate.add(1, 'month');
  }

  days = end.diff(tempDate, 'day') + 1; // Add 1 to include the end date

  if (days > 30) {
    months++;
    days -= 30;
  }

  if (months === 12) {
    years++;
    months = 0;
  }

  const parts = [];
  if (years > 0) parts.push(`${years}년`);
  if (months > 0) parts.push(`${months}개월`);
  if (days > 0) parts.push(`${days}일`);

  return parts.join(' ') || '0일';
}

// 사용 예시
// const workPeriod = calculateWorkPeriod('2024-01-01', '2024-10-22');
// console.log(workPeriod);
