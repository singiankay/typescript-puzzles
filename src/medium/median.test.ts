import getMedian from "./median";
describe("function getMedian()", function () {
  test("it gets median", () => {
    expect(getMedian([5, 3, 10, 100, 100])).toEqual(10);
    expect(getMedian([12, 5, 3, 10, 100, 100])).toEqual(11);
    expect(getMedian([10, 1, 1, 1, 1, 1, 1, 5])).toEqual(1);
  });
});
