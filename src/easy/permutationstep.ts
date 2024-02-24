const permutationStep = (num: number): number => {
  const arr = num.toString().split("");
  const x = arr.length;
  let a: string, b: string, temp: string[], resultTemp: string;
  let result: number = -1;

  for (var i = x - 1; i >= 0; i--) {
    a = arr[i];
    b = arr[i - 1];

    if (a > b) {
      arr[i] = b;
      arr[i - 1] = a;
      temp = arr.splice(i, x - 1).sort();
      resultTemp = arr.concat(temp).join("");
      return parseInt(resultTemp);
    }
  }
  return result;
};

export { permutationStep };
