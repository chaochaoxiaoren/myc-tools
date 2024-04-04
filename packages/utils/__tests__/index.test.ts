import { unshiftMore } from "../index";

describe("test utils", () => {
  test("should test unshiftMore", () => {
    expect(unshiftMore([1, 2, 3], 4, 5, 6)).toEqual([4,5,6,1,2,3]);
  });
});
