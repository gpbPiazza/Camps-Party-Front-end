const formatNumber = (num) => (num < 10 ? `0${num}` : num);

const calculateDistance = (distanceToDate) => {
  const days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

  return {
    days: formatNumber(days),
    hours: formatNumber(hours),
    minutes: formatNumber(minutes),
    seconds: formatNumber(seconds),
  };
};

export { formatNumber, calculateDistance };
