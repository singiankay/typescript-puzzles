import { permutationStep } from "./permutationstep";

describe('permutationStep', () => {

    it('should return the next highest integer permutation when the input number is greater than 10', () => {
      const result = permutationStep(11121);
      expect(result).toEqual(11211);
    });

    it('should return -1 when the input number is less than 10', () => {
      const result = permutationStep(5);
      expect(result).toEqual(-1);
    });

    it('should return -1 when the input number has no higher integer permutation', () => {
      const result = permutationStep(54321);
      expect(result).toEqual(-1);
    });
});
