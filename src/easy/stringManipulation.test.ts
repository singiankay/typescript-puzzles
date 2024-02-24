import {cleanString, reverseString} from './stringManipulations';
describe('string manipulation', () => {
  describe("cleanString()", function () {
    test("returns the string without consecutive repeating charachters", () => {
      expect(cleanString("hello")).toEqual("helo");
      expect(cleanString("aabcdaabcd")).toEqual("abcdabcd");
    });
  });

  describe("reverseString()", function () {
    test("returns the reversed form of a string", () => {
      expect(reverseString("hello")).toEqual("olleh");
    });
  });
});
