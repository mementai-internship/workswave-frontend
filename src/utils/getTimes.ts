export const getHours = () => {
  const hours = [];
  for (let i = 0; i < 24; i++) {
    hours.push(i.toString().padStart(2, '0'));
  }
  return hours;
};

export const getMinutes = () => {
  const minutes = [];
  for (let i = 0; i < 60; i += 10) {
    minutes.push(i.toString().padStart(2, '0'));
  }
  return minutes;
};
