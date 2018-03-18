export const getTrainingDay = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  if (currentDay >= 1 && currentDay <= 2) {
    return 'monday';
  } else if (currentDay >= 3 && currentDay <= 4) {
    return 'wednesday';
  }
  return 'friday';
};

export default {};
