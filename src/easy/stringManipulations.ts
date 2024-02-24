const cleanString = (str: string) => {
  const letters = [];
  const split = str.split("");
  for (let i = 0; i < split.length; i++) {
    if (split[i] !== split[i - 1]) {
      letters.push(split[i]);
    }
  }
  return letters.join("");
};

const reverseString = (str: string) => {
  const letters = [];
  const split = str.split("");
  for (let i = split.length; i >= 0; i--) {
    letters.push(split[i]);
  }
  return letters.join("");
};

export { cleanString, reverseString }
