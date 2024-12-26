export const getPrettyStatus = (position) => {
  if (position === 1) return "finished!";
  else return Math.round(position * 100) + "%";
};
