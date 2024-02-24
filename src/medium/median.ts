const getMedian = (numbers: number[]) => {
  numbers = numbers.sort((a, b) => a - b);
  const mid = Math.floor(numbers.length / 2);
  if (numbers.length % 2 === 0) {
    return (numbers[mid - 1] + numbers[mid]) / 2;
  }
  return numbers[mid];
};

export default getMedian;
