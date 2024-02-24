const getMedian = (numbers: number[]) => {
  numbers = numbers.sort((a, b) => a - b);
  let median;
  const mid = numbers.length / 2;
  if (numbers.length % 2 === 0) {
    const mid = numbers.length / 2;
    median = (numbers[mid - 1] + numbers[mid]) / 2;
  } else {
    median = numbers[mid - 0.5];
  }
  return median;
};

export default getMedian;
