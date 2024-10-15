export const getHours = () => {
  const hours = [];
  for (let i = 0; i < 24; i++) {
    hours.push(i);
  }
  return hours;
};

export const getMinutes = () => {
  const minutes = [];
  for (let i = 0; i < 60; i += 10) {
    minutes.push(i);
  }
  return minutes;
};
