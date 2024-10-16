import dayjs from 'dayjs';

export const calculatePaymentDate = (date: dayjs.Dayjs): dayjs.Dayjs => {
  let payDate = date.date(10);
  while (payDate.day() === 0 || payDate.day() === 6) {
    payDate = payDate.subtract(1, 'day');
  }
  return payDate;
};
