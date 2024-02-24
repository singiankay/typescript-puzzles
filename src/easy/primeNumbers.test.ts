import { generatePrimes } from "./primeNumbers";

describe('generatePrimes', () => {

    it('should return the latest prime limit number by counting in ascending direction until the limit', () => {
      const result = generatePrimes(3);
      expect(result).toEqual(5);
    });

    it('should return the latest prime limit number by counting in ascending direction until the limit', () => {
      const result = generatePrimes(5);
      expect(result).toEqual(11);
    });

    it('should return the latest prime limit number by counting in ascending direction until the limit', () => {
      const result = generatePrimes(1);
      expect(result).toEqual(2);
    });
});
