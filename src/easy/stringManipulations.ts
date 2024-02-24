const cleanString = (str: string) => {
  return str.split('')
  .filter((char, index) => char !== str[index - 1])
  .join('');
};

const reverseString = (str: string) => {
  return str.split('').reverse().join('');
};

export { cleanString, reverseString }
