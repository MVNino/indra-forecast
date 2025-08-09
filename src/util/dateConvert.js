export const convertToDayInWeek = (dateStr) => {
  const dateObj = new Date(dateStr);

  // Get day name
  const options = { weekday: "long" };
  const dayName = dateObj.toLocaleDateString("en-US", options);

  return dayName;
};
