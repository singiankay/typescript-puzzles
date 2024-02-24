import timeWithOffset from "./timeWithOffset";

describe("timeWithOffset()", function () {
  test("returns the time string with offset", () => {
    expect(timeWithOffset("01:30", 1.5)).toEqual("03:00");
    expect(timeWithOffset("20:00", 6)).toEqual("02:00");
    expect(timeWithOffset("01:00", -5.5)).toEqual("19:30");
    expect(timeWithOffset("01:00", 24.5)).toEqual("01:30");
  });
});
