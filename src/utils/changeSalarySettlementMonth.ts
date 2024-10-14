import dayjs from 'dayjs';

export type TMonthChange = 'prev' | 'next';

export const calculatePaymentDate = (date: dayjs.Dayjs): dayjs.Dayjs => {
  let payDate = date.date(10);
  while (payDate.day() === 0 || payDate.day() === 6) {
    payDate = payDate.subtract(1, 'day');
  }
  return payDate;
};

export const changeMonth = (currentDate: dayjs.Dayjs, direction: TMonthChange): dayjs.Dayjs => {
  return direction === 'prev' ? currentDate.subtract(1, 'month') : currentDate.add(1, 'month');
};

// HOW TO USE - 사용하고 싶은 컴포넌트(또는 페이지)에 useState로 currentDate를 생성, 그 후 아래 코드를 통해 원하는 방향으로 월 변경
// ...
// import dayjs from 'dayjs';
// ...
// const [currentDate, setCurrentDate] = useState(dayjs());
// ...

// const handleChangeMonth = async (direction: TMonthChange) => {
//   const newDate = changeMonth(currentDate, direction);
//   setCurrentDate(newDate);

//   // ... 기존 API 호출 및 데이터 처리 로직 ...

// };
